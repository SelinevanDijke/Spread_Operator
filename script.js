const sum = function(...args) {
    return args.reduce((acc,item) => {
            return acc + item;
    })
}
console.log(sum(1,2,3,4,5,6)); // expected result: 21

const optellen = function(num1, num2, num3) {
  return num1 + num2 + num3;
}
const digits = [1, 2, 3];
console.log(optellen(...digits));
