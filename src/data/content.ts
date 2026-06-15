export const services = [
  {
    id: 'profilowe',
    name: 'Sesje profilowe',
    description: 'Profesjonalne portrety, które oddają Twój charakter i osobowość.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
  {
    id: 'slubne',
    name: 'Sesje ślubne',
    description: 'Niezapomniana dokumentacja Waszego wyjątkowego dnia pełnego miłości.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  },
  {
    id: 'swiateczne',
    name: 'Sesje świąteczne',
    description: 'Magiczne ujęcia pełne ciepła i radości w wyjątkowej atmosferze.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    id: 'komunijne',
    name: 'Sesje komunijne',
    description: 'Piękna pamiątka z jednej z najważniejszych chwil w życiu dziecka.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    id: 'prywatne',
    name: 'Sesje prywatne',
    description: 'Indywidualne sesje w pełni dopasowane do Twoich potrzeb i wizji.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`,
  },
];

export const galleryCategories = [
  { id: 'plenerowe', name: 'Plenerowe' },
  { id: 'urodzinowe', name: 'Urodzinowe' },
  { id: 'ciazowe', name: 'Ciążowe' },
  { id: 'noworodkowe', name: 'Noworodkowe' },
  { id: 'kobiece', name: 'Kobiece' },
  { id: 'rodzinne', name: 'Rodzinne' },
  { id: 'slubne', name: 'Ślubne' },
  { id: 'swiateczne', name: 'Świąteczne' },
];

export const galleryImages = [
  // Plenerowe
  { category: 'plenerowe', src: 'https://picsum.photos/seed/pl1/800/1000', alt: 'Sesja plenerowa' },
  { category: 'plenerowe', src: 'https://picsum.photos/seed/pl2/800/600', alt: 'Sesja plenerowa' },
  { category: 'plenerowe', src: 'https://picsum.photos/seed/pl3/800/1000', alt: 'Sesja plenerowa' },
  { category: 'plenerowe', src: 'https://picsum.photos/seed/pl4/800/600', alt: 'Sesja plenerowa' },
  // Urodzinowe
  { category: 'urodzinowe', src: 'https://picsum.photos/seed/ur1/800/1000', alt: 'Sesja urodzinowa' },
  { category: 'urodzinowe', src: 'https://picsum.photos/seed/ur2/800/600', alt: 'Sesja urodzinowa' },
  { category: 'urodzinowe', src: 'https://picsum.photos/seed/ur3/800/1000', alt: 'Sesja urodzinowa' },
  { category: 'urodzinowe', src: 'https://picsum.photos/seed/ur4/800/600', alt: 'Sesja urodzinowa' },
  // Ciążowe
  { category: 'ciazowe', src: 'https://picsum.photos/seed/ci1/800/1000', alt: 'Sesja ciążowa' },
  { category: 'ciazowe', src: 'https://picsum.photos/seed/ci2/800/1000', alt: 'Sesja ciążowa' },
  { category: 'ciazowe', src: 'https://picsum.photos/seed/ci3/800/600', alt: 'Sesja ciążowa' },
  { category: 'ciazowe', src: 'https://picsum.photos/seed/ci4/800/1000', alt: 'Sesja ciążowa' },
  // Noworodkowe
  { category: 'noworodkowe', src: 'https://picsum.photos/seed/nw1/800/1000', alt: 'Sesja noworodkowa' },
  { category: 'noworodkowe', src: 'https://picsum.photos/seed/nw2/800/600', alt: 'Sesja noworodkowa' },
  { category: 'noworodkowe', src: 'https://picsum.photos/seed/nw3/800/1000', alt: 'Sesja noworodkowa' },
  { category: 'noworodkowe', src: 'https://picsum.photos/seed/nw4/800/600', alt: 'Sesja noworodkowa' },
  // Kobiece
  { category: 'kobiece', src: 'https://picsum.photos/seed/kb1/800/1000', alt: 'Sesja kobieca' },
  { category: 'kobiece', src: 'https://picsum.photos/seed/kb2/800/1000', alt: 'Sesja kobieca' },
  { category: 'kobiece', src: 'https://picsum.photos/seed/kb3/800/600', alt: 'Sesja kobieca' },
  { category: 'kobiece', src: 'https://picsum.photos/seed/kb4/800/1000', alt: 'Sesja kobieca' },
  // Rodzinne
  { category: 'rodzinne', src: 'https://picsum.photos/seed/rd1/800/600', alt: 'Sesja rodzinna' },
  { category: 'rodzinne', src: 'https://picsum.photos/seed/rd2/800/1000', alt: 'Sesja rodzinna' },
  { category: 'rodzinne', src: 'https://picsum.photos/seed/rd3/800/600', alt: 'Sesja rodzinna' },
  { category: 'rodzinne', src: 'https://picsum.photos/seed/rd4/800/1000', alt: 'Sesja rodzinna' },
  // Ślubne
  { category: 'slubne', src: 'https://picsum.photos/seed/sl1/800/1000', alt: 'Sesja ślubna' },
  { category: 'slubne', src: 'https://picsum.photos/seed/sl2/800/600', alt: 'Sesja ślubna' },
  { category: 'slubne', src: 'https://picsum.photos/seed/sl3/800/1000', alt: 'Sesja ślubna' },
  { category: 'slubne', src: 'https://picsum.photos/seed/sl4/800/600', alt: 'Sesja ślubna' },
  // Świąteczne
  { category: 'swiateczne', src: 'https://picsum.photos/seed/sw1/800/1000', alt: 'Sesja świąteczna' },
  { category: 'swiateczne', src: 'https://picsum.photos/seed/sw2/800/600', alt: 'Sesja świąteczna' },
  { category: 'swiateczne', src: 'https://picsum.photos/seed/sw3/800/1000', alt: 'Sesja świąteczna' },
  { category: 'swiateczne', src: 'https://picsum.photos/seed/sw4/800/600', alt: 'Sesja świąteczna' },
];

export const testimonials = [
  {
    name: 'Bartłomiej Skonieczny',
    text: 'Zdjęcia zrobione przez Kamilę są absolutnie niesamowite! Bardzo polecam, jeśli szukacie kogoś, kto potrafi uchwycić emocje i detale w każdej chwili.',
  },
  {
    name: 'Sylwia Rutkowska',
    text: 'Zdecydowanie polecam! Profesjonalizm i świetna energia sprawiły, że sesja była wyjątkowa. Zdjęcia wyszły pięknie, a cała współpraca przebiegła bez stresu.',
  },
  {
    name: 'Paulina Fabisiak',
    text: 'Sesja z Kamilą była świetnym doświadczeniem. Profesjonalne podejście, świetna atmosfera i doskonałe zdjęcia. Polecam każdemu, kto szuka fachowca z pasją!',
  },
  {
    name: 'Przemek Górzyński',
    text: 'Otrzymałem profesjonalne zdjęcia, które przekroczyły moje oczekiwania. Kamila to prawdziwy ekspert, który doskonale uchwycił każdą chwilę. Praca z nią to czysta przyjemność – pełen profesjonalizm i kreatywność. Gorąco polecam!',
  },
  {
    name: 'Marta Kowalczyk',
    text: 'Sesja ciążowa z Kamilą to było coś wyjątkowego. Poczułam się swobodnie od pierwszej chwili, a zdjęcia są przepiękne. Każde z nich opowiada historię, którą będę pamiętać całe życie.',
  },
  {
    name: 'Tomasz Wiśniewski',
    text: 'Korzystałem z sesji rodzinnej i jestem zachwycony. Kamila świetnie poradziła sobie z naszym trójką dzieci – każde zdjęcie to uśmiech i naturalna radość. Dziękujemy!',
  },
  {
    name: 'Agnieszka Malinowska',
    text: 'Polecam z całego serca! Sesja kobieca z Kamilą dodała mi pewności siebie. Dzięki jej talentowi i cierpliwości poczułam się naprawdę wyjątkowo przed obiektywem.',
  },
  {
    name: 'Karolina i Michał Nowak',
    text: 'Kamila uwieczniła nasz ślub w sposób, o jakim marzyliśmy. Zdjęcia są pełne emocji i naturalności. Każde ujęcie to kawałek naszej historii – dziękujemy z całego serca!',
  },
  {
    name: 'Joanna Kaczmarek',
    text: 'Zamawiałam sesję noworodkową dla córeczki i jestem absolutnie zachwycona. Kamila ma niesamowite wyczucie i cierpliwość. Zdjęcia są delikatne, piękne i pełne miłości.',
  },
  {
    name: 'Dariusz Lewandowski',
    text: 'Profesjonalizm na najwyższym poziomie. Kamila doskonale przygotowała nas do sesji, a efekty końcowe przeszły nasze najśmielsze oczekiwania. Wrócimy na pewno!',
  },
];

export const contact = {
  name: 'Studio Fotograficzne Kamila Ćwiklińska',
  address: 'Plebanka 2A, 87-700 Plebanka',
  phone: '+48 695-982-588',
  email: 'kontakt@kamilacwiklinska.com',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100075784977782',
    instagram: 'https://www.instagram.com/fotografiakamilacwiklinska/',
    whatsapp: 'https://wa.me/48695982588',
  },
};
