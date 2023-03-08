function generateInputBox(Pergunta, Id, RequiredState) {
    return {
        element: "input",
        type: "input",
        class: "form__field",
        placeholder: Pergunta,
        name: Id,
        id: Id,
        required: RequiredState
    }
}

function generateInputResult(id) {
    return {
        element: "p",
        class: "form__result",
        id: id
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
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
    } else if (Interacao.element == "p") {
        InteracaoElement.setAttribute("class", Interacao.class);
        InteracaoElement.innerText = "Resultado: ";
        if (Interacao.id != null) {
            InteracaoElement.setAttribute("id", Interacao.id)
        }
    }

    return InteracaoElement
}

const Perguntas = {
    1: {
        Pergunta: `Escreva um programa em Javascript e crie uma variável chamada "nomeDoCarro" e atribua-a um valor "Fusca". Exiba-a ao usuário.`,
        Id: "NomeDoCarro",
        Resposta: "O nome do carro é: ",
        Interacao: {
            1: generateInputBox("Digite o nome do carro", "NomeDoCarro", true),
            2: generateInputResult("NomeDoCarroResult")
        },
        Tipo: 1,
        Questao: 1
    },
    2: {
        Pergunta: `Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".`,
        Id: "NomeDoUsuario",
        Resposta: "Olá, ",
        Interacao: {
            1: generateInputBox("Digite o seu nome", "NomeDoUsuario", true),
            2: generateInputResult("NomeDoUsuarioResult")
        },
        Tipo: 1,
        Questao: 2
    },
    3: {
        Pergunta: `Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".`,
        Id: "NomeEIdade",
        Interacao: {
            1: generateInputBox("Digite o seu nome", "NomeDoUsuario2", true)
        },
        Tipo: 2,
        Questao: 3
    },
    4: {
        Pergunta: `Áreas de Figuras Planas`,
        ImagemID: `https://lh6.googleusercontent.com/12VeEnZzYRUQqnRbEjxjJ3m2H6BxAU-oLQ0vuG08k-hpqXq5A36AZBSilhnFhT1Phe4S6ClFM6AHTHMTXkEf9BksDv2jI3bqHSH4nOR_tqbRntx4pmbdt3EzOLGrttrFtw=w321`,
        Tipo: "IMAGEM",
        Questao: 4
    },
    5: {
        Pergunta: `Área do retângulo`,
        Id: "AreaDoRetangulo",
        Reposta: "A área do retângulo é: ",
        Interacao: {
            1: generateInputBox("Base do retângulo", "BaseDoTriangulo", true),
            2: generateInputBox("Altura do retângulo", "AlturaDoTriangulo", true),
            3: generateInputResult("AreaDoRetanguloResult")
        },
        Tipo: 3,
        Questao: 4
    }
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
        const H2Content = document.createTextNode(`[${Perguntas[key].Questao}] ${Perguntas[key].Pergunta}`);
        H2.appendChild(H2Content);
        QuestionHeader.appendChild(H2);

        // <div class="line">
        const Line = document.createElement("div");
        Line.setAttribute("class", "line");
        QuestionHeader.appendChild(Line);

        // <picture>
        if (Perguntas[key].Tipo == "IMAGEM") {
            const PictureElement = document.createElement("picture");
            const ImgElement = document.createElement("img");
            ImgElement.src = Perguntas[key].ImagemID;
            PictureElement.appendChild(ImgElement);
            QuestionHeader.appendChild(PictureElement);

            // Decoração
            // <div class="line">
            const Line = document.createElement("div");
            Line.setAttribute("class", "line");
            QuestionHeader.appendChild(Line);
        }

        // <div class="question-body">
        const QuestionBody = document.createElement("div");
        QuestionBody.setAttribute("class", "question-body");
        QuestionContainer.appendChild(QuestionBody);

        // Todas as interações
        for (const Index in Perguntas[key].Interacao) {
            const InteracaoElement = CONFIGURAR_ELEMENTO(Perguntas[key].Interacao[Index]);
            QuestionBody.appendChild(InteracaoElement);
        }

        // Botão de enviar, só vai aceitar se o tipo de pergunta não for uma imagem
        if (Perguntas[key].Tipo != "IMAGEM") {
            const SubmitButton = document.createElement("button");
            const SubmitText = document.createTextNode("Enviar");
            SubmitButton.appendChild(SubmitText);
            SubmitButton.setAttribute("id", "submit");
            QuestionContainer.appendChild(SubmitButton);

            // Evento de click
            SubmitButton.addEventListener("click", function () {
                let Tipo = Perguntas[key].Tipo;
                if (Tipo == 1) {
                    let Variavel = document.getElementById(Perguntas[key].Id).value;
                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Variavel}`
                } else if (Tipo == 2) {
                    // Checa se tem algum elemento perguntando a idade dele
                    let PerguntaExistente = document.getElementById(`${Perguntas[key].Id} TEMPORARIO`)
                    if (PerguntaExistente == null) {
                        // Cria um novo elemento para o usuario colocar a idade dele
                        let InteracaoElement = CONFIGURAR_ELEMENTO(generateInputBox("Digite a sua idade", `${Perguntas[key].Id} TEMPORARIO`, true));
                        QuestionBody.appendChild(InteracaoElement);
                    } else {
                        let RespostaExistent = document.getElementById(`${Perguntas[key].Id} RESPOSTA TEMPORARIO`)
                        if (RespostaExistent == null) {
                            // Aqui nós ja temos a informação da idade e nome
                            let Nome = document.getElementById("NomeDoUsuario2").value;
                            let Idade = document.getElementById(`${Perguntas[key].Id} TEMPORARIO`).value;
                            let ResultElement = CONFIGURAR_ELEMENTO(generateInputResult(`${Perguntas[key].Id} RESPOSTA TEMPORARIO`));
                            ResultElement.innerText = `Olá ${Nome}, sua idade é ${Idade}`;

                            QuestionBody.appendChild(ResultElement);

                            // Coloca o texto de reiniciar a pergunta
                            let NewText = document.createTextNode("Reiniciar");
                            removeAllChildNodes(SubmitButton);
                            SubmitButton.appendChild(NewText);
                        } else {
                            // Remove o texto de reinciar a perguntar e reinicia o questionario
                            RespostaExistent.remove();
                            let NewText = document.createTextNode("Enviar");
                            removeAllChildNodes(SubmitButton);
                            SubmitButton.appendChild(NewText);

                            // Remove a pergunta da idade, se existente
                            let ExistentAge = document.getElementById(`${Perguntas[key].Id} TEMPORARIO`);
                            if (ExistentAge) {
                                return ExistentAge.remove();
                            }
                        }
                    }
                } else if (Tipo == 3) {
                    let BaseDoRetangulo = Number(document.getElementById("BaseDoTriangulo").value);
                    let AlturaDoRetangulo = Number(document.getElementById("AlturaDoTriangulo").value);

                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(BaseDoRetangulo)) {
                        return alert(`Insira um número que represente a base`);
                    } else if (isNaN(AlturaDoRetangulo)) {
                        return alert(`Insira um número que represente a altura`);
                    }

                    let Calculo = BaseDoRetangulo * AlturaDoRetangulo;
                    ResultElement.innerText = `Área: ${Calculo}`;
                }
            })
        }
        // quando tudo estiver pronto
        const mainElement = document.getElementById("main");
        mainElement.appendChild(QuestionContainer);
    }
});

console.log("CARREGADO POR COMPLETO")