var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  document.querySelectorAll(".swiper-slide").forEach((item) => {
    item.addEventListener("click", () => {
      const image = item.querySelector("img");
      document.querySelector(".modal-image").src = image.src;
    });
  });
  document.querySelectorAll(".gallery .card").forEach((card) => {
    card.addEventListener("click", () => {
      const videoSrc = card.querySelector("video").getAttribute("src");
      const modalVideo = document.querySelector(".modal-video");
      modalVideo.src = videoSrc;
      modalVideo.play();
  });
});
;


document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.querySelector("#exampleModal");
    if (modalElement) {
        modalElement.addEventListener('hidden.bs.modal', function () {
            const modalVideo = document.querySelector(".modal-video");
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.src = '';
            }
        });
    }
});

  AOS.init({
    offset: 120, 
    duration: 1000, 
    easing: 'ease-in-out', 
    
  });