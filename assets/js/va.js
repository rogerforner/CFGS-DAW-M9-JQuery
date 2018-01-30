/*******************************************************************************
************************************************************************ "Índex"
# Get
# Fade
# Hide/Show
# Remove
# Events
*******************************************************************************/
/*
# css()
Mitjançant aquest mètode establim propietats CSS als elements seleccionats.
És l'equivalent al style="color:#ff9eb9;"
--------------------------------------------------------------------------- */
$("h2").css({"color": "#ff9eb9"});
// Activar l'ítem del Navbar.
$("nav a#va").addClass("active");

/*
# Get
----------------------------------------------------------------------------- */
// $("#btn").click(function(){
//     var x=$("#text").val();
//     $("#modal").text(x);
// });
/*
# Fade
----------------------------------------------------------------------------- */
// $("#btn").click(function(){
//     $("#exampleModal").fadeIn("slow");
// });

$("#btnt1").click(function(){
    $("#exampleModal").fadeOut(2000);
});
$("#btnt2").click(function(){
    $("#exampleModal").fadeOut(2000);
});
/*
# Hide/Show
----------------------------------------------------------------------------- */
$("#btni").dblclick(function(){
    $("#btni").toggle(function(){
       $("#btni").show("slow");
    });
});
/*
# Remove
----------------------------------------------------------------------------- */
$("#al2").click(function(){
    $("#al").remove();
});
$("#info").click(function(){
    $("input").val("");
});
/*
# Events
----------------------------------------------------------------------------- */

$("input").focus(function(){
    $(this).css("background-color", "#0fe6c0");
});
$("input").blur(function(){
    $(this).css("background-color", "#cccccc");
});

/*
#Slider
---------------------------------------------------------------------*/
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

/*
#Animate
-------------------------------------------------------------------------*/
$(document).ready(function(){
    $("#btn").click(function(){
        var div = $("#animate");
        if(div.attr('style')){
            div.removeAttr('style');
            div.addClass( "hidden" );
        }else{

            div.removeClass( "hidden" )
            div.animate({left: '300px'}, "slow");
            div.animate({fontSize: '3em'}, "slow");
        }


    });
});

/*
# Stop
-----------------------------------------------------------------------------*/
$("#stop").click(function(){
    $("#animate").stop();
});




