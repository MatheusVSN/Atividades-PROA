const NUMBER_INVALID_QUESTION = "Por favor, digite um número valido";
const STRING_INVALID_QUESTION = "Por favor, preencha a caixa de texto";

class Student {
    constructor(name, firstGrade, lastGrade, approvedByTest) {
        this.Name = name;
        this.FirstGrade = firstGrade;
        this.LastGrade = lastGrade;
        this.ApprovedByTest = approvedByTest || false;
        this.PresumedTest = null;
        this.ApprovedByTestGrade = null;
    }

    getMedia() {
        return (this.LastGrade + this.FirstGrade) / 2;
    }

    approvedByTest(number, grade) {
        this.ApprovedByTest = true;
        this.PresumedTest = number;
        this.ApprovedByTestGrade = grade
    }
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
    let FirstValue = askForNumber("Digite o número que vai representar o dividendo para a divisão");
    let SecondValue = askForNumber("Digite o número que vai representar o divisor para a divisão");

    while (SecondValue <= 0) {
        SecondValue = askForNumber("Por favor, digite um valor que seja maior que 0");
    }

    let Result = FirstValue / SecondValue;
    alert(`O resultado da divisão é: ${Result}`);
}

function exercicio_2() {
    window.open("./html/timerBomb.html");
}

function exercicio_3() {
    for (let index = 10; index > 0; index -= 1) {
        console.log(index);
    }
    console.log("\n");
    alert("Cheque o console do seu navegador");
}

function exercicio_4() {
    let StartRange = 15;
    let EndRange = 100;
    let Total = 0;
    let Quantity = 0;

    for (StartRange; StartRange <= 100; StartRange += 1) {
        Total += StartRange;
        Quantity += 1;
    }

    Total /= Quantity
    alert(`A média aritimética entre 15 e 100 é igual a: ${Total}`);
}

function exercicio_5() {
    let StartRange = askForNumber("Digite um número que represente o alcance inicial");
    let EndRange = askForNumber("Digite um número que represente o alcance inicial(deve ser maior que o alcance inicial)");

    while (EndRange < StartRange) {
        EndRange = askForNumber("Por favor, digite um número maior que o alcance inicial");
    }

    let OldStart = StartRange
    let Total = 0;
    let Quantity = 0;

    for (StartRange; StartRange <= EndRange; StartRange += 1) {
        Total += StartRange;
        Quantity += 1;
    }

    Total /= Quantity;
    alert(`A média aritimética entre ${OldStart} e ${EndRange} é igual a: ${Total}`);
}

function exercicio_6() {
    let StudentIndex = 1;
    let StudentArray = [];
    let ApprovedStudents = [];

    let ApprovedStudentsQuantity = 0;
    let FinalString = "Lista de alunos aprovados:\n";

    function main() {
        let FirstGrade = askForNumber(`Digite uma nota que representa o aluno ${StudentIndex}`);
        while (FirstGrade < 0 || FirstGrade > 10) {
            FirstGrade = askForNumber(`Por favor, digite um número que esteja entre 0 e 10`);
        }
        let SecondGrade = askForNumber(`Digite a ultima nota nota do aluno ${StudentIndex}`)
        while (SecondGrade < 0 || SecondGrade > 10) {
            SecondGrade = askForNumber(`Por favor, digite um número que esteja entre 0 e 10`);
        }

        let PresumedStudent = new Student(StudentIndex, FirstGrade, SecondGrade);
        if (FirstGrade >= 9.5 || SecondGrade >= 9.5) {
            PresumedStudent.approvedByTest(FirstGrade > 5 ? 1 : 2, FirstGrade > 5 ? FirstGrade : SecondGrade);
        }

        StudentArray.push(PresumedStudent);

        let WantToContinue = confirm(`Deseja calcular a média de outro aluno?`);
        if (WantToContinue == true) {
            StudentIndex += 1;
            main();
        }
    }

    main()

    for (let Index in StudentArray) {
        let PresumedStudent = StudentArray[Index];
        if (PresumedStudent.getMedia() >= 5 && PresumedStudent.ApprovedByTest == false) {
            ApprovedStudents[PresumedStudent.Name] = PresumedStudent.getMedia();
            FinalString += `O aluno ${PresumedStudent.Name} está aprovado com média de: ${PresumedStudent.getMedia()}\n`;
            ApprovedStudentsQuantity += 1;
        } else if (PresumedStudent.ApprovedByTest == true) {
            FinalString += `O aluno ${PresumedStudent.Name} foi aprovado devido tirar 9.5 ou maior na prova ${PresumedStudent.PresumedTest} com nota de: ${PresumedStudent.ApprovedByTestGrade}. Entretanto sua média é: ${PresumedStudent.getMedia()}\n`
            ApprovedStudentsQuantity += 1;
        }
    }


    alert(`${FinalString}\n No total foram ${ApprovedStudentsQuantity} de ${StudentIndex} estudantes aprovados`);
}

document.addEventListener("DOMContentLoaded", function () {
    const QUESTIONS = {
        "1-6": document.getElementById("questions1-6"),
        "7-11": document.getElementById("questions7-11"),
    }
    const Question1_6 = document.getElementById("1-6click");
    const Question7_11 = document.getElementById("7-11click");

    function ToggleElements(Argument) {
        Question1_6.setAttribute("class", Argument == 1 ? "active" : "notActive");
        Question7_11.setAttribute("class", Argument == 2 ? "active" : "notActive");

        QUESTIONS["1-6"].style.display = Argument == 1 ? "block" : "none";
        QUESTIONS["7-11"].style.display = Argument == 2 ? "block" : "none";
    }

    Question1_6.addEventListener("click", function () {
        ToggleElements(1);
    })
    Question7_11.addEventListener("click", function () {
        ToggleElements(2);
    })
});
