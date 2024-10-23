const hangmanWords = [
  'apple',
  'banana',
  'orange',
  'grape',
  'kiwi',
  'pear',
  'peach',
  'plum',
  'melon',
  'lemon',
  'pineapple',
  'mango',
  'papaya',
  'coconut',
  'strawberry',
  'blueberry',
  'raspberry',
  'blackberry',
  'cherry',
  'apricot',
  'tomato',
  'carrot',
  'potato',
  'onion',
  'garlic',
  'pepper',
  'lettuce',
  'broccoli',
  'spinach',
  'zucchini',
  'cucumber',
  'celery',
  'cauliflower',
  'asparagus',
  'mushroom',
  'pumpkin',
  'radish',
  'beetroot',
  'turnip',
  'parsnip',
  'elephant',
  'giraffe',
  'tiger',
  'lion',
  'cheetah',
  'leopard',
  'zebra',
  'rhino',
  'hippo',
  'buffalo',
  'kangaroo',
  'koala',
  'panda',
  'sloth',
  'chimpanzee',
  'gorilla',
  'orangutan',
  'lemur',
  'meerkat',
  'otter',
  'shark',
  'whale',
  'dolphin',
  'seal',
  'octopus',
  'jellyfish',
  'lobster',
  'crab',
  'shrimp',
  'starfish',
  'eagle',
  'sparrow',
  'parrot',
  'penguin',
  'ostrich',
  'flamingo',
  'peacock',
  'hummingbird',
  'owl',
  'falcon',
  'house',
  'apartment',
  'mansion',
  'cottage',
  'bungalow',
  'castle',
  'villa',
  'shack',
  'chalet',
  'palace',
  'bed',
  'chair',
  'table',
  'desk',
  'sofa',
  'couch',
  'cabinet',
  'wardrobe',
  'bookshelf',
  'dresser',
  'car',
  'bicycle',
  'motorcycle',
  'scooter',
  'truck',
  'bus',
  'train',
  'airplane',
  'helicopter',
  'boat',
  'submarine',
  'rocket',
  'spaceship',
  'hovercraft',
  'tram',
  'trolley',
  'taxi',
  'ferry',
  'yacht',
  'canoe',
  'violin',
  'guitar',
  'piano',
  'trumpet',
  'flute',
  'drums',
  'clarinet',
  'saxophone',
  'cello',
  'harp',
  'concert',
  'symphony',
  'melody',
  'harmony',
  'rhythm',
  'tempo',
  'note',
  'scale',
  'chord',
  'tune',
  'dog',
  'cat',
  'rabbit',
  'hamster',
  'goldfish',
  'parakeet',
  'ferret',
  'guinea',
  'chinchilla',
  'gerbil',
  'winter',
  'spring',
  'summer',
  'autumn',
  'snow',
  'rain',
  'hail',
  'sleet',
  'fog',
  'storm',
  'mountain',
  'river',
  'lake',
  'ocean',
  'forest',
  'desert',
  'valley',
  'canyon',
  'island',
  'waterfall',
  'kitchen',
  'bathroom',
  'bedroom',
  'livingroom',
  'garage',
  'basement',
  'attic',
  'hallway',
  'balcony',
  'patio',
  'science',
  'history',
  'math',
  'geography',
  'chemistry',
  'biology',
  'physics',
  'astronomy',
  'literature',
  'philosophy',
  'football',
  'basketball',
  'tennis',
  'golf',
  'soccer',
  'baseball',
  'hockey',
  'cricket',
  'rugby',
  'volleyball',
];

const randomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
const addLetters = (arr) => {
  const output = document.querySelector('#output');
  output.innerHTML = '';

  arr.forEach((el) => {
    const node = document.createElement('span');
    const textNode = document.createTextNode(el);
    node.appendChild(textNode);
    output.appendChild(node);
  });
};

const selectedWord = randomElement(hangmanWords);
console.log(selectedWord);
const letters = selectedWord.toUpperCase().split('');
console.log(letters);
let count = 0;
const revealed = new Array(letters.length).fill('_');
addLetters(revealed);
const gameImg = document.querySelector('img');

document.querySelectorAll('.key').forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const clickedLetter = e.target.innerText;
    if (!letters.includes(clickedLetter)) {
      count++;
      if (count > 10) {
        gameImg.src = './assets/images/hangman/lose.jpg';
        document.querySelector('section').classList.toggle('hidden');
        document.querySelector('#reset').classList.toggle('hidden');
        return;
      }
      gameImg.src = `./assets/images/hangman/h-${count}.jpg`;
    } else {
      const indices = letters
        .map((letter, i) => (clickedLetter === letter ? i : -1))
        .filter((i) => i !== -1);
      indices.forEach((index) => {
        revealed[index] = clickedLetter;
      });
      addLetters(revealed);
      if (revealed.every((letter) => /[A-Z]/.test(letter))) {
        gameImg.src = './assets/images/hangman/win.jpg';
        document.querySelector('section').classList.toggle('hidden');
        document.querySelector('#reset').classList.toggle('hidden');
      }
    }
    e.target.setAttribute('disabled', true);
  })
);

document.getElementById('reset').addEventListener('click', () => {
  window.location.reload();
});
