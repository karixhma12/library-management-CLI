interface Book{
    id : number,
    title : string,
    author : string,
    year : number,
    genre : string,
    status : string
}

let book1 : Book = {
    id: 1,
    title : "The Hobbit",
    author : "JRR Tolkein",
    year : 1937,
    genre : "Fantasy",
    status : "available"
}

console.log(book1);