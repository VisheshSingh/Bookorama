// EVENTS
 const delbuttons = document.querySelectorAll('#book-list .delete')

 delbuttons.forEach(function(btn) {
     btn.addEventListener('click', function(e) {
         const li = e.target.parentElement;
         li.parentNode.removeChild(li);
     })
 })

