// botão para gerar cores aleatórias para a paleta de cores

const button = document.getElementById('button-random-color');

function getColorArray() {
  const colors = document.querySelectorAll('.color');
  const colorArray = [];
  console.log(colors);
  colors.forEach((element) => {
    colorArray.push(element.classList[1]);
  });
  return colorArray;
}

const classes = [
  'Violet',
  'MediumOrchid',
  'MediumPurple',
  'BlueViolet',
  'SlateBlue',
  'DarkSlateBlue',
  'Aqua',
  'DarkTurquoise',
  'DeepSkyBlue',
  'DodgerBlue',
  'MediumBlue',
  'MidnightBlue',
  'RoyalBlue',
];

const coresAleatorias = () => {
  const randomIndex = Math.floor(Math.random() * classes.length);
  const randomColor = classes[randomIndex];
  console.log(randomColor);
  return randomColor;
};

coresAleatorias();

const div = document.getElementsByClassName('color');

const otherColours = () => {
  const primeira = coresAleatorias();
  const segunda = coresAleatorias();
  const terceira = coresAleatorias();
  div[1].className = `color ${primeira}`;
  div[2].className = `color ${segunda}`;
  div[3].className = `color ${terceira}`;
};
otherColours();

const colors = getColorArray();
console.log(colors);
button.addEventListener('click', () => otherColours());

// Adicione à página um quadro contendo 25 pixels

const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 5; index += 1) {
  const linha = document.createElement('div');
  linha.className = 'linha';

  for (let i = 0; i < 5; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    linha.appendChild(pixel);
  }
  pixelBoard.appendChild(linha);
}

// Crie uma função para selecionar uma cor na paleta de cores
const selectColor = (event) => {
  console.log(event.target);
  const selected = event.target;
  const color = selected.className;
  console.log(color);
  const divs = document.getElementsByClassName('color');
  divs[0].classList.remove('selected');
  divs[1].classList.remove('selected');
  divs[2].classList.remove('selected');
  divs[3].classList.remove('selected');
  selected.className = `${color} selected`;
};
div[0].addEventListener('click', (event) => selectColor(event));
div[1].addEventListener('click', (event) => selectColor(event));
div[2].addEventListener('click', (event) => selectColor(event));
div[3].addEventListener('click', (event) => selectColor(event));
