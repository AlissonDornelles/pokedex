
// O que precisamos fazer? -quando clicarmos no botao de troca de tema temos que alterar a cor do tema da pagina para as cores claro ou tema escuro

// - objeto 1 - quando clicar no botao troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
//     -passo 1 - pegar no JS o elemento HTML correspondente ao botao  de troca de tema
//     -passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
//     -passo 3 - dar um jeito de identificar o clique do usuario no botao de troca de tema
//     -passo 4 - adicionar a classe modo-escuro no body
//     -passo 5 - trocar a imagem do botaode alterar tema para lua

// - objetivo 2 - quando clicar no botao de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro sol
//     - passo 6 - verificar se o body ja tem a classe modo-escuro
//     - passo 7 - remover a classe de modo-escuro do body
//     - passo 8 - trocar a imagem do botao de alterar tema para sol
//--------------------------------------------------------------

// - objeto 1 - quando clicar no botao troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua

//     -passo 1 - pegar no JS o elemento HTML correspondente ao botao  de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema")

//     -passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//     -passo 3 - dar um jeito de identificar o clique do usuario no botao de troca de tema

botaoAlterarTema.addEventListener("click", () => {

    //     - passo 6 - verificar se o body ja tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        //     - passo 7 - remover a classe de modo-escuro do body toggle

        //     - passo 8 - trocar a imagem do botao de alterar tema para sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        //     -passo 4 - adicionar a classe modo-escuro no body toggle

        //     -passo 5 - trocar a imagem do botaode alterar tema para lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }


});

