const NUMBER_INVALID_QUESTION = "Por favor, digite um número valido"


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

    return PresumedNumber
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