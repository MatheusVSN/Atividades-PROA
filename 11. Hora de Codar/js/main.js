const Perguntas = {
    1: {
        Pergunta: `Escreva um programa em Javascript e crie uma variável chamada "nomeDoCarro" e atribua-a um valor "Fusca". Exiba-a ao usuário.`,
        Interacao: {
            1: {
                element: "input",
                type: "input",
                class: "form__field",
                placeholder: "Digite o nome do carro",
                name: "NomeDoCarro",
                id: "NomeDoCarro",
                required: true
            },
        }
    }
}

function CONFIGURAR_ELEMENTO(Interacao) {
    const InteracaoElement = document.createElement(Interacao.element);
    if (Interacao.element == "input") {
        InteracaoElement.setAttribute("type", Interacao.type);
        InteracaoElement.setAttribute("class", Interacao.class);
        InteracaoElement.setAttribute("placeholder", Interacao.placeholder);
        InteracaoElement.setAttribute("name", Interacao.name);
        InteracaoElement.setAttribute("id", Interacao.id);

        if (Interacao.required) {
            InteracaoElement.setAttribute("required", Interacao.required);
        }
    } else if (InteracaoElement == "text") {

    }

    return InteracaoElement
}

document.addEventListener("DOMContentLoaded", function () {
    for (const key in Perguntas) {

        // <div class="question-container">
        const QuestionContainer = document.createElement("div");
        QuestionContainer.setAttribute("class", "question-container");

        // <div class="question-container">
        const QuestionHeader = document.createElement("div");
        QuestionHeader.setAttribute("class", "question-header");
        QuestionContainer.appendChild(QuestionHeader)

        // <h2>
        const H2 = document.createElement("h2");
        const H2Content = document.createTextNode(`[${key}] ${Perguntas[key].Pergunta}`);
        H2.appendChild(H2Content);
        QuestionHeader.appendChild(H2);

        // <div class="line">
        const Line = document.createElement("div");
        Line.setAttribute("class", "line");
        QuestionHeader.appendChild(Line);

        // <div class="question-body">
        const QuestionBody = document.createElement("div");
        QuestionBody.setAttribute("class", "question-body");
        QuestionContainer.appendChild(QuestionBody);

        // Todas as interações
        /*
        for (const Index in Perguntas[key].Interacao) {
            const Interacao = Perguntas[key].Interacao[Index];
            const InteracaoElement = document.createElement(Interacao.element);
            InteracaoElement.setAttribute("type", Interacao.type);
            InteracaoElement.setAttribute("class", Interacao.class);
            InteracaoElement.setAttribute("placeholder", Interacao.placeholder);
            InteracaoElement.setAttribute("name", Interacao.name);
            InteracaoElement.setAttribute("id", Interacao.id);

            if (Interacao.required) {
                InteracaoElement.setAttribute("required", Interacao.required);
            }

            QuestionBody.appendChild(InteracaoElement);
        }
        */
        for (const Index in Perguntas[key].Interacao) {
            const InteracaoElement = CONFIGURAR_ELEMENTO(Perguntas[key].Interacao[Index]);
            QuestionBody.appendChild(InteracaoElement);
        }

        // Botão de enviar
        const SubmitButton = document.createElement("button");
        const SubmitText = document.createTextNode("Enviar");
        SubmitButton.appendChild(SubmitText);
        SubmitButton.setAttribute("id", "submit");
        QuestionContainer.appendChild(SubmitButton);

        // quando tudo estiver pronto
        const mainElement = document.getElementById("main");
        mainElement.appendChild(QuestionContainer);
    }
});

console.log("CARREGADO POR COMPLETO")