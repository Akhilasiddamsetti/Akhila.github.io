const form = document.querySelector('form');
const alert = document.querySelector('#alert');

form.addEventListener('submit', function(e) {
 e.preventDefault();
 const age = parseInt(document.querySelector('#age').value);

 if (age >= 18) {
  alert.style.display = 'none';
 } else {
  alert.style.display = 'block';
 }
});