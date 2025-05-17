import {
  euTagokSzama,
  orszagLekerdezeseEvAlapjan,
  orszagLekerdezeseHonapAlapjan,
  orszagLekerdezeseNevAlapjan,
  utolsoCsatlakozas,
  evenkentiCsatlakozas,
  honapokLekerdezes,
} from "./functions.js";
const adatok = `Ausztria;1995.01.01
Belgium;1958.01.01
Bulgária;2007.01.01
Ciprus;2004.05.01
Csehország;2004.05.01
Dánia;1973.01.01
Egyesült Királyság;1973.01.01
Észtország;2004.05.01
Finnország;1995.01.01
Franciaország;1958.01.01
Görögország;1981.01.01
Hollandia;1958.01.01
Horvátország;2013.07.01
Írország;1973.01.01
Lengyelország;2004.05.01
Lettország;2004.05.01
Litvánia;2004.05.01
Luxemburg;1958.01.01
Magyarország;2004.05.01
Málta;2004.05.01
Németország;1958.01.01
Olaszország;1958.01.01
Portugália;1986.01.01
Románia;2007.01.01
Spanyolország;1986.01.01
Svédország;1995.01.01
Szlovákia;2004.05.01
Szlovénia;2004.05.01`;

let euAdatok = [];

function objektumLetrehozasa() {
  euAdatok = adatok.split("\n");
  for (let i = 0; i < euAdatok.length; i++) {
    euAdatok[i] = euAdatok[i].split(";");
  }
}
objektumLetrehozasa();
console.log(euAdatok);

function feladat1Megjelenitese() {
  document.querySelector(".feladat1 .eredmeny").innerHTML = `${euTagokSzama(
    euAdatok
  )} tagja van az Eunak`;
}
feladat1Megjelenitese();

//feladat2
const yearInputEl = document.querySelector(".feladat2 input[type=number]");

yearInputEl.onkeydown = feladat2Megjelenitese;
yearInputEl.onchange = feladat2Megjelenitese;

function feladat2Megjelenitese() {
  let orszagok = orszagLekerdezeseEvAlapjan(yearInputEl.value, euAdatok);

  let eredmeynEl = document.querySelector(".feladat2 .eredmeny");
  eredmeynEl.innerHTML = "";
  for (let orszag of orszagok) {
    eredmeynEl.innerHTML += `<div> <span>${orszag[0]} </span> <span>${orszag[1]}</span></div>`;
  }
}

//feladat3

const orszagNevInputEl = document.querySelector(".feladat3 input[type=text]");

orszagNevInputEl.onkeydown = feladat3Megjelenitese;
orszagNevInputEl.onchange = feladat3Megjelenitese;

function feladat3Megjelenitese() {
  let orszagok = orszagLekerdezeseNevAlapjan(orszagNevInputEl.value, euAdatok);

  let eredmeynEl = document.querySelector(".feladat3 .eredmeny");
  eredmeynEl.innerHTML = "";
  for (let orszag of orszagok) {
    eredmeynEl.innerHTML += `<div> <span>${orszag[0]} </span> <span>${orszag[1]}</span></div>`;
  }
}

//feladat4

const honapInputEl = document.querySelector(".feladat4 input[type=text]");

honapInputEl.onkeydown = feladat4Megjelenitese;
honapInputEl.onchange = feladat4Megjelenitese;

function feladat4Megjelenitese() {
  let orszagok = orszagLekerdezeseHonapAlapjan(honapInputEl.value, euAdatok);

  let eredmeynEl = document.querySelector(".feladat4 .eredmeny");
  eredmeynEl.innerHTML = "";
  for (let orszag of orszagok) {
    eredmeynEl.innerHTML += `<div> <span>${orszag[0]} </span> <span>${orszag[1]}</span></div>`;
  }
}

//feladat5

function feladat5Megjelenitese() {
  let utolsoCsatlakozottOrszag = utolsoCsatlakozas(euAdatok);

  let eredmeynEl = document.querySelector(".feladat5 .eredmeny");
  eredmeynEl.innerHTML = `${utolsoCsatlakozottOrszag} csatlakozott utoljára az Európai unióhoz.`;
}

feladat5Megjelenitese();

//feladat6

function feladat6Megjelenitese() {
  let eredmeynEl = document.querySelector(".feladat6 .eredmeny");

  let statisztika = evenkentiCsatlakozas(euAdatok);

  let statisztikaTomb = Array.from(Object.entries(statisztika));

  console.log(statisztikaTomb);

  eredmeynEl.innerHTML = `<h2>Évenkénti statisztika</h2>`;
  for (let element of statisztikaTomb) {
    eredmeynEl.innerHTML += `<div><span>${element[0]}</span><span>${element[1]}</span></div>`;
  }
}

feladat6Megjelenitese();

honapokLekerdezes(euAdatok);
