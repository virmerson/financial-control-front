// ControleFinanceiro.ts
import { Transaction } from "./Transaction";

export class FinancialControl {
    incomes: Transaction[];
    expenses: Transaction[];

    constructor() {
        this.incomes = [];
        this.expenses = [];
    }

    addIncome(transaction: Transaction): void {
        this.incomes.push(transaction);
    }

    addExpense(transaction: Transaction): void {
        this.expenses.push(transaction);
    }

    getTotalIncome(): number {
        return this.incomes.reduce((total, transaction) => total + transaction.amount, 0);
    }

    getTotalExpense(): number {
        return this.expenses.reduce((total, transaction) => total + transaction.amount, 0);
    }
}
