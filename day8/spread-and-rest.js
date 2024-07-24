// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const arr = [1,2,3,4,5,]
const newArray = [...arr,6,7,8,9,10]

console.log(newArray)


// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
let sum = function(...nums){
    let ans =0;
    for(let num of nums){
        ans +=num
    }
  return ans;
}
console.log(sum(5,5,10,10))