//Selecionar a imagem principal
const imagem = document.getElementById('imagem');

//selecionar os botoes
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');

//Função para trocar a imagem
function trocarImagem(img){
    imagem.src =img;
}
//adicionar eventos aos botoes para trocar a imagem
botao1.addEventListener('click', function() {
    trocarImagem('imagem1.jpg');
})
botao2.addEventListener('click', function() {
    trocarImagem('imagem2.jpg');
})
botao3.addEventListener('click', function() {
    trocarImagem('imagem3.jpg');
})
botao4.addEventListener('click', function() {
    trocarImagem('imagem4.jpg');
})
const botoes = document.querySelectorAll ('.botoes button');
//Funçao para ativar o botão e remover a ativaçao dos outros
function ativarBotao(botao) {
    botoes.forEach((botao , index ) => {
        botao.addEventListener('click', function(){
            trocarImagem(`imagem${index+1}.jpg`);
            ativarBotao(botao);
        })
    })
}