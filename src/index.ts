interface Book{
    id : number,
    title : string,
    author : string,
    year : number,
    genre : string,
    status : string
}

interface LibraryConfig{
    libraryName : string,
    maxBooksPerMember : number
}

const libraryConfig : Readonly<LibraryConfig> = {
    libraryName : "Community Library",
    maxBooksPerMember : 5
}

/*console.log(libraryConfig);

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
updateBook({});*/

type BookSummary = Pick<Book, 'title' | 'author'>;
type UpdatableFields = Pick<Book, 'title' | 'author' | 'year' | 'genre' | 'status'>;
type UpdateBook = Partial<UpdatableFields>;

const booksMap = new Map<string,Book>();

booksMap.set("b1",{id: 1, title: "The Hobbit", author: "JRR Tolkien", year: 1937, genre: "Fantasy", status: "available" });
booksMap.set("b2",{id: 2, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Sci-Fi", status: "available"});

console.log(booksMap.get("b1"));
console.log("Books size :", booksMap.size);

function updateBook(id:string,updatedFields:UpdateBook):void{
    const book = booksMap.get(id);

    if(!book){
        console.log("Book not found!");
        return ;
    }

    const updatedBook = {...book,...updatedFields};
    booksMap.set(id,updatedBook);
    console.log("Updated Book : ",updatedBook);
}

updateBook("b1",{year:1980});





