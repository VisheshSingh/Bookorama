// NODES

const banner = document.querySelector('#page-banner')
console.log('Type of the banner node is:', banner.nodeType)
console.log('Name of the banner node is:', banner.nodeName)
console.log('Does banner node has children:', banner.hasChildNodes())

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner)