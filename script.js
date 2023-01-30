
const buttons = document.querySelectorAll(".tip-button");
const bill = document.querySelector(".moneyInput");
const people = document.querySelector(".numberOfPeople");
const tip = document.querySelector("#tipAmount");
const total = document.querySelector("#totalAmount");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");
const custom = document.querySelector(".customInput");

custom.addEventListener("input", function(event){

  if(bill.value > 0 && people.value > 0 && custom.value > 0){
    console.log(event.target.value)
    let tipAmount = (bill.value / people.value) * (event.target.value/100);
    tip.innerHTML = tipAmount;
    let totalAmount = (tipAmount*people.value);
    total.innerHTML = totalAmount;
  }
})


// make function for the reset button;
function makeNull() {
  bill.value = "";
  people.value = "";
  custom.value = "";
  tip.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  error.value = "";
  error.style.display = "none";
}


//make function for each button by array and inline methods:
buttons.forEach((oneButton) => {
  oneButton.addEventListener("click", function () {
    if(bill.value > 0 && people.value > 0){
    let tipAmount = (bill.value / people.value) * (oneButton.value / 100);
    tip.innerHTML = tipAmount;
    let totalAmount = (tipAmount*people.value);
    total.innerHTML = totalAmount;
    }
});
});


people.addEventListener("input", function(event){
  // console.log(event.target.value)
  if(event.target.value === "0"){
   error.style.display = "inline";
  }else{
   error.style.display = "none";
  }    
})


