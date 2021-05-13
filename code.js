$(document).ready(function(){
    var menu= $("#Titulo_menu");
    var carreras= $("#Carreras");
    var area=$(".rama");
    var c1=$("#C1");
    var c2=$("#C2");
    var c3=$("#C3");
    var c4=$("#C4");
    var graficos=$("#Graf_Mat");

    menu.click(function(){
        carreras.toggle();
    })
    c1.click(function(){
        graficos.text("Grafico carrera 1");
    })
    c2.click(function(){
        graficos.text("Grafico carrera 2");
    })
    c3.click(function(){
        graficos.text("Grafico carrera 3");
    })
    c4.click(function(){
        graficos.text("Grafico carrera 4");
    })
    area.mouseenter(function(){
        $(this).css("background","#252525")
    })
    area.mouseleave(function(){
        $(this).css("background","#403f49")
    })

})