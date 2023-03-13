function checkIntegrity(argument) {
    if (typeof(argument) == "string") {
        return ((argument.length == 0 || argument.trim()) && argument || null)
    } 
    return null
}

function askForNumber(argument) {
    return Number(prompt(argument));
}


function exercicio_1() {
    let FirstNumber = askForNumber("Digite um número");
    while (isNaN(FirstNumber)) {
        FirstNumber = askForNumber("Por favor, digite um número valido");
    }
    let SecondNumber = askForNumber("Digite outro número");

    while (isNaN(SecondNumber)) {
        SecondNumber = askForNumber("Por favor, digite um número valido");
    }

    let Resposta =
        FirstNumber > SecondNumber && `O primeiro número(${FirstNumber}) é maior do que o segundo número(${SecondNumber})` ||
        FirstNumber < SecondNumber && `O segundo número(${SecondNumber}) é maior do que o primeiro número(${FirstNumber})` ||
        `Ambos os números são iguais e obtem o valor de: ${FirstNumber}`;

    alert(Resposta);
}