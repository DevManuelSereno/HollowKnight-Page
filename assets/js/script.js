var estado = 1;

function trocarImagem() {
    var imagem = document.getElementById("image");

    switch (estado) {
        case 1:
            imagem.src = "./assets/img/Silksong-Screenshots- 3.png";
            estado = 2;
            break;
        case 2:
            imagem.src = "./assets/img/Silksong-Screenshots- 5.png";
            estado = 3;
            break;
        case 3:
            imagem.src = "./assets/img/Silksong-Screenshots-_0009_11.png";
            estado = 4;
            break;
        case 4:
            imagem.src = "./assets/img/Silksong-Screenshots- 4.png";
            estado = 5;
            break;
        default:
            imagem.src = "./assets/img/Silksong-Screenshots-_0014_6.png";
            estado = 1;
            break;
    }
}