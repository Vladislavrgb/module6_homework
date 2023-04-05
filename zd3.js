let a = -9;
function func (a) {
  let b = 8;
  function sumNum(b){
    return a + b;
  }
  return sumNum(b);
}
console.log(func(a));