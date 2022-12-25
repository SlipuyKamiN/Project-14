// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = onscroll;
function onscroll() {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName('up__btn')[0].style.display = 'flex';
    document.getElementsByClassName('up__btn')[0].style.opacity = '1';
  } else {
    document.getElementsByClassName('up__btn')[0].style.display = 'none';
    document.getElementsByClassName('up__btn')[0].style.opacity = '0';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.getElementById('up-button').onclick = topFunction;
