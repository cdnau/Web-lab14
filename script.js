var accountBalance = 1000
var cashBalance = 1000
var transactionCount = 1

function getElementValue(id){
    return parseInt(document.getElementById(id).value) || 0
}

function setElementValue(id, value){
    document.getElementById(id).value = value
}

function logTransaction(message){
    var history = document.querySelector('.history-block')
    history.innerHTML += "<p>" + transactionCount + ". " + message + "</p>"
    history.scrollTop = history.scrollHeight
}

function updateBalanceDisplay(){
    setElementValue("accountBalanceInput", accountBalance)
    setElementValue("cashBalanceInput", cashBalance)
}

document.addEventListener("DOMContentLoaded", function(){
    var msg = "Current account balance: " + accountBalance + ", Current cash balance: " + cashBalance
    logTransaction(msg) 
    updateBalanceDisplay()
    transactionCount = 1 
})

function calc(change){
    var input = document.getElementById("my_input")
    var now = parseInt(input.value) || 0
    input.value = now + change
}

function performOperation(){
    var type = document.getElementById("operationType").value
    var amount = getElementValue("operationAmount")

    if(amount <= 0){
        alert("ไม่สามารถดำเนินรายการได้\nโปรดระบุจำนวนที่มากกว่า 0")
        return
    }

    var text = ""

    if(type === "deposit"){
        if(amount > cashBalance){
            alert("ยอดเงินสดไม่พอสำหรับการฝาก\nกรุณาลองใหม่อีกครั้ง")
            return
        }
        accountBalance += amount
        cashBalance -= amount
        text = "Deposit: " + amount
    }else if(type === "withdraw"){
        if(amount > accountBalance){
            alert("ยอดเงินในบัญชีไม่พอสำหรับการถอน\nกรุณาลองใหม่อีกครั้ง")
            return
        }
        accountBalance -= amount
        cashBalance += amount
        text = "Withdrawal: " + amount
    }

    transactionCount++
    var msg = text + " | Balance Information: Current account Balance: " + accountBalance + ", Current cash balance: " + cashBalance
    logTransaction(msg)
    updateBalanceDisplay()
    setElementValue("operationAmount", 0)
}

function updateAccountBalance() {
    var input = document.getElementById('accountBalanceInput')
    var newAmount = parseInt(input.value)
    
    if (isNaN(newAmount) || newAmount < 0) {
        alert("โปรดระบุจำนวนที่ถูกต้องและไม่ติดลบ")
        input.value = accountBalance
        return 
    }
    
    var oldAccountBalance = accountBalance
    accountBalance = newAmount
    
    transactionCount++
    var msg = "Set Account Balance: from " + oldAccountBalance + " to " + newAmount + " | Balance Information: Current account Balance: " + accountBalance + ", Current cash balance: " + cashBalance
    logTransaction(msg)
    updateBalanceDisplay()
}

function updateCashBalance() {
    var input = document.getElementById('cashBalanceInput')
    var newAmount = parseInt(input.value)
    
    if (isNaN(newAmount) || newAmount < 0) {
        alert("โปรดระบุจำนวนที่ถูกต้องและไม่ติดลบ")
        input.value = cashBalance
        return 
    }
    
    var oldCashBalance = cashBalance
    cashBalance = newAmount

    transactionCount++
    var msg = "Set Cash Balance: from " + oldCashBalance + " to " + newAmount + " | Balance Information: Current account Balance: " + accountBalance + ", Current cash balance: " + cashBalance
    logTransaction(msg)
    updateBalanceDisplay()
}