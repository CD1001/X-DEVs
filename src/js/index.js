const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

 btnAvancar.addEventListener("click",function () {

      if (cartaoAtual === cartoes.length - 1){
         cartaoAtual = -1;
      } 
      esconderCartao();
      cartaoAtual++;

      mostrarCartao();


 });

 btnVoltar.addEventListener("click", function () {
     if(cartaoAtual === 0) {
      cartaoAtual = 6;
     }
      esconderCartao();
      cartaoAtual--;

      mostrarCartao();
 });

function mostrarCartao() {
   cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartao() {
   const cartaoSelecionado = document.querySelector(".selecionado");
   cartaoSelecionado.classList.remove("selecionado");

}
