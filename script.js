// key press off with out number
const numberInputs = document.querySelectorAll("input[type='text']");

numberInputs.forEach((input) => {
  input.addEventListener("input", function (event) {
    const sanitizedValue = event.target.value.replace(/[^0-9]/g, "");
    event.target.value = sanitizedValue;
  });
});
// key press off with out number

const monthlyIncome = document.getElementById("Monthly_Income");

const tithesAmount = document.getElementById("Tithes_amount");
const savingsAmount = document.getElementById("Savings_amount");
const netAmountForBills = document.getElementById("netAmountForBills");
const calculateAmountForBills = () => {
  const inputValue = monthlyIncome.value;
  const tithesIncome = (parseFloat(inputValue) / 100) * 10;
  const savingsAmountPerMonth = (parseFloat(inputValue) / 100) * 10;
  tithesAmount.textContent = tithesIncome ? tithesIncome.toFixed(2) : 0;
  savingsAmount.textContent = savingsAmountPerMonth
    ? savingsAmountPerMonth?.toFixed(2)
    : 0;
  const TotalAmount = inputValue - (tithesIncome + savingsAmountPerMonth);
  netAmountForBills.textContent = TotalAmount ? TotalAmount?.toFixed(2) : 0;
};
const mortgage = document.getElementById("mortgage");
const carNote = document.getElementById("carNote");
const insurance = document.getElementById("insurance");
const creditCard = document.getElementById("creditCard");
const internet = document.getElementById("internet");
const cable = document.getElementById("cable");
const cellPhone = document.getElementById("cellPhone");
const securitySystem = document.getElementById("securitySystem");
const electric = document.getElementById("electric");
const water = document.getElementById("water");
const otherUtilies = document.getElementById("otherUtilies");
const childCareTuition = document.getElementById("childCareTuition");
const studentLoans = document.getElementById("studentLoans");
const otherLoans = document.getElementById("otherLoans");
const houseKeeper = document.getElementById("houseKeeper");
const lawnCare = document.getElementById("lawnCare");
const monthlyFixedExpenses = document.getElementById("monthlyFixedExpenses");
// Get all input elements with class "numberInput"
const expensesInputs = document.querySelectorAll(".numberInput");
const totalSpan = document.getElementById("totalExpenses");

function calculateTotal() {
  let total = 0;
  numberInputs.forEach((input) => {
    total += parseFloat(input.value) || 0;
  });
  totalSpan.textContent = total;
}

calculateTotal();

numberInputs.forEach((input) => {
  input.addEventListener("input", calculateTotal);
});
calculateAmountForBills();
/* 
insurance
    ? parseFloat(insurance.value)
    : 0 + creditCard
    ? parseFloat(creditCard.value)
    : 0 + internet
    ? parseFloat(internet.value)
    : 0 + cable
    ? parseFloat(cable.value)
    : 0 + cellPhone
    ? parseFloat(cellPhone.value)
    : 0 + securitySystem
    ? parseFloat(securitySystem.value)
    : 0 + electric
    ? parseFloat(electric.value)
    : 0 + water
    ? parseFloat(water.value)
    : 0 + otherUtilies
    ? parseFloat(otherUtilies.value)
    : 0 + childCareTuition
    ? parseFloat(childCareTuition.value)
    : 0 + studentLoans
    ? parseFloat(studentLoans.value)
    : 0 + otherLoans
    ? parseFloat(otherLoans.value)
    : 0 + houseKeeper
    ? parseFloat(houseKeeper.value)
    : 0 + lawnCare
    ? parseFloat(lawnCare.value)
    : 0 + monthlyFixedExpenses
    ? parseFloat(monthlyFixedExpenses.value)
    : 0;
*/
