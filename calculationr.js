var Spain;
function Sfull(){
    var rhwall = "0";
    rhwall = document.getElementById("rhwall").value;
    rhwall = Number(rhwall)

    var rwwall = "0";
    rwwall = document.getElementById("rwwall").value;
    rwwall = Number(rwwall)

    var rcwall = "0";
    rcwall = document.getElementById("rcwall").value;
    rcwall = Number(rcwall)

    var Sful = rhwall * rwwall * rcwall;
    document.getElementById("rSfull").innerHTML= Sful;

    var rhwin = "0";
    rhwin = document.getElementById("rhwin").value;
    rhwin = Number(rhwin);

    var rhdoor = "0";
    rhdoor = document.getElementById("rhdoor").value;
    rhdoor = Number(rhdoor);

    var rwwin = "0";
    rwwin = document.getElementById("rwwin").value;
    rwwin = Number(rwwin);

    var rwdoor = "0";
    rwdoor = document.getElementById("rwdoor").value;
    rwdoor = Number(rwdoor);

    var rcwin = "0";
    rcwin = document.getElementById("rcwin").value;
    rcwin = Number(rcwin);

    var rcdoor = "0";
    rcdoor = document.getElementById("rcdoor").value;
    rcdoor = Number(rcdoor);

    var windw = rhwin * rwwin * rcwin;
    var sdoor = rhdoor * rwdoor * rcdoor;
    Spain =  Sful - windw - sdoor;
    document.getElementById("rSPaint").innerHTML= Spain;

    if(document.getElementById("pol").checked == true && document.getElementById("potolok").checked == true){
        long = document.getElementById("rwsurface").value;
        short = document.getElementById("rlsurface").value;
        Sful = Sful + (long * short)*2; 
        document.getElementById("rSfull").innerHTML= Sful;
        Spain =  Sful - windw - sdoor;
        document.getElementById("rSPaint").innerHTML= Spain;
    }
    if(document.getElementById("pol").checked == true && document.getElementById("potolok").checked == false){
        long = document.getElementById("rwsurface").value;
        short = document.getElementById("rlsurface").value;
        Sful = Sful + (long * short);
        document.getElementById("rSfull").innerHTML= Sful;
        Spain =  Sful - windw - sdoor;
        document.getElementById("rSPaint").innerHTML= Spain;
    }
    if(document.getElementById("pol").checked == false && document.getElementById("potolok").checked == true){
        long = document.getElementById("rwsurface").value;
        short = document.getElementById("rlsurface").value;
        Sful = Sful + (long * short);
        document.getElementById("rSfull").innerHTML= Sful;
        Spain =  Sful - windw - sdoor;
        document.getElementById("rSPaint").innerHTML= Spain;
    }
}
function expenditure(){
    if(document.getElementById("rpaint").value == "A"){
        var GALVAPLAST = 81;
        var rasG = Spain / GALVAPLAST;
        rasG = Math.round(rasG);
        document.getElementById("quantity").innerHTML = rasG;

    }
    if(document.getElementById("rpaint").value == "B"){
        var ACRYL = 81;
        var rasA = Spain / ACRYL;
        rasA = Math.round(rasA);
        document.getElementById("quantity").innerHTML = rasA;

    }
    if(document.getElementById("rpaint").value == "C"){
        var BATILITH = 72;
        var rasB = Spain / BATILITH;
        rasB = Math.round(rasB);
        document.getElementById("quantity").innerHTML = rasB;

    }
    if(document.getElementById("rpaint").value == "D"){
        var VERSAFIX = 64;
        var rasVx = Spain / VERSAFIX;
        rasVx = Math.round(rasVx);
        document.getElementById("quantity").innerHTML = rasVx;

    }
    if(document.getElementById("rpaint").value == "C"){
        var VERSAPLUS = 50;
        var rasVs = Spain / VERSAPLUS;
        rasVs = Math.round(rasVs);
        document.getElementById("quantity").innerHTML = rasVs;

    }
}
function clear3(){
    document.getElementById("rhwall").value = "";
    document.getElementById("rwwall").value = "";
    document.getElementById("rcwall").value = "";
    document.getElementById("rhdoor").value = "";
    document.getElementById("rwdoor").value = "";
    document.getElementById("rcdoor").value = "";
    document.getElementById("rhwin").value = "";
    document.getElementById("rwwin").value = "";
    document.getElementById("rcwin").value = "";
    document.getElementById("rwsurface").value = "";
    document.getElementById("rlsurface").value = "";
    document.getElementById("hSfull").value = "";
    document.getElementById("hSPaint").value = "";
}

