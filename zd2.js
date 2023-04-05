let num = -9;
function prost (num) {
  let k=0;
  if (num > 1) {
    for(i=1;i<=num;i++){
    if(num%i == 0)
     k++;
    }
  }
  else console.log(`Число ${num} является ни простым, ни составным числом`);
  if (k==2) 
  console.log(`Число ${num} является простым`);
  else if(k > 1) console.log(`Число ${num} является составным`);
}
prost(num);