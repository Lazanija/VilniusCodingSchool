/* Uzd 1 (teorijos uzd) */
let a = 1;
console.log("Kintamojo a reiksme: " + a);
a++;
console.log("Kintamojo a reiksme: " + a);

/* Uzd 2 (teorijos uzd) */
let b = 'Dominykas Puškorius';
let c = "Mano Vardas";
console.log(c + " " + b);

/* JavaScript 1 dalis */

/* Uzd 1 */
let year = 1998;
let month = 8;
let day = 21;

const LastDigitYear = year % 10;
const LastDigitMonth = month % 10;
const LastDigitDay = day % 10;

console.log("Gimimo datos paskutiniai sudeti skaiciai: ", LastDigitYear + LastDigitMonth + LastDigitDay);
/* Uzd 1 */

/* Uzd 2 */
var r = 15;
function plotas(r) {
    var plot = (r * r * Math.PI);
    return plot;
}

function ilgis(r) {
    var ilg = (2 * r * Math.PI);
    return ilg;
}

console.log("Plotas: ",plotas(r), "Ilgis: ", ilgis(r));
/* Uzd 2 */

/* JavaScript 1 dalis */
/* JavaScript 2 dalis */

/* Uzd 1 */
let vardas = "Tomas";
let pavarde = "Tomauskas";
let kursas = 4;
let kur_mokosi = "KTU";
let pazymiai = [7, 4, 5];
/* Uzd 1 */

/* Uzd 2 */
let answer = "'" + vardas + " " + pavarde + " mokosi " + kur_mokosi + ", " + kursas + " kurse, jo pažymiai: " + pazymiai + ".'";
document.getElementById("ats").innerHTML = answer;
/* Uzd 2 */

/* Uzd 3 */
let type_answer =
    "vardas yra " + typeof vardas + "<br>" +
    "pavarde yra " + typeof pavarde + "<br>" +
    "kursas yra " + typeof kursas + "<br>" +
    "kur_mokosi yra " + typeof kur_mokosi + "<br>" +
    "pazymiai yra " + typeof pazymiai;
document.getElementById("type").innerHTML = type_answer;
/* Uzd 3 */

/* Uzd 4 */
const studentas = {
    vardas1: "Tomas",
    pavarde1: "Tomauskas",
    kursas1: 4,
    kur_mokosi1: "KTU",
    pazymiai1: [7, 4, 5]
};
/* Uzd 4 */

/* JavaScript 2 dalis */

