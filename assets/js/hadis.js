document.addEventListener("DOMContentLoaded", async () => {

  function removeTashkeel(text) {
    if (!text) return "";
    return text.replace(/[\u064B-\u0652]/g, '');
  }

  const hadithCont = document.querySelector(".hadith-cont");

  function formatGlavaName(zbirka, glava) {
    if (!glava) return "";

    const mapped = glavaNames[zbirka]?.[glava];
    if (mapped) return mapped;

    const formatted = glava.replace(/_/g, " ");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  function addChapterInfo(zbirka, glava) {
    const info = chapterInfo[zbirka]?.[glava];
    if (!info) return null;

    const container = document.createElement("div");
    container.className = "chapter-info";

    const title = document.createElement("h2");
    title.className = "chapter-title";
    title.innerHTML = info.title;

    const description = document.createElement("div");
    description.className = "chapter-description";
    description.innerHTML = info.description;

    container.appendChild(title);
    container.appendChild(description);

    return container;
  }

  const params = new URLSearchParams(window.location.search);
  const entries = [...params.entries()];
  const isSearch = params.has("search");

  if (!isSearch && entries.length === 0) return;

  let zbirka, broj, showAll = false;
  let glavaKey = null;
  if (!isSearch && entries.length > 0) {
    zbirka = entries[0][0].toLowerCase();
    broj = entries[0][1];
    
    showAll = (broj === "");
  }

try {
  const response = await fetch("hadith.json");
  const data = await response.json();

  let matchedHadiths = [];

  if (isSearch) {
    let searchQuery = params.get("search");
    searchQuery = removeTashkeel(searchQuery).toLowerCase();

    const phraseMatches = [...searchQuery.matchAll(/"([^"]+)"/g)];
    const phrases = phraseMatches.map(m => m[1]);

    searchQuery = searchQuery.replace(/"([^"]+)"/g, "");

    const rawTerms = searchQuery.split(/\s+/).filter(Boolean);

    const includeTerms = [];
    const excludeTerms = [];
    const orGroups = [];

    rawTerms.forEach(term => {

      if (term.startsWith("-") && term.length > 1) {
        excludeTerms.push(term.slice(1));
        return;
      }

      if (term.includes("|")) {
        const options = term.split("|").filter(Boolean);
        if (options.length > 1) {
          orGroups.push(options);
          return;
        }
      }

      includeTerms.push(term);

    });
    
    matchedHadiths = data.filter(hadith => {
    const arapskiWithoutTashkeel = removeTashkeel(hadith.arapski || "");
    const searchableText = [
      arapskiWithoutTashkeel,
      hadith.prevod,
      hadith.zbirka,
      hadith.glava,
      hadith.ocjena_tekst,
      hadith.ocjena_vise,
      hadith.broj2,
      String(hadith.broj)
    ].filter(Boolean).join(" ").toLowerCase();

    const includeMatch = includeTerms.every(term =>
      searchableText.includes(term)
    );

    const phraseMatch = phrases.every(phrase =>
      searchableText.includes(phrase)
    );

    const excludeMatch = excludeTerms.every(term =>
      !searchableText.includes(term)
    );

    const orMatch = orGroups.every(group =>
      group.some(term => searchableText.includes(term))
    );

    return includeMatch && phraseMatch && excludeMatch && orMatch;
    });

    const resultWord = matchedHadiths.length === 1 ? "rezultat" : "rezultata";
    document.title = `Pretraga "${params.get("search")}" - ${matchedHadiths.length} ${resultWord}`;

    if (matchedHadiths.length === 0) {
      hadithCont.innerHTML = "<p class='empty'>Nema rezultata za pretragu.</p>";
      document.title = "Pretraga - nema rezultata";
      return;
    }

    document.title = `Pretraga: "${searchQuery}" - ${matchedHadiths.length} ${resultWord}`;

  } else {
    if (showAll) {
      matchedHadiths = data
        .filter(h => h.zbirka.toLowerCase() === zbirka)
        .sort((a, b) => {
          const numA = parseFloat(a.broj);
          const numB = parseFloat(b.broj);
          return numA - numB;
        });
      
      var isFullCollection = true;
      
    } else if (/^\d+[a-z]?$/i.test(broj)) {

      const regex = new RegExp(`^${broj}[a-z]?$`, "i");

      matchedHadiths = data.filter(h =>
        h.zbirka.toLowerCase() === zbirka &&
        regex.test(String(h.broj))
      );

    } else {

      matchedHadiths = data
        .filter(h =>
          h.zbirka.toLowerCase() === zbirka &&
          h.glava &&
          h.glava.toLowerCase() === broj.toLowerCase()
        )
        .sort((a, b) => {
          const numA = parseFloat(a.broj);
          const numB = parseFloat(b.broj);
          return numA - numB;
        });

    }
  }

  if (matchedHadiths.length === 0) {
    hadithCont.innerHTML = "<p class=\"empty\">Hadis nije pronađen.</p>";
    return;
  }

  if (!isSearch && matchedHadiths.length > 0) {

    const firstHadith = matchedHadiths[0];
    const zbirkaKey = firstHadith.zbirka.toLowerCase();
    const zbirkaTitle = zbirkaNames[zbirkaKey] || firstHadith.zbirka;

    if (showAll) {
      glavaKey = null;
    } else if (/^\d+[a-z]?$/i.test(broj)) {
      glavaKey = firstHadith.glava;
    } else {
      glavaKey = broj;
    }

    if (glavaKey && !showAll && !/^\d+[a-z]?$/i.test(broj)) {
      const chapterInfoDiv = addChapterInfo(zbirkaKey, glavaKey);
      if (chapterInfoDiv) {
        hadithCont.before(chapterInfoDiv);
      }
    }

    const crumbs = document.createElement("p");
    crumbs.className = "crumbs";

    const zbirkaLink = document.createElement("a");
    zbirkaLink.className = "zbirka";
    
    const customLink = customZbirkaLinks[zbirkaKey];
    if (customLink) {
      zbirkaLink.href = customLink;
    } else {
      zbirkaLink.href = `hadis.html?${zbirkaKey}`;
    }
    
    zbirkaLink.textContent = zbirkaTitle;

    crumbs.appendChild(zbirkaLink);

    if (glavaKey) {

      const separator = document.createTextNode(" / ");
      crumbs.appendChild(separator);

      const glavaLink = document.createElement("a");
      glavaLink.className = "glava";
      glavaLink.href = `hadis.html?${zbirkaKey}=${glavaKey}`;
      glavaLink.textContent = formatGlavaName(zbirkaKey, glavaKey);

      crumbs.appendChild(glavaLink);
    }

    hadithCont.before(crumbs);
  }

  hadithCont.innerHTML = "";

  if (isSearch) {
    const searchTitle = document.createElement("h2");
    searchTitle.className = "search-title";
    const searchQuery = params.get("search");
    const resultWord = matchedHadiths.length === 1 ? "rezultat" : "rezultata";
    const foundWord = matchedHadiths.length === 1 ? "Pronađen" : "Pronađeno";
    searchTitle.textContent = `${foundWord} ${matchedHadiths.length} ${resultWord} za pretragu "${searchQuery}"`;
    hadithCont.appendChild(searchTitle);
  }

  if (isSearch) {
  } else {
    if (matchedHadiths.length > 0) {
      const firstHadith = matchedHadiths[0];
      const zbirkaTitle = zbirkaNames[firstHadith.zbirka.toLowerCase()] || firstHadith.zbirka;
      
      if (showAll) {
        document.title = `${zbirkaTitle}`;
      } else if (matchedHadiths.length === 1) {
        document.title = `${zbirkaTitle} ${firstHadith.broj}`;
      } else {
        document.title = `${zbirkaTitle} - ${matchedHadiths.length} hadisa (poglavlje: ${broj})`;
      }
    }
  }

  matchedHadiths.forEach(hadith => {
      
    if (!isSearch && glavaKey && !/^\d+[a-z]?$/i.test(broj)) {
      const divider =
        chapterDividers?.[hadith.zbirka.toLowerCase()]?.[glavaKey]?.[hadith.broj];

      if (divider) {
        const dividerDiv = document.createElement("div");
        dividerDiv.innerHTML = divider;
        hadithCont.appendChild(dividerDiv);
      }
    }


    const zbirkaTitle = zbirkaNames[hadith.zbirka.toLowerCase()] || hadith.zbirka;

    const wrapper = document.createElement("div");
    wrapper.className = "hadith";

    const shareLink = `https://ismailhromcik95.github.io/hadisi/hadis.html?${hadith.zbirka.toLowerCase()}=${hadith.broj}`;
    wrapper.dataset.link = shareLink;

    wrapper.innerHTML = `
      <div class="hadith-text">
        <div class="arapski"><p>${hadith.arapski}</p></div>
        <div class="prevod"><p>${hadith.prevod}</p></div>
      </div>
    `;

    if (hadith.ocjena_vise && hadith.ocjena_vise.trim() !== "") {
      const ocjenaDiv = document.createElement("div");
      const toggleID = `toggle-ocjene-${hadith.broj}`;
      ocjenaDiv.className = "ocjena";
      ocjenaDiv.innerHTML = `
        Ocjena: <span class="ocjena_tekst">${hadith.ocjena_tekst}</span> —
        <input type="checkbox" id="${toggleID}" class="toggle" />
        <label for="${toggleID}" class="toggle-label show ${hadith.ocjena}">
          [<u>prikaži ocjene ▾</u>]
        </label>
        <label for="${toggleID}" class="toggle-label hide ${hadith.ocjena}">
          [<u>sakrij ocjene ▴</u>]
        </label>
        <div class="ocjena_vise">${hadith.ocjena_vise}</div>
      `;
      wrapper.appendChild(ocjenaDiv);
    } else {
      const ocjenaP = document.createElement("p");
      ocjenaP.className = "ocjena";
      ocjenaP.innerHTML = `Ocjena: <span class="ocjena_tekst ${hadith.ocjena}">${hadith.ocjena_tekst}</span>`;
      wrapper.appendChild(ocjenaP);
    }

    const brojCont = document.createElement("div");
    brojCont.className = "broj-cont";
    brojCont.innerHTML = `
      <a href="hadis.html?${hadith.zbirka.toLowerCase()}=${hadith.broj}">
        <p class="broj1">${zbirkaTitle} <span class="broj">${hadith.broj}</span></p>
      </a>
      <p class="broj2">${hadith.broj2 || ""}</p>
    `;

    const bottomDiv = document.createElement("div");
    bottomDiv.className = "bottom";
    bottomDiv.appendChild(brojCont);

    const shareBtns = document.createElement("div");
    shareBtns.className = "share-btns";

    const copyButton = document.createElement("div");
    copyButton.className = "copy emoji";
    copyButton.textContent = "📋";
    copyButton.title = "kopiraj tekst hadisa";
    copyButton.addEventListener("click", () => copyHadith(bottomDiv, hadith));

    const shareButton = document.createElement("div");
    shareButton.className = "share emoji";
    shareButton.title = "kopiraj link hadisa";
    shareButton.textContent = "🔗";

    shareBtns.appendChild(copyButton);
    shareBtns.appendChild(shareButton);

    bottomDiv.appendChild(shareBtns);

    wrapper.appendChild(bottomDiv);

    hadithCont.appendChild(wrapper);
  });

} catch (error) {
  console.error(error);
  hadithCont.innerHTML = "<p class=\"empty\">Greška pri učitavanju hadisa.</p>";
}

  function copyHadith(bottomDiv, hadith) {
    let text = "";

    const broj1 = bottomDiv.querySelector(".broj1");
    text += broj1 ? broj1.innerText.trim() + ":\n\n" : "";

    const arapski = bottomDiv.closest(".hadith").querySelector(".arapski");
    text += arapski ? arapski.innerText.trim() + "\n\n" : "";

    const prevod = bottomDiv.closest(".hadith").querySelector(".prevod");
    text += prevod ? prevod.innerText.trim() + "\n\n" : "";

    const broj2 = bottomDiv.querySelector(".broj2");
    if (broj2 && broj2.innerText.trim() !== "") {
      text += broj2.innerText.trim() + "\n\n";
    }

    const ocjenaSpan = bottomDiv.closest(".hadith").querySelector(".ocjena_tekst");
    if (ocjenaSpan) {
      text += "Ocjena: " + ocjenaSpan.innerText.trim() + "\n\n";
    }

    const zbirkaParam = hadith.zbirka.toLowerCase();
    const link = `https://ismailhromcik95.github.io/hadisi/hadis.html?${zbirkaParam}=${hadith.broj}`;
    text += link;

    navigator.clipboard.writeText(text)
      .then(() => alert("Hadis kopiran uspješno!"))
      .catch(err => console.error("Greška prilikom kopiranja:", err));
  }

});
