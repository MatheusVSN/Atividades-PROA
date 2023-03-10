const ListaDeRespostas = {
    5: `A função "alert()" do java script é usada para o navegador exibir um alerta na tela do usuário, usando a mensagem dentro dos parênteses como texto. Ela pode ser usada de diferentes maneiras dependendo do contexto, um exemplo de uso seria como um aviso para o usuário sobre uma determinada ação.`,
    6: `A função "prompt()" do java script é usada para o navegador exibir uma caixa de diálogo na tela do usuário, usando a mensagem dentro dos parênteses como texto. Ela pode ser usada de diferentes maneiras dependendo do contexto, um exemplo de uso seria para pedir ao usuário que insira um valor.`,
    7: `A função "console.log()" serve para exibir uma mensagem no console do navegador. Um exemplo de seu uso seria para debugar códigos.`
}
function checkIntegrity(argument) {
    if (typeof(argument) == "string") {
        return ((argument.length == 0 || argument.trim()) && argument || null)
    } else if (typeof(argument) == "number") {
        let Text = argument.toString()
        return (checkIntegrity(Text) && !isNaN(argument) && argument || null)
    }

    return null
}

function askForNumber(argument) {
    return checkIntegrity(Number(prompt(argument)))
}

function askForText(argument) {
    return checkIntegrity(prompt(argument))
}

function checkEmptyString(str) {
    return (str.length == 0 || !str.trim());
}

function exercicio_1() {
    var nomeDoCarro = "Fusca";
    alert(`O nome do carro é ${nomeDoCarro}`);
}

function exercicio_2() {
    var nome = askForText("Qual o seu nome?");

    while (nome == null) {
        nome = askForText("Por favor, não deixe o seu nome em branco");
    }

    alert(`Olá, ${nome}`);
}

function exercicio_3() {
    var nome = askForText("Qual o seu nome?");
    var idade = askForNumber("Quantos anos você tem?");

    while (nome == null) {
        nome = askForText("Por favor, não deixe o seu nome em branco");
    }
    while (idade == null) {
        idade = askForNumber("Por favor, insira um número válido que represente a sua idade");
    }

    alert(`Olá ${nome}, você tem ${parseInt(idade)} anos`);
}

function exercicio_4_1() {
    var Altura = askForNumber("Insira a altura do retângulo");
    var Base = askForNumber("Insira a base do retângulo");

    while (Altura == null) {
        Altura = askForNumber("Por favor, insira um número válido que represente a altura do retângulo");
    }
    while (Base == null) {
        Base = askForNumber("Por favor, insira um número válido que represente a base do retângulo");
    }

    var Calculo = Base * Altura;
    alert(`A área do retângulo é igual a: ${Calculo}`);
}

function exercicio_4_2(){
    var Lado = askForNumber("Insira o lado do quadrado");

    while (Lado == null) {
        Lado = askForNumber("Por favor, insira um número válido que represente o lado do quadrado");
    }

    var Calculo = Lado * Lado;
    alert(`A área do quadrado é igual a: ${Calculo}`);
}

function exercicio_4_3() {
    var DiagonalMaior = askForNumber("Insira a diagonl maior do losângulo");
    var DiagonalMenor = askForNumber("Insira a diagonal menor do losângulo");

    while (DiagonalMaior == null) {
        DiagonalMaior = askForNumber("Por favor, insira um número válido que represente a diagonal maior do losângulo");
    }
    while (DiagonalMenor == null) {
        DiagonalMenor = askForNumber("Por favor, insira um número válido que represente a diagonal menor do losângulo");
    }

    var Calculo = DiagonalMaior * DiagonalMenor / 2;
    alert(`A área do losângulo é igual a: ${Calculo}`);
}

function exercicio_4_4() {
    var BaseMaior = askForNumber("Insira a base maior do trapézio");
    var BaseMenor = askForNumber("Insira a base menor do trapézio");
    var Altura = askForNumber("Insra a altura do trapézio");

    while (BaseMaior == null) {
        BaseMaior = askForNumber("Por favor, insira um número válido que represente a base maior do trapézio");
    }
    while (BaseMenor == null) {
        BaseMenor = askForNumber("Por favor, insia um número válido que represente a base menor do trapézio");
    }
    while (Altura == null) {
        Altura = askForNumber("Por favor, insira um número válido que represente a altura do trapézio");
    }

    var Calculo = (BaseMaior + BaseMenor) * Altura / 2;
    alert(`A área do trapézio é igual a: ${Calculo}`);
}

function exercicio_4_5() {
    var Base = askForNumber("Insira a base do paralelograma");
    var Altura = askForNumber("Insira a altura do paralelograma");

    while (Base == null) {
        Base = askForNumber("Por favor, insira um número valido que represente a base do paralelograma");
    }
    while (Altura == null) {
        Altura = askForNumber("Por favor, insira um número valido que represente a altura do paralelograma");
    }

    var Calculo = Base * Altura;
    alert(`A área do paralelograma é igual a: ${Calculo}`);
}

function exercicio_4_6(){
    var Base = askForNumber("Insira a base do triângulo");
    var Altura = askForNumber("Insira a altura do triângulo");

    while (Base == null) {
        Base = askForNumber("Por favor, insira um número que represente a base do triângulo");
    }
    while (Altura == null) {
        Altura = askForNumber("Por favor, insira um número que represente a altura do triângulo");
    }

    var Calculo = Base * Altura / 2;
    alert(`A area do triângulo é igual a: ${Calculo}`);
}

function exercicio_4_7() {
    var Raio = askForNumber("Insira o raio do círculo");
    
    while (Raio == null) {
        Raio = askForNumber("Por favor, insira um número que represente o raio do círculo");
    }

    var Calculo = Math.PI * Math.pow(Raio, 2);
    alert(`A área do circulo é igual a: ${Calculo}`);
}

function exercicioDeResposta(questao) {
    var Resposta = Resposta = ListaDeRespostas[questao]
    
    if (questao != 6) {
        alert(Resposta)
    } else {
        alert(Resposta)
        let oqueVoceDigitou = prompt(`Isso seria um exemplo de uso da função "prompt()" do java script`)
        alert(`O prompt(), pega oque você digita.\nNo caso você enviou: ${oqueVoceDigitou}`)
    }
}