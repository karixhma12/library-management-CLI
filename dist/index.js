"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libraryConfig = {
    libraryName: "Community Library",
    maxBooksPerMember: 5
};
const booksMap = new Map();
booksMap.set("b1", { id: 1, title: "The Hobbit", author: "JRR Tolkien", year: 1937, genre: "Fantasy", status: "available" });
booksMap.set("b2", { id: 2, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Sci-Fi", status: "available" });
console.log(booksMap.get("b1"));
console.log("Books size :", booksMap.size);
function updateBook(id, updatedFields) {
    const book = booksMap.get(id);
    if (!book) {
        console.log("Book not found!");
        return;
    }
    const updatedBook = { ...book, ...updatedFields };
    booksMap.set(id, updatedBook);
    console.log("Updated Book : ", updatedBook);
}
updateBook("b1", { year: 1980 });
//# sourceMappingURL=index.js.map