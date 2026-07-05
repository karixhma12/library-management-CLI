interface Book{
    id : number,
    title : string,
    author : string,
    year : number,
    genre : string,
    status : string
}

type BookSummary = Pick<Book, 'title' | 'author'>;

const displayBookSummary = function(book : BookSummary):void{
    console.log(`Title : ${book.title}, Author : ${book.author}`);
}

let book1 : Book = {
    id: 1,
    title : "The Hobbit",
    author : "JRR Tolkein",
    year : 1937,
    genre : "Fantasy",
    status : "available"
}

displayBookSummary(book1);
displayBookSummary({title:"Dune",author:"Frank Herbert"});
