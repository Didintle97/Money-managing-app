
let incomeData = [];
const addIncomeData = (event)=>{
    event.preventDefault();
    const source = document.querySelector('form');
    let user1 = {
    incomeSource: document.getElementById('incomeSource').value, 
    Amount: document.getElementById('incomeAmount').value  
} 


incomeData.push(user1);
source.reset();//clears form for next entries 


let pre = document.getElementById('msg');
pre.textContent = '\n' + JSON.stringify(incomeData, '\t', 2);
localStorage.setItem('MoneyData', JSON.stringify(user1));
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('income').addEventListener('click', addIncomeData);
});

const addExpenseData = (event1) =>{
    event1.preventDefault();
    const eSource = document.querySelector('form');
    expenseData = []
    let user1 = {
        expenseName: document.getElementById('expenseName').value,
        expenseAmount: document.getElementById('expenseAmount').value,

    }
    expenseData.push(user1);
    eSource.reset();
    console.warn('added user financial data', {user1});

    let expDisplay = document.getElementById('exp');
    expDisplay.textContent = '\n' + JSON.stringify(expenseData, '\t', 2);
    localStorage.setItem('MoneyData', JSON.stringify(user1));
   }
   document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('expenses').addEventListener('click' ,addExpenseData);
   })




      