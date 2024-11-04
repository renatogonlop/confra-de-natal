
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let ano = getElementById('anoDate')

ano.innerHTML = `Confraternização de Natal<br>${anoAtual}`

// Ao clicar no botão
function envia() {

    let entradaNome = document.getElementById('entradaNome').value;
    let radioSim = document.getElementById('radioSim');
    let radioNao = document.getElementById('radioNao');
    let radio1 = document.querySelector('input[name="radio1"]:checked');


    if (entradaNome !== "") {

        if (radio1 !== null) {

            if (radio1.value === "SIM") {

                presente()
                reset2()

            } else {
                faltante()
                reset()
                return alert("Escolha Enviada!")
            }

        } else {
            return alert("Selecione uma resposta!")
        }

    } else {
        return alert("Insira seu Nome")
    }



    function faltante(validacao) {
        let dataFalt = {
            NOME: entradaNome,
            COMPARECE: radio1.value,
        };
        firebase.database().ref().child('Faltantes').push(dataFalt);
        // console.log(dataFalt)
    }



    function presente(validacao) {
        let dataPres = {
            NOME: entradaNome,
            COMPARECE: radio1.value,
        };
        firebase.database().ref().child('Presentes').push(dataPres);
        // console.log(dataPres)
    }



    function reset() {
        document.getElementById('entradaNome').value = '';
        radioSim.checked = false;
        radioNao.checked = false;
    }

    function reset2() {
        document.getElementById('entradaNome').value = '';
        radioSim.checked = false;
        radioNao.checked = false;
        geralNone.style.display = "none";
        topNone.style.display = "none";
        byeBye.style.display = "block";
    }



};



//Abre/fecha blocos
function yes() {
    let entradaNome = document.getElementById('entradaNome').value;
    let radioSim = document.getElementById('radioSim');

    if (entradaNome === "") {
        radioSim.checked = false;
        return alert("Insira seu Nome");
    } else {

    }
}

function no() {
    let entradaNome = document.getElementById('entradaNome').value;
    let radioNao = document.getElementById('radioNao');

    if (entradaNome === "") {
        radioNao.checked = false;
        return alert("Insira seu Nome");
    } else {

    }
}