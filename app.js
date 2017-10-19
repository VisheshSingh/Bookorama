// EVENTS
/*  const delbuttons = document.querySelectorAll('#book-list .delete')

 delbuttons.forEach(function(btn) {
     btn.addEventListener('click', function(e) {
         const li = e.target.parentElement;
         li.parentNode.removeChild(li);
     })
 })
 */

 //Delete Books
 const list = document.querySelector('#book-list ul');

 list.addEventListener('click', function(e) {
     if(e.target.className == 'delete') {
         const li = e.target.parentElement;
         list.removeChild(li);
     }
 })

 // ADD BOOKS

 const addBooks = document.forms['add-book'];

 addBooks.addEventListener('submit', function(e) {
     e.preventDefault();
     const book = addBooks.querySelector('input[type="text"]').value;
     
     //create elements
     const li = document.createElement('li');
     const bookName = document.createElement('span');
     const delBtn = document.createElement('span');

    //Append content
    delBtn.textContent = 'delete';
    bookName.textContent = book;

    //Add class
    bookName.classList.add('name');
    delBtn.classList.add('delete');

     //append to DOM
     li.appendChild(bookName);
     li.appendChild(delBtn);

     list.appendChild(li);
 })

 //hide books

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function() {
    if(hideBox.checked){
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})
