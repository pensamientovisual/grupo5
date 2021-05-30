$(document).ready(function(){
    var sined=$("#sined")
    var prim=$("#prim")
    var sec=$("#sec")
    var tec=$("#tec")
    var uni =$("#uni")
    var post=$("#post")
    var circulos=$(".circ")
    var fondos=$('.cls-1')
    var agri=$("#agricultura")
    var cien=$("#ciencias")
    var soc=$("#sociales")
    var educ=$("#educacion")
    var huma=$("#humanidades")
    var ing=$("#ingenieria")
    var sal=$("#salud")
    var serv=$("#servicios")
    
    fondos.mouseenter(function(){
        fondos.css("fill","#403f49");
        $(this).css("fill","#49ada4");
        var fondo = $(this);
        var lineas=$(".cls-2");
        lineas.mouseenter(function(){
            fondos.css("fill","#403f49");
            fondo.css("fill","#49ada4")});
    });
    
    fondos.mouseleave(function(){
        $(this).css("fill","#403f49");
    });
    
    circulos.click(function(){
        var info=$(this).attr("data-name");
        var fem=$(this).attr("data-fem");
        var masc=$(this).attr("data-masc");
        var brecha=$(this).attr("data-brecha");
        var sub=$(this).attr("data-nemo");
        $("#tit_info").show();
        $("#info_fem").show();
        $("#info_masc").show();
        $("#brecha").show();
        $("#fin").show();
        $("#tit_in").show();
        $("#tex_fem").css("visibility", "visible");
        $("#tex_masc").css("visibility", "visible");
        $("#text_brecha").show();
        $("#text_bre").show();
        $("#tit_info").text(info);
        $("#info_fem").text(fem);
        $("#info_masc").text(masc);
        $("#brecha").text(brecha);
        $("#tit_in").text(sub);
        $("#cambio").hide();
    });
    sined.click(function(){
        $("#sin_educacion").fadeTo("fast",1);
        $("#primaria").fadeTo("fast",0);
        $("#secundaria").fadeTo("fast",0);
        $("#tecnica").fadeTo("fast",0);
        $("#universitaria").fadeTo("fast",0);
        $("#postgrado").fadeTo("fast",0);
    });
    prim.click(function(){
        $("#sin_educacion").fadeTo("fast",0);
        $("#primaria").fadeTo("fast",1);
        $("#secundaria").fadeTo("fast",0);
        $("#tecnica").fadeTo("fast",0);
        $("#universitaria").fadeTo("fast",0);
        $("#postgrado").fadeTo("fast",0);
    });
    sec.click(function(){
        $("#sin_educacion").fadeTo("fast",0);
        $("#primaria").fadeTo("fast",0);
        $("#secundaria").fadeTo("fast",1);
        $("#tecnica").fadeTo("fast",0);
        $("#universitaria").fadeTo("fast",0);
        $("#postgrado").fadeTo("fast",0);
    });
    tec.click(function(){
        $("#sin_educacion").fadeTo("fast",0);
        $("#primaria").fadeTo("fast",0);
        $("#secundaria").fadeTo("fast",0);
        $("#tecnica").fadeTo("fast",1);
        $("#universitaria").fadeTo("fast",0);
        $("#postgrado").fadeTo("fast",0);
    });
    uni.click(function(){
        $("#sin_educacion").fadeTo("fast",0);
        $("#primaria").fadeTo("fast",0);
        $("#secundaria").fadeTo("fast",0);
        $("#tecnica").fadeTo("fast",0);
        $("#universitaria").fadeTo("fast",1);
        $("#postgrado").fadeTo("fast",0);
    });
    post.click(function(){
        $("#sin_educacion").fadeTo("fast",0);
        $("#primaria").fadeTo("fast",0);
        $("#secundaria").fadeTo("fast",0);
        $("#tecnica").fadeTo("fast",0);
        $("#universitaria").fadeTo("fast",0);
        $("#postgrado").fadeTo("fast",1);
    });
    agri.click(function(){
        $("#agricultura2").fadeTo("fast",1);
        $("#ciencias2").fadeTo("fast",0);
        $("#sociales2").fadeTo("fast",0);
        $("#educacion2").fadeTo("fast",0);
        $("#humanidades2").fadeTo("fast",0);
        $("#ing2").fadeTo("fast",0);
        $("#salud2").fadeTo("fast",0);
        $("#servicios2").fadeTo("fast",0);
    });
    cien.click(function(){
        $("#agricultura2").fadeTo("fast",0);
        $("#ciencias2").fadeTo("fast",1);
        $("#sociales2").fadeTo("fast",0);
        $("#educacion2").fadeTo("fast",0);
        $("#humanidades2").fadeTo("fast",0);
        $("#ing2").fadeTo("fast",0);
        $("#salud2").fadeTo("fast",0);
        $("#servicios2").fadeTo("fast",0);
    });
    soc.click(function(){
        $("#agricultura2").fadeTo("fast",0);
        $("#ciencias2").fadeTo("fast",0);
        $("#sociales2").fadeTo("fast",1);
        $("#educacion2").fadeTo("fast",0);
        $("#humanidades2").fadeTo("fast",0);
        $("#ing2").fadeTo("fast",0);
        $("#salud2").fadeTo("fast",0);
        $("#servicios2").fadeTo("fast",0);
    });
    educ.click(function(){
        $("#agricultura2").fadeTo("fast",0);
        $("#ciencias2").fadeTo("fast",0);
        $("#sociales2").fadeTo("fast",0);
        $("#educacion2").fadeTo("fast",1);
        $("#humanidades2").fadeTo("fast",0);
        $("#ing2").fadeTo("fast",0);
        $("#salud2").fadeTo("fast",0);
        $("#servicios2").fadeTo("fast",0);
    });
    huma.click(function(){
        $("#agricultura2").fadeTo("fast",0);
        $("#ciencias2").fadeTo("fast",0);
        $("#sociales2").fadeTo("fast",0);
        $("#educacion2").fadeTo("fast",0);
        $("#humanidades2").fadeTo("fast",1);
        $("#ing2").fadeTo("fast",0);
        $("#salud2").fadeTo("fast",0);
        $("#servicios2").fadeTo("fast",0);
    });
    ing.click(function(){
        $("#agricultura2").fadeTo("fast",0);
        $("#ciencias2").fadeTo("fast",0);
        $("#sociales2").fadeTo("fast",0);
        $("#educacion2").fadeTo("fast",0);
        $("#humanidades2").fadeTo("fast",0);
        $("#ing2").fadeTo("fast",1);
        $("#salud2").fadeTo("fast",0);
        $("#servicios2").fadeTo("fast",0);
    });
    sal.click(function(){
        $("#agricultura2").fadeTo("fast",0);
        $("#ciencias2").fadeTo("fast",0);
        $("#sociales2").fadeTo("fast",0);
        $("#educacion2").fadeTo("fast",0);
        $("#humanidades2").fadeTo("fast",0);
        $("#ing2").fadeTo("fast",0);
        $("#salud2").fadeTo("fast",1);
        $("#servicios2").fadeTo("fast",0);
    });
    serv.click(function(){
        $("#agricultura2").fadeTo("fast",0);
        $("#ciencias2").fadeTo("fast",0);
        $("#sociales2").fadeTo("fast",0);
        $("#educacion2").fadeTo("fast",0);
        $("#humanidades2").fadeTo("fast",0);
        $("#ing2").fadeTo("fast",0);
        $("#salud2").fadeTo("fast",0);
        $("#servicios2").fadeTo("fast",1);
    });



    /*
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
        $(this).css("background","#252525");
        //var nombrerama=$(this).attr("id");
        //$("#Nombre_Rama").text(nombrerama);
    })
    area.mouseleave(function(){
        $(this).css("background","#403f49");
        //$("#Nombre_Rama").text("")
    })
    constInfoPagina = {
    {
         nombre: fsdakhfdsa,
         cantidadCLicks: 565,

    }
 }

    */
});

