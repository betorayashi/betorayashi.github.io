
document.querySelector("#sub-button").addEventListener('click', function(e) {
  let email = document.querySelector('#email').value;
  let name = document.querySelector('#name').value;
  if(email && name) {
    window.open('/ebooks/ebook-dicionario-dos-investimentos-no-exterior.pdf');
  }
});