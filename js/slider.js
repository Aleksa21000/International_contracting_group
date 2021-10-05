// Slider auto-play
// Define variables
var counter = 1;
const title = document.querySelectorAll('.main-title');

const title1 = document.getElementById('1');
const title2 = document.getElementById('2');
const title3 = document.getElementById('3');
const title4 = document.getElementById('4');

setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }

  setTimeout(function timer() {
    for (let i = 0; i < title.length; i++) {
      let currentTitle = title[i].getAttribute('id');

      if (currentTitle == counter && title1.getAttribute('id') == counter) {
        title1.style.display = 'block';

        title4.style.display = 'none';
      } else {
        title1.style.display = 'none';
      }

      if (currentTitle == counter && title2.getAttribute('id') == counter) {
        title2.style.display = 'block';

        title3.style.display = 'none';
        title4.style.display = 'none';
      }

      if (currentTitle == counter && title3.getAttribute('id') == counter) {
        title3.style.display = 'block';

        title2.style.display = 'none';
        title4.style.display = 'none';
      }

      if (currentTitle == counter && title4.getAttribute('id') == counter) {
        title4.style.display = 'block';

        title2.style.display = 'none';
        title3.style.display = 'none';
      }
    }
  });
}, 5000);