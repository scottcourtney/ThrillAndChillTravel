const imageFolder = 'images/travel_partners/';
const imageFiles = [
  'away-we-go-logo.png',
  'Carnival.jpg',
  'Celebrity-Cruises-Logo.jpg',
  'Disney.jpg',
  'expedia.jpg',
  'Hertz-logo-broadwalktravel.png',
  'Hilton-Worldwide-Logo-2016-present-scaled.jpg',
  'Holland-America-Cruise-Line.jpg',
  'Hyatt.jpg',
  'Legoland-1.png',
  'margaritaville.png',
  'Marriot.jpg',
  'MSC-Cruises.jpg',
  'norwegian-cruise-line.jpg',
  'Princess-Cruises.jpg',
  'Royal-Caribbean.jpg',
  'sandals-logo.jpg',
  'Seaworld.jpg',
  'universal-prefered-logo.png',
  'universal-vacations.jpg',
  'viking-cruises.jpg',
  'virgin-voyages.jpg'
];

const track = document.getElementById('partner-carousel');
const allImages = [...imageFiles, ...imageFiles, ...imageFiles]; // duplicate for looped scroll

allImages.forEach(file => {
  const img = document.createElement('img');
  img.src = imageFolder + file;
  img.alt = 'Partner Logo';
  track.appendChild(img);
});
