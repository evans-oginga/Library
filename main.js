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
    }
}
  
  