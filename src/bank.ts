import Branch from "./branch";
import Customer from "./customer";

class Bank {
    private name: string;
    private branches: Branch[];

    constructor(name: string) {
        this.name = name;
        this.branches = [] 
    }

    addBranch(toBeAddedBranch:Branch): boolean {
        if (this.branches.includes(toBeAddedBranch)) {
            return false
        } else {
            this.branches.push(toBeAddedBranch)
            return true
        }
    }

    addCustomer(branch: Branch, toBeAddedCustomer: Customer): boolean {
        if (!this.checkBranch(branch)) {
            return false;
        } else {
            return branch.addCustomer(toBeAddedCustomer); 
        }
    }

    addCustomerTransaction(branch: Branch, id: string, amount: number): boolean {
        if (!this.checkBranch(branch)) {
            return false;
        } else {
            branch.addCustomerTransaction(id, amount)
            return true
        }
    }

    findBranchByName(name: string):Branch[] | null {
        const matchedBranched = this.branches.filter(branch => branch.getName === name)

        if (matchedBranched.length > 0) {
            return matchedBranched
        } else {
            return null
        }
    }

    checkBranch(toBeCheckedBranch: Branch): boolean {
        if (this.branches.find(branch=>branch === toBeCheckedBranch)) {
            return true
        } else {
            return false
        }
    }

    listCustomers(branch: Branch, isTransactionVisible: boolean): boolean {
        if (!this.checkBranch(branch)) {
            return false
        } else {
            console.log(`Customers of branch ${branch.getName}:`);
            
            branch.getCustomers.forEach(customer => {
                console.log(`- ${customer.getName}`)
            
                if (isTransactionVisible) {
                    console.log(` Transaction details: `);
                    customer.getTransactions.map(transaction => {
                        console.log(`- Amount: ${transaction.amount}`);
                        console.log(`- Date: ${transaction.date}`);
                        console.log('------');
                        
                    })
                } else {
                    console.log(`Transition is hidden.`);
                    
                }
            }  
            )
            console.log(`------ End of the list ------`);
            return true
        }
    }
}

export default Bank