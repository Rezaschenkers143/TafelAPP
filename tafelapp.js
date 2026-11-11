let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");

let tafelinputoefenObj = document.getElementById("inputTafelOefen");
let opgaveoutputObj = document.getElementById("outputOpgave");
let feedbackoutputObj = document.getElementById("outputFeedback");
let gekozenTafel = 0;
let huidigeTeller = 0;

function showTafel() {
    let tafel = tafelinputObj.value
    //let teller = 1;
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++ ) {
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    // while (teller < 11) {
    //     uitkomst = teller * tafel;
    //     output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    //     teller++;
    // }
    tafeloutputObj.innerHTML = output;
}
function showOpgave(){
    gekozenTafel = Number(tafelinputoefenObj.value);
    huidigeTeller = Math.floor(Math.random() * 10) + 1;
    toonOpgave();
    feedbackoutputObj.innerHTML = "";
}

function toonOpgave() {
    opgaveoutputObj.innerHTML = huidigeTeller + " x " + gekozenTafel + " = " +
        "<form id='antwoordForm'>" +
        "<input type='number' id='inputAntwoord' class='form-control' required>" +
        "<button type='submit' class='btn btn-primary mt-2'>Controleer</button>" +
        "</form>";
    document.getElementById("antwoordForm").addEventListener("submit", checkAntwoord);
}

function checkAntwoord(event) {
    event.preventDefault();

    let antwoord = Number(document.getElementById("inputAntwoord").value);
    let juisteAntwoord = huidigeTeller * gekozenTafel;

    if (antwoord === juisteAntwoord) {
        feedbackoutputObj.innerHTML = "Goed gedaan! Dat is goed.";
        let vorigeTeller = huidigeTeller;
        do {
            huidigeTeller = Math.floor(Math.random() * 10) + 1;
        } while (huidigeTeller === vorigeTeller);
        toonOpgave();
    } else {
        feedbackoutputObj.innerHTML = "Helaas, dat is fout. Probeer het nog een keer.";
    }
}
