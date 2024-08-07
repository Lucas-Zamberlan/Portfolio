let botao_esquerda
let botao_direita

const menu = document.querySelector('.projetos_lista');
const botao_esquerdo_esconde = document.querySelector('.img_butao_esquerdo');
const botao_direito_esconde = document.querySelector('.img_butao_direito');
const projeto1 = document.querySelector('.projetos_figma');
const projeto2 = document.querySelector('.projetos_trailer');
const projeto3 = document.querySelector('.projetos_download');
const projeto4 = document.querySelector('.projetos_comparador');

let contador = 0;

// document.getElementById('projeto1').addEventListener('click', () => escolha_projeto(1));
// document.getElementById('projeto2').addEventListener('click', () => escolha_projeto(2));
// document.getElementById('projeto3').addEventListener('click', () => escolha_projeto(3));
// document.getElementById('projeto4').addEventListener('click', () => escolha_projeto(4));
// document.getElementById('botao_esquerdo').addEventListener('click', () => escolha_projeto('botao_esquerdo'));
// document.getElementById('botao_direito').addEventListener('click', () => escolha_projeto('botao_direito'));
// document.getElementById('botao_menu').addEventListener('click', () => escolha_projeto('botao_menu'));

function escolha_projeto(escolha){
    if (escolha == 'botao_menu'){
        contador = 0;
    }

    else if (escolha == 1){
        contador = 1;
    }
    else if (escolha == 2){
        contador = 2;
    }

    else if (escolha == 3){
        contador = 3;
    }

    else if (escolha == 4){
        contador = 4;
    }
    else if (escolha == 'botao_esquerdo'){
        contador--; 
    }
    else if (escolha == 'botao_direito'){
        contador++;
    }
    else{}
   
    if (contador == 0 ){
        menu.classList.add('visible');
        projeto1.classList.remove('visible');
        projeto2.classList.remove('visible');
        projeto3.classList.remove('visible');
        projeto4.classList.remove('visible');
        botao_esquerdo_esconde.classList.remove('visible');
        botao_direito_esconde.classList.add('visible');
        
        contador = 0;
    }

    else if (contador == 1) {
        menu.classList.remove('visible');
        projeto1.classList.add('visible');
        projeto2.classList.remove('visible');
        projeto3.classList.remove('visible');
        projeto4.classList.remove('visible');
        botao_direito_esconde.classList.add('visible');
        botao_esquerdo_esconde.classList.add('visible');
        contador = 1;
    }
    else if (contador == 2 ){
        menu.classList.remove('visible');
        projeto1.classList.remove('visible');
        projeto2.classList.add('visible');
        projeto3.classList.remove('visible');
        projeto4.classList.remove('visible');
        botao_direito_esconde.classList.add('visible');
        botao_esquerdo_esconde.classList.add('visible');
        contador = 2;

    }

    else if (contador == 3 ){
        menu.classList.remove('visible');
        projeto1.classList.remove('visible');
        projeto2.classList.remove('visible');
        projeto3.classList.add('visible');
        projeto4.classList.remove('visible');
        botao_direito_esconde.classList.add('visible');
        botao_esquerdo_esconde.classList.add('visible');
        contador = 3;

    }

    else if (contador == 4 ){
        menu.classList.remove('visible');
        projeto1.classList.remove('visible');
        projeto2.classList.remove('visible');
        projeto3.classList.remove('visible');
        projeto4.classList.add('visible');
        botao_direito_esconde.classList.remove('visible');
        botao_esquerdo_esconde.classList.add('visible');
        contador = 4;

    }

    else{
        
    }


}





   // Primeira img perfil
   document.addEventListener('DOMContentLoaded', (event) => {
    const perfil = document.querySelector('.perfil');
    const textoPerfil = document.querySelector('.texto_perfil_direita');

    perfil.addEventListener('mouseover', () => {
        textoPerfil.classList.add('visible');
    });

    perfil.addEventListener('mouseout', () => {
        textoPerfil.classList.remove('visible');
    });
});

// Segunda img habilidades
document.addEventListener('DOMContentLoaded', (event) => {
    const perfil = document.querySelector('.habilidades');
    const textoPerfil = document.querySelector('.texto_habilidades_direita');

    perfil.addEventListener('mouseover', () => {
        textoPerfil.classList.add('visible');
    });

    perfil.addEventListener('mouseout', () => {
        textoPerfil.classList.remove('visible');
    });
});

// Terceira img projetos
document.addEventListener('DOMContentLoaded', (event) => {
    const perfil = document.querySelector('.projetos');
    const textoPerfil = document.querySelector('.texto_projetos_direita');

    perfil.addEventListener('mouseover', () => {
        textoPerfil.classList.add('visible');
    });

    perfil.addEventListener('mouseout', () => {
        textoPerfil.classList.remove('visible');
    });
});

//Quarta img futuro
document.addEventListener('DOMContentLoaded', (event) => {
    const perfil = document.querySelector('.futuro');
    const textoPerfil = document.querySelector('.texto_futuro_direita');

    perfil.addEventListener('mouseover', () => {
        textoPerfil.classList.add('visible');
    });

    perfil.addEventListener('mouseout', () => {
        textoPerfil.classList.remove('visible');
    });
}); 

