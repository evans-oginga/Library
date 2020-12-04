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
    //clear input fields
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#status').value = '';
    }
    //delete a book
    static deleteBook(el) {
        if(el.classList.contains('delete')) {
          el.parentElement.parentElement.remove();
        }
    }
    
}
/*
    display the books
*/
document.addEventListener("DOMContentLoaded", UI.displayBooks);

/*
    takes all the input from the user and adds a new book
    
*/
document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    const status = document.querySelector("#status").value;

    /*
        basic validation
    */
  
    if (title === "" || author === "" || isbn === "" || status === "") {
      alert("Please fill in all fields");
    } else {
        //create a book instance
        const book = new Book(title, author, isbn, status);
        //add a new book
        UI.addBookToList(book);
        UI.clearFields();
        
    }
});
  
  
/*
    add the method to delete a book when the remove book button is clicked
*/
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});