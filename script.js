// Habar üçin HTML belligini döretmek
var msg = '<div class=\"header\"><a id=\"close\" href="#">Çykmak X</a></div>';
msg += '<div><h2>Tehniki hyzmat</h2>';
msg += 'Bejeriş serwerde 12: 00-dan 13: 00-a çenli amala aşyrylýar.';
msg += 'Bejeriş wagtynda saýtda ownuk bökdençlikler bolup biler.</div>';

var elNote = document.createElement('div');       //Täze element dörediň
elNote.setAttribute('id', 'note');                // Şahsyýetnama goşmak объявления
elNote.innerHTML = msg;                           // Habar goşmak
document.body.appendChild(elNote);                // Oňa ýazmak

function dismissNote() {                          // Funksiýa yglan ediň
  document.body.removeChild(elNote);              // Mahabaty öçürmek
}

var elClose = document.getElementById('close');   // Mahabaty ýapmak üçin düwme alyň
elClose.addEventListener('click', dismissNote, false);// Bu düwmä basyň we mahabaty ýapyň
