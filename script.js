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
const VariableExpenses = document.querySelectorAll(".VariableExpenses");
const totalSpan = document.getElementById("totalExpenses");
const totalVariableExpenses = document.getElementById("totalVariableExpenses");
const netAmount = document.getElementById("netAmountForBill");
const fixedExpensesWealth = document.getElementById("fixedExpensesWealth");
const variableExpensesWealth = document.getElementById(
  "variableExpensesWealth"
);
const NetMonthlyWealth = document.getElementById("NetMonthlyWealth");
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
  calculateNetMonthWealth();
};
function calculateTotal() {
  let total = 0;
  expensesInputs.forEach((input) => {
    total += parseFloat(input.value) || 0;
  });
  totalSpan.textContent = total;
  calculateNetMonthWealth();
}
expensesInputs.forEach((input) => {
  input.addEventListener("input", calculateTotal);
});
function calculateTotalVariableExpenses() {
  let total = 0;
  VariableExpenses.forEach((input) => {
    total += parseFloat(input.value) || 0;
  });
  totalVariableExpenses.textContent = total;
  calculateNetMonthWealth();
}
VariableExpenses.forEach((input) => {
  input.addEventListener("input", calculateTotalVariableExpenses);
});

function calculateNetMonthWealth() {
  const netAmountWealth = parseFloat(netAmountForBills.innerText) || 0;
  const fixedExpenses = parseFloat(totalSpan.innerText) || 0;
  const variableExpenses = parseFloat(totalVariableExpenses.innerText) || 0;
  netAmount.innerText = netAmountForBills.innerText;
  fixedExpensesWealth.innerText = totalSpan.innerText;
  variableExpensesWealth.innerText = totalVariableExpenses.innerText;
  const total = netAmountWealth - (fixedExpenses + variableExpenses);
  NetMonthlyWealth.innerText = total || 0;
}
calculateAmountForBills();
calculateTotal();
calculateTotalVariableExpenses();
calculateNetMonthWealth();
