// Seleção de elementos
    const generatePasswordButton = document.querySelector("#generate-password");
    const generatedPasswordElement = document.querySelector("#geneted-password");

// Funções
// Letras, Números e Símbolos
const getLetterLowerCase = () => {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

getLetterLowerCase();
getLetterUpperCase();



// Eventos
    generatePasswordButton.addEventListener("click", () => {
        console.log("teste");
    })