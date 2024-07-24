// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const [first, second] = arr;
console.log(first, "first element")
console.log(second, "second element")


// Use object destructuring to extract the title and author from a book object and log them to the console.

const obj = {
    fname : "shanu",
    lname : "tiwari",
    age: 22,
    city: "indore"

}

const {fname,lname} = obj;
console.log(fname, "firstnamd")
console.log(lname, "lastname")