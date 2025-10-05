let accountBalance = 0;
let cashBalance = 0;
let transactionCount = 0;

function calc(change) {
    let input = document.getElementById('my_input');
    let currentValue = parseInt(input.value) || 0;
    input.value = currentValue + change;
}

function performOperation() {
    const type = document.getElementById('operationType').value;
    const amount = parseInt(document.getElementById('operationAmount').value);
    const history = document.querySelector('.history-block');

    if (isNaN(amount) || amount <= 0) {
		alert("ไม่สามารถดำเนินรายการได้\nโปรดระบุจำนวนที่มากกว่า 0");
        return;
    }
	

    if (type === 'deposit') {
        accountBalance += amount;
        cashBalance += amount;
        transactionCount++;
        history.innerHTML += `<p>${transactionCount}. Deposit: ${amount} THB, New account balance: ${accountBalance} THB, New cash balance: ${cashBalance}</p>`;
    } else if (type === 'withdraw') {
        if (amount > accountBalance) {
            alert("Insufficient account balance.");
            return;
        }
        accountBalance -= amount;
        cashBalance -= amount;
        transactionCount++;
        history.innerHTML += `<p>${transactionCount}. Withdrawal: ${amount}, New account balance: ${accountBalance}, New cash balance: ${cashBalance}</p>`;
    }

    document.getElementById('accountBalanceInput').value = accountBalance;
    document.getElementById('cashBalanceInput').value = cashBalance;
    document.getElementById('operationAmount').value = 0;
    

    history.scrollTop = history.scrollHeight;
}