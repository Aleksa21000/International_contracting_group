// Hamburger menu (MAIN)
// Define variables
const dotsOpen = document.querySelector('.dots-open');
const dotsClose = document.querySelector('.dots-close');
const list = document.querySelector('.list');

const animeDot2 = document.querySelector('.animate-dot2');
const animeDot4 = document.querySelector('.animate-dot4');
const animeDot6 = document.querySelector('.animate-dot6');
const animeDot8 = document.querySelector('.animate-dot8');

const animeDot1 = document.querySelector('.animate-dot1');
const animeDot3 = document.querySelector('.animate-dot3');
const animeDot7 = document.querySelector('.animate-dot7');
const animeDot9 = document.querySelector('.animate-dot9');

var mobileWidths = [0, 500];

function resizeFn() {
  if (window.innerWidth >= mobileWidths[0] && window.innerWidth < mobileWidths[1]) {
    // Menu open on click(Mobile size)
    (function openMenu() {
      dotsOpen.addEventListener('click', function () {
        list.style.opacity = '1';
        list.style.width = '100%';

        if (dotsOpen.classList.contains('dots-open')) {
          dotsOpen.classList.add('disabled');

          animeDot2.classList.add('anime2');
          animeDot4.classList.add('anime4');
          animeDot6.classList.add('anime6');
          animeDot8.classList.add('anime8');

          setTimeout(function timer() {
            dotsOpen.style.display = 'none';
          }, 500);

          if (dotsClose.classList.contains('dots-close')) {
            animeDot1.classList.remove('anime1');
            animeDot3.classList.remove('anime3');
            animeDot7.classList.remove('anime7');
            animeDot9.classList.remove('anime9');

            setTimeout(function timer() {
              dotsClose.style.display = "grid";
            }, 500);
          }
        }
      });
    })();
  } else {
    // Menu open on click (PC size)
    (function openMenu() {
      dotsOpen.addEventListener('click', function () {
        list.style.opacity = '1';
        list.style.width = '35%';

        if (dotsOpen.classList.contains('dots-open')) {
          dotsOpen.classList.add('disabled');

          animeDot2.classList.add('anime2');
          animeDot4.classList.add('anime4');
          animeDot6.classList.add('anime6');
          animeDot8.classList.add('anime8');

          setTimeout(function timer() {
            dotsOpen.style.display = 'none';
          }, 500);

          if (dotsClose.classList.contains('dots-close')) {
            animeDot1.classList.remove('anime1');
            animeDot3.classList.remove('anime3');
            animeDot7.classList.remove('anime7');
            animeDot9.classList.remove('anime9');

            setTimeout(function timer() {
              dotsClose.style.display = "grid";
            }, 500);
          }
        }
      });
    })();
  }
}

window.onresize = resizeFn;
resizeFn();

// Menu close on click
(function closeMenu() {
  dotsClose.addEventListener('click', function () {
    if (dotsClose.classList.contains('dots-close')) {
      dotsOpen.classList.add('disabled');

      animeDot1.classList.add('anime1');
      animeDot3.classList.add('anime3');
      animeDot7.classList.add('anime7');
      animeDot9.classList.add('anime9');

      list.style.opacity = '0';
      list.style.width = '0%';

      dotsClose.style.display = "none";


      if (dotsOpen.classList.contains('dots-open')) {
        dotsOpen.style.display = 'grid';

        dotsOpen.classList.remove('disabled');

        animeDot2.classList.remove('anime2');
        animeDot4.classList.remove('anime4');
        animeDot6.classList.remove('anime6');
        animeDot8.classList.remove('anime8');
      }
    }
  });
})();

// Hamburger menu (SECOND)
const menuOpenBtn = document.querySelector('.btn-nav-secondary-open');
const menuCloseBtn = document.querySelector('.btn-nav-secondary-close');
const secondMenu = document.querySelector('.second-menu');

// Menu open on click (SECOND)
(function openMenu() {
  menuOpenBtn.addEventListener('click', function () {
    secondMenu.style.opacity = '1';
    secondMenu.style.width = '100%';


    if (menuOpenBtn.classList.contains('btn-nav-secondary-open')) {
      menuOpenBtn.style.display = 'none';

      if (menuCloseBtn.classList.contains('btn-nav-secondary-close')) {
        menuCloseBtn.style.display = 'block';
      }
    }
  });
})();

// Menu close on click (SECOND)
(function menuClose() {
  menuCloseBtn.addEventListener('click', function () {
    if (menuCloseBtn.classList.contains('btn-nav-secondary-close')) {
      menuCloseBtn.style.display = 'none';
      secondMenu.style.opacity = '0';
      secondMenu.style.width = '0%';

      if (menuOpenBtn.classList.contains('btn-nav-secondary-open')) {
        menuOpenBtn.style.display = 'block';
      }
    }
  });
})();

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