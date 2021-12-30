var teclas = {

  LEFT:37,
  UP: 38,
  RIGHT:39,
  DOWN: 40
              };


document.addEventListener("keydown", dibujarTeclado);

document.addEventListener("mousemove", dibujarMouse);

var x = 150;
var y = 150;
var cuadradito = document.getElementById("area_dibujo");
var papel = cuadradito.getContext('2d');

dibujarLinea("green", 3, 149, 149, 151, 151, papel);

function dibujarLinea(color, ancho, x_inicial, y_inicial, x_final, y_final, lienzo)
  {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = ancho;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
var color = "purple";
var ancho = 5;
var desplazamiento = 10;
var desplazamiento = desplazamiento + (desplazamiento * 1)


 switch(evento.keyCode){


  case teclas.UP:
    console.log("arriba");
    dibujarLinea(color, ancho, x, y, x, y - desplazamiento, papel);
    y = y - desplazamiento;
  break;
  case teclas.DOWN:
    dibujarLinea(color, ancho, x, y, x, y + desplazamiento, papel);
    console.log("abajo");
    y = y + desplazamiento;
  break;
  case teclas.LEFT:
    dibujarLinea(color, ancho, x, y, x - desplazamiento, y, papel);
    console.log("izquierda");
    x = x - desplazamiento;
  break;
  case teclas.RIGHT:
    dibujarLinea(color, ancho, x, y, x + desplazamiento, y, papel);
    console.log("derecha");
    x = x + desplazamiento;
  break;
  }


}

function dibujarMouse(trazo){
  if(trazo.buttons == 1){
  console.log(trazo);
  console.log(trazo.offsetX); //coordenada X del mouse
  console.log(trazo.offsetY);//coordenada Y del mouse
  var x_mouse = parseInt(trazo.offsetX);
  var y_mouse = parseInt(trazo.offsetY);
  dibujarLinea("green", 3, x_mouse, y_mouse, x_mouse - 1, y_mouse - 1, papel);

}

}
