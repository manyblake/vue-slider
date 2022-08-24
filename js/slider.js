// console.log('slider')

const slides = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
  "./img/05.jpg",
];

const app = new Vue({
  el: `#root`,
  data: {
    currentIndex: 0,
    slides,
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = slides.length - 1;
      }
    },
  },
});
