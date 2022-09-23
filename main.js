var Canvas=document.getElementById("meuCanvas");
var contexto=Canvas.getContext("2d");
var cor="rgb(204, 255, 229)";
var largura=1;
var ultimaPosicaoX, ultimaPosicaoY;
var larguraDaTela=screen.width;
var alturaDaTela=screen.height;
var novaLarguraTela=larguraDaTela-70;
var novaAlturaTela=alturaDaTela-300;

if(larguraDaTela<992) {
   document.getElementById("meuCanvas").width=novaLarguraTela;
   document.getElementById("meuCanvas").height=novaAlturaTela;
   document.body.style.overflow="hidden";
}

Canvas.addEventListener("touchstart", touchComecou);

function touchComecou(evento) {
   cor=document.getElementById("cor").value;
   largura=document.getElementById("largura").value;
   console.log("A Função touchstart Foi Inicializada.");
   ultimaPosicaoX=evento.touches[0].clientX - Canvas.offsetLeft;
   ultimaPosicaoY=evento.touches[0].clientY - Canvas.offsetTop;
}

function limparCanvas() {
   contexto.clearRect(0, 0, Canvas.width, Canvas.height);
}

Canvas.addEventListener("touchmove", touchMovendo);

function touchMovendo(evento) {
   console.log("A Função touchmove Foi Inicializada");
   var posicaoAtualX=evento.touches[0].clientX - Canvas.offsetLeft;
   var posicaoAtualY=evento.touches[0].clientY - Canvas.offsetTop;

   contexto.beginPath();
   contexto.strokeStyle = cor;
   contexto.lineWidth = largura;
   contexto.moveTo(ultimaPosicaoX, ultimaPosicaoY);
   contexto.lineTo(posicaoAtualX, posicaoAtualY);
   contexto.stroke();

   ultimaPosicaoX = posicaoAtualX;
   ultimaPosicaoY = posicaoAtualY;

}