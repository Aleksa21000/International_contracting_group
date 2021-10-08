// Hamburger menu (MAIN)
// Define variables
const dotsOpen = document.querySelector('.dots-open');
const dotsClose = document.querySelector('.dots-close');
const list = document.querySelector('.list');
// // Vertical text
const verticalTxt = document.querySelector('.page');

const animeDot2 = document.querySelector('.animate-dot2');
const animeDot4 = document.querySelector('.animate-dot4');
const animeDot6 = document.querySelector('.animate-dot6');
const animeDot8 = document.querySelector('.animate-dot8');

const animeDot1 = document.querySelector('.animate-dot1');
const animeDot3 = document.querySelector('.animate-dot3');
const animeDot7 = document.querySelector('.animate-dot7');
const animeDot9 = document.querySelector('.animate-dot9');

var mobileWidths = [0, 650];

function resizeFn() {
  if (window.innerWidth >= mobileWidths[0] && window.innerWidth < mobileWidths[1]) {
    // Menu open on click(Mobile size)
    (function openMenu() {
      dotsOpen.addEventListener('click', function () {
        list.style.display = 'block';

        setTimeout(function timer() {
          list.style.opacity = '1';
          list.style.width = '100vw';
        }, 100);


        // // Hide vertical text
        verticalTxt.style.left = '-200px';
        verticalTxt.style.opacity = '0';

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

          setTimeout(function timer() {
            list.style.display = 'none';
          }, 400);

          // Show vertical txt 
          verticalTxt.style.left = '-68px';
          verticalTxt.style.opacity = '1';

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
  } else {
    // Menu open on click (PC size)
    (function openMenu() {
      dotsOpen.addEventListener('click', function () {
        list.style.display = 'block';

        setTimeout(function timer() {
          list.style.opacity = '1';
          list.style.width = '35%';
        }, 100);

        // Hide vertical text
        verticalTxt.style.left = '-200px';
        verticalTxt.style.opacity = '0';

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

      setTimeout(function timer() {
        list.style.display = 'none';
      }, 400);

      // Show vertical txt 
      verticalTxt.style.left = '-68px';
      verticalTxt.style.opacity = '1';

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
    secondMenu.style.width = '65%';
    secondMenu.style.display = 'block';


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