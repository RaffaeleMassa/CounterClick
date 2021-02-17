let numberElement = document.querySelector("#number");
let plusElement= document.querySelector("#click-1");
let minusElement= document.querySelector("#click-2");
let resetElement= document.querySelector("#reset");
let textElement = document.querySelector("#text");



plusElement.addEventListener("click",function(){
    const count = numberElement.innerHTML++;
       if (count === 10) {
        textElement.innerHTML=" YEAH !";
    } else if ( count === 50){
        textElement.innerHTML= "You Are Crazy";
    } else if (count === 100) {
        textElement.innerHTML= "STOP IT, COME BACK";
    } else {
        return textElement;
    }
  
})

minusElement.addEventListener("click", function(e) {
    const count = numberElement.innerHTML--;

})

resetElement.addEventListener("click",function(){
    numberElement.innerHTML=0;
    textElement.innerHTML= "Click Counter!"

})