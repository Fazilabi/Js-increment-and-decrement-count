let num=document.querySelector(".number");
let Upper=document.querySelector(".Upr");
let Lower=document.querySelector(".Lwr");

let count=0;

Upper.addEventListener("click", UpNum);
 

function UpNum(){   
    count++; 
    num.innerHTML=count;
    if(num.innerHTML>'0'){
        num.style.color="green"
    }
    if(num.innerHTML==='0'){
        num.style.color="orange"
    }
    num.animate([{opacity:'0.2'},{opacity:'1'}],{duration:300})
    
}

Lower.addEventListener("click", LowNum);

function LowNum(){
    count--;
    num.innerHTML=count;
    if(num.innerHTML<0){
        num.style.color="red";
    }
    if(num.innerHTML==='0'){
        num.style.color="orange"
    }
    num.animate([{opacity:'0.2'},{opacity:'1'}],{duration:500, fill:'forwards'})

    

}
