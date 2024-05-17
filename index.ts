import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';




let atm_Flag= true

console.clear();
console.log ("==========================================")
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

    const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

    
    function Acc_title()
    {
      console.clear();
      console.log(chalk.bgBlue.white(`\t\t>>> MyBank <<<`))
     console.log (chalk.yellow.bold("\n==========================================\n"))
     console.log(chalk.greenBright(` \t  Mr/Mrs/Ms \t ${user.ID} \t\t `))
     console.log (chalk.yellow.bold("\n==========================================\n"))

     
    }

    let Balance =  Math.floor(Math.random() * (50000000 - 50000 + 1)) + 50000;
    let IN_Balance = Balance.toLocaleString('en-US')
    function Rem_amount(task: string)
    {
      //console.log (chalk.yellow.bold("\n==========================================\n"))
      console.log(chalk.greenBright(`Your Remaining Balance = ${task}/_ PKR  ` ));
      console.log (chalk.yellow.bold("\n==========================================\n"))
      
    }

    Acc_title();
    while(atm_Flag)
{
    console.clear();
    console.log(chalk.cyanBright(`\n ======================================= \n\t`),chalk.bgBlue.white(`  WELCOME TO MyBank   `),chalk.cyanBright(`\n =======================================\n`))
    
    const atm_1 = await inquirer.prompt([
    {
        type: "list",
        name: "Opt",
        message: "Select One Option ",
        choices: ["Balance_Inquiry", "500", "1000","5000", "10,000","20,000","Other Amount"]
      },
    ]);
    
    function withdraw(amt: string)
    {
      console.log (chalk.yellow.bold("\n==========================================\n"))
      console.log(chalk.greenBright(`you have withdrawn amount of`),chalk.bgRed.white(` ${amt}/_ PKR ` ));
      //console.log (chalk.yellow.bold("\n==========================================\n"))
    }
    let f_Balance = Balance.toLocaleString('en-US');
    if (atm_1.Opt == "Balance_Inquiry")
    {
      Acc_title();
      Rem_amount(f_Balance);
       //console.log(`\nYour Remaining Balance is ${f_Balance} PKR`);
    }

    else if (atm_1.Opt == "500")
    {
      Acc_title();
       Balance = Balance-500;
       f_Balance = Balance.toLocaleString('en-US');
       withdraw(atm_1.Opt);
       Rem_amount(f_Balance);
       
    }
    else if (atm_1.Opt == "1000")
    {
      Acc_title();
      Rem_amount(f_Balance);
      Balance = Balance-1000;
      f_Balance = Balance.toLocaleString('en-US');
      withdraw(atm_1.Opt);
      Rem_amount(f_Balance);
    }
    else if (atm_1.Opt == "5000")
    {
      Acc_title();
      Rem_amount(f_Balance);
      Balance = Balance-5000;
      f_Balance = Balance.toLocaleString('en-US');
      withdraw(atm_1.Opt);
       Rem_amount(f_Balance);
    }
        else if (atm_1.Opt == "10,000")
    {
      Acc_title();
      Rem_amount(f_Balance);
      Balance = Balance-10000;
      f_Balance = Balance.toLocaleString('en-US');
      withdraw(atm_1.Opt);
       Rem_amount(f_Balance);
    }
    else if (atm_1.Opt == "20,000")
    {
      Acc_title();
      Rem_amount(f_Balance);
      Balance = Balance-20000;
      withdraw(atm_1.Opt);
      Rem_amount(f_Balance);
    }

    else if (atm_1.Opt == "Other Amount")
    {
      console.log(`\nYour Remaining Balance was ${f_Balance} PKR`);
      
      const atm2 = await inquirer.prompt([
        {
            type: "number",
            name: "O_Amount",
            message: "Please Enter Multiple of 500 : "
        }
        ]);
        if ((atm2.O_Amount % 500)  == 0)
        {
          Acc_title();
          Rem_amount(f_Balance);
          Balance = Balance-atm2.O_Amount;
          f_Balance = Balance.toLocaleString('en-US');
          
          withdraw(atm2.O_Amount);
           Rem_amount(f_Balance);
        }
       else 
       {
        console.log(chalk.bgRed.white.bold(`YOU DIDN'T MULTIPLE OF 500`));
        Rem_amount(f_Balance);
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
