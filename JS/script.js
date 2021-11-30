let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
};

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
            });
        }
    });

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};

window.onload = () => {

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{

        let speed =elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });
};

document.querySelector('.home').onmouseleave = () =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });
};

// slider vehicles

var swiper = new Swiper(".vehicles-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

//   slider featured

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    // centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });

//slider reviews

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });