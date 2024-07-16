class BankAccount {
    private _balance: number = 0; //Encapsulation

    get balance():number{
        return this._balance;
    }

    set balance(initBalance:number){
        if (initBalance < 0){
            console.log("you can not initiate a balance with a negative amount")
        }else if (this.balance !==0){
            console.log("you can not set a balance if you already have money in your Bank account , you have to deposit it to be added ")
        }else{
            this._balance = initBalance;
        }
    }

    deposit = (amount:number):void =>{
        //validate Data
        if (amount >=0){
            this._balance += amount;
        }else{
            console.log("the amount should be more than 100");
        }
    }

    withdraw = (amount : number): string =>{
        if (amount> this._balance){
            return "Not enough money in your account";
        }
        else {
            this._balance -= amount;
            return `your balance is ${this._balance}€`;
        }
    }
}
const newBankAcc = new BankAccount();
// !console.log(balance) 
//=> Error : Cannot find name 'balance' due to Encapsulation

newBankAcc.balance= 100

newBankAcc.deposit(100);
console.log(newBankAcc.withdraw(80))

newBankAcc.balance= 100
console.log(newBankAcc.balance)