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
    resetTimer() {
      clearInterval(interval);
    },
    restartTimer() {
      interval = setInterval(this.nextSlide, 3000);
    },
    nextSlide() {
      if (this.currentIndex < slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.resetTimer();
      this.restartTimer();
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = slides.length - 1;
      }
      this.resetTimer();
      this.restartTimer();
    },
  },
  created() {
    interval = setInterval(this.nextSlide, 3000);
  },
});
