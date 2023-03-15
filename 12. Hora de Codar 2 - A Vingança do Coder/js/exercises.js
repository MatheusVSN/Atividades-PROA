const NUMBER_INVALID_QUESTION = "Por favor, digite um número valido";
const STRING_INVALID_QUESTION = "Por favor, preencha a caixa de texto";
const CURRENT_YEAR = new Date().getFullYear();

function getTheHighestNumber(Array, Ammount) {
    let NumbersArray = Array
    let FinalArray = []
    for (let i = 1; i <= Ammount; i += 1) {
        let Highest = null;
        for (let index = 0; index < NumbersArray.length; index += 1) {
            let PresumedNumber = NumbersArray[index];
            if (!Highest || PresumedNumber > Highest) {
                Highest = PresumedNumber;
            }
        }

        FinalArray.push(Highest);
        NumbersArray.splice(NumbersArray.indexOf(Highest), 1);
    }

    return FinalArray
}

function checkIntegrity(argument) {
    if (typeof (argument) == "string") {
        return ((argument.length == 0 || argument.trim()) && argument || null);
    }
    return null;
}

function askForNumber(argument) {
    let PresumedNumber = Number(prompt(argument));
    while (isNaN(PresumedNumber)) {
        PresumedNumber = Number(prompt(NUMBER_INVALID_QUESTION));
    }

    return PresumedNumber;
}

function askForString(argument) {
    let PresumedString = prompt(argument);
    while (!PresumedString) {
        PresumedString = prompt(STRING_INVALID_QUESTION);
    }

    return PresumedString;
}


function exercicio_1() {
    let FirstNumber = askForNumber("Digite um número");
    let SecondNumber = askForNumber("Digite outro número");

    let Resposta =
        FirstNumber > SecondNumber && `O primeiro número(${FirstNumber}) é maior do que o segundo número(${SecondNumber})` ||
        FirstNumber < SecondNumber && `O segundo número(${SecondNumber}) é maior do que o primeiro número(${FirstNumber})` ||
        `Ambos os números são iguais e obtem o valor de: ${FirstNumber}`;

    alert(Resposta);
}

function exercicio_2() {
    let PresumedNumber = askForNumber("Digite um número");

    let Resposta =
        PresumedNumber > 0 && `O número que você digitou(${PresumedNumber}) é maior que 0` ||
        PresumedNumber < 0 && `O número que você digitou(${PresumedNumber}) é menor que 0` ||
        `O número que você digitou é igual a 0`;

    alert(Resposta);
}

function exercicio_3() {
    let NumbersArray = [];
    let FirstNumber = askForNumber("Digite o primeiro número");
    let SecondNumber = askForNumber("Digite o segundo número");
    let ThirdNumber = askForNumber("Digite o terceiro número");

    NumbersArray.push(FirstNumber, SecondNumber, ThirdNumber);

    let Highest = getTheHighestNumber(NumbersArray, 1)[0];

    alert(`O maior número entre os 3 números que você digitou é o: ${Highest}`);
}

function exercicio_4() {
    let NumbersArray = [];
    let FirstNumber = askForNumber("Digite o primeiro número");
    let SecondNumber = askForNumber("Digite o segundo número");
    let ThirdNumber = askForNumber("Digite o terceiro número");

    NumbersArray.push(FirstNumber, SecondNumber, ThirdNumber);
    let HighestNumbers = getTheHighestNumber(NumbersArray, 2);
    let Calculations = HighestNumbers[0] + HighestNumbers[1];

    alert(`A some entre os maiores números que você digitou: ${HighestNumbers[0]} e ${HighestNumbers[1]} é igual a: ${Calculations}`);
}

function exercicio_5() {
    let NumbersArray = [];
    for (index = 1; index <= 6; index += 1) {
        let PresumedNumber = askForNumber(`[${index}] Digite um número`);
        NumbersArray.push(PresumedNumber);
    }

    let Total = 0;
    let Denominator = NumbersArray.length;

    for (let index = 0; index < Denominator; index += 1) {
        Total += NumbersArray[index];
    }

    Total /= Denominator;

    alert(`A média aritimética dos 6 números que você digitou é igual a: ${Total}`);
}

function exercicio_6() {
    let NumbersArray = [];
    let Quantity = 6;
    for (let index = 1; index <= Quantity; index += 1) {
        let PresumedNumber = askForNumber(`[${index}] Informe um número`);
        NumbersArray.push(PresumedNumber);
    }

    let FirstNumber = NumbersArray[0];
    let LastNumber = NumbersArray[NumbersArray.length - 1];
    let HighestNumber = getTheHighestNumber(NumbersArray, 1);

    alert(`Resultado:\nPrimeiro número: ${FirstNumber}\nUltimo número: ${LastNumber}\nMaior número: ${HighestNumber}`);
}

function exercicio_7() {
    let FinalString = "Números que você digitou: ";
    let NumbersArray = [];
    let NumbersLowerThan72 = [];
    let Total = 0;
    let Quantity = 6;
    for (let index = 1; index <= Quantity; index += 1) {
        let PresumedNumber = askForNumber(`[${index}] Informe um número`);
        NumbersArray.push(PresumedNumber);
        if (PresumedNumber < 72) {
            Total += PresumedNumber;
            NumbersLowerThan72.push(PresumedNumber);    
        }
        FinalString += PresumedNumber + " ";
    }
    FinalString += "\nNúmeros menores que 72 e que vão ser somados: "
    for (let index = 0; index < NumbersLowerThan72.length; index += 1) {
        FinalString += NumbersLowerThan72[index] + " ";
    }
    FinalString += "\nResultado da soma: " + Total;
    alert(FinalString);
}

function exercicio_8() {
    let NumbersArray = [];
    let Media = 0;
    let Total = 0;
    let Quantity = 4;
    for (let index = 1; index <= Quantity; index += 1) {
        let PresumedNumber = askForNumber(`[${index}] Informe um número`);
        while (PresumedNumber > 10 || PresumedNumber < 0) {
            PresumedNumber = askForNumber(`[${index}] Por favor, insira um número entre 0 e 10`);
        }
        Total += PresumedNumber;
    }

    Total /= Quantity;
    let FinalString =
        Total >= 5 && `Você passou no teste` ||
        `Tente novamente`

    FinalString += `\nSua média: ${Total}`;
    alert(FinalString);
}

function exercicio_9() {
    let YearOfBirth = askForNumber(`Digite o ano de seu nascimento`);
    let Age = CURRENT_YEAR - YearOfBirth;

    let FinalString =
        Age >= 16 && `Você pode votar com ${Age} anos de idade` ||
        `Você não pode votar com ${Age} anos de idade, precisa ter no mínimo 16 anos`;

    alert(FinalString);
}

function exercicio_10() {
    let Sexo = askForString("Insira a letra que represente seu sexo\nM = Masculino\nF = Feminino"); // 🤨
    while (Sexo.toUpperCase() != "M" && Sexo.toUpperCase() != "F") {
        Sexo = askForString("Por favor, insira a letra corretamente que represente seu sexo\nM = Masculino\nF = Feminino");
    }

    let Altura = askForNumber("Digite a sua altura");
    let Result = 0
    if (Sexo == "M") {
        Result = (72.7 * Altura) - 58;
    } else {
        Result = (62.1 * Altura) - 44.7;
    }

    alert(`O peso ideal para você é: ${Result}`);
}

function exercicio_micro_calculadora() {
    let FirstNumber = askForNumber("Digite um número");
    let SecondNumber = askForNumber("Digite outro número");
    let Operation = askForNumber("Digite a forma de operação da conta\n1 = Soma\n2 = Subtração\n3 = Multiplicação\n4 = Divisão");

    let Result = 0;
    switch (Operation) {
        case 1:
            Result = FirstNumber + SecondNumber;
            break;
        case 2:
            Result = FirstNumber - SecondNumber;
            break;
        case 3:
            Result = FirstNumber * SecondNumber;
            break;
        case 4:
            Result = FirstNumber / SecondNumber;
            break;
        default:
            alert("Erro desconhecido, tenha certeza de que você colocou uma das operações válidas");
            break;
    }

    alert(`O resultado da operação é: ${Result}`);
}

document.addEventListener("DOMContentLoaded", function () {
    const QUESTIONS = {
        "1-5": document.getElementById("questions1-5"),
        "6-10": document.getElementById("questions6-10"),
        "microCalculadora": document.getElementById("microCalculadora")
    }
    const Question1_6 = document.getElementById("1-5click");
    const Question6_10 = document.getElementById("6-10click");
    const MicroCalculator = document.getElementById("microCalculadoraClick");

    function ToggleElements(Argument) {
        Question1_6.setAttribute("class", Argument == 1 ? "active" : "notActive");
        Question6_10.setAttribute("class", Argument == 2 ? "active" : "notActive");
        MicroCalculator.setAttribute("class", Argument == 3 ? "active" : "notActive");
    
        QUESTIONS["1-5"].style.display = Argument == 1 ? "block" : "none";
        QUESTIONS["6-10"].style.display = Argument == 2 ? "block" : "none";
        QUESTIONS["microCalculadora"].style.display = Argument == 3 ? "block" : "none";
    }

    Question1_6.addEventListener("click", function() {
        ToggleElements(1);
    })
    Question6_10.addEventListener("click", function() {
        ToggleElements(2);
    })
    MicroCalculator.addEventListener("click", function() {
        ToggleElements(3);
    })
});
