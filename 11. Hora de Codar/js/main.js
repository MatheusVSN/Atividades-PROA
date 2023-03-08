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
        Descricao: "Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.",
        ImagemID: `https://lh6.googleusercontent.com/12VeEnZzYRUQqnRbEjxjJ3m2H6BxAU-oLQ0vuG08k-hpqXq5A36AZBSilhnFhT1Phe4S6ClFM6AHTHMTXkEf9BksDv2jI3bqHSH4nOR_tqbRntx4pmbdt3EzOLGrttrFtw=w321`,
        Tipo: "IMAGEM",
        Questao: 4
    },
    5: {
        Pergunta: `Área do retângulo`,
        Id: "AreaDoRetangulo",
        Resposta: "A área do retângulo é: ",
        Interacao: {
            1: generateInputBox("Base do retângulo", "BaseDoRetangulo", true),
            2: generateInputBox("Altura do retângulo", "AlturaDoRetangulo", true),
            3: generateInputResult("AreaDoRetanguloResult")
        },
        Tipo: 3,
        Questao: 4.1
    },
    6: {
        Pergunta: `Área do quadrado`,
        Id: "LadoDoQuadrado",
        Resposta: "A área do quadrado é: ",
        Interacao : {
            1: generateInputBox("Lado do quadrado", "LadoDoQuadrado", true),
            2: generateInputResult("LadoDoQuadradoResult")
        },
        Tipo: 4,
        Questao: 4.2
    },
    7: {
        Pergunta: `Área do lesângulo`,
        Id: "AreaDoLosangulo",
        Resposta: "A área do losângulo é: ",
        Interacao : {
            1: generateInputBox("Diagonal Maior", "DiagonalMaior", true),
            2: generateInputBox("Diagonal Menor", "DiagonalMenor", true),
            3: generateInputResult("AreaDoLosanguloResult")
        },
        Tipo: 5,
        Questao: 4.3
    },
    8: {
        Pergunta: `Área do trapézio`,
        Id: "AreaDoTrapezio",
        Resposta: "A área do trapézio é: ",
        Interacao : {
            1: generateInputBox("Base Maior", "BaseMaior", true),
            2: generateInputBox("Base Menor", "BaseMenor", true),
            3: generateInputBox("Altura", "Altura", true),
            4: generateInputResult("AreaDoTrapezioResult")
        },
        Tipo: 6,
        Questao: 4.4
    }, 
    9: {
        Pergunta: `Área do paralelograma`,
        Id: "AreaDoParalelograma",
        Resposta: "A área do paralelograma é: ",
        Interacao: {
            1: generateInputBox("Base do paralelograma", "BaseDoParalelograma", true),
            2: generateInputBox("Altura do paralelograma", "AlturaDoParalelograma", true),
            3: generateInputResult("AreaDoParalelogramaResult")
        },
        Tipo: 7,
        Questao: 4.5
    },
    10: {
        Pergunta: `Área do triângulo`, 
        Id: "AreaDoTriangulo",
        Resposta: "A área do triângulo é: ",
        Interacao: {
            1: generateInputBox("Base do triângulo", "BaseDoTriangulo", true),
            2: generateInputBox("Altura do triângulo", "AlturaDoTriangulo", true),
            3: generateInputResult("AreaDoTrianguloResult")
        },
        Tipo: 8,
        Questao: 4.6
    },
    11: {
        //tipo 9
        Pergunta: `Área do círculo`,
        Id: "AreaDoCirculo",
        Resposta: "A área do círculo é: ",
        Interacao: {
            1: generateInputBox("Raio do círculo", "RaioDoCirculo", true),
            2: generateInputResult("AreaDoCirculoResult")
        },
        Tipo: 9,
        Questao: 4.7
    }
}

// pi = 3.14159265358979323846


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

            // <p>
            const H2_2 = document.createElement("h2");
            const H2Content_2 = document.createTextNode(Perguntas[key].Descricao);
            H2_2.appendChild(H2Content_2);
            QuestionHeader.appendChild(H2_2);
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
                    let BaseDoRetangulo = Number(document.getElementById("BaseDoRetangulo").value);
                    let AlturaDoRetangulo = Number(document.getElementById("AlturaDoRetangulo").value);

                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(BaseDoRetangulo)) {
                        return alert(`Insira um número que represente a base`);
                    } else if (isNaN(AlturaDoRetangulo)) {
                        return alert(`Insira um número que represente a altura`);
                    }

                    let Calculo = BaseDoRetangulo * AlturaDoRetangulo;
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Calculo}`;
                } else if (Tipo == 4) {
                    let LadoDoQuadrado = Number(document.getElementById("LadoDoQuadrado").value);
                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(LadoDoQuadrado)) {
                        return alert(`Insira um número que represente o lado`);
                    }

                    let Calculo = LadoDoQuadrado * LadoDoQuadrado;
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Calculo}`;
                } else if (Tipo == 5) {
                    let DiagonalMaior = Number(document.getElementById("DiagonalMaior").value);
                    let DiagonalMenor = Number(document.getElementById("DiagonalMenor").value);

                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(DiagonalMaior)) {
                        return alert(`Insira um número que represente a diagonal maior`);
                    } else if (isNaN(DiagonalMenor)) {
                        return alert(`Insira um número que represente a diagonal menor`);
                    }

                    let Calculo = (DiagonalMaior * DiagonalMenor) / 2;
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Calculo}`;
                } else if (Tipo == 6) {
                    let BaseMaior = Number(document.getElementById("BaseMaior").value);
                    let BaseMenor = Number(document.getElementById("BaseMenor").value);
                    let Altura = Number(document.getElementById("Altura").value);

                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(BaseMaior)) {
                        return alert(`Insira um número que represente a base maior`);
                    } else if (isNaN(BaseMenor)) {
                        return alert(`Insira um número que represente a base menor`);
                    } else if (isNaN(Altura)) {
                        return alert(`Insira um número que represente a altura`);
                    }

                    let Calculo = ((BaseMaior + BaseMenor) * Altura) / 2;
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Calculo}`;
                } else if (Tipo == 7) {
                    let BaseDoPalalelograma = Number(document.getElementById("BaseDoParalelograma").value);
                    let AlturaDoPalalelograma = Number(document.getElementById("AlturaDoParalelograma").value);

                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(BaseDoPalalelograma)) {
                        return alert(`Insira um número que represente a base`);
                    } else if (isNaN(AlturaDoPalalelograma)) {
                        return alert(`Insira um número que represente a altura`);
                    }

                    let Calculo = BaseDoPalalelograma * AlturaDoPalalelograma;
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Calculo}`;
                } else if (Tipo == 8) {
                    let BaseDoTriangulo = Number(document.getElementById("BaseDoTriangulo").value);
                    let AlturaDoTriangulo = Number(document.getElementById("AlturaDoTriangulo").value);

                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(BaseDoTriangulo)) {
                        return alert(`Insira um número que represente a base`);
                    } else if (isNaN(AlturaDoTriangulo)) {
                        return alert(`Insira um número que represente a altura`);
                    }

                    let Calculo = (BaseDoTriangulo * AlturaDoTriangulo) / 2;
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Calculo}`;
                } else if (Tipo == 9) {
                    let RaioDoCirculo = Number(document.getElementById("RaioDoCirculo").value);
                    let ResultElement = document.getElementById(`${Perguntas[key].Id}Result`);

                    if (isNaN(RaioDoCirculo)) {
                        return alert(`Insira um número que represente o raio`);
                    }

                    let Calculo = Math.PI * (RaioDoCirculo * RaioDoCirculo);
                    ResultElement.innerText = `${Perguntas[key].Resposta} ${Calculo}`;
                }
            })
        }
        // quando tudo estiver pronto
        const mainElement = document.getElementById("main");
        mainElement.appendChild(QuestionContainer);
    }
});

console.log("CARREGADO POR COMPLETO")