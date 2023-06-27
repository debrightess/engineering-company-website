let navbar = document.querySelector('.header .navbar')
let searchForm = document.querySelector('.header .search-form')
let contactInfo = document.querySelector('.contact-info')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
}

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
}

document.querySelector('#info-btn').onclick = () => {
  contactInfo.classList.add('active')
}

document.querySelector('#close-contact-info').onclick = () => {
  contactInfo.classList.remove('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
  contactInfo.classList.remove('active')
}

// swiper
var swiper = new Swiper('.home-slider', {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

var swiper = new Swiper('.reviews-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
})
