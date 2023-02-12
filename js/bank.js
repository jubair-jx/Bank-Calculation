//Step 1 Select a ID By Selector
let depositField = document.getElementById("deposit-field");
let depositBtn = document.getElementById("deposit-btn");

//step : 2 add addEventListner this selector
depositBtn.addEventListener("click", () => {
  //step 3 : when we get a value then we will use a .value method
  let newFinalDepositStr = depositField.value;
  let correctFinalDepoNumber = parseFloat(newFinalDepositStr);

  //step 4 : select a deposit money id
  let finalMoney = document.getElementById("deposit-money");

  //step 5 : get the current total amount
  let previousTotalFinalMoneyStr = finalMoney.innerText;
  let correctPreviousMoney = parseFloat(previousTotalFinalMoneyStr);

  let currentDepositTotal = correctFinalDepoNumber + correctPreviousMoney;
  finalMoney.innerText = currentDepositTotal;

  //step 6 : clear the input field
  depositField.value = "";

  // step 7 : get the total balance this account
  let picInitBalance = document.getElementById("total-balance");
  let prepicInitBalanceStr = picInitBalance.innerText;
  let picInitBalanceNum = parseFloat(prepicInitBalanceStr);

  let directTotalAmount = picInitBalanceNum + correctFinalDepoNumber;
  picInitBalance.innerText = directTotalAmount;
});
