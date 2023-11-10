const texto = `Meu amor,
Hoje é um dia muito especial porque foi o dia em que você nasceu. E você é especial. Em Provérbios 31:10-11 diz: "Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis. O coração do seu marido está nela confiado; assim ele não necessitará de despojo."
Você é essa mulher!

Há 30 anos algo muito especial aconteceu
Foi a Mariana que nasceu
É super heroína
E é também feminina
Com a sua totózinha já passaram por várias aventuras
E Deus sempre as protegeu

Ela é a filha mais querida
E será uma esposa muito amada
Caminhará comigo
Pois Deus é o nosso abrigo`;

let index = 0;
function escreverTexto() {
    if (index < texto.length) {
        document.getElementById('texto-animado').textContent += texto.charAt(index);
        index++;
        setTimeout(escreverTexto, 50);
    } else {
        mostrarCoração();
    }
}

function mostrarCoração() {
    document.querySelector('.heart-container').style.opacity = '1';
    document.querySelector('.texto-no-meio').style.opacity = '1';
    setTimeout(() => {
        document.querySelector('.heart-container').style.opacity = '0';
        document.querySelector('.texto-no-meio').style.opacity = '0';
    }, 3000);
}

escreverTexto();
