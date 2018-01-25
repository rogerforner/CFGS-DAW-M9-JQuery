/*******************************************************************************
************************************************************************ "Índex"
* # Selectors
* # css()
* # CSS Classes
* # Callback
* # Add
*******************************************************************************/

$( document ).ready(function() {
  /*
  # Selectors
  Mitjançant els selectors JQuery seleccionem elements HTML a partir dels seus
  atributs, les clases i els ID.
  --------------------------------------------------------------------------- */
  // Seleccionem <a id="rf"> per tal d'aplicar sobre aquesta alguna acció pròpia
  // del JQuery. En aquest cas li afegim la classe "active" per tal de que l'ítem
  // quedi resaltat.
  $("nav a#rf").addClass("active");

  /*
  # css()
  Mitjançant aquest mètode establim propietats CSS als elements seleccionats.
  És l'equivalent al style="color:#ff9eb9;"
  --------------------------------------------------------------------------- */
  $("h2").css({"color": "#ff9eb9"});


  /*
  # CSS Classes
  addClass()    - Afegir una o més d'una classe a l'element seleccionat.
  removeClass() - Eliminar una o més classes a l'element seleccionat.
  toggleClass() - Alternar les classes, afegint-les i eliminat-les.
  --------------------------------------------------------------------------- */
  $("button#dai").click(function() {
    $("span#avia").toggleClass("mark text-danger");
    $("img.rounded").removeClass("shadow-1");
    $("img.rounded").addClass("shadow-4");
  });


  /*
  # Callback
  En JavaScript les declaracions s'executen línia per línia i, en animacions o efectes,
  és interessant que una declaració no es dugui a terme fins que acabi una altra.
  Mitjançant funcions Callback és possible dur a terme això, aconseguint que n nombre
  de declaracions no es duguin a terme fins que hagin finalitzat unes anteriors a
  aquestes.
  --------------------------------------------------------------------------- */
  $("button#cpromo").click(function() {
    $("p#promo").fadeIn("slow", function() {
      $("span#codi").css({"color": "#ff9eb9"});
      $("span#codi").fadeOut("slow", function() {
        $("span#codi").remove();
      });
    });
  });


  /*
  # Add
  append()  - Inserta contingut al final, però dintre, de l'element seleccionat.
  prepend() - Inserta contingut al davant, però dintre, de l'element seleccionat.
  after()   - Inserta contingut al davant, fora, de l'element seleccionat.
  before()  - Inserta contingut al darrera, fora, de l'element seleccionat.
  ----------------------------------------------------------------------------- */
  // append i prepend.
  $("p#exclamacio").mouseenter(function(){
      $("p#exclamacio").append("!");
      $("p#exclamacio").prepend("¡¡");
  });
  $("p#exclamacio").mouseleave(function(){
    $("p#exclamacio").text("");
    $("p#exclamacio").text("Ja no tens excusa per agafar una fartanera amb gelats!");
  });
  
  // after i before.
  $("img.rounded").mouseenter(function(){
      $("img.rounded").after('<h3 class="nyam">Nyam!</h3>');
      $("img.rounded").before('<h3 class="nyam">Nyam!</h3>');
      $("h3.nyam").css({"color": "#ff9eb9"});
  });
  $("img.rounded").mouseleave(function(){
    $("h3.nyam").remove();
  });
});
