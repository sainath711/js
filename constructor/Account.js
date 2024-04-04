class Account{
    constructor( id, name, amount){
        this.id=id
        this.name=name
        this.acc_Bal=amount
    }
    open_Account(){
        console.log("Account opened successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    withdrawal(amount){
        this.acc_Bal=this.acc_Bal-amount
    }
}
    let a1=new Account(101,"sai",10000)
    let a2=new Account(102,"sainath",20000)
    console.log(a1)
    console.log(a2)


    a1.deposit_Amount(10)
    console.log(a1)

    a1.withdrawal(20)
    console.log(a1)