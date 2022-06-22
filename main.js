//MENU DASHBOARD
let toggle = document.querySelector(".toggle")
let menuDashboard = document.querySelector(".menu-dashboard")
let iconoMenu = toggle.querySelector("i")
let enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})



//BORRAR Y AGREGAR AGRUPADORES Y SUBGRUPOS
let btnsBorrar = document.querySelectorAll('.btnCloseAgrupadores');


for ( btnsBorrar of btnsBorrar) {
    let i = btnsBorrar.parentElement;
    btnsBorrar.addEventListener('click',()=>{
        i.style.display = "none";
    })
}

function resetElement() {
    document.getElementById("agrupador1").style.display = "flex";
    document.getElementById("agrupador2").style.display = "flex";
    document.getElementById("agrupador3").style.display = "flex";
    document.getElementById("agrupador4").style.display = "flex";
    document.getElementById("agrupador5").style.display = "flex";
}


let subgrupos = document.querySelectorAll('.subgrupo');
let btnsBorrar2 = document.querySelectorAll('.btnCloseSubgrupos');

for ( btnsBorrar of btnsBorrar2) {
    let i = btnsBorrar.parentElement;
    btnsBorrar.addEventListener('click',()=>{
        i.style.display = "none";
    })
}

function resetElement2() {
    document.getElementById("subgrupo1").style.display = "flex";
    document.getElementById("subgrupo2").style.display = "flex";
    document.getElementById("subgrupo3").style.display = "flex";
    document.getElementById("subgrupo4").style.display = "flex";
    document.getElementById("subgrupo5").style.display = "flex";
    document.getElementById("subgrupo6").style.display = "flex";
    document.getElementById("subgrupo7").style.display = "flex";
    document.getElementById("subgrupo8").style.display = "flex";
    document.getElementById("subgrupo9").style.display = "flex";
    document.getElementById("subgrupo10").style.display = "flex";
    document.getElementById("subgrupo11").style.display = "flex";
    document.getElementById("subgrupo12").style.display = "flex";
    document.getElementById("subgrupo13").style.display = "flex";
    document.getElementById("subgrupo14").style.display = "flex";
    document.getElementById("subgrupo15").style.display = "flex";
}
 

/* VARIABLES DE AGRUPADORES Y SUBGRUPOS */
const agrupador1 = {
    subgrupo1Agrupador1:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo2Agrupador1:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo3Agrupador1:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    }
};

const agrupador2 = {
    subgrupo1Agrupador2:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo2Agrupador2:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo3Agrupador2:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    }
};

const agrupador3 = {
    subgrupo1Agrupador3:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo2Agrupador3:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo3Agrupador3:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    }
};

const agrupador4 = {
    subgrupo1Agrupador4:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo2Agrupador4:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo3Agrupador4:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    }
};

const agrupador5 = {
    subgrupo1Agrupador5:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo2Agrupador5:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    },
    subgrupo3Agrupador5:{
        informados: 1,
        whatsapp: 2,
        mails: 3,
        sms: 4,
        monto: 5
    }
};
//console.log(agrupador1)
// SUBGRUPOS: AGRUPADOR 1
let agrupador1Subgrupo1 = agrupador1['subgrupo1Agrupador1'];
let agrupador1Subgrupo2 = agrupador1['subgrupo2Agrupador1'];
let agrupador1Subgrupo3 = agrupador1['subgrupo3Agrupador1'];
// SUBGRUPOS: AGRUPADOR 2
let agrupador2Subgrupo1 = agrupador2['subgrupo1Agrupador2'];
let agrupador2Subgrupo2 = agrupador2['subgrupo2Agrupador2'];
let agrupador2Subgrupo3 = agrupador2['subgrupo3Agrupador2'];
// SUBGRUPOS: AGRUPADOR 3
let agrupador3Subgrupo1 = agrupador3['subgrupo1Agrupador3'];
let agrupador3Subgrupo2 = agrupador3['subgrupo2Agrupador3'];
let agrupador3Subgrupo3 = agrupador3['subgrupo3Agrupador3'];
// SUBGRUPOS: AGRUPADOR 4
let agrupador4Subgrupo1 = agrupador4['subgrupo1Agrupador4'];
let agrupador4Subgrupo2 = agrupador4['subgrupo2Agrupador4'];
let agrupador4Subgrupo3 = agrupador4['subgrupo3Agrupador4'];
// SUBGRUPOS: AGRUPADOR 5
let agrupador5Subgrupo1 = agrupador5['subgrupo1Agrupador5'];
let agrupador5Subgrupo2 = agrupador5['subgrupo2Agrupador5'];
let agrupador5Subgrupo3 = agrupador5['subgrupo3Agrupador5'];


/* VALORES TOTALES DE CADA DATO */
let informadosTotalesAgrupador1 = agrupador1Subgrupo1.informados + agrupador1Subgrupo2.informados + agrupador1Subgrupo3.informados;
let whatsappTotalesAgrupador1 = agrupador1Subgrupo1.whatsapp + agrupador1Subgrupo2.whatsapp + agrupador1Subgrupo3.whatsapp;
let mailsTotalesAgrupador1 = agrupador1Subgrupo1.mails + agrupador1Subgrupo2.mails + agrupador1Subgrupo3.mails;
let smsTotalesAgrupador1 = agrupador1Subgrupo1.sms + agrupador1Subgrupo2.sms + agrupador1Subgrupo3.sms;
let montoTotalesAgrupador1 = agrupador1Subgrupo1.monto + agrupador1Subgrupo2.monto + agrupador1Subgrupo3.monto;

let informadosTotalesAgrupador2 = agrupador2Subgrupo1.informados + agrupador2Subgrupo2.informados + agrupador2Subgrupo3.informados;
let whatsappTotalesAgrupador2 = agrupador2Subgrupo1.whatsapp + agrupador2Subgrupo2.whatsapp + agrupador2Subgrupo3.whatsapp;
let mailsTotalesAgrupador2 = agrupador2Subgrupo1.mails + agrupador2Subgrupo2.mails  + agrupador2Subgrupo3.mails;
let smsTotalesAgrupador2 = agrupador2Subgrupo1.sms + agrupador2Subgrupo2.sms + agrupador2Subgrupo3.sms;
let montoTotalesAgrupador2 = agrupador2Subgrupo1.monto + agrupador2Subgrupo2.monto + agrupador2Subgrupo3.monto;

let informadosTotalesAgrupador3 = agrupador3Subgrupo1.informados + agrupador3Subgrupo2.informados + agrupador3Subgrupo3.informados;
let whatsappTotalesAgrupador3 = agrupador3Subgrupo1.whatsapp + agrupador3Subgrupo2.whatsapp + agrupador3Subgrupo3.whatsapp;
let mailsTotalesAgrupador3 = agrupador3Subgrupo1.mails + agrupador3Subgrupo2.mails  + agrupador3Subgrupo3.mails;
let smsTotalesAgrupador3 = agrupador3Subgrupo1.sms + agrupador3Subgrupo2.sms + agrupador3Subgrupo3.sms;
let montoTotalesAgrupador3 = agrupador3Subgrupo1.monto + agrupador3Subgrupo2.monto + agrupador3Subgrupo3.monto;

let informadosTotalesAgrupador4 = agrupador4Subgrupo1.informados + agrupador4Subgrupo2.informados + agrupador4Subgrupo3.informados;
let whatsappTotalesAgrupador4 = agrupador4Subgrupo1.whatsapp + agrupador4Subgrupo2.whatsapp + agrupador4Subgrupo3.whatsapp;
let mailsTotalesAgrupador4 = agrupador4Subgrupo1.mails + agrupador4Subgrupo2.mails  + agrupador4Subgrupo3.mails;
let smsTotalesAgrupador4 = agrupador4Subgrupo1.sms + agrupador4Subgrupo2.sms + agrupador4Subgrupo3.sms;
let montoTotalesAgrupador4 = agrupador4Subgrupo1.monto + agrupador4Subgrupo2.monto + agrupador4Subgrupo3.monto;

let informadosTotalesAgrupador5 = agrupador5Subgrupo1.informados + agrupador5Subgrupo2.informados + agrupador5Subgrupo3.informados;
let whatsappTotalesAgrupador5 = agrupador5Subgrupo1.whatsapp + agrupador5Subgrupo2.whatsapp + agrupador5Subgrupo3.whatsapp;
let mailsTotalesAgrupador5 = agrupador5Subgrupo1.mails + agrupador5Subgrupo2.mails  + agrupador5Subgrupo3.mails;
let smsTotalesAgrupador5 = agrupador5Subgrupo1.sms + agrupador5Subgrupo2.sms + agrupador5Subgrupo3.sms;
let montoTotalesAgrupador5 = agrupador5Subgrupo1.monto + agrupador5Subgrupo2.monto + agrupador5Subgrupo3.monto;

/* CUADRICULAS */
let cuadriculaInformados = document.querySelector('#informados');
let cuadriculaWhatsapp = document.querySelector('#whatsapp');
let cuadriculaMails = document.querySelector('#mails');
let cuadriculaSms = document.querySelector('#sms');
let cuadriculaMonto = document.querySelector('#monto');

/* VALORES TOTALES DE DATOS E INSERTADOS EN LA PAGINA */
let cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

let cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

let cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
cuadriculaMails.innerHTML = cuadriculaMailsValores;

let cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
cuadriculaSms.innerHTML = cuadriculaSmsValores;

let cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
cuadriculaMonto.innerHTML = cuadriculaMontoValores;

/* AGRUPADORES EN EL MENU */
const agregarAgrupadores = document.getElementById('agregarAgrupadores');
const agrupador1menu = document.getElementById('agrupador1');

const agrupador2menu = document.getElementById('agrupador2');

const agrupador3menu = document.getElementById('agrupador3');

const agrupador4menu = document.getElementById('agrupador4');

const agrupador5menu = document.getElementById('agrupador5');


/* EVENTOS PARA AGREGAR Y SACAR LOS VALORES TOTALES DE LOS AGRUPADORES */
agregarAgrupadores.addEventListener('click', agregarTodosAgrupadores)
agrupador1menu.addEventListener('click', sacarValoresTotalesAgrupadores1)
agrupador2menu.addEventListener('click', sacarValoresTotalesAgrupadores2)
agrupador3menu.addEventListener('click', sacarValoresTotalesAgrupadores3)
agrupador4menu.addEventListener('click', sacarValoresTotalesAgrupadores4)
agrupador5menu.addEventListener('click', sacarValoresTotalesAgrupadores5)

function agregarTodosAgrupadores(){

    cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
    cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

    cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
    cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

    cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
    cuadriculaMails.innerHTML = cuadriculaMailsValores;

    cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
    cuadriculaSms.innerHTML = cuadriculaSmsValores;

    cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
    cuadriculaMonto.innerHTML = cuadriculaMontoValores;

    informadosSubgrupo1Agrupador1 = agrupador1Subgrupo1.informados;
    informadosSubgrupo2Agrupador1 = agrupador1Subgrupo2.informados;
    informadosSubgrupo3Agrupador1 = agrupador1Subgrupo3.informados;
    whatsappSubgrupo1Agrupador1 = agrupador1Subgrupo1.whatsapp;
    whatsappSubgrupo2Agrupador1 = agrupador1Subgrupo2.whatsapp;
    whatsappSubgrupo3Agrupador1 = agrupador1Subgrupo3.whatsapp;
    mailsSubgrupo1Agrupador1 = agrupador1Subgrupo1.mails;
    mailsSubgrupo2Agrupador1 = agrupador1Subgrupo2.mails;
    mailsSubgrupo3Agrupador1 = agrupador1Subgrupo3.mails;
    smsSubgrupo1Agrupador1 = agrupador1Subgrupo1.sms;
    smsSubgrupo2Agrupador1 = agrupador1Subgrupo2.sms;
    smsSubgrupo3Agrupador1 = agrupador1Subgrupo3.sms;
    montoSubgrupo1Agrupador1 = agrupador1Subgrupo1.monto;
    montoSubgrupo2Agrupador1 = agrupador1Subgrupo2.monto;
    montoSubgrupo3Agrupador1 = agrupador1Subgrupo3.monto;

    informadosSubgrupo1Agrupador2 = agrupador2Subgrupo1.informados;
    informadosSubgrupo2Agrupador2 = agrupador2Subgrupo2.informados;
    informadosSubgrupo3Agrupador2 = agrupador2Subgrupo3.informados;
    whatsappSubgrupo1Agrupador2 = agrupador2Subgrupo1.whatsapp;
    whatsappSubgrupo2Agrupador2 = agrupador2Subgrupo2.whatsapp;
    whatsappSubgrupo3Agrupador2 = agrupador2Subgrupo3.whatsapp;
    mailsSubgrupo1Agrupador2 = agrupador2Subgrupo1.mails;
    mailsSubgrupo2Agrupador2 = agrupador2Subgrupo2.mails;
    mailsSubgrupo3Agrupador2 = agrupador2Subgrupo3.mails;
    smsSubgrupo1Agrupador2 = agrupador2Subgrupo1.sms;
    smsSubgrupo2Agrupador2 = agrupador2Subgrupo2.sms;
    smsSubgrupo3Agrupador2 = agrupador2Subgrupo3.sms;
    montoSubgrupo1Agrupador2 = agrupador2Subgrupo1.monto;
    montoSubgrupo2Agrupador2 = agrupador2Subgrupo2.monto;
    montoSubgrupo3Agrupador2 = agrupador2Subgrupo3.monto;

    informadosSubgrupo1Agrupador3 = agrupador3Subgrupo1.informados;
    informadosSubgrupo2Agrupador3 = agrupador3Subgrupo2.informados;
    informadosSubgrupo3Agrupador3 = agrupador3Subgrupo3.informados;
    whatsappSubgrupo1Agrupador3 = agrupador3Subgrupo1.whatsapp;
    whatsappSubgrupo2Agrupador3 = agrupador3Subgrupo2.whatsapp;
    whatsappSubgrupo3Agrupador3 = agrupador3Subgrupo3.whatsapp;
    mailsSubgrupo1Agrupador3 = agrupador3Subgrupo1.mails;
    mailsSubgrupo2Agrupador3 = agrupador3Subgrupo2.mails;
    mailsSubgrupo3Agrupador3 = agrupador3Subgrupo3.mails;
    smsSubgrupo1Agrupador3 = agrupador3Subgrupo1.sms;
    smsSubgrupo2Agrupador3 = agrupador3Subgrupo2.sms;
    smsSubgrupo3Agrupador3 = agrupador3Subgrupo3.sms;
    montoSubgrupo1Agrupador3 = agrupador3Subgrupo1.monto;
    montoSubgrupo2Agrupador3 = agrupador3Subgrupo2.monto;
    montoSubgrupo3Agrupador3 = agrupador3Subgrupo3.monto;

    informadosSubgrupo1Agrupador4 = agrupador4Subgrupo1.informados;
    informadosSubgrupo2Agrupador4 = agrupador4Subgrupo2.informados;
    informadosSubgrupo3Agrupador4 = agrupador4Subgrupo3.informados;
    whatsappSubgrupo1Agrupador4 = agrupador4Subgrupo1.whatsapp;
    whatsappSubgrupo2Agrupador4 = agrupador4Subgrupo2.whatsapp;
    whatsappSubgrupo3Agrupador4 = agrupador4Subgrupo3.whatsapp;
    mailsSubgrupo1Agrupador4 = agrupador4Subgrupo1.mails;
    mailsSubgrupo2Agrupador4 = agrupador4Subgrupo2.mails;
    mailsSubgrupo3Agrupador4 = agrupador4Subgrupo3.mails;
    smsSubgrupo1Agrupador4 = agrupador4Subgrupo1.sms;
    smsSubgrupo2Agrupador4 = agrupador4Subgrupo2.sms;
    smsSubgrupo3Agrupador4 = agrupador4Subgrupo3.sms;
    montoSubgrupo1Agrupador4 = agrupador4Subgrupo1.monto;
    montoSubgrupo2Agrupador4 = agrupador4Subgrupo2.monto;
    montoSubgrupo3Agrupador4 = agrupador4Subgrupo3.monto;

    informadosSubgrupo1Agrupador5 = agrupador5Subgrupo1.informados;
    informadosSubgrupo2Agrupador5 = agrupador5Subgrupo2.informados;
    informadosSubgrupo3Agrupador5 = agrupador5Subgrupo3.informados;
    whatsappSubgrupo1Agrupador5 = agrupador5Subgrupo1.whatsapp;
    whatsappSubgrupo2Agrupador5 = agrupador5Subgrupo2.whatsapp;
    whatsappSubgrupo3Agrupador5 = agrupador5Subgrupo3.whatsapp;
    mailsSubgrupo1Agrupador5 = agrupador5Subgrupo1.mails;
    mailsSubgrupo2Agrupador5 = agrupador5Subgrupo2.mails;
    mailsSubgrupo3Agrupador5 = agrupador5Subgrupo3.mails;
    smsSubgrupo1Agrupador5 = agrupador5Subgrupo1.sms;
    smsSubgrupo2Agrupador5 = agrupador5Subgrupo2.sms;
    smsSubgrupo3Agrupador5 = agrupador5Subgrupo3.sms;
    montoSubgrupo1Agrupador5 = agrupador5Subgrupo1.monto;
    montoSubgrupo2Agrupador5 = agrupador5Subgrupo2.monto;
    montoSubgrupo3Agrupador5 = agrupador5Subgrupo3.monto;


    informadosTotalesAgrupador1 = agrupador1Subgrupo1.informados + agrupador1Subgrupo2.informados + agrupador1Subgrupo3.informados;
    whatsappTotalesAgrupador1 = agrupador1Subgrupo1.whatsapp + agrupador1Subgrupo2.whatsapp + agrupador1Subgrupo3.whatsapp;
    mailsTotalesAgrupador1 = agrupador1Subgrupo1.mails + agrupador1Subgrupo2.mails + agrupador1Subgrupo3.mails;
    smsTotalesAgrupador1 = agrupador1Subgrupo1.sms + agrupador1Subgrupo2.sms + agrupador1Subgrupo3.sms;
    montoTotalesAgrupador1 = agrupador1Subgrupo1.monto + agrupador1Subgrupo2.monto + agrupador1Subgrupo3.monto;

    informadosTotalesAgrupador2 = agrupador2Subgrupo1.informados + agrupador2Subgrupo2.informados + agrupador2Subgrupo3.informados;
    whatsappTotalesAgrupador2 = agrupador2Subgrupo1.whatsapp + agrupador2Subgrupo2.whatsapp + agrupador2Subgrupo3.whatsapp;
    mailsTotalesAgrupador2 = agrupador2Subgrupo1.mails + agrupador2Subgrupo2.mails  + agrupador2Subgrupo3.mails;
    smsTotalesAgrupador2 = agrupador2Subgrupo1.sms + agrupador2Subgrupo2.sms + agrupador2Subgrupo3.sms;
    montoTotalesAgrupador2 = agrupador2Subgrupo1.monto + agrupador2Subgrupo2.monto + agrupador2Subgrupo3.monto;

    informadosTotalesAgrupador3 = agrupador3Subgrupo1.informados + agrupador3Subgrupo2.informados + agrupador3Subgrupo3.informados;
    whatsappTotalesAgrupador3 = agrupador3Subgrupo1.whatsapp + agrupador3Subgrupo2.whatsapp + agrupador3Subgrupo3.whatsapp;
    mailsTotalesAgrupador3 = agrupador3Subgrupo1.mails + agrupador3Subgrupo2.mails  + agrupador3Subgrupo3.mails;
    smsTotalesAgrupador3 = agrupador3Subgrupo1.sms + agrupador3Subgrupo2.sms + agrupador3Subgrupo3.sms;
    montoTotalesAgrupador3 = agrupador3Subgrupo1.monto + agrupador3Subgrupo2.monto + agrupador3Subgrupo3.monto;

    informadosTotalesAgrupador4 = agrupador4Subgrupo1.informados + agrupador4Subgrupo2.informados + agrupador4Subgrupo3.informados;
    whatsappTotalesAgrupador4 = agrupador4Subgrupo1.whatsapp + agrupador4Subgrupo2.whatsapp + agrupador4Subgrupo3.whatsapp;
    mailsTotalesAgrupador4 = agrupador4Subgrupo1.mails + agrupador4Subgrupo2.mails  + agrupador4Subgrupo3.mails;
    smsTotalesAgrupador4 = agrupador4Subgrupo1.sms + agrupador4Subgrupo2.sms + agrupador4Subgrupo3.sms;
    montoTotalesAgrupador4 = agrupador4Subgrupo1.monto + agrupador4Subgrupo2.monto + agrupador4Subgrupo3.monto;

    informadosTotalesAgrupador5 = agrupador5Subgrupo1.informados + agrupador5Subgrupo2.informados + agrupador5Subgrupo3.informados;
    whatsappTotalesAgrupador5 = agrupador5Subgrupo1.whatsapp + agrupador5Subgrupo2.whatsapp + agrupador5Subgrupo3.whatsapp;
    mailsTotalesAgrupador5 = agrupador5Subgrupo1.mails + agrupador5Subgrupo2.mails  + agrupador5Subgrupo3.mails;
    smsTotalesAgrupador5 = agrupador5Subgrupo1.sms + agrupador5Subgrupo2.sms + agrupador5Subgrupo3.sms;
    montoTotalesAgrupador5 = agrupador5Subgrupo1.monto + agrupador5Subgrupo2.monto + agrupador5Subgrupo3.monto;

    cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
    cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

    cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
    cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

    cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
    cuadriculaMails.innerHTML = cuadriculaMailsValores;

    cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
    cuadriculaSms.innerHTML = cuadriculaSmsValores;

    cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
    cuadriculaMonto.innerHTML = cuadriculaMontoValores;
};

function sacarValoresTotalesAgrupadores1(){

    if(menuDashboard.classList.contains('open') && agrupador1menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosTotalesAgrupador1;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores -= whatsappTotalesAgrupador1;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores -= mailsTotalesAgrupador1;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores -= smsTotalesAgrupador1;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores -= montoTotalesAgrupador1;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;

        informadosSubgrupo1Agrupador1 = 0;
        informadosSubgrupo2Agrupador1 = 0;
        informadosSubgrupo3Agrupador1 = 0;

        whatsappSubgrupo1Agrupador1 = 0;
        whatsappSubgrupo2Agrupador1 = 0;
        whatsappSubgrupo3Agrupador1 = 0;

        mailsSubgrupo1Agrupador1 = 0;
        mailsSubgrupo2Agrupador1 = 0;
        mailsSubgrupo3Agrupador1 = 0;

        smsSubgrupo1Agrupador1 = 0;
        smsSubgrupo2Agrupador1 = 0;
        smsSubgrupo3Agrupador1 = 0;

        montoSubgrupo1Agrupador1 = 0;
        montoSubgrupo2Agrupador1 = 0;
        montoSubgrupo3Agrupador1 = 0;
        

    }

    if (menuDashboard.classList.contains('open') && subgrupo1agrupador1menu.style.display === 'none' && agrupador1menu.style.display === 'none'){            

        informadosTotalesAgrupador1 = informadosSubgrupo2Agrupador1 + informadosSubgrupo3Agrupador1;
        whatsappTotalesAgrupador1 = whatsappSubgrupo2Agrupador1 + whatsappSubgrupo3Agrupador1;
        mailsTotalesAgrupador1 = mailsSubgrupo2Agrupador1 + mailsSubgrupo3Agrupador1;
        smsTotalesAgrupador1 = smsSubgrupo2Agrupador1 + smsSubgrupo3Agrupador1;
        montoTotalesAgrupador1 = montoSubgrupo2Agrupador1 + montoSubgrupo3Agrupador1;

        cuadriculaInformadosValores += informadosTotalesAgrupador1;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador1;
        cuadriculaMailsValores += mailsTotalesAgrupador1;
        cuadriculaSmsValores += smsTotalesAgrupador1;
        cuadriculaMontoValores += montoTotalesAgrupador1;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo2agrupador1menu.style.display === 'none' && agrupador1menu.style.display === 'none'){    

        informadosTotalesAgrupador1 = informadosSubgrupo3Agrupador1 + informadosSubgrupo1Agrupador1;
        whatsappTotalesAgrupador1 = whatsappSubgrupo3Agrupador1 + whatsappSubgrupo1Agrupador1;
        mailsTotalesAgrupador1 = mailsSubgrupo3Agrupador1 + mailsSubgrupo1Agrupador1;
        smsTotalesAgrupador1 = smsSubgrupo3Agrupador1 + smsSubgrupo1Agrupador1;
        montoTotalesAgrupador1 = montoSubgrupo3Agrupador1 + montoSubgrupo1Agrupador1;

        cuadriculaInformadosValores += informadosTotalesAgrupador1;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador1;
        cuadriculaMailsValores += mailsTotalesAgrupador1;
        cuadriculaSmsValores += smsTotalesAgrupador1;
        cuadriculaMontoValores += montoTotalesAgrupador1;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo3agrupador1menu.style.display === 'none' && agrupador1menu.style.display === 'none'){

        informadosTotalesAgrupador1 = informadosSubgrupo1Agrupador1 + informadosSubgrupo2Agrupador1;
        whatsappTotalesAgrupador1 = whatsappSubgrupo1Agrupador1 + whatsappSubgrupo2Agrupador1;
        mailsTotalesAgrupador1 = mailsSubgrupo1Agrupador1 + mailsSubgrupo2Agrupador1;
        smsTotalesAgrupador1 = smsSubgrupo1Agrupador1 + smsSubgrupo2Agrupador1;
        montoTotalesAgrupador1 = montoSubgrupo1Agrupador1 + montoSubgrupo2Agrupador1;

        cuadriculaInformadosValores += informadosTotalesAgrupador1;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador1;
        cuadriculaMailsValores += mailsTotalesAgrupador1;
        cuadriculaSmsValores += smsTotalesAgrupador1;
        cuadriculaMontoValores += montoTotalesAgrupador1;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
 
};

function sacarValoresTotalesAgrupadores2(){

    if(menuDashboard.classList.contains('open') && agrupador2menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosTotalesAgrupador2;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores -= whatsappTotalesAgrupador2;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores -= mailsTotalesAgrupador2;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores -= smsTotalesAgrupador2;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores -= montoTotalesAgrupador2;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
        informadosSubgrupo1Agrupador2 = 0;
        informadosSubgrupo2Agrupador2 = 0;
        informadosSubgrupo3Agrupador2 = 0;

        whatsappSubgrupo1Agrupador2 = 0;
        whatsappSubgrupo2Agrupador2 = 0;
        whatsappSubgrupo3Agrupador2 = 0;

        mailsSubgrupo1Agrupador2 = 0;
        mailsSubgrupo2Agrupador2 = 0;
        mailsSubgrupo3Agrupador2 = 0;

        smsSubgrupo1Agrupador2 = 0;
        smsSubgrupo2Agrupador2 = 0;
        smsSubgrupo3Agrupador2 = 0;

        montoSubgrupo1Agrupador2 = 0;
        montoSubgrupo2Agrupador2 = 0;
        montoSubgrupo3Agrupador2 = 0;
        
    }

    if (menuDashboard.classList.contains('open') && subgrupo1agrupador2menu.style.display === 'none' && agrupador2menu.style.display === 'none'){

        informadosTotalesAgrupador2 = informadosSubgrupo2Agrupador2 + informadosSubgrupo3Agrupador2;
        whatsappTotalesAgrupador2 = whatsappSubgrupo2Agrupador2 + whatsappSubgrupo3Agrupador2;
        mailsTotalesAgrupador2 = mailsSubgrupo2Agrupador2 + mailsSubgrupo3Agrupador2;
        smsTotalesAgrupador2 = smsSubgrupo2Agrupador2 + smsSubgrupo3Agrupador2;
        montoTotalesAgrupador2 = montoSubgrupo2Agrupador2 + montoSubgrupo3Agrupador2;

        cuadriculaInformadosValores += informadosTotalesAgrupador2;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador2;
        cuadriculaMailsValores += mailsTotalesAgrupador2;
        cuadriculaSmsValores += smsTotalesAgrupador2;
        cuadriculaMontoValores += montoTotalesAgrupador2;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo2agrupador2menu.style.display === 'none' && agrupador2menu.style.display === 'none'){

        informadosTotalesAgrupador2 = informadosSubgrupo3Agrupador2 + informadosSubgrupo1Agrupador2;
        whatsappTotalesAgrupador2 = whatsappSubgrupo3Agrupador2 + whatsappSubgrupo1Agrupador2;
        mailsTotalesAgrupador2 = mailsSubgrupo3Agrupador2 + mailsSubgrupo1Agrupador2;
        smsTotalesAgrupador2 = smsSubgrupo3Agrupador2 + smsSubgrupo1Agrupador2;
        montoTotalesAgrupador2 = montoSubgrupo3Agrupador2 + montoSubgrupo1Agrupador2;

        cuadriculaInformadosValores += informadosTotalesAgrupador2;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador2;
        cuadriculaMailsValores += mailsTotalesAgrupador2;
        cuadriculaSmsValores += smsTotalesAgrupador2;
        cuadriculaMontoValores += montoTotalesAgrupador2;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo3agrupador2menu.style.display === 'none' && agrupador2menu.style.display === 'none'){

        informadosTotalesAgrupador2 = informadosSubgrupo1Agrupador2 + informadosSubgrupo2Agrupador2;
        whatsappTotalesAgrupador2 = whatsappSubgrupo1Agrupador2 + whatsappSubgrupo2Agrupador2;
        mailsTotalesAgrupador2 = mailsSubgrupo1Agrupador2 + mailsSubgrupo2Agrupador2;
        smsTotalesAgrupador2 = smsSubgrupo1Agrupador2 + smsSubgrupo2Agrupador2;
        montoTotalesAgrupador2 = montoSubgrupo1Agrupador2 + montoSubgrupo2Agrupador2;

        cuadriculaInformadosValores += informadosTotalesAgrupador2;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador2;
        cuadriculaMailsValores += mailsTotalesAgrupador2;
        cuadriculaSmsValores += smsTotalesAgrupador2;
        cuadriculaMontoValores += montoTotalesAgrupador2;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    
};

function sacarValoresTotalesAgrupadores3(){  

    if(menuDashboard.classList.contains('open') && agrupador3menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosTotalesAgrupador3;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores -= whatsappTotalesAgrupador3;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores -= mailsTotalesAgrupador3;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores -= smsTotalesAgrupador3;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores -= montoTotalesAgrupador3;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
        informadosSubgrupo1Agrupador3 = 0;
        informadosSubgrupo2Agrupador3 = 0;
        informadosSubgrupo3Agrupador3 = 0;

        whatsappSubgrupo1Agrupador3 = 0;
        whatsappSubgrupo2Agrupador3 = 0;
        whatsappSubgrupo3Agrupador3 = 0;

        mailsSubgrupo1Agrupador3 = 0;
        mailsSubgrupo2Agrupador3 = 0;
        mailsSubgrupo3Agrupador3 = 0;

        smsSubgrupo1Agrupador3 = 0;
        smsSubgrupo2Agrupador3 = 0;
        smsSubgrupo3Agrupador3 = 0;

        montoSubgrupo1Agrupador3 = 0;
        montoSubgrupo2Agrupador3 = 0;
        montoSubgrupo3Agrupador3 = 0;

    }

    if (menuDashboard.classList.contains('open') && subgrupo1agrupador3menu.style.display === 'none' && agrupador3menu.style.display === 'none'){

        informadosTotalesAgrupador3 = informadosSubgrupo2Agrupador3 + informadosSubgrupo3Agrupador3;
        whatsappTotalesAgrupador3 = whatsappSubgrupo2Agrupador3 + whatsappSubgrupo3Agrupador3;
        mailsTotalesAgrupador3 = mailsSubgrupo2Agrupador3 + mailsSubgrupo3Agrupador3;
        smsTotalesAgrupador3 = smsSubgrupo2Agrupador3 + smsSubgrupo3Agrupador3;
        montoTotalesAgrupador3 = montoSubgrupo2Agrupador3 + montoSubgrupo3Agrupador3;

        cuadriculaInformadosValores += informadosTotalesAgrupador3;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador3;
        cuadriculaMailsValores += mailsTotalesAgrupador3;
        cuadriculaSmsValores += smsTotalesAgrupador3;
        cuadriculaMontoValores += montoTotalesAgrupador3;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo2agrupador3menu.style.display === 'none' && agrupador3menu.style.display === 'none'){

        informadosTotalesAgrupador3 = informadosSubgrupo3Agrupador3 + informadosSubgrupo1Agrupador3;
        whatsappTotalesAgrupador3 = whatsappSubgrupo3Agrupador3 + whatsappSubgrupo1Agrupador3;
        mailsTotalesAgrupador3 = mailsSubgrupo3Agrupador3 + mailsSubgrupo1Agrupador3;
        smsTotalesAgrupador3 = smsSubgrupo3Agrupador3 + smsSubgrupo1Agrupador3;
        montoTotalesAgrupador3 = montoSubgrupo3Agrupador3 + montoSubgrupo1Agrupador3;

        cuadriculaInformadosValores += informadosTotalesAgrupador3;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador3;
        cuadriculaMailsValores += mailsTotalesAgrupador3;
        cuadriculaSmsValores += smsTotalesAgrupador3;
        cuadriculaMontoValores += montoTotalesAgrupador3;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo3agrupador3menu.style.display === 'none' && agrupador3menu.style.display === 'none'){

        informadosTotalesAgrupador3 = informadosSubgrupo1Agrupador3 + informadosSubgrupo2Agrupador3;
        whatsappTotalesAgrupador3 = whatsappSubgrupo1Agrupador3 + whatsappSubgrupo2Agrupador3;
        mailsTotalesAgrupador3 = mailsSubgrupo1Agrupador3 + mailsSubgrupo2Agrupador3;
        smsTotalesAgrupador3 = smsSubgrupo1Agrupador3 + smsSubgrupo2Agrupador3;
        montoTotalesAgrupador3 = montoSubgrupo1Agrupador3 + montoSubgrupo2Agrupador3;

        cuadriculaInformadosValores += informadosTotalesAgrupador3;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador3;
        cuadriculaMailsValores += mailsTotalesAgrupador3;
        cuadriculaSmsValores += smsTotalesAgrupador3;
        cuadriculaMontoValores += montoTotalesAgrupador3;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }

};

function sacarValoresTotalesAgrupadores4(){

    if(menuDashboard.classList.contains('open') && agrupador4menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosTotalesAgrupador4;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores -= whatsappTotalesAgrupador4;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores -= mailsTotalesAgrupador4;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores -= smsTotalesAgrupador4;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores -= montoTotalesAgrupador4;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;

        informadosSubgrupo1Agrupador4 = 0;
        informadosSubgrupo2Agrupador4 = 0;
        informadosSubgrupo3Agrupador4 = 0;    
        
        whatsappSubgrupo1Agrupador4 = 0;
        whatsappSubgrupo2Agrupador4 = 0;
        whatsappSubgrupo3Agrupador4 = 0;

        mailsSubgrupo1Agrupador4 = 0;
        mailsSubgrupo2Agrupador4 = 0;
        mailsSubgrupo3Agrupador4 = 0;

        smsSubgrupo1Agrupador4 = 0;
        smsSubgrupo2Agrupador4 = 0;
        smsSubgrupo3Agrupador4 = 0;

        montoSubgrupo1Agrupador4 = 0;
        montoSubgrupo2Agrupador4 = 0;
        montoSubgrupo3Agrupador4 = 0;

        

    }

    if (menuDashboard.classList.contains('open') && subgrupo1agrupador4menu.style.display === 'none' && agrupador4menu.style.display === 'none'){

        informadosTotalesAgrupador4 = informadosSubgrupo2Agrupador4 + informadosSubgrupo3Agrupador4;
        whatsappTotalesAgrupador4 = whatsappSubgrupo2Agrupador4 + whatsappSubgrupo3Agrupador4;
        mailsTotalesAgrupador4 = mailsSubgrupo2Agrupador4 + mailsSubgrupo3Agrupador4;
        smsTotalesAgrupador4 = smsSubgrupo2Agrupador4 + smsSubgrupo3Agrupador4;
        montoTotalesAgrupador4 = montoSubgrupo2Agrupador4 + montoSubgrupo3Agrupador4;

        cuadriculaInformadosValores += informadosTotalesAgrupador4;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador4;
        cuadriculaMailsValores += mailsTotalesAgrupador4;
        cuadriculaSmsValores += smsTotalesAgrupador4;
        cuadriculaMontoValores += montoTotalesAgrupador4;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo2agrupador4menu.style.display === 'none' && agrupador4menu.style.display === 'none'){

        informadosTotalesAgrupador4 = informadosSubgrupo3Agrupador4 + informadosSubgrupo1Agrupador4;
        whatsappTotalesAgrupador4 = whatsappSubgrupo3Agrupador4 + whatsappSubgrupo1Agrupador4;
        mailsTotalesAgrupador4 = mailsSubgrupo3Agrupador4 + mailsSubgrupo1Agrupador4;
        smsTotalesAgrupador4 = smsSubgrupo3Agrupador4 + smsSubgrupo1Agrupador4;
        montoTotalesAgrupador4 = montoSubgrupo3Agrupador4 + montoSubgrupo1Agrupador4;

        cuadriculaInformadosValores += informadosTotalesAgrupador4;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador4;
        cuadriculaMailsValores += mailsTotalesAgrupador4;
        cuadriculaSmsValores += smsTotalesAgrupador4;
        cuadriculaMontoValores += montoTotalesAgrupador4;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    if (menuDashboard.classList.contains('open') && subgrupo3agrupador4menu.style.display === 'none' && agrupador4menu.style.display === 'none'){

        informadosTotalesAgrupador4 = informadosSubgrupo1Agrupador4 + informadosSubgrupo2Agrupador4;
        whatsappTotalesAgrupador4 = whatsappSubgrupo1Agrupador4 + whatsappSubgrupo2Agrupador4;
        mailsTotalesAgrupador4 = mailsSubgrupo1Agrupador4 + mailsSubgrupo2Agrupador4;
        smsTotalesAgrupador4 = smsSubgrupo1Agrupador4 + smsSubgrupo2Agrupador4;
        montoTotalesAgrupador4 = montoSubgrupo1Agrupador4 + montoSubgrupo2Agrupador4;

        cuadriculaInformadosValores += informadosTotalesAgrupador4;
        cuadriculaWhatsappValores += whatsappTotalesAgrupador4;
        cuadriculaMailsValores += mailsTotalesAgrupador4;
        cuadriculaSmsValores += smsTotalesAgrupador4;
        cuadriculaMontoValores += montoTotalesAgrupador4;

        cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
    
};

function sacarValoresTotalesAgrupadores5(){
 
    if(menuDashboard.classList.contains('open') && agrupador5menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosTotalesAgrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

        cuadriculaWhatsappValores -= whatsappTotalesAgrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

        cuadriculaMailsValores -= mailsTotalesAgrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;

        cuadriculaSmsValores -= smsTotalesAgrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;

        cuadriculaMontoValores -= montoTotalesAgrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;    
        
        informadosSubgrupo1Agrupador5 = 0;
        informadosSubgrupo2Agrupador5 = 0;
        informadosSubgrupo3Agrupador5 = 0;    
        
        whatsappSubgrupo1Agrupador5 = 0;
        whatsappSubgrupo2Agrupador5 = 0;
        whatsappSubgrupo3Agrupador5 = 0;

        mailsSubgrupo1Agrupador5 = 0;
        mailsSubgrupo2Agrupador5 = 0;
        mailsSubgrupo3Agrupador5 = 0;

        smsSubgrupo1Agrupador5 = 0;
        smsSubgrupo2Agrupador5 = 0;
        smsSubgrupo3Agrupador5 = 0;

        montoSubgrupo1Agrupador5 = 0;
        montoSubgrupo2Agrupador5 = 0;
        montoSubgrupo3Agrupador5 = 0; 
        
    }

    if (menuDashboard.classList.contains('open') && subgrupo1agrupador5menu.style.display === 'none' && agrupador5menu.style.display === 'none'){

            informadosTotalesAgrupador5 = informadosSubgrupo2Agrupador5 + informadosSubgrupo3Agrupador5;
            whatsappTotalesAgrupador5 = whatsappSubgrupo2Agrupador5 + whatsappSubgrupo3Agrupador5;
            mailsTotalesAgrupador5 = mailsSubgrupo2Agrupador5 + mailsSubgrupo3Agrupador5;
            smsTotalesAgrupador5 = smsSubgrupo2Agrupador5 + smsSubgrupo3Agrupador5;
            montoTotalesAgrupador5 = montoSubgrupo2Agrupador5 + montoSubgrupo3Agrupador5;
    
            cuadriculaInformadosValores += informadosTotalesAgrupador5;
            cuadriculaWhatsappValores += whatsappTotalesAgrupador5;
            cuadriculaMailsValores += mailsTotalesAgrupador5;
            cuadriculaSmsValores += smsTotalesAgrupador5;
            cuadriculaMontoValores += montoTotalesAgrupador5;
    
            cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
            cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
    
            cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
            cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
    
            cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
            cuadriculaMails.innerHTML = cuadriculaMailsValores;
    
            cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
            cuadriculaSms.innerHTML = cuadriculaSmsValores;
    
            cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
            cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
    if (menuDashboard.classList.contains('open') && subgrupo2agrupador5menu.style.display === 'none' && agrupador5menu.style.display === 'none'){
    
            informadosTotalesAgrupador5 = informadosSubgrupo3Agrupador5 + informadosSubgrupo1Agrupador5;
            whatsappTotalesAgrupador5 = whatsappSubgrupo3Agrupador5 + whatsappSubgrupo1Agrupador5;
            mailsTotalesAgrupador5 = mailsSubgrupo3Agrupador5 + mailsSubgrupo1Agrupador5;
            smsTotalesAgrupador5 = smsSubgrupo3Agrupador5 + smsSubgrupo1Agrupador5;
            montoTotalesAgrupador5 = montoSubgrupo3Agrupador5 + montoSubgrupo1Agrupador5;
    
            cuadriculaInformadosValores += informadosTotalesAgrupador5;
            cuadriculaWhatsappValores += whatsappTotalesAgrupador5;
            cuadriculaMailsValores += mailsTotalesAgrupador5;
            cuadriculaSmsValores += smsTotalesAgrupador5;
            cuadriculaMontoValores += montoTotalesAgrupador5;
    
            cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
            cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
    
            cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
            cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
    
            cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
            cuadriculaMails.innerHTML = cuadriculaMailsValores;
    
            cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
            cuadriculaSms.innerHTML = cuadriculaSmsValores;
    
            cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
            cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
    if (menuDashboard.classList.contains('open') && subgrupo3agrupador5menu.style.display === 'none' && agrupador5menu.style.display === 'none'){
    
            informadosTotalesAgrupador5 = informadosSubgrupo1Agrupador5 + informadosSubgrupo2Agrupador5;
            whatsappTotalesAgrupador5 = whatsappSubgrupo1Agrupador5 + whatsappSubgrupo2Agrupador5;
            mailsTotalesAgrupador5 = mailsSubgrupo1Agrupador5 + mailsSubgrupo2Agrupador5;
            smsTotalesAgrupador5 = smsSubgrupo1Agrupador5 + smsSubgrupo2Agrupador5;
            montoTotalesAgrupador5 = montoSubgrupo1Agrupador5 + montoSubgrupo2Agrupador5;
    
            cuadriculaInformadosValores += informadosTotalesAgrupador5;
            cuadriculaWhatsappValores += whatsappTotalesAgrupador5;
            cuadriculaMailsValores += mailsTotalesAgrupador5;
            cuadriculaSmsValores += smsTotalesAgrupador5;
            cuadriculaMontoValores += montoTotalesAgrupador5;
    
            cuadriculaInformadosValores = informadosTotalesAgrupador1 + informadosTotalesAgrupador2 + informadosTotalesAgrupador3 + informadosTotalesAgrupador4 + informadosTotalesAgrupador5;
            cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
    
            cuadriculaWhatsappValores = whatsappTotalesAgrupador1 + whatsappTotalesAgrupador2 + whatsappTotalesAgrupador3 + whatsappTotalesAgrupador4 + whatsappTotalesAgrupador5;
            cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
    
            cuadriculaMailsValores = mailsTotalesAgrupador1 + mailsTotalesAgrupador2 + mailsTotalesAgrupador3 + mailsTotalesAgrupador4 + mailsTotalesAgrupador5;
            cuadriculaMails.innerHTML = cuadriculaMailsValores;
    
            cuadriculaSmsValores = smsTotalesAgrupador1 + smsTotalesAgrupador2 + smsTotalesAgrupador3 + smsTotalesAgrupador4 + smsTotalesAgrupador5;
            cuadriculaSms.innerHTML = cuadriculaSmsValores;
    
            cuadriculaMontoValores = montoTotalesAgrupador1 + montoTotalesAgrupador2 + montoTotalesAgrupador3 + montoTotalesAgrupador4 + montoTotalesAgrupador5;
            cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
    
};

/* VALORES DE CADA SUBGRUPO */
let informadosSubgrupo1Agrupador1 = agrupador1Subgrupo1.informados;
let whatsappSubgrupo1Agrupador1 = agrupador1Subgrupo1.whatsapp;
let mailsSubgrupo1Agrupador1 = agrupador1Subgrupo1.mails;
let smsSubgrupo1Agrupador1 = agrupador1Subgrupo1.sms;
let montoSubgrupo1Agrupador1 = agrupador1Subgrupo1.monto;

let informadosSubgrupo2Agrupador1 = agrupador1Subgrupo2.informados;
let whatsappSubgrupo2Agrupador1 = agrupador1Subgrupo2.whatsapp;
let mailsSubgrupo2Agrupador1 = agrupador1Subgrupo2.mails;
let smsSubgrupo2Agrupador1 = agrupador1Subgrupo2.sms;
let montoSubgrupo2Agrupador1 = agrupador1Subgrupo2.monto;

let informadosSubgrupo3Agrupador1 = agrupador1Subgrupo3.informados;
let whatsappSubgrupo3Agrupador1 = agrupador1Subgrupo3.whatsapp;
let mailsSubgrupo3Agrupador1 = agrupador1Subgrupo3.mails;
let smsSubgrupo3Agrupador1 = agrupador1Subgrupo3.sms;
let montoSubgrupo3Agrupador1 = agrupador1Subgrupo3.monto;

let informadosSubgrupo1Agrupador2 = agrupador2Subgrupo1.informados;
let whatsappSubgrupo1Agrupador2 = agrupador2Subgrupo1.whatsapp;
let mailsSubgrupo1Agrupador2 = agrupador2Subgrupo1.mails;
let smsSubgrupo1Agrupador2 = agrupador2Subgrupo1.sms;
let montoSubgrupo1Agrupador2 = agrupador2Subgrupo1.monto;

let informadosSubgrupo2Agrupador2 = agrupador2Subgrupo2.informados;
let whatsappSubgrupo2Agrupador2 = agrupador2Subgrupo2.whatsapp;
let mailsSubgrupo2Agrupador2 = agrupador2Subgrupo2.mails;
let smsSubgrupo2Agrupador2 = agrupador2Subgrupo2.sms;
let montoSubgrupo2Agrupador2 = agrupador2Subgrupo2.monto;

let informadosSubgrupo3Agrupador2 = agrupador2Subgrupo3.informados;
let whatsappSubgrupo3Agrupador2 = agrupador2Subgrupo3.whatsapp;
let mailsSubgrupo3Agrupador2 = agrupador2Subgrupo3.mails;
let smsSubgrupo3Agrupador2 = agrupador2Subgrupo3.sms;
let montoSubgrupo3Agrupador2 = agrupador2Subgrupo3.monto;

let informadosSubgrupo1Agrupador3 = agrupador3Subgrupo1.informados;
let whatsappSubgrupo1Agrupador3 = agrupador3Subgrupo1.whatsapp;
let mailsSubgrupo1Agrupador3 = agrupador3Subgrupo1.mails;
let smsSubgrupo1Agrupador3 = agrupador3Subgrupo1.sms;
let montoSubgrupo1Agrupador3 = agrupador3Subgrupo1.monto;

let informadosSubgrupo2Agrupador3 = agrupador3Subgrupo2.informados;
let whatsappSubgrupo2Agrupador3 = agrupador3Subgrupo2.whatsapp;
let mailsSubgrupo2Agrupador3 = agrupador3Subgrupo2.mails;
let smsSubgrupo2Agrupador3 = agrupador3Subgrupo2.sms;
let montoSubgrupo2Agrupador3 = agrupador3Subgrupo2.monto;

let informadosSubgrupo3Agrupador3 = agrupador3Subgrupo3.informados;
let whatsappSubgrupo3Agrupador3 = agrupador3Subgrupo3.whatsapp;
let mailsSubgrupo3Agrupador3 = agrupador3Subgrupo3.mails;
let smsSubgrupo3Agrupador3 = agrupador3Subgrupo3.sms;
let montoSubgrupo3Agrupador3 = agrupador3Subgrupo3.monto;

let informadosSubgrupo1Agrupador4 = agrupador4Subgrupo1.informados;
let whatsappSubgrupo1Agrupador4 = agrupador4Subgrupo1.whatsapp;
let mailsSubgrupo1Agrupador4 = agrupador4Subgrupo1.mails;
let smsSubgrupo1Agrupador4 = agrupador4Subgrupo1.sms;
let montoSubgrupo1Agrupador4 = agrupador4Subgrupo1.monto;

let informadosSubgrupo2Agrupador4 = agrupador4Subgrupo2.informados;
let whatsappSubgrupo2Agrupador4 = agrupador4Subgrupo2.whatsapp;
let mailsSubgrupo2Agrupador4 = agrupador4Subgrupo2.mails;
let smsSubgrupo2Agrupador4 = agrupador4Subgrupo2.sms;
let montoSubgrupo2Agrupador4 = agrupador4Subgrupo2.monto;

let informadosSubgrupo3Agrupador4 = agrupador4Subgrupo3.informados;
let whatsappSubgrupo3Agrupador4 = agrupador4Subgrupo3.whatsapp;
let mailsSubgrupo3Agrupador4 = agrupador4Subgrupo3.mails;
let smsSubgrupo3Agrupador4 = agrupador4Subgrupo3.sms;
let montoSubgrupo3Agrupador4 = agrupador4Subgrupo3.monto;

let informadosSubgrupo1Agrupador5 = agrupador5Subgrupo1.informados;
let whatsappSubgrupo1Agrupador5 = agrupador5Subgrupo1.whatsapp;
let mailsSubgrupo1Agrupador5 = agrupador5Subgrupo1.mails;
let smsSubgrupo1Agrupador5 = agrupador5Subgrupo1.sms;
let montoSubgrupo1Agrupador5 = agrupador5Subgrupo1.monto;

let informadosSubgrupo2Agrupador5 = agrupador5Subgrupo2.informados;
let whatsappSubgrupo2Agrupador5 = agrupador5Subgrupo2.whatsapp;
let mailsSubgrupo2Agrupador5 = agrupador5Subgrupo2.mails;
let smsSubgrupo2Agrupador5 = agrupador5Subgrupo2.sms;
let montoSubgrupo2Agrupador5 = agrupador5Subgrupo2.monto;

let informadosSubgrupo3Agrupador5 = agrupador5Subgrupo3.informados;
let whatsappSubgrupo3Agrupador5 = agrupador5Subgrupo3.whatsapp;
let mailsSubgrupo3Agrupador5 = agrupador5Subgrupo3.mails;
let smsSubgrupo3Agrupador5 = agrupador5Subgrupo3.sms;
let montoSubgrupo3Agrupador5 = agrupador5Subgrupo3.monto;

/* SUBGRUPOS EN EL MENU */
let agregarSubgrupos = document.getElementById('agregarSubgrupos')

let subgrupo1agrupador1menu = subgrupos[0];
let subgrupo2agrupador1menu = subgrupos[1];
let subgrupo3agrupador1menu = subgrupos[2];

let subgrupo1agrupador2menu = subgrupos[3];
let subgrupo2agrupador2menu = subgrupos[4];
let subgrupo3agrupador2menu = subgrupos[5];

let subgrupo1agrupador3menu = subgrupos[6];
let subgrupo2agrupador3menu = subgrupos[7];
let subgrupo3agrupador3menu = subgrupos[8];

let subgrupo1agrupador4menu = subgrupos[9];
let subgrupo2agrupador4menu = subgrupos[10];
let subgrupo3agrupador4menu = subgrupos[11];

let subgrupo1agrupador5menu = subgrupos[12];
let subgrupo2agrupador5menu = subgrupos[13];
let subgrupo3agrupador5menu = subgrupos[14];

agregarSubgrupos.addEventListener('click',agregarTodosSubgrupos)
subgrupo1agrupador1menu.addEventListener('click',sacarValoresSubgrupo1Agrupador1)
subgrupo2agrupador1menu.addEventListener('click',sacarValoresSubgrupo2Agrupador1)
subgrupo3agrupador1menu.addEventListener('click',sacarValoresSubgrupo3Agrupador1)
subgrupo1agrupador2menu.addEventListener('click',sacarValoresSubgrupo1Agrupador2)
subgrupo2agrupador2menu.addEventListener('click',sacarValoresSubgrupo2Agrupador2)
subgrupo3agrupador2menu.addEventListener('click',sacarValoresSubgrupo3Agrupador2)
subgrupo1agrupador3menu.addEventListener('click',sacarValoresSubgrupo1Agrupador3)
subgrupo2agrupador3menu.addEventListener('click',sacarValoresSubgrupo2Agrupador3)
subgrupo3agrupador3menu.addEventListener('click',sacarValoresSubgrupo3Agrupador3)
subgrupo1agrupador4menu.addEventListener('click',sacarValoresSubgrupo1Agrupador4)
subgrupo2agrupador4menu.addEventListener('click',sacarValoresSubgrupo2Agrupador4)
subgrupo3agrupador4menu.addEventListener('click',sacarValoresSubgrupo3Agrupador4)
subgrupo1agrupador5menu.addEventListener('click',sacarValoresSubgrupo1Agrupador5)
subgrupo2agrupador5menu.addEventListener('click',sacarValoresSubgrupo2Agrupador5)
subgrupo3agrupador5menu.addEventListener('click',sacarValoresSubgrupo3Agrupador5)

function agregarTodosSubgrupos(){
    
    cuadriculaInformadosValores = informadosSubgrupo1Agrupador1 + informadosSubgrupo2Agrupador1 + informadosSubgrupo3Agrupador1 + informadosSubgrupo1Agrupador2 + informadosSubgrupo2Agrupador2 + informadosSubgrupo3Agrupador2 + informadosSubgrupo1Agrupador3 + informadosSubgrupo2Agrupador3 + informadosSubgrupo3Agrupador3 + informadosSubgrupo1Agrupador4 + informadosSubgrupo2Agrupador4 + informadosSubgrupo3Agrupador4 + informadosSubgrupo1Agrupador5 + informadosSubgrupo2Agrupador5 + informadosSubgrupo3Agrupador5;
    cuadriculaInformados.innerHTML = cuadriculaInformadosValores;

    
    cuadriculaWhatsappValores = whatsappSubgrupo1Agrupador1 + whatsappSubgrupo2Agrupador1 + whatsappSubgrupo3Agrupador1 + whatsappSubgrupo1Agrupador2 + whatsappSubgrupo2Agrupador2 + whatsappSubgrupo3Agrupador2 + whatsappSubgrupo1Agrupador3 + whatsappSubgrupo2Agrupador3 + whatsappSubgrupo3Agrupador3 + whatsappSubgrupo1Agrupador4 + whatsappSubgrupo2Agrupador4 + whatsappSubgrupo3Agrupador4 + whatsappSubgrupo1Agrupador5 + whatsappSubgrupo2Agrupador5 + whatsappSubgrupo3Agrupador5;
    cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;

    
    cuadriculaMailsValores = mailsSubgrupo1Agrupador1 + mailsSubgrupo2Agrupador1 + mailsSubgrupo3Agrupador1 + mailsSubgrupo1Agrupador2 + mailsSubgrupo2Agrupador2 + mailsSubgrupo3Agrupador2 + mailsSubgrupo1Agrupador3 + mailsSubgrupo2Agrupador3 + mailsSubgrupo3Agrupador3 + mailsSubgrupo1Agrupador4 + mailsSubgrupo2Agrupador4 + mailsSubgrupo3Agrupador4 + mailsSubgrupo1Agrupador5 + mailsSubgrupo2Agrupador5 + mailsSubgrupo3Agrupador5;
    cuadriculaMails.innerHTML = cuadriculaMailsValores;

    
    cuadriculaSmsValores = smsSubgrupo1Agrupador1 + smsSubgrupo2Agrupador1 + smsSubgrupo3Agrupador1 + smsSubgrupo1Agrupador2 + smsSubgrupo2Agrupador2 + smsSubgrupo3Agrupador2 + smsSubgrupo1Agrupador3 + smsSubgrupo2Agrupador3 + smsSubgrupo3Agrupador3 + smsSubgrupo1Agrupador4 + smsSubgrupo2Agrupador4 + smsSubgrupo3Agrupador4 + smsSubgrupo1Agrupador5 + smsSubgrupo2Agrupador5 + smsSubgrupo3Agrupador5;
    cuadriculaSms.innerHTML = cuadriculaSmsValores;

    
    cuadriculaMontoValores = montoSubgrupo1Agrupador1 + montoSubgrupo2Agrupador1 + montoSubgrupo3Agrupador1 + montoSubgrupo1Agrupador2 + montoSubgrupo2Agrupador2 + montoSubgrupo3Agrupador2 + montoSubgrupo1Agrupador3 + montoSubgrupo2Agrupador3 + montoSubgrupo3Agrupador3 + montoSubgrupo1Agrupador4 + montoSubgrupo2Agrupador4 + montoSubgrupo3Agrupador4 + montoSubgrupo1Agrupador5 + montoSubgrupo2Agrupador5 + montoSubgrupo3Agrupador5;
    cuadriculaMonto.innerHTML = cuadriculaMontoValores;

};

function sacarValoresSubgrupo1Agrupador1(){

    if(menuDashboard.classList.contains('open') && subgrupo1agrupador1menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo1Agrupador1;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo1Agrupador1;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo1Agrupador1;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo1Agrupador1;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo1Agrupador1;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }  
    
};

function sacarValoresSubgrupo2Agrupador1(){

    if(menuDashboard.classList.contains('open') && subgrupo2agrupador1menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo2Agrupador1;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo2Agrupador1;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo2Agrupador1;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo2Agrupador1;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo2Agrupador1;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;

        /*informadosSubgrupo2Agrupador1 = 0;
        whatsappSubgrupo2Agrupador1 = 0;
        mailsSubgrupo2Agrupador1 = 0;
        smsSubgrupo2Agrupador1 = 0;
        montoSubgrupo2Agrupador1 = 0;*/
    }
};

function sacarValoresSubgrupo3Agrupador1(){

    if(menuDashboard.classList.contains('open') && subgrupo3agrupador1menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo3Agrupador1;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo3Agrupador1;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo3Agrupador1;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo3Agrupador1;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo3Agrupador1;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;

    }
};


function sacarValoresSubgrupo1Agrupador2(){

    if(menuDashboard.classList.contains('open') && subgrupo1agrupador2menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo1Agrupador2;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo1Agrupador2;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo1Agrupador2;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo1Agrupador2;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo1Agrupador2;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};

function sacarValoresSubgrupo2Agrupador2(){

    if(menuDashboard.classList.contains('open') && subgrupo2agrupador2menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo2Agrupador2;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo2Agrupador2;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo2Agrupador2;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo2Agrupador2;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo2Agrupador2;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;

    }
};

function sacarValoresSubgrupo3Agrupador2(){

    if(menuDashboard.classList.contains('open') && subgrupo3agrupador2menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo3Agrupador2;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo3Agrupador2;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo3Agrupador2;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo3Agrupador2;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo3Agrupador2;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
    
    }
};

function sacarValoresSubgrupo1Agrupador3(){

    if(menuDashboard.classList.contains('open') && subgrupo1agrupador3menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo1Agrupador3;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo1Agrupador3;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo1Agrupador3;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo1Agrupador3;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo1Agrupador3;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;

    }
};

function sacarValoresSubgrupo2Agrupador3(){

    if(menuDashboard.classList.contains('open') && subgrupo2agrupador3menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo2Agrupador3;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo2Agrupador3;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo2Agrupador3;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo2Agrupador3;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo2Agrupador3;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};

function sacarValoresSubgrupo3Agrupador3(){

    if(menuDashboard.classList.contains('open') && subgrupo3agrupador3menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo3Agrupador3;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo3Agrupador3;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo3Agrupador3;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo3Agrupador3;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo3Agrupador3;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};


function sacarValoresSubgrupo1Agrupador4(){

    if(menuDashboard.classList.contains('open') && subgrupo1agrupador4menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo1Agrupador4;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo1Agrupador4;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo1Agrupador4;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo1Agrupador4;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo1Agrupador4;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};

function sacarValoresSubgrupo2Agrupador4(){

    if(menuDashboard.classList.contains('open') && subgrupo2agrupador4menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo2Agrupador4;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo2Agrupador4;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo2Agrupador4;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo2Agrupador4;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo2Agrupador4;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};

function sacarValoresSubgrupo3Agrupador4(){

    if(menuDashboard.classList.contains('open') && subgrupo3agrupador4menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo3Agrupador4;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo3Agrupador4;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo3Agrupador4;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo3Agrupador4;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo3Agrupador4;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};

function sacarValoresSubgrupo1Agrupador5(){

    if(menuDashboard.classList.contains('open') && subgrupo1agrupador5menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo1Agrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo1Agrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo1Agrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo1Agrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo1Agrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};

function sacarValoresSubgrupo2Agrupador5(){

    if(menuDashboard.classList.contains('open') && subgrupo2agrupador5menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo2Agrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo2Agrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo2Agrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo2Agrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo2Agrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};

function sacarValoresSubgrupo3Agrupador5(){

    if(menuDashboard.classList.contains('open') && subgrupo3agrupador5menu.style.display === 'none'){
        cuadriculaInformadosValores -= informadosSubgrupo3Agrupador5;
        cuadriculaInformados.innerHTML = cuadriculaInformadosValores;
        cuadriculaWhatsappValores -= whatsappSubgrupo3Agrupador5;
        cuadriculaWhatsapp.innerHTML = cuadriculaWhatsappValores;
        cuadriculaMailsValores -= mailsSubgrupo3Agrupador5;
        cuadriculaMails.innerHTML = cuadriculaMailsValores;
        cuadriculaSmsValores -= smsSubgrupo3Agrupador5;
        cuadriculaSms.innerHTML = cuadriculaSmsValores;
        cuadriculaMontoValores -= montoSubgrupo3Agrupador5;
        cuadriculaMonto.innerHTML = cuadriculaMontoValores;
        
    }
};


/*PRIMER GRAFICO*/
const primerValorPrimerGrafico = [4455,4267,3578,4126,6428];
const segundoValorPrimerGrafico = [9854,1387,3624,6425,3135];
const tercerValorPrimerGrafico = [1545,5792,6532,8752,8648];
const cuartoValorPrimerGrafico = [1046,1348,4826,2565,4762];
const quintoValorPrimerGrafico = [6645,3596,1298,7812,7123];

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx,{
    type:"bar",
        data:{
            labels:['Subgrupo 1 de agrupador 1','Subgrupo 2 de agrupador 1','Subgrupo 3 de agrupador 1','Subgrupo 1 de agrupador 2','Subgrupo 2 de agrupador 2','Subgrupo 3 de agrupador 2','Subgrupo 1 de agrupador 3','Subgrupo 2 de agrupador 3','Subgrupo 3 de agrupador 3','Subgrupo 1 de agrupador 4','Subgrupo 2 de agrupador 4','Subgrupo 3 de agrupador 4','Subgrupo 1 de agrupador 5','Subgrupo 2 de agrupador 5','Subgrupo 3 de agrupador 5'],
            datasets:[{
                label:'Informados',
                data:[12,48,31,95,45,68,82,12,75,56,34,40,10,91,85],
                backgroundColor:[
                    '#F5A8BD',
                    '#80DAF4',
                    '#D0A8F4',
                    '#F5A8BD',
                    '#80DAF4',
                    '#D0A8F4',
                    '#F5A8BD',
                    '#80DAF4',
                    '#D0A8F4',
                    '#F5A8BD',
                    '#80DAF4',
                    '#D0A8F4',
                    '#F5A8BD',
                    '#80DAF4',
                    '#D0A8F4',
                ],     
            }],
        },
    options:{
        responsive: false,
        maintainAspectRadio: true,
        scales:{
                yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
});


/*SEGUNDO GRAFICO*/
const fechasSegundoGrafico = ['09/06/2022','10/06/2022','11/06/2022','12/06/2022','13/06/2022'];
const primerValorSegundoGrafico = [4455,4267,3578,4126,6428];
const segundoValorSegundoGrafico = [9854,1387,3624,6425,3135];
const tercerValorSegundoGrafico = [1545,5792,6532,8752,8648];
const cuartoValorSegundoGrafico = [1046,1348,4826,2565,4762];
const quintoValorSegundoGrafico = [6645,3596,1298,7812,7123];

var ctx2 = document.getElementById("myChart2").getContext("2d");
var myChart= new Chart(ctx2,{
    type:"line",
        data:{
            labels:fechasSegundoGrafico,
            datasets:[{
                label:'Informados',
                data:primerValorSegundoGrafico,
                backgroundColor:'#F5A8BD',
                borderColor: '#FE0041'   
            },
            {
                label:'WhatsApps',
                data:segundoValorSegundoGrafico,
                backgroundColor:'#80DAF4',
                borderColor: '#01A9DB'
            },
            {
                label:'Mails',
                data:tercerValorSegundoGrafico,
                backgroundColor:'#F4F6CF',
                borderColor: '#FFFE01'
            },
            {
                label:'SMS',
                data:cuartoValorSegundoGrafico,
                backgroundColor:'#A8F4F2',
                borderColor: '#00FFFF'
            },
            {
                label:'Monto',
                data:quintoValorSegundoGrafico,
                backgroundColor:'#D0A8F4',
                borderColor: '#9B2FFE'
            }]
        },
        options:{
            responsive: false,
            maintainAspectRadio: true,
            scales:{
                    yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        },
    }
);