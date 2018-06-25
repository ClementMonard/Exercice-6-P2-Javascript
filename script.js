//Déclaration de la fonction switchImages qui prend en compte les paramètres id et image
function switchImages(img) {
  document.getElementById(img).src = 'images/' + img + '_2.jpg';
}

function reverseImage (img) {
  document.getElementById(img).src = 'images/' + img + '.jpg'
}
