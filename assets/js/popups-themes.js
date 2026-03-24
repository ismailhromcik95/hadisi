document.addEventListener("DOMContentLoaded", () => {

  const searchBtn = document.querySelector('.search svg');
  const searchBar = document.getElementById('search');
  const searchContainer = document.querySelector('.search');

  searchBtn.addEventListener('click', () => {
    const isHidden = searchBar.classList.contains('hidden');
    
    if (isHidden) {
      searchBar.classList.remove('hidden');
      searchBar.focus();
    } else {
      const query = searchBar.value.trim();
      if (query) {
        window.location.href = `https://ismailhromcik95.github.io/hadisi/hadis.html?search=${encodeURIComponent(query)}`;
      } else {
        searchBar.classList.add('hidden');
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchBar.classList.contains('hidden')) {
      if (!searchContainer || !searchContainer.contains(e.target)) {
        searchBar.classList.add('hidden');
      }
    }
  });

  const settings = document.querySelector('.settings');
  const popup = document.querySelector('.popup');

  settings.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  const html = document.documentElement;

  const lightBtn = document.querySelector('.sv-tema');
  const darkBtn  = document.querySelector('.tm-tema');

  darkBtn.addEventListener('click', () => {
    html.setAttribute('data-theme', 'light');

    darkBtn.classList.add('hidden');
    lightBtn.classList.remove('hidden');

    localStorage.setItem('theme', 'light');
  });

  lightBtn.addEventListener('click', () => {
    html.setAttribute('data-theme', 'dark');

    lightBtn.classList.add('hidden');
    darkBtn.classList.remove('hidden');

    localStorage.setItem('theme', 'dark');
  });

  const slider = document.getElementById('myRange');

  slider.addEventListener('input', () => {
    const scale = slider.value / 50;
    document.documentElement.style.setProperty('--font-scale', scale);

    localStorage.setItem('fontScale', scale);
  });

  const savedTheme = localStorage.getItem('theme');
  const savedScale = localStorage.getItem('fontScale');

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);

    if (savedTheme === 'light') {
      darkBtn.classList.add('hidden');
      lightBtn.classList.remove('hidden');
    } else {
      lightBtn.classList.add('hidden');
      darkBtn.classList.remove('hidden');
    }
  }

  if (savedScale) {
    document.documentElement.style.setProperty('--font-scale', savedScale);
    slider.value = savedScale * 50;
  }

  const resetBtn = document.getElementById('reset');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {

      localStorage.removeItem('theme');
      localStorage.removeItem('fontScale');

      html.setAttribute('data-theme', 'dark');
      lightBtn.classList.add('hidden');
      darkBtn.classList.remove('hidden');

      document.documentElement.style.setProperty('--font-scale', 1);
      slider.value = 50;
    });
  }

  document.addEventListener("click", function (e) {

    const shareBtn = e.target.closest(".share");

    if (!shareBtn) return;

    let link = null;

    const hadith = shareBtn.closest(".hadith");
    if (hadith && hadith.dataset.link) {
      link = hadith.dataset.link;
    }

    if (!link) return;

    navigator.clipboard.writeText(link)
      .then(() => {
        alert("Link hadisa je kopiran uspješno!");
      })
      .catch(err => {
        console.error("Greška pri kopiranju:", err);
      });

  });

  const searchInput = document.getElementById("search");
  if (!searchInput) return;

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `https://ismailhromcik95.github.io/hadisi/hadis.html?search=${encodeURIComponent(query)}`;
      }
    }
  });

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function handleSearch() {
    const query = document.getElementById("search").value.trim();
    if (query.length > 2) {
      window.location.href = `https://ismailhromcik95.github.io/hadisi/hadis.html?search=${encodeURIComponent(query)}`;
    }
  }

  let deferredPrompt;
  const installBtn = document.getElementById("install");

  console.log("Install button element:", installBtn);

  window.addEventListener("beforeinstallprompt", (e) => {
    console.log("beforeinstallprompt fired!");
    
    e.preventDefault();
    deferredPrompt = e;

    if (installBtn) {
      installBtn.style.display = "block";
      console.log("Install button shown");
    } else {
      console.log("Install button NOT found in DOM");
    }
  });

  window.addEventListener("appinstalled", () => {
    console.log("App was installed");
  });

  console.log("Is HTTPS:", location.protocol === "https:");
  console.log("ServiceWorker supported:", "serviceWorker" in navigator);
  console.log("Standalone mode:", window.matchMedia('(display-mode: standalone)').matches);

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    console.log("Install result:", outcome);

    deferredPrompt = null;
    installBtn.style.display = "none";
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker registered"))
      .catch(err => console.log("SW error:", err));
  }

});
