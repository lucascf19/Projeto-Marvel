/* 
Objetivo 1 - Quando passa o mouse em cima do personagem, ele altera a figura principal (classe selecionada muda):

    - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
    - retirar a classe selecionado do personagem que esta selecionado


Objetivo 2 - Trocar a imagem e nome grande para o do personagem selecionado:

    - alterar a imagem do personagem jogador 1
    - alterar o nome do personagem jogador 1

*/



/* Por passo a passo: 
    const homemDeFerro = document.getElementById('homem-de-ferro')

    homemDeFerro.addEventListener('mouseenter', () => {
        homemDeFerro.classList.add('selecionado')
    })
*/

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;

    const nomejogador2 = document.getElementById(".nome-jogador2");
    const nomeSelecionado2 = personagem.getAttribute('data-name');

    if(idSelecionado === nomeSelecionado2)  return;

    /* 
    Objetivo 1 - Quando passa o mouse em cima do personagem, ele altera a figura principal (classe selecionada muda):

    - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
    - retirar a classe selecionado do personagem que esta selecionado
    */
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
    personagem.classList.add("selecionado");

    /*
    Objetivo 2 - Trocar a imagem e nome grande para o do personagem selecionado:

    - alterar a imagem do personagem jogador 1
    - alterar o nome do personagem jogador 1
    */


const imagemJogador1 = document.getElementById('personagem-jogador-1');
imagemJogador1.src = `./sources/imagens/${idSelecionado}.png`;

const nomejogador1 = document.getElementById('nome-jogador1');
const nomeSelecionado = personagem.getAttribute('data-name');
nomejogador1.innerHTML = nomeSelecionado;
  });
});
