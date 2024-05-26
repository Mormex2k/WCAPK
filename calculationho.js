var Spain;
function Sfull(){
    var hohwall = "0";
    hohwall = document.getElementById("hohwall").value;
    hohwall = Number(hohwall)

    var howwall = "0";
    howwall = document.getElementById("howwall").value;
    howwall = Number(howwall)

    var hocwall = "0";
    hocwall = document.getElementById("hocwall").value;
    hocwall = Number(hocwall)

    var Sful = hohwall * howwall * hocwall;
    document.getElementById("hoSfull").innerHTML= Sful;

    var hohwin = "0";
    hohwin = document.getElementById("hohwin").value;
    hohwin = Number(hohwin);

    var hohdoor = "0";
    hohdoor = document.getElementById("hohdoor").value;
    hohdoor = Number(hohdoor);

    var howwin = "0";
    howwin = document.getElementById("howwin").value;
    howwin = Number(howwin);

    var howdoor = "0";
    howdoor = document.getElementById("howdoor").value;
    howdoor = Number(howdoor);

    var hocwin = "0";
    hocwin = document.getElementById("hocwin").value;
    hocwin = Number(hocwin);

    var hocdoor = "0";
    hocdoor = document.getElementById("hocdoor").value;
    hocdoor = Number(hocdoor);

    var windw = hohwin * howwin * hocwin;
    var sdoor = hohdoor * howdoor * hocdoor;
    Spain =  Sful - windw - sdoor;
    document.getElementById("hoSPaint").innerHTML= Spain;
}
function expenditure(){
    if(document.getElementById("hopaint").value == "A"){
        var GALVAPLAST = 81;
        var rasG = Spain / GALVAPLAST;
        rasG = Math.round(rasG);
        document.getElementById("quantity").innerHTML = rasG;

    }
    if(document.getElementById("hopaint").value == "B"){
        var ACRYL = 81;
        var rasA = Spain / ACRYL;
        rasA = Math.round(rasA);
        document.getElementById("quantity").innerHTML = rasA;

    }
    if(document.getElementById("hopaint").value == "C"){
        var BATILITH = 72;
        var rasB = Spain / BATILITH;
        rasB = Math.round(rasB);
        document.getElementById("quantity").innerHTML = rasB;

    }
    if(document.getElementById("hopaint").value == "D"){
        var VERSAFIX = 64;
        var rasVx = Spain / VERSAFIX;
        rasVx = Math.round(rasVx);
        document.getElementById("quantity").innerHTML = rasVx;

    }
    if(document.getElementById("hopaint").value == "C"){
        var VERSAPLUS = 50;
        var rasVs = Spain / VERSAPLUS;
        rasVs = Math.round(rasVs);
        document.getElementById("quantity").innerHTML = rasVs;

    }
}
function clear2(){
    document.getElementById("hohwall").value = "";
    document.getElementById("howwall").value = "";
    document.getElementById("hocwall").value = "";
    document.getElementById("hohdoor").value = "";
    document.getElementById("howdoor").value = "";
    document.getElementById("hocdoor").value = "";
    document.getElementById("hohwin").value = "";
    document.getElementById("howwin").value = "";
    document.getElementById("hocwin").value = "";
    document.getElementById("hSfull").value = "";
    document.getElementById("hSPaint").value = "";
}