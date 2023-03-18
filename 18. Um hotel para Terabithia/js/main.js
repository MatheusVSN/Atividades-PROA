const NUMBER_INVALID_QUESTION = "Por favor, digite um número valido";

const PASSWORD = 2678;
const DIARIA_MAXIMA = 30;
const ANOS_PARA_DIARIA_GRATUITA = 6;
const ANOS_PARA_MEIA_DIARIA = 60;
const COMANDO_PARAR_DIARIA = "PARE";
const QUANTIDADE_DE_LITROS = 42;

var Hospedes = [];
var Verificado = false;
var NomeDoUsuario = "";

function ask_for_string(argument) {
    let PresumedString = prompt(argument);
    while (!PresumedString) {
        PresumedString = prompt(STRING_INVALID_QUESTION);
    }

    return PresumedString;
}

function check_for_password(Nome) {
    let PresumedPassword = Number(prompt(`Olá ${Nome}, digite a senha do Hotel`));

    return (PresumedPassword == PASSWORD);
}

function ask_for_number(argument) {
    let PresumedNumber = Number(prompt(argument));
    while (isNaN(PresumedNumber)) {
        PresumedNumber = Number(prompt(NUMBER_INVALID_QUESTION));
    }

    return PresumedNumber;
}

var NomeDoHotel = ask_for_string(`Qual o nome você gostaria de colocar para o hotel?`);
alert(`O nome do hotel é ${NomeDoHotel}`);

function Main() {
    if (!Verificado) {
        NomeDoUsuario = ask_for_string(`Digite o seu nome de usuário`);
        let Senha = check_for_password(NomeDoUsuario);

        while (!Senha) {
            Senha = check_for_password(NomeDoUsuario);
        }

        Verificado = true;
    }

    alert(`Bem-vindo ao hotel ${NomeDoHotel}, ${NomeDoUsuario}. É um imenso prazer ter você por aqui!`);

    let Opcao = parseInt(prompt(`Selecione uma opção\n[1] Reserva de quartos\n[2] Cadastro de Hóspedes\n[3] Abastecimento de carros\n[4] Sair`));

    switch (Opcao) {
        case 1:
            reserva_de_quartos();
            break;
        case 2:
            cadastro_de_hospedes();
            break;
        case 3:
            abastecimento_de_carros();
            break;
        case 4:
            sair();
            break;
        default:
            error();
            break;
    }
}

function reserva_de_quartos() {
    let ValorPadraoDiaria = ask_for_number(`Qual o valor padrão da diaria?`);

    while (ValorPadraoDiaria < 0) {
        alert(`Valor inválido, ${NomeDoUsuario}`);
        ValorPadraoDiaria = ask_for_number(`Qual o valor padrão da diaria?`);
    }

    let Diarias = ask_for_number(`Quantas diárias serão necessárias?`);
    while (Diarias < 0 || Diarias > DIARIA_MAXIMA) {
        alert(`Valor inválido, ${NomeDoUsuario}`);
        Diarias = ask_for_number(`Quantas diárias serão necessárias?`);
    }

    let Calculo = ValorPadraoDiaria * Diarias;
    alert(`O valor de 10 dias de hospedagem é de R$${Calculo}`);

    let NomeDoHospede = ask_for_string(`Qual o nome do hóspede?`);
    let Confirmacao = ask_for_string(`${NomeDoUsuario}, você confirma a hospedagem para ${NomeDoHospede} por 10 dias? S/N`);
    while (Confirmacao.toUpperCase() != "S" && Confirmacao.toUpperCase() != "N") {
        alert(`Por favor, escolha entre\nS(sim) e N(não)`);
        Confirmacao = ask_for_string(`${NomeDoUsuario}, você confirma a hospedagem para ${NomeDoHospede} por 10 dias? S/N`);
    }

    if (Confirmacao.toUpperCase() == "S") {
        alert(`${NomeDoUsuario}, reserva efetuada para ${NomeDoHospede}. O valor total é de R$${Calculo}.`);
        Main();
    } else {
        alert(`${NomeDoUsuario}, reserva não efetuada`);
        Main();
    }
}

function cadastro_de_hospedes() {
    let ValorTotal = 0;
    let ValorMeia = 0;
    let ValorGratuidade = 0;
    let HospedeIndex = 0;

    let ValorDaDiaria = ask_for_number(`Qual o valor da diária?`);
    while (ValorDaDiaria <= 0) {
        alert(`Por favor, insira um número maior que 0`);
        ValorDaDiaria = ask_for_number(`Qual o valor da diária?`);
    }

    function novo_cadastro() {
        HospedeIndex += 1;
        let NomeDoHospede = ask_for_string(`[${HospedeIndex}º] Qual o nome do hóspede?`);
        if (NomeDoHospede != COMANDO_PARAR_DIARIA) {
            let Idade = ask_for_number(`Qual a idade do hóspede?`);
            if (Idade > ANOS_PARA_MEIA_DIARIA) {
                ValorMeia += 1
                ValorTotal += ValorDaDiaria / 2;
            } else if (Idade >= ANOS_PARA_DIARIA_GRATUITA) {
                ValorTotal += ValorDaDiaria
            } else {
                ValorGratuidade += 1
            }
            alert(`${NomeDoHospede} cadastrado com sucesso!`);
            novo_cadastro();
            return
        }

        alert(`${NomeDoUsuario}, o valor total das hospedagens é: ${ValorTotal}; ${ValorGratuidade} gratuidade(s); ${ValorMeia} meia(s)`);
        Main();
    }

    novo_cadastro();
}

function abastecimento_de_carros() {
    let AlcoolWayneOil = ask_for_number(`Qual o valor do álcool no posto Wayne Oil`);
    let GasolinaWayneOil = ask_for_number(`Qual o valor da gasolina no posto Wayne Oil?`);
    let AlcoolStarkPetrol = ask_for_number(`Qual o valor do álcool no posto Stark Petrol`);
    let GasolinaStarkPetrol = ask_for_number(`Qual o valor da gasolina no posto Stark Petrol?`);

    AlcoolWayneOil *= QUANTIDADE_DE_LITROS;
    GasolinaWayneOil *= QUANTIDADE_DE_LITROS;
    AlcoolStarkPetrol *= QUANTIDADE_DE_LITROS;
    GasolinaStarkPetrol *= QUANTIDADE_DE_LITROS;

    let PostoWayneRelacaoPreco = (AlcoolWayneOil / GasolinaWayneOil);
    let PostoStarkRelacaoPreco = (AlcoolStarkPetrol / GasolinaStarkPetrol);

    let PostoEmConta = null;
    let ModoDeCombustivel = null;

    if (PostoWayneRelacaoPreco < PostoStarkRelacaoPreco) {
        PostoEmConta = "Wayne Oil";
        ModoDeCombustivel = PostoWayneRelacaoPreco <= 0.7 ? "álcool" : "gasolina";
    } else {
        PostoEmConta = "Stark Petrol";
        ModoDeCombustivel = PostoStarkRelacaoPreco <= 0.7 ? "álcool" : "gasolina";
    }

    alert(`${NomeDoUsuario}, é mais barato abastecer com ${ModoDeCombustivel} no posto ${PostoEmConta}.`);
    Main();
}

function sair() {
    let Confirma = confirm(`Você realmente deseja sair, ${NomeDoUsuario}?`);
    if (!Confirma) {
        Main();
        return
    }

    alert(`Muito obrigado e até logo, ${NomeDoUsuario}.`)
    window.close();
}

function errror() {
    alert(`Opção inválida, informe um número entre 1 e 4`);
    Main();
}

Main();