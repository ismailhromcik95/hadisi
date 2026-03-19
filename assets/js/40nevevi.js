document.addEventListener("DOMContentLoaded", async () => {
  const hadithCont = document.querySelector(".hadith-cont");

  try {
    const response = await fetch("hadith.json");
    const data = await response.json();

    const entries = data.filter(h => h.zbirka.toLowerCase() === "40nevevi");

    if (entries.length === 0) {
      hadithCont.innerHTML = "<p>Nema hadisa u zbirci 40nevevi.</p>";
      return;
    }

    entries.sort((a, b) => a.broj - b.broj);

    hadithCont.innerHTML = "";

    const makeToggleID = id => `toggle-ocjene-${id}`;

    entries.forEach(hadith => {
      const wrapper = document.createElement("div");
      wrapper.className = "hadith";

      const shareLink = `https://hadisi.net/hadis.html?${hadith.zbirka.toLowerCase()}=${hadith.broj}`;
      wrapper.dataset.link = shareLink;

      wrapper.innerHTML = `
        <div class="hadith-text">
          <div class="arapski"><p>${hadith.arapski}</p></div>
          <div class="prevod"><p>${hadith.prevod}</p></div>
        </div>
      `;

      if (hadith.ocjena_vise && hadith.ocjena_vise.trim() !== "") {
        const ocjenaDiv = document.createElement("div");
        ocjenaDiv.className = "ocjena";

        const toggleID = makeToggleID(hadith.id);

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
        ocjenaP.innerHTML = `
          Ocjena: <span class="ocjena_tekst ${hadith.ocjena}">
            ${hadith.ocjena_tekst}
          </span>
        `;
        wrapper.appendChild(ocjenaP);
      }

      const brojCont = document.createElement("div");
      brojCont.className = "broj-cont";

      brojCont.innerHTML = `
        <a href="hadis.html?40nevevi=${hadith.broj}">
          <p class="broj1">
            Četrdeset Nevevijevih Hadisa <span class="broj">${hadith.broj}</span>
          </p>
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
      copyButton.addEventListener("click", () => copyHadith(bottomDiv, hadith));

      const shareButton = document.createElement("div");
      shareButton.className = "share emoji";
      shareButton.textContent = "🔗";

      shareBtns.appendChild(copyButton);
      shareBtns.appendChild(shareButton);

      bottomDiv.appendChild(shareBtns);

      wrapper.appendChild(bottomDiv);

      hadithCont.appendChild(wrapper);
    });

  } catch (error) {
    console.error(error);
    hadithCont.innerHTML = "<p>Greška pri učitavanju hadisa.</p>";
  }

  function copyHadith(bottomDiv, hadith) {
    let text = "";

    const broj1 = bottomDiv.querySelector(".broj1");
    text += broj1 ? broj1.innerText.trim() + ":\n\n" : "";

    const arapski = bottomDiv.closest(".hadith").querySelector(".arapski");
    text += arapski ? arapski.innerText.trim() + "\n\n" : "";

    const prevod = bottomDiv.closest(".hadith").querySelector(".prevod");
    text += prevod ? prevod.innerText.trim() + "\n\n" : "";

    const ocjenaSpan = bottomDiv.closest(".hadith").querySelector(".ocjena_tekst");
    if (ocjenaSpan) {
      text += "Ocjena: " + ocjenaSpan.innerText.trim() + "\n\n";
    }

    const zbirkaParam = hadith.zbirka.toLowerCase();
    const link = `https://hadisi.net/hadis.html?${zbirkaParam}=${hadith.broj}`;
    text += link;

    navigator.clipboard.writeText(text)
      .then(() => alert("Hadis kopiran uspješno!"))
      .catch(err => console.error("Greška prilikom kopiranja:", err));
  }

});