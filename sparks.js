function openForm() {
   document.getElementById("myForm").style.display = "block";
}
function closeForm() {
   document.getElementById("myForm").style.display = "none";
}
function transaction() {
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      span.onclick = function() 
      {
         modal.style.display = "none";
      }
      
}
function sendMoney(){
   var myAccountBalance = document.getElementById("myBalance").innerText;
   var enterName = document.getElementById("mailofreceiver").value;   
   var enterAmount = parseInt(document.getElementById("amttobesent").value);
   if (enterAmount > myAccountBalance) {
      alert("Insufficient Balance.")
   }
   else {
      
      var findUserBankAccount = enterName;
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      
      var myAccountBalance = parseInt(document.getElementById("myBalance").innerText) - enterAmount;
     
      document.getElementById("myBalance").innerText = myAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`"TRANSACTION SUCCESSFULL" \n$${enterAmount} is sent to ${enterName}`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`"$${enterAmount}" was sent to "${enterName}" on "${Date()}."`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

