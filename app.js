let phoneNumber = prompt("Nomre qeyd edin")

function isvalidnumber(){
      if (phoneNumber.charAt(11) && phoneNumber.startsWith("+7")){
         return phoneNumber
      }else{
        return "Duzgun nomre qeyd etmemisiniz"
      }
}

console.log(isvalidnumber());

let textUser = prompt("metn yazin")

function numCounter(){
  let textReplace = textUser.replaceAll(/[^a-z]/gi,"")
  let textNum = textReplace.length
  return textNum

}
console.log(numCounter());



function isLucky(num){
  if (num>100000 && num<999999){
  }else{
    return false
  }
  num = String(num)
  let num1 = +num[0] 
  let num2 = +num[1]
  let num3 = +num[2]
  let num4 = +num[3]
  let num5 = +num[4]
  let num6 = +num[5]
  let numberToSumLeft = num1 + num2 + num3
  let numberToSumRight = num4 + num5 + num6 
   if (numberToSumLeft == numberToSumRight){
    return true
   }else{
    return false
   }
  

}

console.log(isLucky(55555));


function capitalizeWords(text = "men gedirem mektebe ders oxumaqa"){
  textToSplit = text.split(" ")
  let textToUppercase = text[0][0].toUpperCase() 
  let textToUppercase2 = text[1][0].toUpperCase() 
  let textToUppercase3 = text[2][0].toUpperCase() 
  let textToUppercase4 = text[3][0].toUpperCase() 
  let textToUppercase5 = text[4][0].toUpperCase() 
  let textSumWords = textToUppercase + textToUppercase2 + textToUppercase3 + textToUppercase4 + textToUppercase5+text.slice(1)
  console.log(textSumWords);
  
   
   
}
capitalizeWords()













