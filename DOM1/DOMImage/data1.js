const myImage=document.getElementById("my-image");

myImage.addEventListener("mouseover",function(){
    myImage.src="./virat.jpeg";

});
myImage.addEventListener("mouseout",function(){
    myImage.src="./anushka.jpeg"
});