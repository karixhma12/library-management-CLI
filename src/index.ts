interface Book{
    id : number,
    title : string,
    author : string,
    year : number,
    genre : string,
    status : string
}

type BookSummary = Pick<Book, 'title' | 'author'>;
type UpdatableFields = Pick<Book, 'title' | 'author' | 'year' | 'genre' | 'status'>;
type UpdateBook = Partial<UpdatableFields>;

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


function updateBook(updatedBook : UpdateBook):void{
    console.log("Updating book with : ", updatedBook);
}

updateBook({ year: 1938 });
updateBook({ genre: "Adventure", status: "borrowed" });
updateBook({});


