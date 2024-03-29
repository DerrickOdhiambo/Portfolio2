const hero = document.querySelector('.hero');
const heroImg = document.querySelector('.hero-img');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav-bar');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: '100%' },
    { width: '80%', ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: '-100%' },
    { x: '0%', ease: Power2.easeInOut },
    '-=1.2'
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
  .fromTo(burger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
  .fromTo(nav, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
  .fromTo(headline, 0.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.2');

function openMenu() {
  document.getElementById('menu').style.width = '250px';
  document.getElementById('content').style.width = '250px';
}
function closeSlideMenu() {
  document.getElementById('menu').style.width = '0';
  document.getElementById('content').style.width = '0';
}

// JQuery
$('.navigation-bar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    console.log(this.hash);

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
$('.footer-content a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    console.log(this.hash);

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// typed js

const typed = new Typed('#multiText', {
  strings: ['a Frontend Software Developer', 'and UI/UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ==========tabs=========
var tablinks = document.getElementsByClassName('tabLinks');
var tabContents = document.getElementsByClassName('tabContents');

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('activeLink');
  }

  for (tabcontent of tabContents) {
    tabcontent.classList.remove('activeTab');
  }

  event.currentTarget.classList.add('activeLink');

  document.getElementById(tabname).classList.add('activeTab');
}
