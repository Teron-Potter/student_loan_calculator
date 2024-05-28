function calculate() {
  let loan_amount = document.getElementById('loan_amount').value
  let interest_rate = document.getElementById('interest_rate').value
  let last_paid = document.getElementById('last_paid').value
  let daily_rate = interest_rate / 365;
  let daily_interest = loan_amount * daily_rate;
  let monthly_interest = daily_interest * last_paid;
  alert(monthly_interest);
}