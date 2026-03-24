document.addEventListener("DOMContentLoaded", async () => {

  function countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  function hasMultipleBTags(prevod) {
    if (!prevod) return false;
    const bTagMatches = prevod.match(/<b>(.*?)<\/b>/gi);
    return bTagMatches && bTagMatches.length > 1;
  }

  const container = document.querySelector(".hadis-dana");
  if (!container) return;

  const today = new Date().toISOString().split("T")[0];
  const storageKey = `hadis-dana-${today}`;

  let hadith;

  const stored = localStorage.getItem(storageKey);
  if (stored) {
    hadith = JSON.parse(stored);
  } else {
    try {
      const response = await fetch("hadith.json");
      const data = await response.json();

    const sahihHadiths = data.filter(h => {
      if (h.ocjena.toLowerCase() !== "sahih") return false;

      if (hasMultipleBTags(h.prevod)) return false;

      const bMatch = h.prevod?.match(/<b>(.*?)<\/b>/i);
      const text = bMatch ? bMatch[1] : "";
      
      if (!text || text.length === 0) return false;

      if (text.length > 100) return false;

      if (countWords(text) < 3) return false;

      const broj = h.broj?.toString().trim();
      const validBroj = /^\d+a?$/.test(broj);
      if (!validBroj) return false;

      return true;
    });

      if (sahihHadiths.length === 0) {
        container.innerHTML = "<p>Vjerodostojni hadis nije dostupan.</p>";
        return;
      }

      hadith = sahihHadiths[Math.floor(Math.random() * sahihHadiths.length)];

      localStorage.setItem(storageKey, JSON.stringify(hadith));
    } catch (err) {
      console.error(err);
      container.innerHTML = "<p>Greška pri učitavanju hadisa.</p>";
      return;
    }
  }

  const wrapper = document.createElement("div");
  wrapper.className = "hadith";

  const zbirkaNames = {
    buhari: "Sahih Buhari",
    muslim: "Sahih Muslim",
    "40nevevi": "Četrdeset Nevevijevih Hadisa",
    tirmizi: "Tirmizijina Zbirka Hadisa"
  };

  const zbirkaTitle = zbirkaNames[hadith.zbirka.toLowerCase()] || hadith.zbirka;

  let prevodDisplay = hadith.prevod;
  const bMatch = hadith.prevod.match(/<b>(.*?)<\/b>/i);
  if (bMatch) {
    prevodDisplay = bMatch[1];
  }

  wrapper.innerHTML = `
    <div class="hadith-text">
      <div class="prevod">
        <!-- <p>Poslanik <span class="saws">ﷺ</span> je rekao:</p> -->
        <div class="arapski hidden"><p>${hadith.arapski}</p></div>
        <p>"${prevodDisplay}."</p>
      </div>
    </div>
    <div class="bottom">
      <div class="broj-cont">
        <a href="hadis.html?${hadith.zbirka.toLowerCase()}=${hadith.broj}">
          <p class="broj1">${zbirkaTitle} <span class="broj">${hadith.broj}</span></p>
        </a>
      </div>
      <div class="share-btns">
        <div class="copy emoji" title="kopiraj tekst hadisa">📋</div>
        <div class="share emoji" title="kopiraj link hadisa">🔗</div>
      </div>
    </div>
  `;

  const copyButton = wrapper.querySelector(".copy");
  copyButton.addEventListener("click", () => {
    let text = "";
    text += wrapper.querySelector(".broj1")?.innerText.trim() + ":\n\n" || "";
    text += wrapper.querySelector(".arapski")?.innerText.trim() + "\n\n" || "";
    text += wrapper.querySelector(".prevod")?.innerText.trim() + "\n\n" || "";

    const link = `https://ismailhromcik95.github.io/hadisi/hadis.html?${hadith.zbirka.toLowerCase()}=${hadith.broj}`;
    text += link;

    navigator.clipboard.writeText(text)
      .then(() => alert("Hadis kopiran uspješno!"))
      .catch(err => console.error("Greška prilikom kopiranja:", err));
  });


  const shareButton = wrapper.querySelector(".share");
  shareButton?.addEventListener("click", () => {

    const link = `https://ismailhromcik95.github.io/hadisi/hadis.html?${hadith.zbirka.toLowerCase()}=${hadith.broj}`;

    navigator.clipboard.writeText(link)
      .then(() => alert("Link hadisa kopiran uspješno!\n\n" + link))
      .catch(err => console.error("Greška prilikom kopiranja:", err));

  });


  container.appendChild(wrapper);

  const randomBtn = document.getElementById("random");

  if (!randomBtn) return;

  randomBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("hadith.json");
      const data = await response.json();

      const validHadiths = data.filter(h => {
        if (h.ocjena.toLowerCase() !== "sahih") return false;

        const broj = h.broj?.toString().trim();
        if (!/^\d+a?$/.test(broj)) return false;

        return true;
      });

      if (!validHadiths.length) return;

      const randomIndex = Math.floor(Math.random() * validHadiths.length);
      const randomHadith = validHadiths[randomIndex];

      const zbirka = randomHadith.zbirka.toLowerCase();
      const broj = randomHadith.broj;

      window.location.href = `hadis.html?${zbirka}=${broj}`;

    } catch (error) {
      console.error("Greška pri učitavanju nasumičnog hadisa:", error);
    }
  });

});
