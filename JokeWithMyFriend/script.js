const hamburguer = document.getElementById("hamburguer");
const pizza = document.getElementById("pizza");
const sushiDePaulo = document.getElementById("sushi");
const pontuacao = document.getElementById("score");
const divPontuacao = document.querySelector(".pontuacao");
let pontos = 0;

function alertaDeComida(pontos) {
  if (pontos % 50 === 0) {
    alert("Ele esta comendo demais, pachamama precisa emagrecer calmaaaa !!");
    if (pontos === 500 || pontos === 1000) {
      alert("Pachammama ta quase explodindo");
    }
  }
}
const newElement = document.createElement("p");
newElement.className = "p2";

function filhoDaDiv(pontos) {
  if (pontos >= 500) {
    divPontuacao.appendChild(newElement);
    newElement.textContent = "Eu comi tudo isso de comida agora eu vou virar um monstro";
  }
  if (pontos >= 1000) {
    newElement.textContent = "AAAAAAH EU VOU EXPLODIR, meu nome e Japa Pachamama";
  }
}

hamburguer.addEventListener("click", () => {
  if (pontos >= 0) {
    pontos = pontos + 24;
    score.textContent = pontos;
    alertaDeComida(pontos);
    filhoDaDiv(pontos);
  }
});

pizza.addEventListener("click", () => {
  if (pontos >= 0) {
    pontos = pontos + 24;
    score.textContent = pontos;
    alertaDeComida(pontos);
    filhoDaDiv(pontos);
  }
});

sushiDePaulo.addEventListener("click", () => {
  if (pontos >= 0) {
    pontos = pontos + 69;
    score.textContent = pontos;
    alertaDeComida(pontos);
    filhoDaDiv(pontos);
  }
});
