var enames=["sai","raju","shiva"]
 var i=0
while(i<=enames.length-1){
    console.log(enames[i])
    i++
}
enames.forEach((ename)=>{
    console.log(ename)
})
enames.map((ename)=>{
    console.log(ename)
})
enames.filter