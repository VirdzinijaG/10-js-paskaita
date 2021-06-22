"use strict"

// Susikurti objektų masyvą:
// * Masyve 100 objekto elementų.
// * Objekto vidiniai kintamieji: id, vardas.
// * Vardas reikšmė = vardas1,vardas2 ir t.t.  
// * Id reikšmė = 1, 2 ir t.t.


let masyvas = []; // tuscias masyvas

for (let i = 0; i < 100; i++) { // intervalas 
    let objektas = { // sukuriamas objektas, kuris bus masyve
        id: i + 1, // pridedama 1, kad rasytu nuo 1 
        vardas: "vardas" + (i + 1) // pridedama 1, kad rasytu nuo 1
    }
    masyvas[i] = objektas; // vietoj i turim ideti objekta
    // vietoj i nurodomas objektasnurodomas objektas, kurio duomenys atsispausdins masyve
    //[i] taip uzpildomas masyvas
}
console.log(masyvas);

// Papildomai: 
//Pagal sukurtą obejktų masyvą, sukurti tiek pat div elementų, kuriuose išvedamas id ir vardas. Kas antras div - mėlynas.\

let masyvas1 = [];

for (let i = 0; i < 100; i++) {
    let objektas = {
        id: i + 1,
        vardas: "vardas" + (i + 1)
    }
    masyvas1[i] = objektas; // vietoj i turim ideti objekta

    let div = document.createElement("div"); // kuria div elementus
    div.innerHTML = objektas.id + " " + objektas.vardas; // ikelia objekto duomenys i div
    document.querySelector(".container").append(div); // prideda div elementus i container diva
}
console.log(masyvas1);


// Susikurti objektą "Kvadratas".
// Objektas turi priimti du kintamuosius: a ir b kraštines.
// Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą, įstrižainės ilgį.
// Informaciją išvesti į <p> žymę.

 

// Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais. Pagal įvestas reikšmes į input, HTML nubraižomas kvadrato objektas.      

document.getElementById("patvirtinti").addEventListener("click", function(){
let a, b;
a = parseFloat(document.getElementById("a-krastine").value);
b = parseFloat(document.getElementById("b-krastine").value)
});

let kvadratas = {
    a: 300,
    b: 400,

    plotasPerimetras: function() { // metodas - funkcija objekte
        let plotas;
        let perimetras;

        plotas = this.a * this.b;
        perimetras = 2 * this.a + 2 * this.b;
        return [plotas, perimetras] // grazina masyva, kuris turi plota ir perimetra
    },
    istrizaine: function() {
        let ilgis;
        ilgis = Math.sqrt(this.a * this.a + this.b * this.b);
        return ilgis;
    },
    nubrezk: function() { // pridetas stilius per metoda, metodas naudoja parametrams duotas reiksmes obkekte
        let elementas = document.querySelector(".keturkampis");
        elementas.style.width = this.a + "px";
        elementas.style.height = this.b + "px";
    },
    isvesk: function(){
     document.getElementById("Kvadrato-perimetras").innerText = "Kvadrato perimetras " + kvadratas.plotasPerimetras()[1]; // masyvo antras elementas // atsakymas isvedamas i html failo elementa su priskirtu id
     document.getElementById("Kvadrato-plotas").innerText = "Kvadrato plotas " + kvadratas.plotasPerimetras()[0];
     document.getElementById("Kvadrato-istrizaine").innerText = "Kvadrato istrizaine " + kvadratas.plotasPerimetras()[0]

    }
};
// console.log(kvadratas.plotasPerimetras());
// console.log(kvadratas.istrizaine());
kvadratas.isvesk();
kvadratas.nubrezk();

// document.getElementById("Kvadrato-perimetras").innerText = "Kvadrato perimetras " + kvadratas.plotasPerimetras()[1]; // masyvo antras elementas // atsakymas isvedamas i html failo elementa su priskirtu id
// document.getElementById("Kvadrato-plotas").innerText = "Kvadrato plotas " + kvadratas.plotasPerimetras()[0];
// document.getElementById("Kvadrato-istrizaine").innerText = "Kvadrato istrizaine " + kvadratas.plotasPerimetras()[0];


// document.querySelector(".keturkampis").style.width = "400px"; // pridetas stilius html failo divui kurio klase keturkampis
// document.querySelector(".keturkampis").style.height = "400px"; // pridetas stilius html failo divui kurio klase keturkampis
// Taip galima uzdeti stiliu per javascrip divui html pagal klase 
// uzdetas width ir height, color palikta html
// Stilius, kuris nesikeicia geriau palikti html, o stilius kuris keiciasi galima aprasyti per javascript

/*galima aprasyri ir taip 
let elementas = document.querySelector(".keturkampis");
elementas.style.width = "400px";
elementas.style.height = "400px";
 */
