// CPU
document.getElementById("cpu1").innerHTML=" ";
document.getElementById("cpu2").innerHTML=" ";
document.getElementById("cpu3").innerHTML=" ";

// ULA
document.getElementById("ula2").innerHTML="";
document.getElementById("ula3").innerHTML="";

// REGISTRADORES
document.getElementById("registradores1").innerHTML="";
document.getElementById("registradores2").innerHTML="";
document.getElementById("registradores3").innerHTML="";
document.getElementById("registradores4").innerHTML="";
document.getElementById("registradores5").innerHTML="";
document.getElementById("registradores6").innerHTML="";
document.getElementById("registradores7").innerHTML="";
document.getElementById("registradores8").innerHTML="";
document.getElementById("registradores9").innerHTML="";
document.getElementById("registradores10").innerHTML="";
document.getElementById("registradores11").innerHTML="";
document.getElementById("registradores12").innerHTML="";
document.getElementById("registradores13").innerHTML="";

// RAM
document.getElementById("registradores1").innerHTML="";
document.getElementById("ram2").innerHTML="";
document.getElementById("ram3").innerHTML="";

// ROM
document.getElementById("rom1").innerHTML="";
document.getElementById("rom2").innerHTML="";

// EPROM
document.getElementById("eprom1").innerHTML="";
document.getElementById("eprom2").innerHTML="";
document.getElementById("eprom4").innerHTML="";
document.getElementById("eprom5").innerHTML="";

// FLASH
document.getElementById("flash1").innerHTML="";
document.getElementById("flash2").innerHTML="";
document.getElementById("flash5").innerHTML="";

// MEMÓRIA DE MASSA
document.getElementById("memoriaDeMassa1").innerHTML="";
document.getElementById("memoriaDeMassa2").innerHTML="";
document.getElementById("memoriaDeMassa3").innerHTML="";
document.getElementById("memoriaDeMassa4").innerHTML="";
document.getElementById("memoriaDeMassa5").innerHTML="";
document.getElementById("memoriaDeMassa6").innerHTML="";
document.getElementById("memoriaDeMassa7").innerHTML="";
document.getElementById("memoriaDeMassa8").innerHTML="";
document.getElementById("memoriaDeMassa9").innerHTML="";
document.getElementById("memoriaDeMassa11").innerHTML="";
document.getElementById("memoriaDeMassa12").innerHTML="";
document.getElementById("memoriaDeMassa13").innerHTML="";
document.getElementById("memoriaDeMassa14").innerHTML="";
document.getElementById("memoriaDeMassa15").innerHTML="";
document.getElementById("memoriaDeMassa16").innerHTML="";

// DMA
document.getElementById("dma1").innerHTML="";
document.getElementById("dma3").innerHTML="";

// CS
document.getElementById("cs2").innerHTML="";

// ADDRESS BUS
document.getElementById("addressBus1").innerHTML="";
document.getElementById("addressBus2").innerHTML="";
document.getElementById("addressBus3").innerHTML="";
document.getElementById("addressBus4").innerHTML="";
document.getElementById("addressBus6").innerHTML="";
document.getElementById("addressBus7").innerHTML="";
document.getElementById("addressBus8").innerHTML="";
document.getElementById("addressBus9").innerHTML="";
document.getElementById("addressBus10").innerHTML="";
document.getElementById("addressBus11").innerHTML="";

// DATA BUS 
document.getElementById("dataBus1").innerHTML="";
document.getElementById("dataBus2").innerHTML="";
document.getElementById("dataBus3").innerHTML="";
document.getElementById("dataBus4").innerHTML="";
document.getElementById("dataBus5").innerHTML="";
document.getElementById("dataBus6").innerHTML="";
document.getElementById("dataBus7").innerHTML="";

// I5
document.getElementById("i52").innerHTML="";

// I7
document.getElementById("i72").innerHTML="";

// DUAL CORE
document.getElementById("dualCore1").innerHTML="";
document.getElementById("dualCore2").innerHTML="";
document.getElementById("dualCore4").innerHTML="";
document.getElementById("dualCore5").innerHTML="";
document.getElementById("dualCore6").innerHTML="";
document.getElementById("dualCore7").innerHTML="";
document.getElementById("dualCore8").innerHTML="";
document.getElementById("dualCore9").innerHTML="";

// DUAL CORE
document.getElementById("quadCore1").innerHTML="";
document.getElementById("quadCore2").innerHTML="";
document.getElementById("quadCore3").innerHTML="";
document.getElementById("quadCore5").innerHTML="";
document.getElementById("quadCore6").innerHTML="";
document.getElementById("quadCore7").innerHTML="";
document.getElementById("quadCore8").innerHTML="";
document.getElementById("quadCore9").innerHTML="";


function verificar(){
    var resposta = varificacaoInput.value.toUpperCase();
    if(resposta == "CPU"){
        document.getElementById("cpu1").innerHTML="C";
        document.getElementById("cpu2").innerHTML="P";
        document.getElementById("cpu3").innerHTML="U";
    }else if(resposta == "ULA"){
        document.getElementById("cpu3").innerHTML="U";
        document.getElementById("ula2").innerHTML="L";
        document.getElementById("ula3").innerHTML="A";
    }else if(resposta == "REGISTRADORES"){
        document.getElementById("registradores1").innerHTML="R";
        document.getElementById("registradores2").innerHTML="E";
        document.getElementById("registradores3").innerHTML="G";
        document.getElementById("registradores4").innerHTML="I";
        document.getElementById("registradores5").innerHTML="S";
        document.getElementById("registradores6").innerHTML="T";
        document.getElementById("registradores7").innerHTML="R";
        document.getElementById("registradores8").innerHTML="A";
        document.getElementById("registradores9").innerHTML="D";
        document.getElementById("registradores10").innerHTML="O";
        document.getElementById("registradores11").innerHTML="R";
        document.getElementById("registradores12").innerHTML="E";
        document.getElementById("registradores13").innerHTML="S";
    }else if(resposta == "RAM"){
        document.getElementById("registradores1").innerHTML="R";
        document.getElementById("ram2").innerHTML="A";
        document.getElementById("ram3").innerHTML="M";
    }else if(resposta == "ROM"){
        document.getElementById("rom1").innerHTML="R";
        document.getElementById("rom2").innerHTML="O";
        document.getElementById("eprom5").innerHTML="M";
    }else if(resposta == "EPROM"){
        document.getElementById("eprom1").innerHTML="E";
        document.getElementById("eprom2").innerHTML="P";
        document.getElementById("registradores7").innerHTML="R";
        document.getElementById("eprom4").innerHTML="O";
        document.getElementById("eprom5").innerHTML="M";
    }else if(resposta == "FLASH"){
        document.getElementById("flash1").innerHTML="F";
        document.getElementById("flash2").innerHTML="L";
        document.getElementById("ram2").innerHTML="A";
        document.getElementById("addressBus6").innerHTML="S";
        document.getElementById("flash5").innerHTML="H";
    }else if(resposta == "MEMÓRIA-DE-MASSA" || resposta == "MEMORIA-DE-MASSA"){
        document.getElementById("memoriaDeMassa1").innerHTML="M";
        document.getElementById("memoriaDeMassa2").innerHTML="E";
        document.getElementById("memoriaDeMassa3").innerHTML="M";
        document.getElementById("memoriaDeMassa4").innerHTML="Ó";
        document.getElementById("memoriaDeMassa5").innerHTML="R";
        document.getElementById("memoriaDeMassa6").innerHTML="I";
        document.getElementById("memoriaDeMassa7").innerHTML="A";
        document.getElementById("memoriaDeMassa8").innerHTML="-";
        document.getElementById("memoriaDeMassa9").innerHTML="D";
        document.getElementById("registradores12").innerHTML="E";
        document.getElementById("memoriaDeMassa11").innerHTML="-";
        document.getElementById("memoriaDeMassa12").innerHTML="M";
        document.getElementById("memoriaDeMassa13").innerHTML="A";
        document.getElementById("memoriaDeMassa14").innerHTML="S";
        document.getElementById("memoriaDeMassa15").innerHTML="S";
        document.getElementById("memoriaDeMassa16").innerHTML="A";
    }else if(resposta == "DMA"){
        document.getElementById("dma1").innerHTML="D";
        document.getElementById("memoriaDeMassa1").innerHTML="M";
        document.getElementById("dma3").innerHTML="A";
    }else if(resposta == "CS"){
        document.getElementById("cpu1").innerHTML="C";
        document.getElementById("cs2").innerHTML="S";
    }else if(resposta == "ADDRESS-BUS"){
        document.getElementById("addressBus1").innerHTML="A";
        document.getElementById("addressBus2").innerHTML="D";
        document.getElementById("addressBus3").innerHTML="D";
        document.getElementById("addressBus4").innerHTML="R";
        document.getElementById("registradores2").innerHTML="E";
        document.getElementById("addressBus6").innerHTML="S";
        document.getElementById("addressBus7").innerHTML="S";
        document.getElementById("addressBus8").innerHTML="-";
        document.getElementById("addressBus9").innerHTML="B";
        document.getElementById("addressBus10").innerHTML="U";
        document.getElementById("addressBus11").innerHTML="S";
    }else if(resposta == "DATA-BUS"){
        document.getElementById("dataBus1").innerHTML="D";
        document.getElementById("dataBus2").innerHTML="A";
        document.getElementById("dataBus3").innerHTML="T";
        document.getElementById("dataBus4").innerHTML="A";
        document.getElementById("dataBus5").innerHTML="-";
        document.getElementById("dataBus6").innerHTML="B";
        document.getElementById("dataBus7").innerHTML="U";
        document.getElementById("registradores5").innerHTML="S";
    }else if(resposta == "I5"){
        document.getElementById("registradores4").innerHTML="I";
        document.getElementById("i52").innerHTML="5";
    }else if(resposta == "I7"){
        document.getElementById("memoriaDeMassa6").innerHTML="I";
        document.getElementById("i72").innerHTML="7";
    }else if(resposta == "DUAL-CORE"){
        document.getElementById("dualCore1").innerHTML="D";
        document.getElementById("dualCore2").innerHTML="U";
        document.getElementById("registradores8").innerHTML="A";
        document.getElementById("dualCore4").innerHTML="L";
        document.getElementById("dualCore5").innerHTML="-";
        document.getElementById("dualCore6").innerHTML="C";
        document.getElementById("dualCore7").innerHTML="O";
        document.getElementById("dualCore8").innerHTML="R";
        document.getElementById("dualCore9").innerHTML="E";
    }else if(resposta == "QUAD-CORE"){
        document.getElementById("quadCore1").innerHTML="Q";
        document.getElementById("quadCore2").innerHTML="U";
        document.getElementById("quadCore3").innerHTML="A";
        document.getElementById("registradores9").innerHTML="D";
        document.getElementById("quadCore5").innerHTML="-";
        document.getElementById("quadCore6").innerHTML="C";
        document.getElementById("quadCore7").innerHTML="O";
        document.getElementById("quadCore8").innerHTML="R";
        document.getElementById("quadCore9").innerHTML="E";
    }else{
        alert("Algo está errado! Olhe as dicas e tente de novo!");
    }

    varificacaoInput.value = ``
}