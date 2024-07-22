const calculate = (expression) => {
  const chars = expression.split("");

  const nums = [];
  const operators = [];

  console.log("chars", chars);

  for (const c of chars) {
    if (c === "(") {
      continue;
    }

    if (isNumber(c)) {
      nums.push(c);
    }

    if (isOperator(c)) {
      operators.push(c);
    }

    if (c === ")") {
      const num1 = nums.pop();
      const num2 = nums.pop();
      const operator = operators.pop();
      const result = eval(num2 + operator + num1);
      nums.push(result);
    }

    console.log("nums", nums);
    console.log("operators", operators);
  }

  return nums[0];
};

calculate("(1+((2+3)*(4*5)))");

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function isNumber(char) {
  return /\d/.test(char);
}
