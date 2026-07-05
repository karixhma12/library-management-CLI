"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayBookSummary = function (book) {
    console.log(`Title : ${book.title}, Author : ${book.author}`);
};
let book1 = {
    id: 1,
    title: "The Hobbit",
    author: "JRR Tolkein",
    year: 1937,
    genre: "Fantasy",
    status: "available"
};
displayBookSummary(book1);
displayBookSummary({ title: "Dune", author: "Frank Herbert" });
function updateBook(updatedBook) {
    console.log("Updating book with : ", updatedBook);
}
updateBook({ year: 1938 });
updateBook({ genre: "Adventure", status: "borrowed" });
updateBook({});
//# sourceMappingURL=index.js.map