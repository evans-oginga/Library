/*
    This book class represents a book
*/
class Book {
    constructor(title, author, isbn, status) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.status = status;
    }
}

/*
    The user interface class
*/

class UI {
    static displayBooks() {
      const StoredBooks = [
          {
              title: "Absalom, Absalom!",
              author: "William Faulkner",
              isbn: "123434545",
              status: "read"
          },
          {
            title: "The House of Mirth",
            author: "Edith Wharton",
            isbn: "5869896",
            status: "read"
        }
      ];
      const books = StoredBooks;
      books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
    
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td>${book.status}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">Remove Book</a></td>
        `;
    
        list.appendChild(row);
    }
}
/*
    display the books
*/
document.addEventListener("DOMContentLoaded", UI.displayBooks);
  
  