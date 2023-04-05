let a = 5;
let b = 10;
let timer = setInterval(function(){
  console.log(a);
    a++;
    if (a==b+1) clearInterval(timer);
 }, 1000);