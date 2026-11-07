const name=prompt("enter your full name:");
const phone= prompt("enter your phone number:");
const transaction = prompt("choose transaction type:\n 1.Send Money \n2.Withdraw Cash \n3.Pay a Business");
const amount = number(prompt("enter the amount in KSH:"));
Let fee = 0;
let transactionName ="";
if(transaction ==="1"){
  transactionName= "send money";
}
  else if(transactionName ==="2"){
  transactionName = "Withdraw Cash";
}
  else if(transaction ==="3"){
  transactionName ="Pay a Business";
}
  else{
    alert("invalid transaction type");
  }
if(amount<1||amount>150000||!number.is.finite(amount)){
  alert("invalid transaction amount");}
  else if (transaction === "2"&&amount<50){
    alert("withdrawal below ksh 50 are not allowed");}
else if(["1","2","3"].includes(transaction)){
  if(amount<=100){
    fee=transaction==="1"?0:
      transaction==="2"?||:0;
  }
    else if(amount<=1000){
      fee=transaction==="1"?13:
        transaction==="2"?29:0;
    }
  else if(amount<=5000){
    fee=transaction==="1"?53:
      transaction==="2"?69:0;
  }
  else if(amount<=20000){
    fee=transaction==="1"?87:
      transaction==="2"?185:0;
  }
  else{
    fee=transaction==="1"?108:
      transaction==="2"?309:0;
  }
  console.log("Customer:",name);
  console.log("phone:",phone);
  console.log("Transaction:",transactionName);
  console.log("amount:KSH",amount);
  console.log("transaction fee:KSH",fee);

  alert(
    "transaction summary\n"+
    "customer:"+name+ "\n" +
    "transaction:" + transactionName + "\n" +
    "amount:KSH" +amount+ "\n"+
    "fee:KSH" +fee
    );
}
    
