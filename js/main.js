document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.slider__arrow--next',
      prevEl: '.slider__arrow--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 18,
      }
    }
  });

  let body = document.querySelector('body')
  let tabs = document.querySelectorAll('.js-tab');
  let burger = document.querySelector('.js-burg');
  let menu = document.querySelector('.header__nav');
  let header = document.querySelector('.header');

  function clearActive(tabs) {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active')
    })
  }

  burger.addEventListener('click', function () {
    this.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('is-hidden')
  })

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      clearActive(tabs);
      this.classList.toggle('is-active')
    })
  })

  window.addEventListener('scroll', function () {
    let offsetY = window.pageYOffset

    if (offsetY > header.clientHeight) {
      header.classList.add('fixed', 'is-show')
    } else {
      header.classList.remove('fixed', 'is-show')
    }
  })
})