// Import necessary classes
import { FinancialControl } from "./FinancialControl";
import { Transaction } from "./Transaction";

// Create instance of FinancialControl class
const financialControl = new FinancialControl();

// Function to add transaction
function addTransaction(description: string, amount: string, type: string) {
    const transaction = new Transaction(description, parseFloat(amount));
    if (type === 'income') {
        financialControl.addIncome(transaction);
    } else {
        financialControl.addExpense(transaction);
    }
    updateTransactions();
    updateBalance();
}

// Function to update transaction list
function updateTransactions() {
    const transactionsList = document.getElementById('transactions');
    
    if (transactionsList) {
        transactionsList.innerHTML = '';
        
        financialControl.incomes.forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
            transactionsList.appendChild(listItem);
        });
        
        financialControl.expenses.forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
            transactionsList.appendChild(listItem);
        });
    } else {
        console.error('Failed to update transactions: Transactions list element not found.');
    }
}

// Function to update balance
function updateBalance() {
    const totalIncome = financialControl.getTotalIncome();
    const totalExpense = financialControl.getTotalExpense();
    const balance = totalIncome - totalExpense;

    const totalIncomeElement = document.getElementById('total-income');
    const totalExpenseElement = document.getElementById('total-expense');
    const balanceAmountElement = document.getElementById('balance-amount');

    if (totalIncomeElement && totalExpenseElement && balanceAmountElement) {
        totalIncomeElement.textContent = `Total Income: $${totalIncome.toFixed(2)}`;
        totalExpenseElement.textContent = `Total Expense: $${totalExpense.toFixed(2)}`;
        balanceAmountElement.textContent = `Balance: $${balance.toFixed(2)}`;
    } else {
        console.error('Failed to update balance: One or more elements not found.');
    }
}


// Event listener for form submission
document.getElementById('transaction-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const amount = (document.getElementById('amount') as HTMLInputElement).value;
    const type = (document.getElementById('type') as HTMLSelectElement).value;
    addTransaction(description, amount, type);
    (document.getElementById('description') as HTMLInputElement).value = '';
    (document.getElementById('amount') as HTMLInputElement).value = '';
});
