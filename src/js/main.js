const logoBrand = document.querySelector(".navbar-brand");
logoBrand.addEventListener("click", () => {
  location.reload();
});

const cardImages = document.querySelectorAll(".card-images-popular");

function settingHover() {
  for (let i = 0; i < array.cardImages; i++) {
    this.classname.toggle("active");
  }
}

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
