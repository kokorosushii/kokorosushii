let currentIndex = 0; // Índice inicial da primeira imagem
const images = document.querySelectorAll(".galeria .fotos img");
const nextBtn = document.querySelector(".galeria #next-btn");

// Exibe inicialmente as primeiras 5 imagens
const showInitialImages = () => {
    images.forEach((img, index) => {
        if (index < 5) {
            img.classList.remove("img-hidden");
        } else {
            img.classList.add("img-hidden");
        }
    });
};

// Função que move para a próxima imagem
const showNextImages = () => {
    // Verifica se há mais imagens para mostrar
    if (currentIndex + 5 < images.length) {
        currentIndex += 1;

        // Atualiza a visibilidade das imagens
        images.forEach((img, index) => {
            if (index >= currentIndex && index < currentIndex + 5) {
                img.classList.remove("img-hidden");
            } else {
                img.classList.add("img-hidden");
            }
        });
    }
};

// Inicializa a exibição
showInitialImages();

// Adiciona o evento de clique no botão de seta
nextBtn.addEventListener("click", showNextImages);
