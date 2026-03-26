document.addEventListener("DOMContentLoaded", async () => {

  function removeTashkeel(text) {
    if (!text) return "";
    return text.replace(/[\u064B-\u0652]/g, '');
  }

  const hadithCont = document.querySelector(".hadith-cont");

  const zbirkaNames = {
    "40nevevi": "Četrdeset Nevevijevih Hadisa",
    buhari: "Sahih Buhari",
    muslim: "Sahih Muslim",
    tirmizi: "Tirmizijina Zbirka Hadisa"
  };

  const customZbirkaLinks = {
    "40nevevi": "zbirke/40nevevi.html",
    buhari: "zbirke/buhari.html"
    // muslim: "zbirke/muslim.html",
    // tirmizi: "zbirke/tirmizi.html"
  };

  const glavaNames = {
    buhari: {
      objava: "Početak objave",
      iman: "Vjerovanje",
      stvaranje: "Početak stvaranja",
      izmirivanje: "Izmirivanje (mirenje) ljudi",
      pridrzavanje: "Pridržavanje za Kur'an i Sunnet",
      odsteta: "Odšteta za krvne delikte",
      edeb: "Etika (edeb)",
      poslanici: "Kazivanja o Vjerovjesnicima",
      dzihad: "Džihad i vojni pohodi",
      tefsir: "Tumačenje Kur'ana",
      rikak: "Ono što raznježuje srca (rikak)",
      ensarije: "Vrline ensarija"
    },
    muslim: {
      iman: "Iman - vjerovanje",
      kader: "Kader - određenje",
      sudstvo: "Sudstvo i svjedočenja",
      napolicarstvo: "Muzare'a - napoličarstvo",
      hadz: "Hadždž",
      zekat: "Zekjat",
      odmazda: "Zabrana oduzimanja života, odmazda i krvarina",
      lov: "Lov i klanje životinja",
      dobrocinstvo: "Dobročinstvo i rodbinske veze",
      taharet: "Taharet - Čistoća"
    },
    tirmizi: {
      sudnji_dan: "Opis Sudnjeg dana",
      zuhd: "Pobožnost (zuhd)",
      dobrocinstvo: "Dobročinstvo i održavanje rodbinskih veza",
      iman: "Vjerovanje (iman)"
    }
  };

  const chapterInfo = {
    buhari: {
      objava: {
        title: `Početak objave — <span class='arapski'>كتاب بدء الوحى</span>`,
        description: `
        <div class="hadith">
          <div class="hadith-text">
            <div class="arapski">
              <p>قَالَ الشَّيْخُ الْإِمَامُ الْحَافِظُ أَبُو عَبْدِ اللَّهِ مُحَمَّدُ بْنُ إِسْمَاعِيلَ بْنِ إِبْرَاهِيمَ بْنِ الْمُغِيرَةِ الْبُخَارِيُّ رَحِمَهُ اللَّهُ تَعَالَى آمِينَ.</p>
              <p>كَيْفَ كَانَ بَدْءُ الْوَحْيِ إِلَى رَسُولِ اللَّهِ <span class="saws">ﷺ</span></p>
              <p>وَقَوْلِ اللَّهِ جَلَّ ذِكْرُهُ</p>
              <p class="quran" title="النساء 163" style="cursor:help;">{إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَىٰ نُوحٍ وَالنَّبِيِّينَ مِنْ بَعْدِهِ}.</p>
            </div>
            <div class="prevod">
              <p>Kapacitet, prvak i hafiz hadisa Ebu-Abdullah Muhammed b. Ismail b. Ibrahim b. Mugire iz Buhare - Uzvišeni mu se Allah smilovao, Amin!<br>— rekao je:</p>
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">KAKO JE POČELA (SILAZITI) OBJAVA ALLAHOVOM POSLANIKU, SALLALLAHU ALEJHI VE SELLEM</p>
              <p title="En-Nisa 163" style="cursor:help;">i govor Uzvišenog Allaha: <b>"Mi smo ti poslali Objavu kao što smo slali Nuhu i ostalim vjerovjesnicima iza njega."</b></p>
            </div>
          </div>
        </div>

          `
      },
      iman: {
        title: "Vjerovanje — <span class='arapski'>كتاب الإيمان</span>",
        description: `
        <div class="hadith">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-bottom:10px;">بَابُ الإِيمَانِ</p>
              <p>وَقَوْلِ النَّبِيِّ <span class="saws">ﷺ</span> بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ</p>
              <p>وَهُوَ قَوْلٌ وَفِعْلٌ وَيَزِيدُ وَيَنْقُصُ. قَالَ اللَّهُ تَعَالَى</p>
              <p class="quran"><span title="الفتح 4" style="cursor:help;">{لِيَزْدَادُوا إِيمَانًا مَعَ إِيمَانِهِمْ}</span>
              <span title="الكهف 13" style="cursor:help;">{وَزِدْنَاهُمْ هُدًى}</span>
              <span title="مريم 76" style="cursor:help;">{وَيَزِيدُ اللَّهُ الَّذِينَ اهْتَدَوْا هُدًى}</span>
              <span title="محمد 17" style="cursor:help;">{وَالَّذِينَ اهْتَدَوْا زَادَهُمْ هُدًى وَآتَاهُمْ تَقْوَاهُمْ}</span></p>
              <p class="quran"><span class="spaces">وَقَوْلُهُ</span>
              <span title="المدثر 31" style="cursor:help;">{وَيَزْدَادَ الَّذِينَ آمَنُوا إِيمَانًا}</span>
              <span class="spaces">وَقَوْلُهُ:</span>
              <span title="التوبة 124" style="cursor:help;">{أَيُّكُمْ زَادَتْهُ هَذِهِ إِيمَانًا فَأَمَّا الَّذِينَ آمَنُوا فَزَادَتْهُمْ إِيمَانًا}.</span>
              <span class="spaces">وَقَوْلُهُ جَلَّ ذِكْرُهُ</span>
              <span title="آل عمران 173" style="cursor:help;">{فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا}.<span>
              <span class="spaces">وَقَوْلُهُ تَعَالَى</span>
              <span title="الأحزاب 22" style="cursor:help;">{وَمَا زَادَهُمْ إِلاَّ إِيمَانًا وَتَسْلِيمًا}.</span><p>
              <p>وَالْحُبُّ فِي اللَّهِ وَالْبُغْضُ فِي اللَّهِ مِنَ الإِيمَانِ.</p>
              <p>وَكَتَبَ عُمَرُ بْنُ عَبْدِ الْعَزِيزِ إِلَى عَدِيِّ بْنِ عَدِيٍّ إِنَّ لِلإِيمَانِ فَرَائِضَ وَشَرَائِعَ وَحُدُودًا وَسُنَنًا، فَمَنِ اسْتَكْمَلَهَا اسْتَكْمَلَ الإِيمَانَ، وَمَنْ لَمْ يَسْتَكْمِلْهَا لَمْ يَسْتَكْمِلِ الإِيمَانَ، فَإِنْ أَعِشْ فَسَأُبَيِّنُهَا لَكُمْ حَتَّى تَعْمَلُوا بِهَا، وَإِنْ أَمُتْ فَمَا أَنَا عَلَى صُحْبَتِكُمْ بِحَرِيصٍ.</p>
              <p class="quran"><span class="spaces">وَقَالَ إِبْرَاهِيمُ</span><span class="saws">ﷺ</span>
              <span title="البقرة 260" style="cursor:help;">{وَلَكِنْ لِيَطْمَئِنَّ قَلْبِي}.</span><br>
              <span class="spaces">وَقَالَ مُعَاذٌ اجْلِسْ بِنَا نُؤْمِنْ سَاعَةً.<br>وَقَالَ ابْنُ مَسْعُودٍ الْيَقِينُ الإِيمَانُ كُلُّهُ.<br>وَقَالَ ابْنُ عُمَرَ: لاَ يَبْلُغُ الْعَبْدُ حَقِيقَةَ التَّقْوَى حَتَّى يَدَعَ مَا حَاكَ فِي الصَّدْرِ.<br>وَقَالَ مُجَاهِدٌ</span>
              <span title="الشورى 13" style="cursor:help;">{شَرَعَ لَكُمْ}</span>
              <span class="spaces">أَوْصَيْنَاكَ يَا مُحَمَّدُ وَإِيَّاهُ دِينًا وَاحِدًا.<br>وَقَالَ ابْنُ عَبَّاسٍ</span>
              <span title="المائدة 48" style="cursor:help;">{شِرْعَةً وَمِنْهَاجًا}</span>
              <span class="spaces">سَبِيلاً وَسُنَّةً.</span></p>
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب (دُعَاؤُكُمْ) إِيمَانُكُمْ</p>
              <p class="quran"><span class="spaces">لِقَوْلِهِ تَعَالى</span>
              <span title="الفرقان 77" style="cursor:help;">{قُلْ مَا يَعْبَؤُا بِكُمْ رَبِّ لَوْلَا دُعَاؤُكُمْ}</span>
              <span class="spaces">وَمَعْنَى الدُّعاءِ في اللُّغَةِ الْإِيمَانِ</span></p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-bottom:10px;">VJEROVANJE</p>
              <p>i izjava Vjerovjesnika, sallallahu alejhi ve sellem:</p>
              <p><b>"Islam je sagrađen na pet principa."</b></p>
              <p>Vjerovanje (iman) jesu riječi i djela. Vjerovanje se povećava i smanjuje. Uzvišeni Allah kaže: <b title="El-Feth 4" style="cursor:help;">"Da bi uvećali vjerovanje uz svoje vjerovanje (koje imaju)."</p>
              <p><span title="El-Kehf 13" style="cursor:help;">Uvećali smo im uputu (iman)."</span> <span title="Merjem 76" style="cursor:help;">Allah uvećava uputu (iman) i onima, koji su već na Pravom putu."</span> <span title="Muhammed 17" style="cursor:help;">"Onima koji su na Pravom putu, On je uvećao uputu i dao im je bogobojaznost."</b></span> On još kaže: <b title="El-Muddessir 31" style="cursor:help;">Onima koji vjeruju povećava iman (vjerovanje)."</b></p>
              <p>I kaže: <b title="Et-Tevbe 124" style="cursor:help;">"Kome je od vas ova (sura) povećala vjerovanje? Onima koji vjeruju povećala je iman."</b> Isto tako kaže, neka je uzvišeno Njegovo spominjanje: <b title="Ali Imran 173" style="cursor:help;">"...zato ih se bojte! To im je uvećalo iman."</b> Također, neka je Uzvišen, kaže: <b title="El-Ahzab 22" style="cursor:help;">"A to im je samo povećalo njihovo vjerovanje i predanost."</b></p>
              <p>Voljeti (nekoga) u ime Allaha, mrziti (nekoga) u ime Allaha, spada u vjerovanje.</p>
              <p>Omer b. Abdul-Aziz pisao je Adijju b. Adijju: "Vjerovanje se sastoji od obligatnih prvostepenih dužnosti (farzova), vjerskih uvjerenja, zabrana i ograničenja i od sunneta (pohvalnih radnji). Ko sve navedeno u potpunosti obavlja, on je usavršio (svoje) vjerovanje, a ko u potpunosti ne obavlja nije usavršio vjerovanje. Ako budem živ, objasnit ću vam to kako bi ih obavljali, a ako umrem pa ja i ne žudim da se dugo zadržim u vašem društvu."</p>
              <p>Rekli su:</p>
              <p title="El-Bekara 260" style="cursor:help;">- Ibrahim, alejhi selam: <b>"Ali želim da mi srce bude potpuno uvjereno (smireno);"</b></p>
              <p>- Muaz b. Džebel: "Sjedi s nama neko vrijeme da vjerujemo (obožavamo Allaha);"</p>
              <p>- lbnu-Mes'ud : "'Jekin' je cjelokupan iman;"</p>
              <p>- Ibni-Omer: "Čovjek ne postiže suštinu i bit bogobojaznosti dok ne napusti ono što ga tišti u grudima."</p>
              <p>- <span title="Eš-Šura 13" style="cursor:help;">Mudžahid: <b>"On vam propisuje u vjeri ..."</b>, znače: "Naredio sam tebi, Muhammede, i njemu (Nuhu) jednu vjeru"</span>, <span title="El-Ma'ide 48" style="cursor:help;">a Ibnu-Abbas je za riječi: <b>(šir'aten ve minhadžen)</b> (zakon i pravac) kazao da znače: "Put i sunnet (propisan muslimanima)."</span></p>
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">VAŠA MOLITVA (DOVA), VAŠE JE VJEROVANJE</p>
              <p title="El-Furkan 77" style="cursor:help;">Osnova ovome su riječi Uzvišenog: <b>"Reci: Allah vam ne bi poklonio pažnju da nije vaše dove."</b> Riječ ed-du'a (dova) u jeziku znači iman (vjerovanje)</p>
            </div>
          </div>
        </div>

          `
      }
    }
  };

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

    let glavaKey = null;

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
