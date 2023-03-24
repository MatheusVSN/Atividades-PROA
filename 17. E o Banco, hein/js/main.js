const PASSWORD = 3589;

var saldo = 100.5; //Float
var Nome = prompt(`Olá, qual é o seu nome?`);
alert(`Olá ${Nome} é um prazer ter você por aqui!`);

class Produto {
    constructor(nome, valor) {
        this.Nome = nome,
        this.Preco = valor
    }
}

class Deposito {
    constructor(nome, valor) {
        this.Nome = nome;
        this.Valor = valor
    }
}

var Compras = [
    new Produto("Café 3 Corações", 19.90),
    new Produto("Netflix", 15.50),
    new Produto("Fone bluetooth", 23.50),
    new Produto("Arroz", 19.50),
    new Produto("Feijão", 16.90),
    new Produto("Carne", 23.65),
];
var Depositos = [
    new Deposito("Depósito", 20.30),
    new Deposito("Depósito", 23.50),
    new Deposito("Depósito", 15.50)
];
var Transferencias = [];

function ask_for_string(string){
    let Question = prompt(string);
    if (string.length === 0 || !string.trim()) {
        Question = prompt(`Por favor, não deixe a caixa de texto em branco\n${string}`);
    }

    return Question
}

function check_for_password() {
    let PresumedPassword = Number(prompt(`Olá ${Nome}, digite a sua senha`));

    while (PresumedPassword != PASSWORD) {
        alert(`A senha informada está incorreta`);
        PresumedPassword = Number(prompt(`Olá ${Nome}, digite a sua senha`));
    }
}

function inicio() {
    let Escolha = parseInt(prompt(`Seja bem-vindo ${Nome}! Escolha uma das opções abaixo:\n[1] Saldo\n[2] Extrato\n[3] Saque\n[4] Depósito\n[5] Transferência\n[6] Sair`));

    switch (Escolha) {
        case 1:
            check_for_password();
            ver_saldo();
            break;
        case 2:
            check_for_password();
            ver_extrato();
            break;
        case 3:
            check_for_password();
            fazer_saque();
            break;
        case 4:
            check_for_password();
            fazer_deposito();
            break;
        case 5:
            check_for_password();
            fazer_transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function ver_extrato() {
    let FinalString = `Informações do extrato:\n\n`

    FinalString += `Compras: \n`
    for (index in Compras) {
        let PresumedProduct = Compras[index];
        FinalString += `Nome: ${PresumedProduct.Nome} - Valor: ${PresumedProduct.Preco}\n`;
    }

    FinalString += `\n`;
    FinalString += `Depósitos: \n`;
    for (let index = 1; index < Depositos.length; index += 1) {
        let PresumedProduct = Depositos[index];
        FinalString += `[${index}] ${PresumedProduct.Nome} - Valor: ${PresumedProduct.Valor}\n`;
    }
    if (Transferencias.length > 0) {
        FinalString += `\n`;
        FinalString += `Transferências: \n`;
        for (let index = 0; index < Transferencias.length; index += 1) {
            let PresumedTransfer = Transferencias[index];
            FinalString += `Recebente: ${PresumedTransfer.Nome} - Valor: ${PresumedTransfer.Preco}\n`;
        }
    }

    alert(FinalString);
    inicio();
}

function fazer_transferencia() {
    let PersonToTransfer = ask_for_string(`Digite o nome da pessoal em que você quer transferir o dinheiro`);
    let Quantity = Number(prompt(`Digite a quantia para a transferência`));

    if (isNaN(Quantity) || Quantity === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } else {
        if (Quantity > saldo || Quantity <= 0) {
            alert(`Operação não autorizada`);
            inicio();
            return
        }

        saldo -= Quantity;
        let NewValue = new Produto(PersonToTransfer, Quantity);
        Transferencias.push(NewValue);
        inicio();
    }
}

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function fazer_deposito() {
    var deposito = Number(prompt('Qual o valor para depósito?'));
    // Not a Number
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } else {
        if (deposito <= 0) {
            alert(`Operação não autorizada`);
            inicio();
            return;
        }
        saldo += deposito;
        Depositos.push(new Deposito("Depósito", deposito));
        ver_saldo();
    }
}

function fazer_saque() {
    var saque = Number(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um número:');
        fazer_saque();
    } else {
        if (saque > saldo) {
            alert(`Você não pode sacar mais do que o seu saldo\nSeu saldo: ${saldo}\nValor do saque: ${saque}`);
            inicio();
            return;
        } else if (saque <= 0) {
            alert(`Operação não autorizada`);
            inicio();
            return;
        }
        saldo -= saque;

        ver_saldo();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`${Nome}, foi um prazer ter você por aqui!`)
        window.close();
    } else {
        inicio();
    }
}



inicio();