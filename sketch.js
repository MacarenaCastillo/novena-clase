//acá tiene que ponerse creativxs
//revisen lo que hicimos en la clase 7
//https://github.com/profesorfaco/dno037-2017-07
var data;

function preload() {
   data = loadTable("data/pokemontype.csv", "true", "header");
}

function setup() {
   canvas = createCanvas(600,300);
   canvas.parent('top');
   noLoop();
   noStroke();
}


function draw() {
   background(255);
   var total_psychic = 0;
   var total_grass = 0;
   var total_water = 0;
   //con esto cuento el total de pasajeros por clase
   for (var a = 0; a < data.getRowCount(); a++) {
      if (data.get(a, 1) == 14) {
         total_psychic++
      } else if (data.get(a, 1) == 12) {
         total_grass++
      } else if (data.get(a, 1) == 11) {
         total_water++
      }
   }

   //todo esto se imprime en su consola de JavaScript
   print("Existen " + total_psychic + " Pokemon de tipo psychic.");
   print("Para comparación, existen " + total_grass + " pokemon de tipo Grass y " + total_water + "pokemon de tipo water. ");
   //esto dibuja los círculos blancos, del total de pasajeros.
   fill(117, 17, 132);
   ellipse((width / 3.75), (height / 2), (total_psychic / 0.75), (total_psychic / 0.75));
   //estos dibuja los círculos negros, de total de facellecidos.
   fill(38, 165, 116);
   ellipse((width / 2), (height / 2), (total_grass / 0.75), (total_grass / 0.75));

   fill(50, 105, 209);
   ellipse((width / 1.3), (height / 2), (total_water / 0.75), (total_water / 0.75));

}
