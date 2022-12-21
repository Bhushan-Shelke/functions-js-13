let flexButton=document.getElementById("flex-function");
let flexBox=document.getElementById("flex-box")
flexButton.addEventListener("click",function(){
    flexBox.style.flexDirection="column";
}
)
// reverse
let flexButtoon=document.getElementById("flex-functiontwo");
let flexBoox=document.getElementById("flex-box")
flexButtoon.addEventListener("click",function(){
    flexBox.style.flexDirection="row";
}
)


const selectValue=(e) =>{
    document.getElementById("demo").innerHTML=document.getElementById("slct_id").value
    
}