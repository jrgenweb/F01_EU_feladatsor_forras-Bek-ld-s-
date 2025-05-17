//feladat1
function euTagokSzama(array) {
  return array.length;
}
//feladat2
function orszagLekerdezeseEvAlapjan(ev, array) {
  return array.filter((orszag) => {
    let seged = orszag[1].split(".");

    if (seged[0] == ev) return orszag;
  });
}

//feladat3

function orszagLekerdezeseNevAlapjan(orszagNev, array) {
  return array.filter((orszag) => {
    if (orszag[0] === orszagNev) return orszag;
  });
}

//feladat4

function orszagLekerdezeseHonapAlapjan(honap, array) {
  return array.filter((orszag) => {
    let seged = orszag[1].split(".");
    if (seged[1] === honap) return orszag;
  });
}
//feladat5

function utolsoCsatlakozas(array) {
  let utolso = array.sort((a, b) => {
    return new Date(a[1]).getTime() - new Date(b[1]).getTime();
  });

  return utolso[utolso.length - 1];
}

//feladat6

function evenkentiCsatlakozas(array) {
  let statisztika = {};
  for (let i = 0; i < array.length; i++) {
    let ev = array[i][1].split(".")[0];
    if (statisztika[ev]) {
      statisztika[ev]++;
    } else {
      statisztika[ev] = 1;
    }
  }
  return statisztika;
}

/*

Ha selectel oldanám meg a szűréseket

*/
function evekLekerdezese(array) {
  let evek = new Set();
  for (let orszag of array) {
    let ev = orszag[1].split(".")[0];
    evek.add(ev);
  }
  return Array.from(evek);
}

function orszagnevekLekerdezes(array) {
  let orszagNevek = new Set();
  for (let orszag of array) {
    orszagNevek.add(orszag[0]);
  }
  return Array.from(orszagNevek);
}

const honapNevek = [
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Augusztus",
  "Szeptember",
  "Október",
  "November",
  "December",
];
function honapokLekerdezes(array) {
  let honapokObj = {};
  for (let orszag of array) {
    let honapSzovegFormatum = orszag[1].split(".")[1];
    let honap = Number(orszag[1].split(".")[1]) - 1;
    console.log(honapNevek[honap]);
    honapokObj[honapSzovegFormatum] = honapNevek[honap];
  }
}

export {
  euTagokSzama,
  orszagLekerdezeseEvAlapjan,
  orszagLekerdezeseHonapAlapjan,
  orszagLekerdezeseNevAlapjan,
  utolsoCsatlakozas,
  evenkentiCsatlakozas,
  honapokLekerdezes,
};
