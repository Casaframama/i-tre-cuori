// Lightbox Functions
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="nf nf-md-weather_sunny"></i>' : '<i class="nf nf-md-moon_waning_crescent"></i>';
});

// Set initial mode based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="nf nf-md-weather_sunny"></i>';
} else {
  darkModeToggle.innerHTML = '<i class="nf nf-md-moon_waning_crescent"></i>';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero Carousel
const heroCarousel = document.querySelector('.hero-carousel-inner');
const heroImages = heroCarousel.querySelectorAll('.hero-image');
let heroCurrentIndex = 0;

function updateHeroCarousel() {
  heroCarousel.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
}

document.getElementById('heroNext').addEventListener('click', () => {
  heroCurrentIndex = (heroCurrentIndex + 1) % heroImages.length;
  updateHeroCarousel();
});

document.getElementById('heroPrev').addEventListener('click', () => {
  heroCurrentIndex = (heroCurrentIndex - 1 + heroImages.length) % heroImages.length;
  updateHeroCarousel();
});

// Auto-scroll every 5 seconds
setInterval(() => {
  heroCurrentIndex = (heroCurrentIndex + 1) % heroImages.length;
  updateHeroCarousel();
}, 5000);

// CTA Dropdown Toggle
document.getElementById('ctaButton').addEventListener('click', function(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('ctaDropdown');
  dropdown.querySelector('.cta-dropdown-menu').classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('ctaDropdown');
  const menu = dropdown.querySelector('.cta-dropdown-menu');
  if (!dropdown.contains(e.target) && menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});

// Translations
const translations = {
  it: {
    "hero-title": "I Tre Cuori",
    "hero-subtitle": "Un posto dove puoi sentirti a casa",
    "book-btn": "Prenota la tua vacanza",
    "book-airbnb": "Prenota su Airbnb",
    "book-booking": "Prenota su Booking",
    "services-title": "I Nostri Servizi",
    "service-wifi": "WiFi",
    "service-parking": "Parcheggio",
    "service-ac": "Aria Condizionata",
    "service-kitchen": "Cucina Attrezzata",
    "service-garden": "Giardino",
    "gallery-title": "La Nostra Casa",
    "welcome-title": "Benvenuti a Casa Nostra",
    "desc1": "Benvenuti a I Tre Cuori, un incantevole monolocale situato nel cuore di Alba, a pochi passi dal centro. Circondati dalle colline morbide del Roero, potrete immergervi in una delle zone più affascinanti del Piemonte.",
    "desc2": "A pochi passi da Alba, città famosa in tutto il mondo per i suoi tartufi e il Barolo, la nostra struttura rappresenta la base perfetta per esplorare castelli, vigneti e borghi medievali, concedendovi al contempo la serenità di un soggiorno urbano.",
    "desc3": "Il nostro monolocale può ospitare fino a 4 ospiti e dispone di:",
    "desc4": '<li>1 letto matrimoniale</li><li>1 divano letto</li><li>Bagno privato</li><li>Cucina completamente attrezzata</li><li>Aria condizionata</li><li>WiFi</li>',
    "desc5": "L'appartamento si trova al primo piano con parcheggio condominiale disponibile per gli ospiti.",
    "location-title": "Dove Siamo",
    "location-city": "Alba",
    "location-region": "Piemonte, Langhe e Roero",
    "location-near": "Alba, città del tartufo e del Barolo",
    "contacts-title": "Contatti",
    "footer-brand": "I Tre Cuori - Vacanze nelle Langhe",
    "footer-cf": "Codice Fiscale: CRCLRD81L18A124A",
    "footer-cin": "CIN: IT004003C26CO6QC5P"
  },
  en: {
    "hero-title": "I Tre Cuori",
    "hero-subtitle": "A place where you can feel at home",
    "book-btn": "Book your vacation",
    "book-airbnb": "Book on Airbnb",
    "book-booking": "Book on Booking",
    "services-title": "Our Services",
    "service-wifi": "WiFi",
    "service-parking": "Parking",
    "service-ac": "Air Conditioning",
    "service-kitchen": "Equipped Kitchen",
    "service-garden": "Garden",
    "gallery-title": "Our House",
    "welcome-title": "Welcome to Our Home",
    "desc1": "Welcome to I Tre Cuori, a charming studio apartment in the heart of Alba, just a few steps from the center. Surrounded by the gentle hills of Roero, you will immerse yourself in one of the most fascinating areas of Piedmont.",
    "desc2": "Just steps from Alba, a city famous worldwide for its truffles and Barolo wine, our property is the perfect base to explore castles, vineyards and medieval villages, while enjoying the serenity of an urban stay.",
    "desc3": "Our studio can accommodate up to 4 guests and features:",
    "desc4": '<li>1 double bed</li><li>1 sofa bed</li><li>Private bathroom</li><li>Fully equipped kitchen</li><li>Air conditioning</li><li>WiFi</li>',
    "desc5": "The apartment is on the first floor with condominium parking available for guests.",
    "location-title": "Where We Are",
    "location-city": "Alba",
    "location-region": "Piedmont, Langhe and Roero",
    "location-near": "Alba, city of truffles and Barolo",
    "contacts-title": "Contacts",
    "footer-brand": "I Tre Cuori - Vacation in Langhe",
    "footer-cf": "Tax Code: CRCLRD81L18A124A",
    "footer-cin": "CIN: IT004003C26CO6QC5P"
  },
  de: {
    "hero-title": "I Tre Cuori",
    "hero-subtitle": "Ein Ort, an dem Sie sich wie zu Hause fühlen können",
    "book-btn": "Buchen Sie Ihren Urlaub",
    "book-airbnb": "Bei Airbnb buchen",
    "book-booking": "Bei Booking buchen",
    "services-title": "Unsere Dienstleistungen",
    "service-wifi": "WLAN",
    "service-parking": "Parkplatz",
    "service-ac": "Klimaanlage",
    "service-kitchen": "Ausgestattete Küche",
    "service-garden": "Garten",
    "gallery-title": "Unser Haus",
    "welcome-title": "Willkommen in unserem Zuhause",
    "desc1": "Willkommen bei I Tre Cuori, einer bezaubernden Wohnung im Herzen von Alba, nur wenige Schritte vom Zentrum entfernt. Umgeben von den sanften Hügeln des Roero tauchen Sie in eine der faszinierendsten Regionen Piemonts ein.",
    "desc2": "Nur wenige Schritte von Alba entfernt, einer weltberühmten Stadt für ihre Trüffel und Barolo-Wein, ist unsere Unterkunft die perfekte Basis, um Burgen, Weinberge und mittelalterliche Dörfer zu erkunden und gleichzeitig die Ruhe eines städtischen Aufenthalts zu genießen.",
    "desc3": "Unsere Wohnung bietet Platz für bis zu 4 Gäste und verfügt über:",
    "desc4": '<li>1 Doppelbett</li><li>1 Schlafsofa</li><li>Privates Badezimmer</li><li>Voll ausgestattete Küche</li><li>Klimaanlage</li><li>WLAN</li>',
    "desc5": "Die Wohnung befindet sich im ersten Stock mit condominialem Parkplatz für Gäste.",
    "location-title": "Wo Wir Sind",
    "location-city": "Alba",
    "location-region": "Piemont, Langhe und Roero",
    "location-near": "Alba, Stadt der Trüffel und des Barolo",
    "contacts-title": "Kontakte",
    "footer-brand": "I Tre Cuori - Urlaub in den Langhe",
    "footer-cf": "Steuernummer: CRCLRD81L18A124A",
    "footer-cin": "CIN: IT004003C26CO6QC5P"
  },
  fr: {
    "hero-title": "I Tre Cuori",
    "hero-subtitle": "Un endroit où vous pouvez vous sentir chez vous",
    "book-btn": "Réservez vos vacances",
    "book-airbnb": "Réserver sur Airbnb",
    "book-booking": "Réserver sur Booking",
    "services-title": "Nos Services",
    "service-wifi": "WiFi",
    "service-parking": "Parking",
    "service-ac": "Climatisation",
    "service-kitchen": "Cuisine Équipée",
    "service-garden": "Jardin",
    "gallery-title": "Notre Maison",
    "welcome-title": "Bienvenue Chez Nous",
    "desc1": "Bienvenue à I Tre Cuori, un charmant studio situé au cœur d'Alba, à quelques pas du centre. Entouré des douces collines du Roero, vous plongerez dans l'une des régions les plus fascinantes du Piémont.",
    "desc2": "À quelques pas d'Alba, ville incontournée dans le monde pour ses truffes et son Barolo, notre structure représente la base parfaite pour explorer châteaux, vignobles et villages médiévaux, tout en profitant de la sérénité d'un séjour urbain.",
    "desc3": "Notre studio peut accueillir jusqu'à 4 hôtes et dispose de :",
    "desc4": '<li>1 lit double</li><li>1 canapé-lit</li><li>Salle de bain privée</li><li>Cuisine entièrement équipée</li><li>Climatisation</li><li>WiFi</li>',
    "desc5": "L'appartement est au premier étage avec parking condominial disponible pour les hôtes.",
    "location-title": "Où Nous Trouver",
    "location-city": "Alba",
    "location-region": "Piémont, Langhe et Roero",
    "location-near": "Alba, ville des truffes et du Barolo",
    "contacts-title": "Contacts",
    "footer-brand": "I Tre Cuori - Vacances dans les Langhe",
    "footer-cf": "Code Fiscal : CRCLRD81L18A124A",
    "footer-cin": "CIN : IT004003C26CO6QC5P"
  }
};

let currentLang = 'it';

function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'desc4' || key === 'desc4') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  // Update button text
  const bookBtn = document.getElementById('ctaButton');
  const icon = bookBtn.querySelector('i');
  const btnText = translations[lang]['book-btn'];
  bookBtn.innerHTML = btnText + ' <i class="nf nf-md-chevron_down"></i>';
  
  // Update language toggle display
  document.getElementById('langToggle').querySelector('span').textContent = lang.toUpperCase();
  
  currentLang = lang;
  
  // Save preference
  localStorage.setItem('lang', lang);
}

// Language toggle
const languages = ['it', 'en', 'de', 'fr'];
document.getElementById('langToggle').addEventListener('click', () => {
  const currentIndex = languages.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % languages.length;
  translatePage(languages[nextIndex]);
});

// Load saved language
if (localStorage.getItem('lang')) {
  translatePage(localStorage.getItem('lang'));
}
