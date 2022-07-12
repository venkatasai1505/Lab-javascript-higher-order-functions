const food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFoods = foods.slice(1,4);
console.log(modifiedFoods);

//2
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods.splice(2,0,"noodles","icecream");
console.log(foods);


//3
function isEven(numberArray) {
    numberArray = [12,324,213,4,2,3,45,4234];

   var evens = numberArray.filter(number => number % 2 == 0);
   console.log(evens);
}
isEven();

function isPrime(numberArray) {
    numberArray = [12,324,213,4,2,3,45,4234];

   var evens = numberArray.filter(number => number % 2 != 0);
   console.log(evens);
}
isPrime();


//6
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
let  square  = myArray.map(function(ele)
{
return ele * ele;
});
return square;
}
console.log(findSquareOfNumbers(myArray));