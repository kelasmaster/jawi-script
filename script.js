// Data structure for Jawi letters
const jawiLetters = [
  { letter: 'ا', name: 'Alif', pronunciation: '/aː/', usage: 'Used as a vowel.', audio: 'audio/alif.mp3' },
  { letter: 'ب', name: 'Ba', pronunciation: '/b/', usage: 'Common consonant.', audio: 'audio/ba.mp3' },
  { letter: 'چ', name: 'Ca', pronunciation: '/t͡ʃ/', usage: 'Native to Malay.', audio: 'audio/ca.mp3' },
  { letter: 'ڠ', name: 'Nga', pronunciation: '/ŋ/', usage: 'Native to Malay.', audio: 'audio/nga.mp3' },
  // Add remaining letters here...
];

// DOM Elements
const letterGrid = document.getElementById('letterGrid');
const infoPanel = document.getElementById('infoPanel');
const selectedLetter = document.getElementById('selectedLetter');
const pronunciation = document.getElementById('pronunciation');
const usage = document.getElementById('usage');
const audioPlayer = document.getElementById('audioPlayer');

// Render letters
function renderLetters() {
  jawiLetters.forEach(letter => {
    const div = document.createElement('div');
    div.textContent = letter.letter;
    div.addEventListener('click', () => showLetterInfo(letter));
    letterGrid.appendChild(div);
  });
}

// Show letter information
function showLetterInfo(letter) {
  selectedLetter.textContent = letter.letter;
  pronunciation.textContent = letter.pronunciation;
  usage.textContent = letter.usage;
  audioPlayer.src = letter.audio;
  audioPlayer.load();
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filteredLetters = jawiLetters.filter(letter =>
    letter.name.toLowerCase().includes(query) || letter.letter.includes(query)
  );
  letterGrid.innerHTML = '';
  filteredLetters.forEach(letter => {
    const div = document.createElement('div');
    div.textContent = letter.letter;
    div.addEventListener('click', () => showLetterInfo(letter));
    letterGrid.appendChild(div);
  });
});

// Initialize app
renderLetters();
