document.addEventListener("DOMContentLoaded", async () => {

  function removeTashkeel(text) {
    if (!text) return "";
    return text.replace(/[\u064B-\u0652]/g, '');
  }

  function normalize(text) {
    return removeTashkeel(text.toLowerCase());
  }

  const hadithCont = document.querySelector(".hadith-cont");

  const warning = document.querySelector(".search-warning");
  const resultsCount = document.querySelector(".search-results-count");
  const loadMoreCont = document.querySelector(".load-more-cont");

  let allResults = [];
  let displayed = 0;

  const RESULTS_PER_PAGE = 10;

  const searchArapski = document.getElementById("searchArapski");
  const searchPrevod  = document.getElementById("searchPrevod");
  const searchZbirka  = document.getElementById("searchZbirka");
  const searchGlava   = document.getElementById("searchGlava");
  const searchBroj    = document.getElementById("searchBroj");
  const searchOcjena  = document.getElementById("searchOcjena");

  const searchBtn = document.getElementById("searchSubmit");


  const response = await fetch("hadith.json");
  const hadisi = await response.json();

  function formatResultsText(num) {

    if (num === 1) {
      return `Pronađen 1 rezultat`;
    }

    const lastDigit = num % 10;
    const lastTwo = num % 100;

    if (lastDigit === 1 && lastTwo !== 11) {
      return `Pronađen ${num} rezultat`;
    }

    return `Pronađeno ${num} rezultata`;
  }

  function performSearch() {

    warning.textContent = "";
    resultsCount.textContent = "";
    loadMoreCont.innerHTML = "";

    const arapski = normalize(searchArapski.value.trim());
    const prevod  = searchPrevod.value.trim().toLowerCase();
    const zbirka  = searchZbirka.value;
    const glava   = searchGlava.value.trim().toLowerCase();
    const broj    = searchBroj.value.trim().toLowerCase();
    const ocjena  = searchOcjena.value;


    const isEmpty =
      !arapski &&
      !prevod &&
      zbirka === "all" &&
      !glava &&
      !broj &&
      ocjena === "all";


    if (isEmpty) {
      warning.textContent =
        "Morate unijeti barem jedan kriterij pretrage.";
      return;
    }


    allResults = hadisi.filter(h => {

      if (arapski && !normalize(h.arapski).includes(arapski)) {
        return false;
      }

      if (prevod && !h.prevod.toLowerCase().includes(prevod)) {
        return false;
      }

      if (zbirka !== "all" && h.zbirka !== zbirka) {
        return false;
      }

      if (glava && !h.glava.toLowerCase().includes(glava)) {
        return false;
      }

      if (broj) {
        const broj1 = (h.broj || "").toLowerCase();
        const broj2 = (h.broj2 || "").toLowerCase();

        if (!broj1.includes(broj) && !broj2.includes(broj)) {
          return false;
        }
      }

      if (ocjena !== "all" &&
          h.ocjena.toLowerCase() !== ocjena) {
        return false;
      }

      return true;
    });


    displayed = 0;
    hadithCont.innerHTML = "";

    resultsCount.textContent =
      formatResultsText(allResults.length);

    loadMoreResults();

  }

  function renderResults(results) {

    if (!results.length) {
      hadithCont.innerHTML = "<p class='empty'>Nema rezultata pretrage.</p>";
      return;
    }

    results.forEach(hadith => {

      const zbirkaTitle =
        zbirkaNames?.[hadith.zbirka.toLowerCase()] || hadith.zbirka;

      const wrapper = document.createElement("div");
      wrapper.className = "hadith";

      const shareLink =
        `https://ismailhromcik95.github.io/hadisi/hadis.html?${hadith.zbirka.toLowerCase()}=${hadith.broj}`;

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

        ocjenaP.innerHTML =
          `Ocjena: <span class="ocjena_tekst ${hadith.ocjena}">${hadith.ocjena_tekst}</span>`;

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

      copyButton.addEventListener("click", () =>
        copyHadith(bottomDiv, hadith)
      );


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

  }

  function loadMoreResults() {

    const slice =
      allResults.slice(displayed, displayed + RESULTS_PER_PAGE);

    renderResults(slice);

    displayed += slice.length;

    loadMoreCont.innerHTML = "";

    if (displayed < allResults.length) {

      const btn = document.createElement("button");
      btn.className = "load-more";
      btn.textContent = "Prikaži još rezultata";

      btn.addEventListener("click", loadMoreResults);

      loadMoreCont.appendChild(btn);
    }

  }

  const drugiJezici = document.getElementById("drugiJezici");
  const searchJezici = document.getElementById("searchJezici");
  const jeziciSubmit = document.getElementById("jeziciSubmit");


  function searchOtherLanguages() {

    const baseURL = drugiJezici.value;
    const query = searchJezici.value.trim();

    if (!baseURL) {
      warning.textContent =
        "Odaberite jezik za pretragu.";
      return;
    }

    if (!query) {
      warning.textContent =
        "Unesite tekst za pretragu.";
      return;
    }

    warning.textContent = "";

    const url =
      baseURL + encodeURIComponent(query);

    window.open(url, "_blank");

  }


  jeziciSubmit.addEventListener(
    "click",
    searchOtherLanguages
  );


  searchJezici.addEventListener(
    "keypress",
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchOtherLanguages();
      }
    }
  );

  searchBtn.addEventListener("click", performSearch);

  document.querySelectorAll(
    "#searchArapski, #searchPrevod, #searchGlava, #searchBroj"
  ).forEach(input => {

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch();
      }
    });

  });


  document.querySelectorAll(
    "#searchZbirka, #searchOcjena"
  ).forEach(select => {

    select.addEventListener("change", performSearch);

  });

});