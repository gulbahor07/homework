
 let day;
 switch (new Date().getDay()) {
   case 0:
     day = "Yakshanba";
     break;
   case 1:
     day = "Dushanba";
     break;
   case 2:
     day = "Seshanba";
     break;
   case 3:
     day = "Chorshanba";
     break;
   case 4:
     day = "Payshanba";
     break;
   case 5:
     day = "Juma";
     break;
   case 6:
     day = "Shanba";
 }
 document.getElementById("demo").innerHTML = "Bugun haftaning " + day + " kuni ";


 
    const operators = prompt("belgilarni kiriting (either +, -, * /):");
const number1 = parseFloat(prompt("Birinchi sonni kiriting: "));
const number2 = parseFloat(prompt("Ikkinchi sonni kiriting: "));

switch (operators) {
  case "+":
    result = number1 + number2;
    document.write(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    document.write(`${number1} - ${number2} = ${result}`);
    break;
    case "*":
      result = number1 * number2;
      document.write(`${number1} * ${number2} = ${result}`);
      break;
      case "/":
      result = number1 / number2;
      document.write(`${number1} / ${number2} = ${result}`);
      break;
  default:
    document.write("Ma'lumotingiz xato, uni qayta kiriting");
}
function changeColor(newColor){
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}