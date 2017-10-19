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
     console.log(book);
 })
