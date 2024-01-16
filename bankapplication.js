var option = "0";
var bankBalance = 5000;

do {
    console.log("--------------------------");
    console.log("Enter the operation that you want to perform");
    console.log("1.Deposit");
    console.log("2.Withdrawal");
    console.log("3.Transfer");
    console.log("0.Logout");
    console.log("--------------------------");

    option = window.prompt("Enter the operation");
    console.log("Selected option is", option);

    switch (option) {
        case "0":
            break;
        case "1": {
            var amount = Number.parseInt(window.prompt("Enter the amount to deposit"));
            if (amount > 0) {
                console.log("Amount " + amount + " deposited successfully");
                bankBalance += amount;
                console.log("Remaining Bank Balance is " + bankBalance);
            } else {
                console.log("Enter a correct amount");
            }
            break;
        }
        case "2": {
            var amount = Number.parseInt(window.prompt("Enter the amount to withdraw"));
            if (amount <= bankBalance && amount > 0) {
                console.log("Amount " + amount + " withdrawn successfully");
                bankBalance -= amount;
                console.log("Remaining Bank Balance is " + bankBalance);
            } else {
                console.log("Insufficient funds or invalid amount");
            }
            break;
        }
        case "3": {
            var transferAmount = Number.parseInt(window.prompt("Enter the amount to transfer"));
            var targetAccountNo = Number.parseInt(window.prompt("Enter the target Bank Account Number"));

            if (transferAmount <= bankBalance && transferAmount > 0) {
                console.log("Amount " + transferAmount + " transferred successfully to Bank Account " + targetAccountNo);
                bankBalance -= transferAmount;
                console.log("Remaining Bank Balance is " + bankBalance);
            } else {
                console.log("Insufficient funds or invalid amount");
            }
            break;
        }
        default:
            console.log("Enter a valid option");
    }

} while (option !== "0");
