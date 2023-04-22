// botão para gerar cores aleatórias para a paleta de cores

const button = document.getElementById('button-random-color');

function getColorArray() {
  const colors = document.querySelectorAll('.color');
  const colorArray = [];
  colors.forEach((element) => {
    colorArray.push(element.classList[1]);
  });
  return colorArray;
}

const classes = [
  'violet',
  'mediumOrchid',
  'mediumPurple',
  'blueViolet',
  'slateBlue',
  'darkSlateBlue',
  'aqua',
  'darkTurquoise',
  'deepSkyBlue',
  'dodgerBlue',
  'mediumBlue',
  'midnightBlue',
  'royalBlue',
];

// Cores aleatorias

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
  localStorage.setItem('colorPalette', JSON.stringify(['black', primeira, segunda, terceira]));
  div[1].className = `color ${primeira}`;
  div[2].className = `color ${segunda}`;
  div[3].className = `color ${terceira}`;
};

// Evento de click

const colors = getColorArray();
console.log(colors);
button.addEventListener('click', otherColours);

// LocalStorage

const verifica = () => {
  if (localStorage.length !== 0) {
    const storage = JSON.parse(localStorage.getItem('colorPalette'));
    const colorArray = document.querySelectorAll('.color');
    console.log(storage);
    for (let i = 0; i < colorArray.length; i += 1) {
      colorArray[i].className = `color ${storage[i]}`;
    }
  } else {
    otherColours();
  }
};
verifica();

// Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores

const colorPixel = (event) => {
  let selected = '';
  const cor = document.getElementsByClassName('color');
  for (let i = 0; i < cor.length; i += 1) {
    if (cor[i].className.includes('selected')) {
      selected = cor[i].className;
    }
  }
  const splitClasse = selected.split(' ');
  const segundaPalavra = splitClasse[1];
  const pixel = event.target;
  console.log(pixel);
  pixel.className = `pixel ${segundaPalavra}`;
  console.log(segundaPalavra);
};

// Adicione à página um quadro contendo 25 pixels

const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 5; index += 1) {
  const linha = document.createElement('div');
  linha.className = 'linha';

  for (let i = 0; i < 5; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel white';
    linha.appendChild(pixel);
    pixel.addEventListener('click', (event) => colorPixel(event));
  }
  pixelBoard.appendChild(linha);
}

// Crie uma função para selecionar uma cor na paleta de cores

const selectColor = (event) => {
  const divs = document.getElementsByClassName('color');
  divs[0].classList.remove('selected');
  divs[1].classList.remove('selected');
  divs[2].classList.remove('selected');
  divs[3].classList.remove('selected');

  console.log(event.target);
  const selected = event.target;
  const color = selected.className;
  console.log(color);

  selected.className = `${color} selected`;
};
div[0].addEventListener('click', (event) => selectColor(event));
div[1].addEventListener('click', (event) => selectColor(event));
div[2].addEventListener('click', (event) => selectColor(event));
div[3].addEventListener('click', (event) => selectColor(event));

// Crie um botão que retorne a cor do quadro para a cor inicial

const btn = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');

function resetPixels() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].className = 'pixel white';
  }
}

btn.addEventListener('click', resetPixels);
