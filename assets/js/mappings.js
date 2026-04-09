const zbirkaNames = {
  "40nevevi": "Četrdeset Nevevijevih Hadisa",
  "rijadus_salihin": "Rijadu-s-salihin",
  buhari: "Sahih Buhari",
  muslim: "Sahih Muslim",
  tirmizi: "Tirmizijina zbirka hadisa",
  "ebu_davud": "Ebu Davudova zbirka hadisa"
};

const customZbirkaLinks = {
  "40nevevi": "zbirke/40nevevi.html",
  buhari: "zbirke/buhari.html",
  muslim: "zbirke/muslim.html"
};

const glavaNames = {
  buhari: {
    objava: "Početak objave", //knjiga 1
    iman: "Vjerovanje", //knjiga 2
    dzenaza: "Dženaza", //knjiga 23
    izmirivanje: "Izmirivanje (mirenje) ljudi", //knjiga 53
    dzihad: "Džihad i vojni pohodi", //knjiga 56
    stvaranje: "Početak stvaranja", //knjiga 59
    vjerovjesnici: "Kazivanja o Vjerovjesnicima", //knjiga 60
    tefsir: "Tumačenje Kur'ana", //knjiga 65
    edeb: "Etika (edeb)", //knjiga 78
    rikak: "Ono što raznježuje srca (rikak)", //knjiga 81
    odsteta: "Odšteta za krvne delikte", //knjiga 87
    pridrzavanje: "Pridržavanje za Kur'an i Sunnet" //knjiga 96
  },
  muslim: {
    iman: "Iman - vjerovanje", //knjiga 1
    taharet: "Taharet - Čistoća", //knjiga 2
    zekat: "Zekjat", //knjiga 12
    hadz: "Hadždž", //knjiga 15
    napolicarstvo: "Muzare'a - napoličarstvo", //knjiga 22
    odmazda: "Zabrana oduzimanja života, odmazda i krvarina", //knjiga 28
    sudstvo: "Sudstvo i svjedočenja", //knjiga 30
    lov: "Lov i klanje životinja", //knjiga 34
    dobrocinstvo: "Dobročinstvo i rodbinske veze", //knjiga 45
    kader: "Kader - određenje", //knjiga 46
    zuhd: "Zuhd i suptilnost" //knjiga 55
  },
  tirmizi: {
    dobrocinstvo: "Dobročinstvo i održavanje rodbinskih veza", //knjiga 27
    zuhd: "Pobožnost (zuhd)", //knjiga 36
    sudnji_dan: "Opis Sudnjeg dana", //knjiga 37
    iman: "Vjerovanje (iman)", //knjiga 40
    vrijednosti: "Vrijednosti Kur'ana" //knjiga 45
  },
  rijadus_salihin: {
    vrline: "Razne vrline, odlike i vrijednosti", //knjiga 8
    harami: "Zabranjena djela" //knjiga 17
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
            <p title="El-Furkan 77" style="cursor:help;">Osnova ovome su riječi Uzvišenog: <b>"Reci: Allah vam ne bi poklonio pažnju da nije vaše dove."</b> Riječ ed-du'a (dova) u jeziku znači iman (vjerovanje).</p>
          </div>
        </div>
      </div>

        `
    }
  },
  muslim: {
    iman: {
      title: "<span class='no-desc'>Poglavlje o imanu - vjerovanju — <span class='arapski'>كتابُ الإيمانِ</span></span>",
      description: ""
    }
  }
};

const chapterDividers = {
  buhari: {
    iman: {
      9: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب أُمُورِ الإِيمَانِ </p>
              <p class="quran"><span class="spaces">وَقَوْلِ اللَّهِ تَعَالَى</span>
              <span title="البقرة 177" style="cursor:help;"> {لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الآخِرِ وَالْمَلاَئِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ وَآتَى الْمَالَ عَلَى حُبِّهِ ذَوِي الْقُرْبَى وَالْيَتَامَى وَالْمَسَاكِينَ وَابْنَ السَّبِيلِ وَالسَّائِلِينَ وَفِي الرِّقَابِ وَأَقَامَ الصَّلاَةَ وَآتَى الزَّكَاةَ وَالْمُوفُونَ بِعَهْدِهِمْ إِذَا عَاهَدُوا وَالصَّابِرِينَ فِي الْبَأْسَاءِ وَالضَّرَّاءِ وَحِينَ الْبَأْسِ أُولَئِكَ الَّذِينَ صَدَقُوا وَأُولَئِكَ هُمُ الْمُتَّقُونَ}.</span></p>
              <p class="quran"><span class="spaces">وَقَوْلِهِ</span>
              <span title="المؤمنون 1" style="cursor:help;">{قَدْ أَفْلَحَ الْمُؤْمِنُونَ}</span>
              <span class="spaces">الآيَةَ.</span></p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">POSTUPCI KOJI SPADAJU U VJEROVANJE (IMAN)</p>
              <p title="El-Bekare 177" style="cursor:help;">i riječi Uzvišenog: <b>"Nije dobročinstvo (savršeno vjerovanje) da svoja lica okrećete prema istoku ili zapadu, nego je savršeno vjerovanje (dobročinstvo) ko vjeruje u Allaha, Sudnji dan, meleke, Knjigu (Kur'a n) i vjerovjesnike, koji dijele imetak koji im je drag rodbini, siročadi , bijednicima, putniku (bez materijalnih sredstava), prosjacima i za otkup robova, koji obavljaju namaz i daju zekat, koji izvršavaju svoja obećanja, koji su strpljivi u nevolji, bolesti i u borbi. To su oni koji su iskreni (u vjerovanju) i to su oni koji su bogobojazni."</b></p>
              <p title="El-Mu'minun 1" style="cursor:help;">(i riječi): <b>"Zaista su uspjeli pravovjerni..."</b></p>
            </div>
          </div>
        </div>
      `,
    10: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">MUSLIMAN JE ONAJ OD ČIJEG SU JEZIKA I RUKE MIRNI MUSLIMANI</p>
            </div>
          </div>
        </div>
      `,
    11: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب أَىُّ الإِسْلاَمِ أَفْضَلُ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">KO JE NAJBOLJI MUSLIMAN?</p>
            </div>
          </div>
        </div>
      `,
    12: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب إِطْعَامُ الطَّعَامِ مِنَ الإِسْلاَمِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">NAHRANITI (GLADNOG) DIO JE ISLAMA</p>
            </div>
          </div>
        </div>
      `,
    13: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب مِنَ الإِيمَانِ أَنْ يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">ŽELJETI SVOME BRATU ONO STO SE ŽELI SAMOM SEBI, SASTAVNI JE DIO VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    14: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب حُبُّ الرَّسُولِ صلى الله عليه وسلم مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">VOLJETI POSLANIKA , SALLALLAHU ALEJHI VE SELLEM, DIO JE VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    16: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب حَلاَوَةِ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">O SLASTI VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    17: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب عَلاَمَةُ الإِيمَانِ حُبُّ الأَنْصَارِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">LJUBAV PREMA ENSARIJAMA ZNAK JE VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    18: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">POGLAVLJE</p>
            </div>
          </div>
        </div>
      `,
    19: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب مِنَ الدِّينِ الْفِرَارُ مِنَ الْفِتَنِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">BJEŽATI OD SMUTNJI, DIO JE VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    20: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب قَوْلِ النَّبِيِّ <span class="saws">ﷺ</span> أَنَا أَعْلَمُكُمْ بِاللَّهِ</p>
              <p class="quran" title="البقرة 225" style="cursor:help;"><span class="spaces">وَأَنَّ الْمَعْرِفَةَ فِعْلُ الْقَلْبِ لِقَوْلِ اللَّهِ تَعَالَى</span>
              {وَلَكِنْ يُؤَاخِذُكُمْ بِمَا كَسَبَتْ قُلُوبُكُمْ}</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">O IZJAVI VJEROVJESNIKA, SALLALLAHU ALEJHl VE SELLEM: "JA SAM MEĐU VAMA NAJZNANIJI O ALLAHU" I O TOME DA JE SPOZNAJA ALLAHA AKT SRCA (UMA I RAZUMA)</p>
              <p title="El-Bekare 225" style="cursor:help;">To se temelji na riječima Uzvišenog Allaha: <b>"Allah će vas uzeti na odgovornost za ono što su učinila vaša srca.</b></p>
            </div>
          </div>
        </div>
      `,
    21: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب مَنْ كَرِهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُلْقَى فِي النَّارِ مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">PREZIRATI POVRATAK U NEVJERSTVO POPUT PREZIRANJA DA ČOVJEK BUDE BAČEN U VATRU, DIO JE VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    22: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب تَفَاضُلِ أَهْلِ الإِيمَانِ فِي الأَعْمَالِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">GRADIRANJE VJERNIKA PREMA NJIHOVIM DJELIMA</p>
            </div>
          </div>
        </div>
      `,
    24: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب الْحَيَاءُ مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">STID JE SASTAVNI DIO VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    25: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p class="quran" style="text-align:center;margin-top:5px;margin-bottom:10px;cursor:help;" title="التوبة 5"><span class="spaces">بَابُ</span>
              {فَإِنْ تَابُوا وَأَقَامُوا الصَّلاَةَ وَآتَوُا الزَّكَاةَ فَخَلُّوا سَبِيلَهُمْ}</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;cursor:help;" title="Et-Tevbe 5">"AKO SE POKAJU I BUDU OBAVLJALI NAMAZ I DIJELILI ZEKAT, PUSTITE IH NA MIRU!"</p>
            </div>
          </div>
        </div>
      `,
    26: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب مَنْ قَالَ إِنَّ الإِيمَانَ هُوَ الْعَمَلُ</p>
              <p class="quran" title="الزخرف 72" style="cursor:help;"><span class="spaces">لِقَوْلِ اللَّهِ تَعَالَى</span>
              {وَتِلْكَ الْجَنَّةُ الَّتِي أُورِثْتُمُوهَا بِمَا كُنْتُمْ تَعْمَلُونَ}.</p>
              <p class="quran"><span class="spaces">وَقَالَ عِدَّةٌ مِنْ أَهْلِ الْعِلْمِ فِي قَوْلِهِ تَعَالَى</span>
              <span title="الحجر 92-93" style="cursor:help;">{فَوَرَبِّكَ لَنَسْأَلَنَّهُمْ أَجْمَعِينَ عَمَّا كَانُوا يَعْمَلُونَ}</span>
              <span class="spaces">عَنْ قَوْلِ لاَ إِلَهَ إِلاَّ اللَّهُ. وَقَالَ</span>
              <span title="الصافات 61" style="cursor:help;">{لِمِثْلِ هَذَا فَلْيَعْمَلِ الْعَامِلُونَ}.</span></p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">O ONIMA KOJI KAŽU: "VJEROVANJE JE UISTINU RAD"</p>
              <p title="Ez-Zuhruf 72" style="cursor:help;">To se temelji na riječima Uzvišenog Allaha: <b>"To je Džennet koga smo vam u nasljedstvo podarili za ono što ste radili (vjerovali)."<b></p>
              <p>A za (završetak) riječi Uzvišenog: <b title="El-Hidžr 92-93" style="cursor:help;">"Tako mi tvoga Gospodara, sve ćemo ih pozvati na odgovornost za ono što su radili,"</b> grupa učenjaka je rekla: ("To jeste, pozvat ćemo ih na odgovornost) za riječi: 'La ilahe illellah' (Nema Boga osim Jedinog Allaha)." I rekao je (Uzvišeni): <b title="Es-Saffat 61" style="cursor:help;">"Za ovako nešto neka radiše rade."</b></p>
            </div>
          </div>
        </div>
      `,
    27: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">بَابُ إِذَا لَمْ يَكُنِ الإِسْلاَمُ عَلَى الْحَقِيقَةِ وَكَانَ عَلَى الاِسْتِسْلاَمِ أَوِ الْخَوْفِ مِنَ الْقَتْلِ</p>
              <p class="quran" title="الحجرات 14" style="cursor:help;"><span class="spaces">لِقَوْلِهِ تَعَالَى</span>
              {قَالَتِ الأَعْرَابُ آمَنَّا قُلْ لَمْ تُؤْمِنُوا وَلَكِنْ قُولُوا أَسْلَمْنَا}.</p>
              <p class="quran" title="آل عمران 85" style="cursor:help;"><span class="spaces">فَإِذَا كَانَ عَلَى الْحَقِيقَةِ فَهُوَ عَلَى قَوْلِهِ جَلَّ ذِكْرُهُ</span>
              {إِنَّ الدِّينَ عِنْدَ اللَّهِ الإِسْلاَمُ}، {وَمَنْ يَبْتَغِ غَيْرَ الإِسْلاَمِ دِينًا فَلَنْ يُقْبَلَ مِنْهُ}</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">KADA ISLAM NIJE STVARNO VJEROVANJE NEGO PRIVIDNA PREDANOST ILI JE ISPOLJEN IZ STRAHA OD SMRTI</p>
              <p title="El-Hudžurat 14" style="cursor:help;">To se temelji na riječima Uzvišenog: <b>"Mi vjerujemo, rekoše beduini." Reci (im): "Ne vjerujete!" Nego kažite: "Primili smo islam."<b></p>
              <p title="Ali Imran 85" style="cursor:help;">A kada je islam stvarno vjerovanje, onda je to kao što stoji u govoru Uzvišenog: <b>"(Prava) vjera kod Allaha je samo islam."</b></p>
            </div>
          </div>
        </div>
      `,
    28: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب إِفْشَاءُ السَّلاَمِ مِنَ الإِسْلاَمِ</p>
              <p>وَقَالَ عَمَّارٌ: ثَلاَثٌ مَنْ جَمَعَهُنَّ فَقَدْ جَمَعَ الإِيمَانَ الإِنْصَافُ مِنْ نَفْسِكَ، وَبَذْلُ السَّلاَمِ لِلْعَالَمِ، وَالإِنْفَاقُ مِنَ الإِقْتَارِ.</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">ŠIRENJE SELAMA JE SASTAVNI DIO ISLAMA</p>
              <p>Ammar je rekao: "Ko prikupi tri svojstva, prikupio je (islamsko) vjerovanje: pravednost, nazivanje selama svijetu i dijeljenje milostinje budući da je i sam potreban."</p>
            </div>
          </div>
        </div>
      `,
    29: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب كُفْرَانِ الْعَشِيرِ وَكُفْرٍ دُونَ كُفْرٍ</p>
              <p>فِيهِ عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ عَنِ النَّبِيِّ <span class="saws">ﷺ</span>.</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">NEZAHVALNOST SUPRUŽNIKU I (TERMINOLOŠKI), A NE STVARNI KUFR (KOJI IZVODI IZ ISLAMA)</p>
              <p>O ovome prenosi i Ebu-Seid Hudri od Vjerovjesnika, sallallahu alejhi ve sellem.</p>
            </div>
          </div>
        </div>
      `,
    30: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب الْمَعَاصِي مِنْ أَمْرِ الْجَاهِلِيَّةِ وَلاَ يُكَفَّرُ صَاحِبُهَا بِارْتِكَابِهَا إِلاَّ بِالشِّرْكِ</p>
              <p class="quran"><span class="spaces">لِقَوْلِ النَّبِيِّ <span class="saws">ﷺ</span> إِنَّكَ امْرُؤٌ فِيكَ جَاهِلِيَّةٌ. وَقَوْلِ اللَّهِ تَعَالَى</span>
              <span title="النساء 48" style="cursor:help;">{إِنَّ اللَّهَ لاَ يَغْفِرُ أَنْ يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَلِكَ لِمَنْ يَشَاءُ}.</span><p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">GRIJESI KOJI NOSE OBILJEŽJE PAGANSTVA (DŽAHILIJETA), A KOJI IZVRŠIOCA NE ČINE NEVJERNIKOM, IZUZIMAJUĆI IDOLOPOKLONSTVO</p>
              <p>Ovo se temelji na Vjerovjesnikovim, sallallahu alejhi ve sellem, riječima: <b>"Ti si čovjek koji ima u sebi paganstva"</b>, (džahilijeta) i na temelju riječi Uzvišenog Allaha: <b title="En-Nisa' 48" style="cursor:help;">"Allah neće sigurno oprostiti da mu se širk čini, a oprostit će druge grijehe, kome bude htio."</b></p>
            </div>
          </div>
        </div>
      `,
    31: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p class="quran" style="text-align:center;margin-top:5px;margin-bottom:10px;cursor:help;" title="الحجرات 9"><span class="spaces">بَابُ</span>
              {وَإِنْ طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا}</p>
              <p>فَسَمَّاهُمُ الْمُؤْمِنِينَ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;cursor:help;" title="El-Hudžurat 9">"KADA SE DVIJE SKUPINE VJERNIKA POTUKU, IZMIRITE IH"</p>
              <p>Tako ih je (Allah) nazvao vjernicima.</p>
            </div>
          </div>
        </div>
      `,
    32: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب ظُلْمٌ دُونَ ظُلْمٍ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">ZULUM (NASILJE) KOJI JE BLAŽI OD PRAVOG ZULUMA</p>
            </div>
          </div>
        </div>
      `,
    33: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب عَلاَمَةِ الْمُنَافِقِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">OBILJEŽJA LICEMJERNOGA</p>
            </div>
          </div>
        </div>
      `,
    35: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب قِيَامُ لَيْلَةِ الْقَدْرِ مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">PROVOĐENJE NOĆI "LEJLEI-KADR" U IBADETU, DIO JE VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    36: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب الْجِهَادُ مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">DŽIHAD (BORBA NA ALLAHOVOM PUTU) DIO JE VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    37: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب تَطَوُّعُ قِيَامِ رَمَضَانَ مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">DOBROVOLJNO KLANJANJE U TOKU RAMAZANSKIH NOĆI SASTAVNI JE DIO VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    38: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب صَوْمُ رَمَضَانَ احْتِسَابًا مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">POSTITI RAMAZAN NADAJUĆI SE NAGRADI (KOD ALLAHA) DIO JE VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    39: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب الدِّينُ يُسْرٌ</p>
              <p>وَقَوْلُ النَّبِيِّ <span class="saws">ﷺ</span> أَحَبُّ الدِّينِ إِلَى اللَّهِ الْحَنِيفِيَّةُ السَّمْحَةُ.</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">VJERA JE LAHKA</p>
              <p>Vjerovjesnik, sallallahu alejhi ve sellem, izjavio je: <b>"Allahu najmilija vjera je čista i lahka vjera (islam)."</b></p>
            </div>
          </div>
        </div>
      `,
    40: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب الصَّلاَةُ مِنَ الإِيمَانِ</p>
              <p class="quran"><span class="spaces">وَقَوْلُ اللَّهِ تَعَالَى</span>
              <span title="البقرة 143" style="cursor:help;">{وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ}</span>
              <span class="spaces">يَعْنِي صَلاَتَكُمْ عِنْدَ الْبَيْتِ.</span>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">NAMAZ JE SASTAVNI DIO VJEROVANJA</p>
              <p>I riječi Uzvišenog Allaha: <b title="El-Bekare 143" style="cursor:help;">"Allah neće dati da propadne vaše vjerovanje..."</b>, to jeste: "...vaši namazi vršeni kod Ka'be (okrećući se prema Bejtul-makdisu)."</p>
            </div>
          </div>
        </div>
      `,
    41: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب حُسْنِ إِسْلاَمِ الْمَرْءِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">ČOVJEKOV ISPRAVAN ODNOS PREMA ISLAMU</p>
            </div>
          </div>
        </div>
      `,
    43: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب أَحَبُّ الدِّينِ إِلَى اللَّهِ أَدْوَمُهُ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">UZVIŠENOM ALLAHU JE NAJDRAŽI POSAO KOJI SE (U IME N JEGA) TRAJNO RADI</p>
            </div>
          </div>
        </div>
      `,
    44: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب زِيَادَةِ الإِيمَانِ وَنُقْصَانِهِ</p>
              <p class="quran"><span class="spaces">وَقَوْلِ اللَّهِ تَعَالَى</span>
              <span title="الكهف 13" style="cursor:help;">{وَزِدْنَاهُمْ هُدًى}</span>
              <span title="المدثر 74" style="cursor:help;">{وَيَزْدَادَ الَّذِينَ آمَنُوا إِيمَانًا}</span>
              <span class="spaces">وَقَالَ</span>
              <span title="المائدة 3" style="cursor:help;">{الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ}</span></p>
              <p>فَإِذَا تَرَكَ شَيْئًا مِنَ الْكَمَالِ فَهُوَ نَاقِصٌ.</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">POVEĆAVANJE I UMANJIVANJE VJEROVANJA</p>
              <p>I riječi Uzvišenog Allaha: <b title="El-Kehf 13" style="cursor:help;">"Povećali smo im uputu"</b>, i <b title="El-Muddessir 74" style="cursor:help;">"Allah uvećava vjerovanje onima koji vjeruju"</b>, i <b title="El-Ma'ide 3" style="cursor:help;">"Danas sam vam potpuno usavršio vašu vjeru."</b></p>
              <p>- Ako se - kaže Ebu-Abdullah (Buhari) - ma šta od te savršenosti ostavi, ona će biti manjkava.</p>
            </div>
          </div>
        </div>
      `,
    46: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب الزَّكَاةُ مِنَ الإِسْلاَمِ</p>
              <p class="quran" title="البينة 5" style="cursor:help;"><span class="spaces">وَقَوْلُهُ</span>
               {وَمَا أُمِرُوا إِلاَّ لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلاَةَ وَيُؤْتُوا الزَّكَاةَ وَذَلِكَ دِينُ الْقَيِّمَةِ}</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">ZEKAT JE SASTAVNI DIO ISLAMA</p>
              <p title="El-Bejjine 5" style="cursor:help;">I riječi Uzvišenog Allaha: <b>"I sljedbenicima ranijih objava bilo je naređeno da obožavaju samo Allaha, kloneći se paganstva, iskreno da vjeruju, da obavljaju namaz i daju zekat, a to je ispravna vjera."</b></p>
            </div>
          </div>
        </div>
      `,
    47: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب اتِّبَاعُ الْجَنَائِزِ مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">PRATITI DŽENAZU SASTAVNI JE DIO VJEROVANJA</p>
            </div>
          </div>
        </div>
      `,
    48: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب خَوْفِ الْمُؤْمِنِ مِنْ أَنْ يَحْبَطَ عَمَلُهُ وَهُوَ لاَ يَشْعُرُ</p>
              <p>وَقَالَ إِبْرَاهِيمُ التَّيْمِيُّ مَا عَرَضْتُ قَوْلِي عَلَى عَمَلِي إِلاَّ خَشِيتُ أَنْ أَكُونَ مُكَذَّبًا.</p>
              <p>وَقَالَ ابْنُ أَبِي مُلَيْكَةَ أَدْرَكْتُ ثَلاَثِينَ مِنْ أَصْحَابِ النَّبِيِّ <span class="saws">ﷺ</span> كُلُّهُمْ يَخَافُ النِّفَاقَ عَلَى نَفْسِهِ، مَا مِنْهُمْ أَحَدٌ يَقُولُ إِنَّهُ عَلَى إِيمَانِ جِبْرِيلَ وَمِيكَائِيلَ.</p>
              <p>وَيُذْكَرُ عَنِ الْحَسَنِ مَا خَافَهُ إِلاَّ مُؤْمِنٌ، وَلاَ أَمِنَهُ إِلاَّ مُنَافِقٌ.</p>
              <p class="quran"><span class="spaces">وَمَا يُحْذَرُ مِنَ الإِصْرَارِ عَلَى النِّفَاقِ وَالْعِصْيَانِ مِنْ غَيْرِ تَوْبَةٍ لِقَوْلِ اللَّهِ تَعَالَى</span>
              <span title="آل عمران 135" style="cursor:help;">{وَلَمْ يُصِرُّوا عَلَى مَا فَعَلُوا وَهُمْ يَعْلَمُونَ}.</span></p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">BOJAZAN VJERNIKA DAMU (DOBRA DJELA) NE PROPADNU, A DA ON I NE OSJETI</p>
              <p>Ibrahim Tejmi je rekao: "Nikad nisam usporedio svoje riječi sa svojim djelima, a da se nisam bojao da neću sam se be demantovati."</p>
              <p>Ibnu-Ebi-Mulejke je kazao: "Zapamtio sam trideset drugova Vjerovjesnikovih, sallallahu alejhi ve sellem, i svi su se za sebe bojali licemjerstva. Nijedan među njima nije bio koji bi rekao da je na stepenu vjerovanja Džibrila i Mikaila."</p>
              <p>Od Hasana (Basrije) prenosi se: Licemjerstva (ili Allaha) boji se samo vjernik, a ne boje ga se samo licemjeri.</p>
              <p>Upozorenje na (opasnost) ustrajnosti u licemjerstvu i griješenju ukoliko ne postoji pokajanje na osnovu riječi Uzvišenog Allaha: <b title="Ali Imran 135" style="cursor:help;">"I nisu ustrajali na onom što su činili, znajući da je to grijeh."</b></p>
            </div>
          </div>
        </div>
      `,
    50: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">بَابُ سُؤَالِ جِبْرِيلَ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الإِيمَانِ وَالإِسْلاَمِ وَالإِحْسَانِ وَعِلْمِ السَّاعَةِ</p>
              <p>وَبَيَانِ النَّبِيِّ <span class="saws">ﷺ</span> لَهُ ثُمَّ قَالَ جَاءَ جِبْرِيلُ عَلَيْهِ السَّلاَمُ يُعَلِّمُكُمْ دِينَكُمْ. فَجَعَلَ ذَلِكَ كُلَّهُ دِينًا، وَمَا بَيَّنَ النَّبِيُّ <span class="saws">ﷺ</span> لِوَفْدِ عَبْدِ الْقَيْسِ مِنَ الإِيمَانِ، وَقَوْلِهِ تَعَالَى</p>
              <p class="quran" title="آل عمران 85" style="cursor:help;">{وَمَنْ يَبْتَغِ غَيْرَ الإِسْلاَمِ دِينًا فَلَنْ يُقْبَلَ مِنْهُ}.</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">DŽIBRILOVO PITANJE VJEROVJESNIKU, SALLALLAHU ALEJHI VE SELLEM, O IMANU, ISLAMU, IHSANU I SUDNJEM DANU</p>
              <p>i Vjerovjesnikovo, sallallahu alejhi ve sellem, objašnjenje Džibrilu, nakon čega je kazao: <b>"Džibril, alejhi selam, došao je da vas pouči vašoj vjeri"</b> i to sve učinio je vjerom, uz ono što je iznio delegaciji Abdul-Kajsa, i to je sastavni dio vjerovanja i riječi Uzvišenog Allaha: <b title="Ali Imran 85" style="cursor:help;">"Ko traži drugu vjeru osim islama, ona mu se neće primiti."</b></p>
            </div>
          </div>
        </div>
      `,
    51: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">POGLAVLJE</p>
            </div>
          </div>
        </div>
      `,
    52: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب فَضْلِ مَنِ اسْتَبْرَأَ لِدِينِهِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">VRLINA OSOBE KOJA NASTOJI SAČUVATI ČISTOTU SVOJE VJERE</p>
            </div>
          </div>
        </div>
      `,
    53: `
        <div class="hadith divider title">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب أَدَاءُ الْخُمُسِ مِنَ الإِيمَانِ</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">DAVANJE PETINE (RATNOG PLIJENA) JESTE SASTAVNl DIO ISLAMA</p>
            </div>
          </div>
        </div>
      `,
    54: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">باب مَا جَاءَ أَنَّ الأَعْمَالَ بِالنِّيَّةِ وَالْحِسْبَةِ وَلِكُلِّ امْرِئٍ مَا نَوَى</p>
              <p>فَدَخَلَ فِيهِ الإِيمَانُ وَالْوُضُوءُ وَالصَّلاَةُ وَالزَّكَاةُ وَالْحَجُّ وَالصَّوْمُ وَالأَحْكَامُ.</p>
              <p class="quran"><span class="spaces">وَقَالَ اللَّهُ تَعَالَى</span>
              <span title="الإسراء 84" style="cursor:help;">{قُلْ كُلٌّ يَعْمَلُ عَلَى شَاكِلَتِهِ}</span>
              <span class="spaces">عَلَى نِيَّتِهِ. نَفَقَةُ الرَّجُلِ عَلَى أَهْلِهِ يَحْتَسِبُهَا صَدَقَةٌ. وَقَالَ <span class="saws">ﷺ</span> وَلَكِنْ جِهَادٌ وَنِيَّةٌ.</span></p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">O TOME STA SE NAVODI DA SE DJELA CIJENE PREMA NAMJERI I ISKRENOSTI I DA SVAKOM ČOVJEKU PRIPADA ONO ŠTO JE NAUMIO</p>
              <p>U to spada: vjerovanje, abdest, namaz, zekat, hadž, post i međusobne norme poslovanja.</p>
              <p>Uzvišeni Allah je rekao: <b title="El-Isra' 84" style="cursor:help;">"Kaži, svako radi po svom načinu"</b>, to jeste po svojoj odluci. Ako troši čovjek na svoje kućane, računajući na (Allahovu nagradu), onda je to milostinja. I rekao je (Poslanik, sallallahu alejhi ve sellem): <b>"...ali ima borba na (Allahovom putu) i dobra namjera."</b></p>
            </div>
          </div>
        </div>
      `,
    57: `
        <div class="hadith divider">
          <div class="hadith-text">
            <div class="arapski">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">بَابُ قَوْلِ النَّبِيِّ <span class="saws">ﷺ</span> الدِّينُ النَّصِيحَةُ لِلَّهِ وَلِرَسُولِهِ وَلأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ</p>
              <p class="quran" title="التوبة 91" style="cursor:help;"><span class="spaces">وَقَوْلِهِ تَعَالَى</span>
              {إِذَا نَصَحُوا لِلَّهِ وَرَسُولِهِ}</p>
            </div>
            <div class="prevod">
              <p style="text-align:center;margin-top:5px;margin-bottom:10px;">RIJEČI VJEROVJESNIKA, SALLALLAHU ALEJHI VE SELLEM: "VJERA JE ISKREN ODNOS (NASIHAT)' PREMA ALLAHU, NJEGOVOM POSLANIKU, RUKOVODIOCIMA MUSLIMANIMA I NJIHOVOM NARODU"</p>
              <p>U to spada: vjerovanje, abdest, namaz, zekat, hadž, post i međusobne norme poslovanja.</p>
              <p title="Et-Tevbe 91" style="cursor:help;">I riječi Uzvišenog: <b>"...ako su prema Allahu i Njegovom Poslaniku iskreni..."</b></p>
            </div>
          </div>
        </div>
      `
    }
  }
};
