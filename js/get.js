let dbPresentes = firebaseRef = firebase.database().ref().child("Presentes");
let dbFaltantes = firebaseRef = firebase.database().ref().child("Faltantes");

let lista1 = document.getElementById("div_lista1");
let lista2 = document.getElementById("div_lista2");
let divFaltantes = document.getElementById("divFaltantes");
let divPresentes = document.getElementById("divPresentes");

let presente = "";
let faltantes = "";


dbPresentes.on('child_added', function (snapshot) {
    let adicionado = snapshot.val();
    let nome = adicionado.NOME;
    let papsa = adicionado.PAPSA;
    let show = adicionado.SHOW_de_TALENTOS;
    let talento = adicionado.TALENTO;

    if (papsa === undefined) {
        papsa = "";
    };

    presente = "<tr><td>" + nome + "</td></tr>" + presente;
    lista1.innerHTML = presente;
})


dbFaltantes.on('child_added', function (snapshot) {
    let adicionado = snapshot.val();
    let nome = adicionado.NOME;

    faltantes = "<tr><td>" + nome + "</td></tr>" + faltantes;
    lista2.innerHTML = faltantes;
})


function vermelho() {
    divPresentes.style.display = "none";
    divFaltantes.style.display = "block";
}

function verde() {
    divPresentes.style.display = "block";
    divFaltantes.style.display = "none";
}