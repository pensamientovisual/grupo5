$(document).ready(function(){
    var menu= $("#Titulo_menu");
    var carreras= $("#Carreras");
    var area=$(".rama");
    var c1=$("#C1");
    var c2=$("#C2");
    var c3=$("#C3");
    var c4=$("#C4");
    var graficos=$("#Graf_Mat");
    var rama=$(".img")
    var sined=$("#sined")
    var prim=$("#prim")
    var sec=$("#sec")
    var tec=$("#tec")
    var uni =$("#uni")
    var post=$("#post")
    var circulos=$(".circ")
    var grande=$("#im_20")
    var fem=$("#fem")
    var masc=$("#masc")



    circulos.mouseenter(function(){
        $(this).css('opacity','0.5');
        var nombrerama=$(this).attr("id");
        $("#cambio").text(nombrerama)
    });
    circulos.mouseleave(function(){
        $(this).css('opacity','1');
        
    });
    circulos.click(function(){
        var info=$(this).attr("data-name");
        $("#cambio").text(info);
    })
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
    


/*
    var width= 300
    height=300
    margin=20
    var radius = Math.min(width,height)/2 - margin;
    var svg=d3.select("#bloque")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .append("g")
    .attr("transform","translate("+width/2+","+height/2+")");
    var datos= {h:51,m:49};
    var color = d3.scaleOrdinal()
    .domain(datos)
    .range(["#b3e6e0","#49ada4"]);

    var pie= d3.pie()
        .value(function(d){
            return d.value;
        });
    var datosl=pie(d3.entries(datos));

    svg.selectAll("#bloque")
    .data(datosl)
    .enter()
    .append("path")
    .attr('d',d3.arc()
    .innerRadius(0)
    .outerRadius(radius))
    .attr('fill',function(d){return(color(d.datos.key))})
    .attr("stroke","black")
    .style("stroke-width","2px")
    .style("opacity",0.7);

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
*/



})

// constInfoPagina = {
//     {
//         nombre: fsdakhfdsa,
//         cantidadCLicks: 565,

//     }
// }

// .json
