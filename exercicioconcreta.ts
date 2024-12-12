/*abstract class pessoa{
    abstract andar( ): void ;
   }
   
   class guri extends pessoa{
       andar() {
           console.log('guri andado')
       }
   }
   */



   abstract class Conta {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public abstract depositar(valor: number): void;
    public abstract sacar(valor: number): void;

    public transferir(valor: number, contaDestino: Conta): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class ContaCorrente extends Conta {
    private limiteSaque: number;

    constructor(saldoInicial: number, limiteSaque: number) {
        super(saldoInicial);
        this.limiteSaque = limiteSaque;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor > this.limiteSaque) {
            throw new Error("Valor excede o limite de saque.");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    }
}

class ContaPoupanca extends Conta {
    private taxaJuros: number;

    constructor(saldoInicial: number, taxaJuros: number) {
        super(saldoInicial);
        this.taxaJuros = taxaJuros;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    }

    public aplicarJuros(): void {
        this.saldo += this.saldo * this.taxaJuros;
    }
}

class ContaInvestimento extends Conta {
    private taxaJuros: number;

    constructor(saldoInicial: number, taxaJuros: number) {
        super(saldoInicial);
        this.taxaJuros = taxaJuros;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    }

    public aplicarJuros(): void {
        this.saldo += this.saldo * this.taxaJuros;
    }
}

// Exemplo de uso
const contaCorrente = new ContaCorrente(1000, 500);
const contaPoupanca = new ContaPoupanca(2000, 0.05);
const contaInvestimento = new ContaInvestimento(3000, 0.07);

console.log("Saldo Conta Corrente:", contaCorrente.getSaldo());
console.log("Saldo Conta Poupança:", contaPoupanca.getSaldo());
console.log("Saldo Conta Investimento:", contaInvestimento.getSaldo());

contaCorrente.transferir(200, contaPoupanca);
console.log("Saldo Conta Corrente após transferência:", contaCorrente.getSaldo());
console.log("Saldo Conta Poupança após transferência:", contaPoupanca.getSaldo());





