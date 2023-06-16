// let nekretnine = { stan: 70000, kuca: 15000, plac: 30000 };
// let godine = 14;
// let mjeseci = godine * 12;
// let rata = nekretnine.stan / mjeseci;
// rata = rata.toFixed(2);

// console.log(mjeseci + "mjeseci");
// console.log(rata + "$.");
// console.log(`Mjesecna rata za stan iznosi ${rata} na ${godine} godina.`);

// let brend = document.getElementsByTagName("span");
// console.log(brend[0].innerText);

// imate niz koji ima 5 elemenata. vas zadatak je sledeci:
// da ako je poslednji element u nizu broj, uklonite poslednji element iz niza
// a ako nije broj, dodate na kraj niza jos 3 elementa.

// let array = ["nikola", "nino", "nedzad", "nenene", 1];

// if (typeof array[array.length - 1]) {
//   console.log("poslednji niz je broj");
//   array.pop();
//   array.pop();
// } else {
//   console.log("nije broj ");
//   array.shift();
//   array.shift();
// }
// console.log(array);

// var array = prompt("Unesi niz karaktera");

// if (typeof array[array.length - 1] === "number") {
//   console.log("Posljednji element je broj.");
//   array.pop();
//   array.pop();
// } else {
//   console.log("Posljednji element nije broj.");
//   array.push(1, 1, 1);
// }

// console.log(array);

// imate prompt, u njemu upisujete neku vrednost.
// ako je vrednost deljiva sa 2, taj input  ubacite na pocetak niza,
// ako nije deljiva sa 2, tu vrednost ubacite na kraj niza
// ispisite niz
let niz = [10, 15, 3, 7, "a", "B"];
let unos = prompt("Unesi neku vrednost.");
if (unos % 2 === 0) {
  niz.unshift(unos);
  console.log(niz);
} else {
  niz.push(unos);
  console.log(niz);
}
