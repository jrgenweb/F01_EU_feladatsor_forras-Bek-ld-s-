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

Ha selectel oldanám meg
function evekLekérdezése(array) {}

function orszagnevekLekerdezes(array) {}

let honapNevek = [
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
  honapokObj = {};

  for (let orszag of array) {
    let honap = Number(orszag[1].split(".")[1]);

    if (honapokObj[honap]) {
      honapokObj[honap] = honapNevek[honap];
    }
  }
  console.log(honapokObj);
}
*/
export {
  euTagokSzama,
  orszagLekerdezeseEvAlapjan,
  orszagLekerdezeseHonapAlapjan,
  orszagLekerdezeseNevAlapjan,
  utolsoCsatlakozas,
  evenkentiCsatlakozas,
  //honapokLekerdezes,
};
