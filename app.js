// NODES

/* const banner = document.querySelector('#page-banner')
console.log('Type of the banner node is:', banner.nodeType)
console.log('Name of the banner node is:', banner.nodeName)
console.log('Does banner node has children:', banner.hasChildNodes())

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner) */

// Traversing the DOM - Parent and child nodes

const booklist = document.querySelector('#book-list')

console.log('The parent node is:', booklist.parentNode)
console.log('The parent node is:', booklist.parentElement.parentElement)

console.log('The child node is:', booklist.children)

// Traversing the DOM - Sibling elements
console.log('The next sibling is:', booklist.nextSibling)
console.log('The next sibling is:', booklist.nextElementSibling)

console.log('The next sibling is:', booklist.previousSibling)
console.log('The next sibling is:', booklist.previousElementSibling)

booklist.previousElementSibling.querySelector('p').innerHTML += '<br/>Get your favorite books here'