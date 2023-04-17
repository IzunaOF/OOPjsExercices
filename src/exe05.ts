interface ContaCorrenteProps{
    identifier: string,
    name: string,
    saldo?: number
}

class ContaCorrent <ContaCorrenteProps> {
    account: ContaCorrenteProps;
    saldo: number
    constructor(correntista: ContaCorrenteProps) {
        this.account = correntista
    }
    updateName(){

    }
    pocket(v:number){
        return correntista.account.saldo !== undefined ? correntista.account.saldo -= v : correntista.account.saldo = v
    }
    deposito(v:number){
        return correntista.account.saldo !== undefined ? correntista.account.saldo += v : correntista.account.saldo = v
    }
}

const correntista = new ContaCorrent<ContaCorrenteProps>({identifier: '0123', name: 'Corentista Nome'})
