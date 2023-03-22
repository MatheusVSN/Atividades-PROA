const PASSWORD = 2678;
const NUMBER_INVALID_QUESTION = "Por favor, digite um número válido";
const STRING_INVALID_QUESTION = "Por favor, preencha a caixa de texto";
const COMANDO_PARAR_DIARIA = "PARE";
const ANOS_PARA_DIARIA_GRATUITA = 6;
const ANOS_PARA_MEIA_DIARIA = 60;
const QUANTIDADE_MAXIMA_DO_SALAO = 350;
const QUANTIDADE_MAXIMA_DO_AUDITORIO = 350;
const QUANTIDADE_DE_LITROS = 40;

const VALORES_COMIDA = {
    "Cafe": { Preco: 0.8, QuantiaPorConvidado: 0.2 },
    "Agua": { Preco: 0.4, QuantiaPorConvidado: 0.5 },
    "Salgado": { Preco: 34, QuantiaPorConvidado: 7 },
}

const AUDITORIOS = {
    "Laranja": { Lugares: 150, Adicionais: 70 },
    "Colorado": { Lugares: 350, Adicionais: 0 }
}

const DIA_DA_SEMANA = {
    1: "domingo",
    2: "segunda",
    3: "terca",
    4: "quarta",
    5: "quinta",
    6: "sexta",
    7: "sabado"
}

class EmpresaArCondicionado {
    constructor(nome, preco) {
        this.Nome = nome;
        this.Preco = preco;
    }
}

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

function findWhitinObject(objectValue, string) {
    let Found = null;
    for (let Index in objectValue) {
        let CurrentIndex = objectValue[Index];
        if (CurrentIndex == string) {
            Found = { index: Index, dia: CurrentIndex };
        }
    }

    return Found;
}

var DiaInvalido = "Por favor, insira um dia da semana válido.\nLista de dias disponíveis:\n";
for (let index in DIA_DA_SEMANA) {
    DiaInvalido += `[${index}] ${DIA_DA_SEMANA[index]}\n`;
}


const OPCOES = {
    1: QuantosQuartosSao,
    2: ComoSoletra,
    3: ComSouZ,
    4: FestaOuTrabalho,
    5: HoraDeComer,
    6: AuditorioParaQuantos,
    7: QueHorasVocePode,
    8: AlcoolOuGasolina,
    9: ArPuroFinalmente,
    10: Sair
}

function Main() {
    if (Verified == false) {
        askForPassword();
    }

    alert(`Bem vindo ao Hotel ${NomeDoHotel}, ${NomeDoUsuario}. É um imenso prazer ter você or aqui!`);
    let Escolha = parseInt(prompt(`Selecione uma opção\n[1] Quantos quartos são?\n[2] Como soletra?\n[3] Com "S" ou com "Z"\n[4] Festa ou trabalho?\n[5] Hora de comer\n[6] Auditório para quantos?\n[7] Que horas você pode?\n[8] Álcool ou gasolina?\n[9] Ar puro, finalmente\n[10] Sair`));
    let Check = Escolha >= 1 && Escolha <= 10 ? 1 : 2;

    switch (Check) {
        case 1:
            OPCOES[Escolha]();
            break;
        default:
            alert(`Por favor, escolha um número entre 1 e 10`);
            Main();
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
    let Confirmacao = askForString(`${NomeDoUsuario}, você confirma a hospedagem para ${NomeDoHospede} por ${Diarias} dias? S/N`).toUpperCase();
    while (Confirmacao != "S" && Confirmacao != "N") {
        alert(`Por favor, escolha S ou N`);
        Confirmacao = askForString(`${NomeDoUsuario}, você confirma a hospedagem para ${NomeDoHospede} por ${Diarias} dias? S/N`).toUpperCase();
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

        switch (Escolha) {
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
    let Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`).toUpperCase();
    while (Confirmacao != "S" && Confirmacao != "N") {
        alert(`Por favor, escolha S ou N`);
        Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`);
    }

    alert(Confirmacao == "S" ? `${NomeDoUsuario}, reserva efetuada com sucesso` : `${NomeDoUsuario}, reserva não efetuada`);
    Main();
}

function HoraDeComer() {
    let NumerosDeConvidados = askForNumber(`Qual o número de convidados para o evento`);
    while (NumerosDeConvidados <= 0 || NumerosDeConvidados > QUANTIDADE_MAXIMA_DO_SALAO) {
        alert(NumerosDeConvidados <= 0 ? `Por favor, digite um número maior que 0` : `Quantidade de convidados superior à capacidade máxima`);
        NumerosDeConvidados = askForNumber(`Qual o número de convidados para o evento`);
    }

    let ValorTotal = 0;
    /*
    Tive que dividir o calculo em pedaços
    */
    ValorTotal += (((NumerosDeConvidados * VALORES_COMIDA["Salgado"].QuantiaPorConvidado) * VALORES_COMIDA["Salgado"].Preco) * 0.01);
    ValorTotal += ((NumerosDeConvidados * VALORES_COMIDA["Cafe"].QuantiaPorConvidado) * VALORES_COMIDA["Cafe"].Preco);
    ValorTotal += ((NumerosDeConvidados * VALORES_COMIDA["Agua"].QuantiaPorConvidado) * VALORES_COMIDA["Agua"].Preco);

    ValorTotal = ValorTotal.toFixed(2);

    let QuantidadeDeCafe = NumerosDeConvidados * VALORES_COMIDA["Cafe"].QuantiaPorConvidado;
    let QuantidadeDeAgua = NumerosDeConvidados * VALORES_COMIDA["Agua"].QuantiaPorConvidado;
    let QuantiaDeSalgados = NumerosDeConvidados * VALORES_COMIDA["Salgado"].QuantiaPorConvidado;

    alert(`O evento precisará de ${QuantidadeDeCafe} litros de café, ${QuantidadeDeAgua} litros de água, ${QuantiaDeSalgados} salgados. O custo total do evento será de R$${ValorTotal}`);

    let Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`).toUpperCase();
    while (Confirmacao != "S" && Confirmacao != "N") {
        alert(`Por favor, escolha S ou N`);
        Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`).toUpperCase();
    }

    alert(Confirmacao == "S" ? `${NomeDoUsuario}, reserva efetuada com sucesso` : `${NomeDoUsuario}, reserva não efetuada`);
    Main();
}

function AuditorioParaQuantos() {
    let FinalString = "";
    let NumerosDeConvidados = askForNumber(`Qual o número de convidados para o seu evento?`);
    while (NumerosDeConvidados <= 0 || NumerosDeConvidados > QUANTIDADE_MAXIMA_DO_AUDITORIO) {
        alert(NumerosDeConvidados <= 0 ? `Por favor, digite um número maior que 0` : `Quantidade de convidados superior à capacidade máxima`);
        NumerosDeConvidados = askForNumber(`Qual o número de convidados para o evento`);
    }

    if (NumerosDeConvidados < (AUDITORIOS["Laranja"].Lugares + AUDITORIOS["Laranja"].Adicionais)) {
        if (NumerosDeConvidados < AUDITORIOS["Laranja"].Lugares) {
            FinalString = `Use o auditório Laranja`;
        } else {
            FinalString = `User o auditório Laranja (Inclua mais ${NumerosDeConvidados - AUDITORIOS["Laranja"].Lugares} cadeiras)`;
        }
    } else {
        FinalString = `Use o auditório Colorado`;
    }

    alert(FinalString);

    let Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`).toUpperCase();
    while (Confirmacao != "S" && Confirmacao != "N") {
        alert(`Por favor, escolha S ou N`);
        Confirmacao = askForString(`Gostaria de efetuar a reserva? S/N`).toUpperCase();
    }

    alert(Confirmacao == "S" ? `${NomeDoUsuario}, reserva efetuada com sucesso` : `${NomeDoUsuario}, reserva não efetuada`);
    Main();
}

function QueHorasVocePode() {
    let DiaDoEvento = askForString(`Qual o dia do seu evento?`).toLocaleLowerCase();
    let DiaEncontrado = findWhitinObject(DIA_DA_SEMANA, DiaDoEvento);
    let Range = { Minimo: 0, Maximo: 0 };
    /*
    DiaEncontrado tenta encontrar pelo constante "DIA_DA_SEMANA" o dia que o usuario colocou
    Ele retorna 2 valores:
        index : number = equivalente ao número do dia
        dia : string = equivalente ao nome do dia
    */

    while (!DiaEncontrado) {
        alert(DiaInvalido);
        DiaDoEvento = askForString(`Qual o dia do seu evento?`).toLocaleLowerCase();
        DiaEncontrado = findWhitinObject(DIA_DA_SEMANA, DiaDoEvento);
    }

    let HorarioDito = askForNumber(`Qual a hora do seu evento?`);
    while (HorarioDito < 0 || HorarioDito > 24) {
        alert(HorarioDito < 0 ? `Por favor, insira um número maior que 0` : `Por favor, insira um número menor que 24`);
        HorarioDito = parseInt(askForNumber(`Qual a hora do seu evento>`));
    }

    if (DiaEncontrado.index <= 1) {
        // Domingo 
        Range.Minimo = 7
        Range.Maximo = 15

        if (HorarioDito < Range.Minimo || HorarioDito > Range.Maximo) {
            alert(`Restaurante indisponível`);
            Main();
            return
        }

        let NomeDaEmpresa = askForString(`Qual o nome da empresa?`);
        alert(`Restaurante reservado para ${NomeDaEmpresa}. ${DiaDoEvento} as ${HorarioDito}hs`);
        Main();
        return;
    }

    // Restantes dos dias
    Range.Minimo = 7;
    Range.Maximo = 23;

    if (HorarioDito < Range.Minimo || HorarioDito > Range.Maximo) {
        alert(`Restaurante indisponível`);
        Main();
        return
    }

    let NomeDaEmpresa = askForString(`Qual o nome da empresa?`);
    alert(`Restaurante reservado para ${NomeDaEmpresa}. ${DiaDoEvento} as ${HorarioDito}hs`);
    Main();
}

function AlcoolOuGasolina() {
    let AlcoolWayneOil = askForNumber(`Qual o valor do álcool no posto Wayne Oil`) * QUANTIDADE_DE_LITROS;
    let GasolinaWayneOil = askForNumber(`Qual o valor da gasolina no posto Wayne Oil?`) * QUANTIDADE_DE_LITROS;
    let AlcoolStarkPetrol = askForNumber(`Qual o valor do álcool no posto Stark Petrol`) * QUANTIDADE_DE_LITROS;
    let GasolinaStarkPetrol = askForNumber(`Qual o valor da gasolina no posto Stark Petrol?`) * QUANTIDADE_DE_LITROS;

    let MaisBarato = {
        "Gasolina": {
            Posto: null,
            Preco: null
        },

        "Alcool": {
            Posto: null,
            Preco: null
        }
    }

    function pegar_posto_mais_barato() {
        let GasolinaMaisBarata = GasolinaStarkPetrol < GasolinaWayneOil;
        let AlcoolMaisBarato = AlcoolStarkPetrol < AlcoolWayneOil;

        MaisBarato["Gasolina"].Posto = GasolinaMaisBarata == true ? "Stark Petrol" : "Wayne Oil";
        MaisBarato["Gasolina"].Preco = GasolinaMaisBarata == true ? GasolinaStarkPetrol : GasolinaWayneOil;

        MaisBarato["Alcool"].Posto = AlcoolMaisBarato == true ? "Stark Petrol" : "Wayne Oil";
        MaisBarato["Alcool"].Preco = AlcoolMaisBarato == true ? AlcoolStarkPetrol : AlcoolWayneOil;
    }

    pegar_posto_mais_barato();
    let Comparacao = (MaisBarato.Alcool.Preco) / (MaisBarato.Alcool.Preco + MaisBarato.Gasolina.Preco) * 100;
    if (Comparacao <= 70) {
        alert(`${NomeDoUsuario}, é mais barato abastecer com Alcool no posto ${MaisBarato["Alcool"].Posto}`);
        Main();
        return
    }
    alert(`${NomeDoUsuario}, é mais barato abastecer com Gasolina no posto ${MaisBarato["Gasolina"].Posto}`);
    Main();
}

function ArPuroFinalmente() {
    let ListaDeEmpresas = [];

    function pegar_o_menor_orcamento() {
        let MenorOrcamento = Infinity;
        let Empresa = null;
        for (let Index in ListaDeEmpresas) {
            if (ListaDeEmpresas[Index].Preco < MenorOrcamento) {
                MenorOrcamento = ListaDeEmpresas[Index].Preco;
                Empresa = ListaDeEmpresas[Index].Nome;
            }
        }

        return { Nome: Empresa, Valor: MenorOrcamento }
    }

    function main() {
        let NomeDaEmpresa = askForString(`Qual o nome da empresa?`);
        let ValorCobrado = askForNumber(`Qual o valor por aparelho?`);
        let QuantidadeDeAparelhos = askForNumber(`Qual a quantidade de aparelhos?`);
        let PorcentagemDesconto = askForNumber(`Qual a porcentagem de desconto?`);
        let QuantidadeMinimaParaDesconto = askForNumber(`Qual o número mínimo de aparelhos para conseguir o desconto?`);

        let ValorTotal = QuantidadeDeAparelhos < QuantidadeMinimaParaDesconto ? (ValorCobrado * QuantidadeDeAparelhos) :
            (ValorCobrado * QuantidadeDeAparelhos) * ((100 - PorcentagemDesconto) / 100);

        let EmpresaProperty = new EmpresaArCondicionado(NomeDaEmpresa, ValorTotal);
        ListaDeEmpresas.push(EmpresaProperty)

        alert(`O serviço de ${NomeDaEmpresa} custará R$ ${ValorTotal.toFixed(2)}`);

        if (ListaDeEmpresas.length <= 1) {
            alert(`Por favor ${NomeDoUsuario}, insira mais uma empresa para completar a quantidade mínima de empresas`);
            main();
            return;
        }

        let Confirmacao = askForString(`Deseja informar novos dados, ${NomeDoUsuario}? (S/N)`).toUpperCase();
        while (Confirmacao != "S" && Confirmacao != "N") {
            alert(`Por favor, escolha S ou N`);
            Confirmacao = askForString(`Deseja informar novos dados, ${NomeDoUsuario}? (S/N)`).toUpperCase();
        }

        if (Confirmacao == "S") {
            main();
            return;
        }

        let MenorOrcamento = pegar_o_menor_orcamento();
        alert(`O orçamento menor de menor valor é o [${MenorOrcamento.Nome} por R$ ${MenorOrcamento.Valor.toFixed(2)}]`);

        Main();
        return;
    }

    main();
}

function Sair() {
    alert(`Muito obrigado por usar o hotel ${NomeDoHotel}, ${NomeDoUsuario}`);
    window.close();
}

Main();
