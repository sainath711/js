function changeCase(){
   let input_Tag_Ref =document.getElementsByTagName('input')[0]
   let uname=input_Tag_Ref.value
   input_Tag_Ref.value=uname.toUpperCase();

}