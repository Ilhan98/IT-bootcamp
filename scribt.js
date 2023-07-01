const moovieCollection = [
  {
    nazivFilma: "Kad Jaganjci utihnu",
    godinaPustanja: 2006,
    budzet: 150000,
    trajanje: 100,
  },
  {
    nazivFilma: "Lajanje na zvezde",
    godinaPustanja: 2009,
    budzet: 50000,
    trajanje: 165,
  },
  {
    nazivFilma: "Transformersi",
    godinaPustanja: 2010,
    budzet: 12000,
    trajanje: 120,
  },
  {
    nazivFilma: "Mau Mau",
    godinaPustanja: 2022,
    budzet: 1500009,
    trajanje: 160,
  },
  {
    nazivFilma: "Varljivo leto",
    godinaPustanja: 1989,
    budzet: 1500,
    trajanje: 120,
  },
  {
    nazivFilma: "Gorila",
    godinaPustanja: 2019,
    budzet: 150200,
    trajanje: 110,
  },
  {
    nazivFilma: "Samuraj",
    godinaPustanja: 2012,
    budzet: 124500,
    trajanje: 120,
  },
  {
    nazivFilma: "Transporter",
    godinaPustanja: 2015,
    budzet: 190000,
    trajanje: 115,
  },
  {
    nazivFilma: "Planeta majmuna",
    godinaPustanja: 2015,
    budzet: 120000,
    trajanje: 110,
  },
  {
    nazivFilma: "Zmije u avionu",
    godinaPustanja: 2023,
    budzet: 19000,
    trajanje: 90,
  },
];

let suske = moovieCollection[0].budzet;

for (let i = 0; i < moovieCollection.length; i++) {
  if (suske < moovieCollection[i].budzet) {
    suske = moovieCollection[i];
  }
}
console.log(suske);

// let a = 0;
// let b = 1;

// console.log(a);
// console.log(b);

// for (let i = 2; i < 20; i++) {
//   let c = a + b;

//   a = b;
//   b = c;
//   if (c > 20) {
//     break;
//   }

//   console.log(c);
// }

// const word = "madam";
// let obrniOkreni = word.split("").reverse().join("");
// if (word === obrniOkreni) {
//   console.log("jes");
// } else {
//   console.log("Nije polindrom");
// }
