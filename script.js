const fibonacci = function (num) {
  //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144 and so on.
  num = Number(num);
  if (num < 0) {
    return "OOPS";
  }
  let a = 0;
  let b = 1;
  let c = 0;

  // we take 1 off of num other wiser the return value is one itteration too high in the fibonacci sequence
  //we dont want to take one off of num if it's value is 1 or we get 0
  if ((b = 1) && num != 1) {
    num--;
  }

  for (let i = 0; i < num; i++) {
    c = a + b;
    console.log("a " + a);
    console.log("b " + b);
    console.log("c " + c);
    a = b;
    b = c;
  }
  console.log(c);

  return c;
};

fibonacci("0");
