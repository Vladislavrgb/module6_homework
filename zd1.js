function checkNumber(){
  let numOne = prompt("ВВедите значение");
  if (isNaN(numOne)) {
    console.log ("Упс, кажется, вы ошиблись");
  } else {
    numOne = +numOne;
    if (typeof(numOne) == 'number'){
      if (numOne%2 == 0) {
      console.log("Вы ввели четное число !");
    } else console.log("Вы ввели нечетное число");
    }
    else console.log("Упс, кажется, вы ошиблись");
  }
}
checkNumber();