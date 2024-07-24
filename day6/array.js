let arr =[1,2,3,4,5]

arr.push(6)
arr.pop(arr.length-1)
arr.shift()
arr.unshift(1)
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// console.log(arr)



// map
const newArr = arr.map((val)=>{
    return val*2
})
// console.log(newArr)



// filter
const filteredArr = arr.filter((val)=>{
    return val%2===0;
})
// console.log(filteredArr)

// reduce
const reducedArr = arr.reduce((val,ele)=>val+ele,0)

// console.log(reducedArr)

arr.forEach(element => {
    console.log(element)
});

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(matrix[1][1])