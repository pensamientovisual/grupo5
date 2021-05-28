/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

		tooltips[0]=["", "Porcentaje masculino", {background:"#403f49", width:"200px", height:"60px", color:"#fff", border:"5px #49ada4"}]
		tooltips[1]=["", "Porcentaje femenino", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[2]=["", "Actividades de servicios administrativo y de apoyo", {background:"#403f49", width:"200px", height:"110px", color: "#fff", border:"5px"}]
		tooltips[3]=["", "Agricultura, ganadería, silvicultura y pesca", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[4]=["", "Suministro de agua; evacuación de aguas", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[5]=["", "Actividades artísticas, de entretenimiento", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[6]=["", "Actividades financieras y de seguros", {background:"#403f49", width:"200px", height:"90px", color: "#fff", border:"5px"}]
		tooltips[7]=["", "Construcción", {background:"#403f49", width:"200px", height:"40px", color: "#fff", border:"5px"}]
		tooltips[8]=["", "Comercio al por mayor y al por menor", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[9]=["", "Suministro de electricidad, gas, vapor", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[10]=["", "Información y comunicaciones", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[11]=["", "Administración pública y defensa", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[12]=["", "Industrias manufactureras", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[13]=["", "Explotación de minas y canteras", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[14]=["", "Otras actividades de servicios", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[15]=["", "Actividades de atención de la salud humana", {background:"#403f49", width:"200px", height:"90px", color: "#fff", border:"5px"}]
		tooltips[16]=["", "Actividades de los hogares como empleadores", {background:"#403f49", width:"200px", height:"90px", color: "#fff", border:"5px"}]
		tooltips[17]=["", "Transporte y almacenamiento", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[18]=["", "Actividades profesionales, científicas y técnicas", {background:"#403f49", width:"200px", height:"90px", color: "#fff", border:"5px"}]
		tooltips[19]=["", "Enseñanza", {background:"#403f49", width:"200px", height:"40px", color: "#fff", border:"5px"}]
		tooltips[20]=["", "Actividades inmobiliarias<br ", {background:"#403f49", width:"200px", height:"60px", color: "#fff", border:"5px"}]
		tooltips[21]=["", "Actividades de alojamiento y de servicio de comidas", {background:"#403f49", width:"200px", height:"90px", color: "#fff", border:"5px"}]


		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")    