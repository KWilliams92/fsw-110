var addBook = document.getElementById('addBook');
var addAuthor = document.getElementById('addAuthor');
const books = document.getElementById('books');
const button = document.getElementById('button');

button.addEventListener('click', addBooks);
    function addBooks(){
        let li = document.createElement('li');
        li.innerHTML += addBook.value;
        li.style.fontFamily = "Rampart One";
        books.appendChild(li);

    let li2 = document.createElement('li');
    li2.innerHTML += addAuthor.value;
    li2.style.fontFamily = "Dancing script"
    books.appendChild(li2);

        deleteThis = document.createElement('button');
        deleteThis.innerHTML = 'Delete';
        deleteThis.style.width = "96%";
        deleteThis.style.height = "40px";
        deleteThis.style.fontFamily = "Noto Serif Display";
        books.appendChild(deleteThis);
        addBook.value = "";
        addAuthor.value = "";

        deleteThis.addEventListener('click', function (){
            books.removeChild(li);
            books.removeChild(li2);
            books.removeChild(deleteThis);
        })
    }