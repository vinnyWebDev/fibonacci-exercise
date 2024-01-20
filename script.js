const fibonacci = function (num) {
  //convert input to number in case user enters string like "5"
  num = Number(num);
  //Only accept possitive numbers
  if (num < 0) {
    return "Cannot accept negative values";
  }
  //initialising values which will be used in the calculation
  let a = 0;
  let b = 1;
  let c = 0;

  // we take 1 off of num other wiser the return value is one itteration too high in the fibonacci sequence
  //we dont want to take one off of num if it's value is 1 or we get 0
  if ((b = 1) && num != 1) {
    num--;
  }

  //loop through the sequence
  for (let i = 0; i < num; i++) {
    //c is the new entry in the sequence, it is the sum of th etwo previous entries
    c = a + b;
    //a us now updated to the previous value of b
    a = b;
    //b is now updated to the previous value of c
    b = c;
  }

  //c is our return the value, the final itteration of the sequence
  return c;
};

fibonacci("0");
