const PASSWORD = 2678;
const NUMBER_INVALID_QUESTION = "Por favor, digite um número válido";
const STRING_INVALID_QUESTION = "Por favor, preencha a caixa de texto";
const COMANDO_PARAR_DIARIA = "PARE";
const ANOS_PARA_DIARIA_GRATUITA = 6;
const ANOS_PARA_MEIA_DIARIA = 60;

var Verified = false;
var NomeDoHotel = prompt(`Qual o nome do hotel`);
alert(`O nome do Hotel é ${NomeDoHotel}`);
var NomeDoUsuario = prompt(`Qual o seu nome?`);

function askForNumber(argument) {
    let PresumedNumber = Number(prompt(argument));
    while (isNaN(PresumedNumber)) {
        PresumedNumber = Number(prompt(`${NUMBER_INVALID_QUESTION}\n${argument}`));
    }

    return PresumedNumber;
}

function askForString(argument) {
    let PresumedString = prompt(argument);
    while (!PresumedString) {
        PresumedString = prompt(`${STRING_INVALID_QUESTION}\n${argument}`);
    }

    return PresumedString;
}

function askForPassword() {
    let PresumedPassword = Number(prompt(`Por favor ${NomeDoUsuario}, digite a senha`));

    while (PresumedPassword != PASSWORD) {
        PresumedPassword = Number(prompt(`Senha errada! Tente novamente`));
    }

    Verified = true
}

function Main() {
    if (Verified == false) {
        askForPassword();
    }

    alert(`Bem vindo ao Hotel ${NomeDoHotel}, ${NomeDoUsuario}. É um imenso prazer ter você or aqui!`);

    let Escolha = parseInt(prompt(`Selecione uma opção\n[1] Quantos quartos são?\n[2] Como soletra?\n[3] Com "S" ou com "Z"\n[4] Festa ou trabalho?\n[5] Hora de comer\n[6] Auditório para quantos?\n[7] Que horas você pode?\n[8] Álcool ou gasolina?\n[9] Ar puro, finalmente\n[10] Sair`));

    switch (Escolha) {
        case 1:
            QuantosQuartosSao();
            break;
        case 2:
            ComoSoletra();
            break;
        case 3:
            ComSouZ();
            break;
        case 4:
            FestaOuTrabalho();
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            Sair();
            break;
        default:
            Error();
            break;
    }
}

function QuantosQuartosSao() {
    let ValorPadraoDaDiaria = askForNumber(`Qual o valor padrão da diária?`);
    while (ValorPadraoDaDiaria <= 0) {
        ValorPadraoDaDiaria = askForNumber(`Valor inválido ${NomeDoUsuario}\nDigite um número maior que 0`);
    }

    let Diarias = askForNumber(`Quantas diárias serão necessárias?`);
    while (Diarias <= 0 || Diarias > 30) {
        Diarias = askForNumber(`Valor inválido ${NomeDoUsuario}\nDigite um número entre 0 e 30`);
    }

    let Preco = ValorPadraoDaDiaria * Diarias;
    Preco = Preco.toFixed(2);
    alert(`O valor de ${Diarias} dia(s) de hospedagem é de R$${Preco}`);

    let NomeDoHospede = askForString(`Qual o nome do hospede?`);
    let Confirmacao = askForString(`${NomeDoUsuario}, você confirma a hospedagem para ${NomeDoHospede} por ${Diarias}? S/N`);
    Confirmacao = Confirmacao.toUpperCase();
    while (Confirmacao != "S" && Confirmacao != "N") {
        Confirmacao = askForString(`Por favor, escolha S ou N`);
        Confirmacao = Confirmacao.toUpperCase();
    }

    alert(Confirmacao == "S" ? `${NomeDoUsuario}, reserva efetuada para ${NomeDoHospede}. O valor total é de R$${Preco}` : `${NomeDoUsuario}, reserva não efetuada`);
    Main();
}

function ComoSoletra() {
    let ValorTotal = 0;
    let ValorMeia = 0;
    let ValorGratuidade = 0;
    let HospedeIndex = 0;

    let ValorDaDiaria = askForNumber(`Qual o valor da diária?`);
    while (ValorDaDiaria <= 0) {
        alert(`Por favor, insira um número maior que 0`);
        ValorDaDiaria = askForNumber(`Qual o valor da diária?`);
    }

    function novo_cadastro() {
        HospedeIndex += 1;
        let NomeDoHospede = askForString(`[${HospedeIndex}º] Qual o nome do hóspede?`);
        if (NomeDoHospede != COMANDO_PARAR_DIARIA) {
            let Idade = askForNumber(`Qual a idade do hóspede?`);
            if (Idade <= ANOS_PARA_DIARIA_GRATUITA) {
                ValorGratuidade += 1
                alert(`${NomeDoHospede} cadastrado(a) com sucesso. ${NomeDoHospede} possui gratuidade`);
            } else if (Idade >= ANOS_PARA_MEIA_DIARIA) {
                ValorMeia += 1
                ValorTotal += ValorDaDiaria / 2;
                alert(`${NomeDoHospede} cadastrado(a) com sucesso. ${NomeDoHospede} paga meia`);
            } else {
                ValorTotal += ValorDaDiaria
                alert(`${NomeDoHospede} cadastrado(a) com sucesso.`);
            }
            novo_cadastro();
            return
        }

        ValorTotal = ValorTotal.toFixed(2);
        alert(`${NomeDoUsuario}, o valor total das hospedagens é: R$${ValorTotal}; ${ValorGratuidade} gratuidade(s); ${ValorMeia} meia(s)`);
        Main();
    }

    novo_cadastro();
}

function ComSouZ() {
    let ListaDeHospedes = [];

    function cadastrar() {
        if (ListaDeHospedes.length >= 15) {
            alert(`Máximo de cadastros atingido`);
            main();
            return
        }

        let NomeDoHospede = askForString(`Qual o nome do hóspede?`);
        ListaDeHospedes.push(NomeDoHospede);
        alert(`Hóspede ${NomeDoHospede} cadastrado com sucesso`);
        main();
    }

    function pesquisar() {
        let NomeDoHospede = askForString(`Qual o nome do hóspede?`);
        let Encontrado = ListaDeHospedes.includes(NomeDoHospede);
        let FinalString = Encontrado == true ? `${NomeDoHospede} foi encontrado(a)!` : `${NomeDoHospede} não foi encontrado(a)!`;

        alert(FinalString);
        main();
    }

    function listar() {
        let FinalString = `Lista de Hóspedes:\n`

        ListaDeHospedes.forEach(index => {
            FinalString += `${index}\n`;
        })

        alert(FinalString);
        main();
    }

    function main() {
        let Escolha = askForNumber(`Bem-vindo a aba de hóspedes! Por favor, escolha uma opção\n[1] Cadastro\n[2] Pesquisar\n[3] Listar\n[4] Sair`)

        switch(Escolha) {
            case 1:
                cadastrar();
                break;
            case 2:
                pesquisar();
                break;
            case 3:
                listar();
                break;
            case 4:
                Main();
                break;
            default:
                alert(`Por favor, escolha um número entre 1 e 4`);
                main();
                break;
        }
    }

    main();
}

function FestaOuTrabalho() {
    let Total = 0;

    let DuracaoDoEventoEmHoras = askForNumber(`Qual a duração do evento em horas?`);
    while (DuracaoDoEventoEmHoras <= 0) {
        alert(`Por favor, insira um número maior que 0`);
        DuracaoDoEventoEmHoras = askForNumber(`Qual a duração do evento em horas?`);
    }

    let QuantidadeDeGarcons = askForNumber(`Quantos garçons serão necessários?`);
    while (QuantidadeDeGarcons <= 0) {
        alert(`Por favor, insira um número maior que 0`);
        QuantidadeDeGarcons = askForNumber(`Quantos garçons serão necessários?`);
    }

    for (let index = 1; index <= QuantidadeDeGarcons; index += 1) {
        Total += DuracaoDoEventoEmHoras * 10.50;
    }

    Total = Total.toFixed(2);

    alert(`O custo total é: R$${Total}`);
    let Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`);
    Confirmacao = Confirmacao.toUpperCase();
    while (Confirmacao != "S" && Confirmacao != "N") {
        alert(`Por favor, escolha S ou N`);
        Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`);
        Confirmacao = Confirmacao.toUpperCase();
    }

    alert(Confirmacao == "S" ? `${NomeDoUsuario}, reserva efetuada com sucesso` : `${NomeDoUsuario}, reserva não efetuada`);
    Main();
}

function Error() {
    alert(`Por favor, escolha um número entre 1 e 10`);
    Main();
}

function Sair() {
    window.close();
}

Main();