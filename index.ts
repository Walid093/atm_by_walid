import inquirer from "inquirer";
let atm_Flag = true;
console.log("==========================================");
const user = await inquirer.prompt([
    {
        type: "string",
        name: "ID",
        message: "Enter the user User ID "
    },
    {
        type: "number",
        name: "Pin",
        message: "Enter User 4 digit pin"
    }
]);
let Balance = Math.floor(Math.random() * (50000000 - 50000 + 1)) + 50000;
while (atm_Flag) {
    console.log("==========================================");
    console.log(` Welcome to myBank - Mr/Mrs/Ms ${user.ID}`);
    console.log("==========================================");
    const atm_1 = await inquirer.prompt([
        {
            type: "list",
            name: "Opt",
            message: "Select One Option ",
            choices: ["Balance_Inquiry", "500", "1000", "5000", "10,000", "20,000", "Other Amount"]
        },
    ]);
    let f_Balance = Balance.toLocaleString('en-US');
    if (atm_1.Opt == "Balance_Inquiry") {
        console.log(`\nYour Remaining Balance is ${f_Balance} PKR`);
    }
    else if (atm_1.Opt == "500") {
        console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
        Balance = Balance - 500;
        f_Balance = Balance.toLocaleString('en-US');
        console.log(`\nyou have withdrawn 500 PKR\n\n Your Remaining Balance is ${f_Balance} PKR \n`);
    }
    else if (atm_1.Opt == "1000") {
        console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
        Balance = Balance - 1000;
        f_Balance = Balance.toLocaleString('en-US');
        console.log(`\nyou have withdrawn 1000 PKR\n\n Your Remaining Balance is ${f_Balance} PKR \n`);
    }
    else if (atm_1.Opt == "5000") {
        console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
        Balance = Balance - 5000;
        f_Balance = Balance.toLocaleString('en-US');
        console.log(`\nyou have withdrawn 5000 PKR\n\n Your Remaining Balance is ${f_Balance} PKR \n`);
    }
    else if (atm_1.Opt == "10,000") {
        console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
        Balance = Balance - 10000;
        f_Balance = Balance.toLocaleString('en-US');
        console.log(`\nyou have withdrawn 10,000 PKR\n\n Your Remaining Balance is ${f_Balance} PKR \n`);
    }
    else if (atm_1.Opt == "20,000") {
        console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
        Balance = Balance - 20000;
        f_Balance = Balance.toLocaleString('en-US');
        console.log(`\nyou have withdrawn 20,000 PKR\n\n Your Remaining Balance is ${f_Balance} PKR \n`);
    }
    else if (atm_1.Opt == "Other Amount") {
        console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
        const atm2 = await inquirer.prompt([
            {
                type: "number",
                name: "O_Amount",
                message: "Please Enter Multiple of 500 : "
            }
        ]);
        if ((atm2.O_Amount % 500) == 0) {
            console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
            Balance = Balance - atm2.O_Amount;
            f_Balance = Balance.toLocaleString('en-US');
            console.log(`\nYou have withdrawn  ${atm2.O_Amount} PKR\n\nYour Remaining Balance is ${f_Balance} PKR \n`);
        }
        else {
            console.log(`\n You Didn't Enter Multiple of 500 \nYour Remaining Balance is  ${f_Balance} PKR`);
        }
    }
    const { atm_Loop } = await inquirer.prompt([
        {
            type: "confirm",
            name: "atm_Loop",
            message: "ANOTHER TRANSACTION?",
            default: true
        }
    ]);
    atm_Flag = atm_Loop;
}