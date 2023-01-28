const buttons = document.querySelectorAll(".tip-button");
 
const bill=document.querySelector(".moneyInput");

const people=document.querySelector(".numberOfPeople");

const tip=document.querySelector("#tipAmount");
console.log(tip);
const total=document.querySelector("#totalMoney");
console.log(total);

const reset=document.querySelector(".reset");

function makeNull(){
    bill.value="";
    people.value="";
    tip.innerHTML="$0.00";
    total.innerHTML="$0.00";
}

buttons.forEach((button)=>{
    button.addEventListener('click', function () {
        let x = button.value
        console.log(x);
    });
});

// function calculate(){
//     let x=bill.value/people.value;
//     console.log(x);
//     tip.innerHTML=x;

//     let y=x*people.value;
//     console.log(y);
//     total.innerHTML=y;
    
// }









