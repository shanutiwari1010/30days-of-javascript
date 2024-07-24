// const book = {
//     title: "abc",
//     author: "xyzz",
//     price: "123",
//     getTitleAndAuthor : function(){
//          return `${this.title} by ${this.author}`
//     },
//     getYear: function(year){
//         this.year = year 
//     }
// }
// book.getYear(2024);
// console.log(book)

const library = {
    name: "City Library",
    books : [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            getDetails: function(){
                return `${this.title} by ${this.author}`
            }
        },
        {
            title: "1984",
            author: "George Orwell",
            getDetails: function(){
                return ` ${this.title} by ${this.author}`
            }
        }
        
    ]
}
console.log(library.name)

// library.books.forEach(book=>{
//     console.log(book.getDetails())
// })

library.books.for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}