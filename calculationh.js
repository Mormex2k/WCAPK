var Spain;
function Sfull(){
    var hhwall = "0";
    hhwall = document.getElementById("hhwall").value;
    hhwall = Number(hhwall)

    var hwwall = "0";
    hwwall = document.getElementById("hwwall").value;
    hwwall = Number(hwwall)

    var hcwall = "0";
    hcwall = document.getElementById("hcwall").value;
    hcwall = Number(hcwall)

    var Sful = hhwall * hwwall * hcwall;
    document.getElementById("hSfull").innerHTML= Sful;

    var hhwin = "0";
    hhwin = document.getElementById("hhwin").value;
    hhwin = Number(hhwin);

    var hhdoor = "0";
    hhdoor = document.getElementById("hhdoor").value;
    hhdoor = Number(hhdoor);

    var hwwin = "0";
    hwwin = document.getElementById("hwwin").value;
    hwwin = Number(hwwin);

    var hwdoor = "0";
    hwdoor = document.getElementById("hwdoor").value;
    hwdoor = Number(hwdoor);

    var hcwin = "0";
    hcwin = document.getElementById("hcwin").value;
    hcwin = Number(hcwin);

    var hcdoor = "0";
    hcdoor = document.getElementById("hcdoor").value;
    hcdoor = Number(hcdoor);

    var windw = hhwin * hwwin * hcwin;
    var sdoor = hhdoor * hwdoor * hcdoor;
    Spain =  Sful - windw - sdoor;
    document.getElementById("hSPaint").innerHTML= Spain;
}
function expenditure(){
    if(document.getElementById("hpaint").value == "A"){
        var GALVAPLAST = 81;
        var rasG = Spain / GALVAPLAST;
        rasG = Math.round(rasG);
        document.getElementById("quantity").innerHTML = rasG;

    }
    if(document.getElementById("hpaint").value == "B"){
        var ACRYL = 81;
        var rasA = Spain / ACRYL;
        rasA = Math.round(rasA);
        document.getElementById("quantity").innerHTML = rasA;

    }
    if(document.getElementById("hpaint").value == "C"){
        var BATILITH = 72;
        var rasB = Spain / BATILITH;
        rasB = Math.round(rasB);
        document.getElementById("quantity").innerHTML = rasB;

    }
    if(document.getElementById("hpaint").value == "D"){
        var VERSAFIX = 64;
        var rasVx = Spain / VERSAFIX;
        rasVx = Math.round(rasVx);
        document.getElementById("quantity").innerHTML = rasVx;

    }
    if(document.getElementById("hpaint").value == "C"){
        var VERSAPLUS = 50;
        var rasVs = Spain / VERSAPLUS;
        rasVs = Math.round(rasVs);
        document.getElementById("quantity").innerHTML = rasVs;

    }
}
function clear1(){
    document.getElementById("hhwall").value = "";
    document.getElementById("hwwall").value = "";
    document.getElementById("hcwall").value = "";
    document.getElementById("hhdoor").value = "";
    document.getElementById("hwdoor").value = "";
    document.getElementById("hcdoor").value = "";
    document.getElementById("hhwin").value = "";
    document.getElementById("hwwin").value = "";
    document.getElementById("hcwin").value = "";
    document.getElementById("hSfull").value = "";
    document.getElementById("hSPaint").value = "";
}