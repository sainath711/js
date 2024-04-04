class employee{
    constructor(id,name,amount){
        this.emp_id=id
        this.emp_name=name
        this.emp_sal=amount

    }
    insentives(amount){
    this.emp_sal=this.emp_sal+amount
    }
    expenses(amount){
        this.emp_sal=this.emp_sal-amount
    }
    get_Bal(){
        return this.emp_sal
    }
}
    let e1=new employee(101,"sai",10000);
    console.log(e1)

    e1.insentives(1000)
    console.log(e1)

    e1.expenses(2000)
    console.log(e1)

    console.log(e1.get_Bal())
    