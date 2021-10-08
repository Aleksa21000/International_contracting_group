// Animations on current section (when is in view)
const main = document.getElementById('main-header');
const about = document.getElementById('about');
const ourTeam = document.getElementById('our-team');

const sections = document.querySelectorAll('.animate-section');


// About-items (START HERE)
// Big titles (START HERE)
const bold1 = document.querySelector('.bold-1');
const thiner1 = document.querySelector('.thiner-1');
const thinest1 = document.querySelector('.thinest-1');

const thiner2 = document.querySelector('.thiner-2');
const bold2 = document.querySelector('.bold-2');
// Big titles (END HERE)

// Content-inner
const contentInner1 = document.querySelectorAll('.text-1');
const contentInner2 = document.querySelectorAll('.text-2');

// Vertical Text is imported from MENU.JS! <-----------------

// Up widget
const upWidget = document.querySelector('.up-widget');

// About image
const aboutImage = document.querySelector('.image-container');

// Line across (About section)
const lineAcross = document.querySelector('.line-across');

// Horizontal line
const titleLine = document.querySelector('.title-line');

// Grid boxes
const boxes = document.querySelectorAll('.grid-box');
// About-items (END HERE)


window.addEventListener('scroll', function animate() {
  let current = '';

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 300;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');

      // Main-header
      if (main.getAttribute('id') == current) {
        // Hide vertical text
        verticalTxt.style.left = '-200px';
        verticalTxt.style.opacity = '0';

        // Hide up widget
        upWidget.style.display = 'none';
        upWidget.style.opacity = '0';
      }
    }

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');

      // About section
      if (about.getAttribute('id') == current) {
        // show big titles
        bold1.classList.add('show-bold-1');
        thiner1.classList.add('show-thiner-1');
        thinest1.classList.add('show-thinest-1');

        // Show vertical txt 
        verticalTxt.style.left = '-68px';
        verticalTxt.style.opacity = '1';

        // Show up widget
        upWidget.style.display = 'block';
        upWidget.style.opacity = '1';

        // Show content inner
        for (let i = 0; i < contentInner1.length; i++) {
          contentInner1[i].classList.add('show-content');
        }

        // Show Image
        aboutImage.classList.add('show-image');

        // Show line-across
        lineAcross.classList.add('show-line-across');
      }

      // Our-team section
      if (ourTeam.getAttribute('id') == current) {
        // Show big titles
        thiner2.classList.add('show-thiner-2');
        bold2.classList.add('show-bold-2');

        // Show horizon line
        titleLine.classList.add('show-title-line');

        // Show content inner
        for (let i = 0; i < contentInner2.length; i++) {
          contentInner2[i].classList.add('show-content');
        }

        // Show grid boxes
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].classList.add('show-boxes');
        }
      }
    }
  });
});