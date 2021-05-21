//defining Book constructor
function Book(title,author,isbn){
this.title = title;
this.author = author;
this.isbn = isbn;
}

//defining UI constructor
function UI(){}

//defining prototype function(addBookList) for UI
UI.prototype.addBookList = function(book){

//Identify the table/list in which we want insert book
const list  = document.getElementById('book-list');

//Create a row element in the table to insert the book
const row = document.createElement('tr');
console.log(row);

//Insert the book values into the row
row.innerHTML = `<td>${book.title}</td>
		 <td>${book.author}</td>
		 <td>${book.isbn}</td>
		 <td><a href='#' class='delete'>X</a></td>`;
list.appendChild(row);
}

//Add Event Listener for submit
document.getElementById('book-form').addEventListener('submit',function(e){

//accessing the book values
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const isbn = document.getElementById('isbn').value;

const book = new Book(title,author,isbn);
console.log(book);

const ui = new UI();

ui.addBookList(book);

//Clear the book values to enter new book
document.getElementById('title').value = "";
document.getElementById('author').value = "";
document.getElementById('isbn').value = "";

e.preventDefault();
});