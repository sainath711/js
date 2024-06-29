let goToGoa=(Success,Failure)=>{
    let bank_Bal=600;
    if(bank_Bal>10000){
        Success('Go and Enjoy')
    }
    else{
        Failure('GO to prostack and practice')
    }
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})