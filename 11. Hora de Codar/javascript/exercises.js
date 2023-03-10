function checkEmptyString(str) {
    return (str.length == 0 || !str.trim());
}

function exercicio_1() {
    var nomeDoCarro = "Fusca";
    alert(`O nome do carro é ${nomeDoCarro}`);
}

function exercicio_2() {
    var nome = prompt("Qual o seu nome?");
    while(checkEmptyString(nome)) {
        nome = prompt("Por favor, não deixe o texto em branco");
    }
    alert(`Olá, ${nome}`);
}

function exercicio_3() {
    var nome = prompt("Qual o seu nome?");
    var idade = parseInt(prompt("Qual a sua idade?"));

    while (isNaN(idade)) {
        idade = parseInt(prompt("Por favor, digite um número válido"));
    }

    alert(`Olá ${nome}, você tem ${idade} anos`);
}

function exercicio_4_1() {
    var Altura = Number(prompt("Insira a altura do retângulo"));
    var Base = Number(prompt("Insira a base do retângulo"));

    while (isNaN(Altura)) {
        Altura = Number(prompt("Por favor, insira um número válido que represente a altura do retângulo"));
    }
    while (isNaN(Base)) {
        Base = Number(prompt("Por favor, insira um número válido que represente a base do retângulo"));
    }

    var Calculo = Base * Altura;
    alert(`A área do retângulo é igual a: ${Calculo}`);
}

function exercicio_4_2(){
    var Lado = Number(prompt("Insira o lado do quadrado"));

    while (isNaN(Lado)) {
        Lado = Number(prompt("Por favor, insira um número válido que represente o lado do quadrado"));
    }

    var Calculo = Lado * Lado;
    alert(`A área do quadrado é igual a: ${Calculo}`);
}

function exercicio_4_3() {
    var DiagonalMaior = Number(prompt("Insira a diagonl maior do losângulo"));
    var DiagonalMenor = Number(prompt("Insira a diagonal menor do losângulo"));

    while (isNaN(DiagonalMaior)) {
        DiagonalMaior = Number(prompt("Por favor, insira um número válido que represente a diagonal maior do losângulo"));
    }
    while (isNaN(DiagonalMenor)) {
        DiagonalMenor = Number(prompt("Por favor, insira um número válido que represente a diagonal menor do losângulo"));
    }

    var Calculo = DiagonalMaior * DiagonalMenor / 2;
    alert(`A área do losângulo é igual a: ${Calculo}`);
}

function exercicio_4_4() {
    var BaseMaior = Number(prompt("Insira a base maior do trapézio"));
    var BaseMenor = Number(prompt("Insira a base menor do trapézio"));
    var Altura = Number(prompt("Insra a altura do trapézio"));

    while (isNaN(BaseMaior)) {
        BaseMaior = Number(prompt("Por favor, insira um número válido que represente a base maior do trapézio"));
    }
    while (isNaN(BaseMenor)) {
        BaseMenor = Number(prompt("Por favor, insia um número válido que represente a base menor do trapézio"));
    }
    while (isNaN(Altura)) {
        Altura = Number(prompt("Por favor, insira um número válido que represente a altura do trapézio"));
    }

    var Calculo = (BaseMaior + BaseMenor) * Altura / 2;
    alert(`A área do trapézio é igual a: ${Calculo}`);
}

function exercicio_4_5() {
    var Base = Number(prompt("Insira a base do paralelograma"));
    var Altura = Number(prompt("Insira a altura do paralelograma"));

    while (isNaN(Base)) {
        Base = Number(prompt("Por favor, insira um número valido que represente a base do paralelograma"));
    }
    while (isNaN(Altura)) {
        Altura = Number(prompt("Por favor, insira um número valido que represente a altura do paralelograma"));
    }

    var Calculo = Base * Altura;
    alert(`A área do paralelograma é igual a: ${Calculo}`);
}

function exercicio_4_6(){
    var Base = Number(prompt("Insira a base do triângulo"));
    var Altura = Number(prompt("Insira a altura do triângulo"));

    while (isNaN(Base)) {
        Base = Number(prompt("Por favor, insira um número que represente a base do triângulo"));
    }
    while (isNaN(Altura)) {
        Altura = Number(prompt("Por favor, insira um número que represente a altura do triângulo"));
    }

    var Calculo = Base * Altura / 2;
    alert(`A area do triângulo é igual a: ${Calculo}`);
}

function exercicio_4_7() {
    var Raio = Number(prompt("Insira o raio do círculo"));
    
    while (isNaN(Raio)) {
        Raio = Number(prompt("Por favor, insira um número que represente o raio do círculo"));
    }

    var Calculo = Math.PI * Math.pow(Raio, 2);
    alert(`A área do circulo é igual a: ${Calculo}`);
}