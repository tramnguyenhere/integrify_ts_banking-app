import { v4 as uuidv4 } from 'uuid';
import Transaction from './interface';

class Customer {
    private name: string;
    private id: string;
    private transactions: Transaction[]

    constructor(customerName: string) {
        this.name = customerName;
        this.id = uuidv4();
        this.transactions = []
    }

    get getName(): string {
        return this.name;
    }

    get getId(): string {
        return this.id
    }

    get getTransactions(): Transaction[] {
        return this.transactions
    }

    getBalance(): number {
        return this.transactions.reduce((balance, transaction) => balance + transaction.amount, 0);
    }
    
    addTransactions(amount: number): boolean {
        const currentBalance = this.getBalance();
        const transaction:Transaction = {
            amount: amount,
            date: new Date()
        }

        if (currentBalance + amount >= 0) {
            this.transactions.push(transaction);
            return true;
        }
        return false;
    }

}

export default Customer