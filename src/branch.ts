import Customer from "./customer";

class Branch {
    private name: string;
    private customers: Customer[];

    constructor(branchName: string) {
        this.name = branchName;
        this.customers = []
    }

    get getName(): string {
        return this.name
    }

    get getCustomers(): Customer[] {
        return this.customers
    }

    addCustomer(toBeAddedCustomer:Customer): boolean {
        if (this.customers.includes(toBeAddedCustomer)) {
            return false
        } else {
            this.customers.push(toBeAddedCustomer)
            return true
        }
    }

    addCustomerTransaction(id: string, amount: number): boolean {
        const customer = this.findCustomer(id);
        if (!customer) {
            return false;
        } else {
            customer.addTransactions(amount);
            return true
        }
    }

    findCustomer(id: string): Customer | null{
        const customer = this.customers.find(customer => customer.getId === id);
        if (customer) {
            return customer
        } else {
            return null
        }
    }
}

export default Branch