class Account{
    acc_id;
    acc_Name;
    acc_Bal;
    constructor(id,name,bal){
        this.acc_id=id;
        this.acc_Name=name;
        this.acc_Bal=bal;
    }
}
let a2=new Account(101,"Rahul",10000)
console.log(a2);