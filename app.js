// EVENTS
/*  const delbuttons = document.querySelectorAll('#book-list .delete')

 delbuttons.forEach(function(btn) {
     btn.addEventListener('click', function(e) {
         const li = e.target.parentElement;
         li.parentNode.removeChild(li);
     })
 })
 */

 const list = document.querySelector('#book-list ul');

 list.addEventListener('click', function(e) {
     if(e.target.className == 'delete') {
         const li = e.target.parentElement;
         list.removeChild(li);
     }
 })
