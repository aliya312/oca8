
 // monthly interest rate       
    monthlyInterestRate = (interestRate / 100) / period          

    // number of payments
    numberOfPayments = loanTerm * period

    // compounded interest rate
    compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)  

    // interest quotient
    interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1)

    // final calculation
    monthlyPayment = loanBalance * interestQuotient;

// gathering the required information

var btn=document.getElementById("btnCalculate");

btnCalculate.onclick=function(){
  var cost=document.getElementById("inCost").value;
  var downPayment=document.getElementById("inDown").value;
  var interest=document.getElementById("inAPR").value;
  var term=document.getElementById("inTerm").value;
 
  var amountBorrowed=cost-downPayment;
  var pmt=calculateMortgage(amountBorrowed, interest, term);
}

function postPayments(payment){
  var htmlEl=document.getElementById("outMonthly");
  htmlEl.innerText="$"+payment;
}

