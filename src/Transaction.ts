// Transacao.ts
export class Transaction {
    description: string;
    amount: number;

    constructor(description: string, amount: number) {
        this.description = description;
        this.amount = amount;
    }
}
