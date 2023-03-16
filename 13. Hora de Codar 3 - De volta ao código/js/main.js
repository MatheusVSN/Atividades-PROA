const NUMBER_INVALID_QUESTION = "Por favor, digite um número valido";
const STRING_INVALID_QUESTION = "Por favor, preencha a caixa de texto";

class Student {
    constructor(name, grade) {
        this.Name = name
        this.Grade = grade
    }

    getMedia() {
        let Total = 0;
        for (let index = 0; index < this.Grade.length; index += 1) {
            Total += this.Grade[index];
        }

        Total /= this.Grade.length
        return Total
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
    let FinalString = "";
    for (let index = 10; index > 0; index -= 1) {
        if (index != 1) {
            FinalString += `${index}, `
        } else {
            FinalString += index
        }
    }
    console.log(FinalString);
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

        let PresumedStudent = new Student(StudentIndex, [FirstGrade, SecondGrade]);
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
        if (PresumedStudent.getMedia() >= 9.5) {
            ApprovedStudents[PresumedStudent.Name] = PresumedStudent.getMedia();
            FinalString += `O aluno ${PresumedStudent.Name} está aprovado com média de: ${PresumedStudent.getMedia()}\n`;
            ApprovedStudentsQuantity += 1;
        }
    }
    alert(`${FinalString}\n No total foram ${ApprovedStudentsQuantity} de ${StudentIndex} estudantes aprovados`);
}

function exercicio_7() {
    let FinalString = "";
    let Exams = [];
    for (let ExamIndex = 1; ExamIndex <= 6; ExamIndex += 1) {
        let ExamGrade = askForNumber(`Digite a nota do aluno na prova ${ExamIndex}`);
        while (ExamGrade < 0 || ExamGrade > 10) {
            ExamGrade = askForNumber(`Por favor, digite um número que esteja entre 0 e 10`);
        }
        Exams.push(ExamGrade);
    }

    let PresumedStudent = new Student(1, Exams);
    FinalString += `A média do aluno é igual a: ${PresumedStudent.getMedia()}\n`;
    alert(FinalString);
}

function exercicio_8() {
    let FinalString = "";
    let StartRange = 1;
    let EndRange = parseInt(askForNumber(`Digite um número maior que 0`));
    while (EndRange <= 0) {
        EndRange = parseInt(askForNumber(`Digite um número maior que 0`));
    }

    for (StartRange; StartRange <= EndRange; StartRange += 1) {
        if (StartRange != EndRange) {
            FinalString += `${StartRange}, `
        } else {
            FinalString += StartRange
        }
    }
    console.log(FinalString);
    alert(`Cheque o console do seu navegador`);
}

function exercicio_9() {
    let StartRange = 100;
    let EndRange = StartRange + 10;
    let FinalString = "";

    for (StartRange; StartRange <= EndRange; StartRange += 1) {
        if (StartRange == 100) {
            continue;
        } else if (StartRange != EndRange) {
            FinalString += `${StartRange}, `;
        } else {
            FinalString += StartRange;
        }
    }

    console.log(FinalString);
    alert(`Cheque o console do seu navegador`);
}

function exercicio_10() {
    let FinalString = "";
    let StartRange = 1;
    let EndRange = parseInt(askForNumber(`Escolha o limite onde a tabuada vai\n(obs: a tabuada vai começar no 1)`));

    while (EndRange < StartRange) {
        EndRange = parseInt(askForNumber(`Por favor, digite um número maior que ${StartRange}`));
    }
    
    FinalString += `\\ Tabuada do ${StartRange} ao ${EndRange} \\\n`;
    for (StartRange; StartRange <= EndRange; StartRange += 1) {
        FinalString += `\\ Tabuada do ${StartRange} \\\n`
        for (let Multiplier = 1; Multiplier <= 10; Multiplier += 1){
            if (Multiplier != 10) {
                FinalString += `${StartRange} * ${Multiplier} = ${StartRange * Multiplier}, `;
            } else {
                FinalString += `${StartRange} * ${Multiplier} = ${StartRange * Multiplier}`;
            }
            FinalString += "\n";
        }
        FinalString += "\n\n";
    }

    console.log(FinalString);
    alert(`Cheque o colsone do seu navegador`);
}

function exercicio_11() {
    let Min = 24;
    let Max = 42;

    let FinalString = "";

    let NumbersArray = [];
    NumbersArray["WithinRange"] = [];
    NumbersArray["OutsideRange"] = [];

    for (let index = 1; index <= 10; index += 1) {
        let PresumedNumber = askForNumber(`[${index}] Digite um número`);
        if (PresumedNumber >= Min && PresumedNumber <= Max) {
            NumbersArray["WithinRange"].push(PresumedNumber);
        } else {
            NumbersArray["OutsideRange"].push(PresumedNumber);
        }
    }

    let FirstPart = `${NumbersArray["WithinRange"].length} estão dentro do intervalo\n${NumbersArray["WithinRange"].slice(0, NumbersArray["WithinRange"].length)}`;
    let FinalPart = `${NumbersArray["OutsideRange"].length} estão fora do intervalo\n${NumbersArray["OutsideRange"].slice(0, NumbersArray["OutsideRange"].length)}`;

    FinalString += FirstPart;
    FinalString += `\n\n`;
    FinalString += FinalPart;

    alert(FinalString);
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
