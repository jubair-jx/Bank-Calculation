//step 1 : Select the elememt of ID
let withdrawField = document.getElementById("withdraw-field");
let withdrawBtn = document.getElementById("withdraw-btn");

//step 2 : add a eventLitener with Called id
withdrawBtn.addEventListener("click", () => {
  let newgetValueWithDrawField = parseFloat(withdrawField.value);

  //step 3 : Select a Withdraw amount
  let withdrawTotalAmount = document.getElementById("withdraw-total");
  let pregetWithdrawFinalVal = parseFloat(withdrawTotalAmount.innerText);

  //step 4 : calcute total number
  let currentWithdrawalTotal =
    newgetValueWithDrawField + pregetWithdrawFinalVal;
  withdrawTotalAmount.innerText = currentWithdrawalTotal;

  //step 5 : select a total balance from main balance
  let totalBalance = document.getElementById("total-balance");
  let preTotalBalance = parseFloat(totalBalance.innerText);

  let nowTheTotalBalance = preTotalBalance - newgetValueWithDrawField;

  totalBalance.innerText = nowTheTotalBalance;

  //clear the input field
  withdrawField.value = "";
});
