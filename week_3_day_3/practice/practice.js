function calculate() {
  var subtotal = document.getElementById("subtotal").value;
  var tipPerc = document.getElementById("tipPercentage").value / 100;
  var taxPerc = document.getElementById("taxPercentage").value / 100;
  
  var tipAmt = subtotal * tipPerc;
  var taxAmt = subtotal * taxPerc;
  var totalAmount = parseFloat(subtotal) + parseFloat(taxAmt) + parseFloat(tipAmt);
  

  document.getElementById("calculatedTipAmount").innerHTML = tipAmt; 
  document.getElementById("totalAmount").innerHTML = totalAmount;

}

