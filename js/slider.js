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

  computed: {
    lastIndex() {
      return this.slides.length - 1;
    },
  },

  methods: {
    resetTimer() {
      clearInterval(interval);
    },
    restartTimer() {
      interval = setInterval(this.nextSlide, 3000);
    },
    nextSlide() {
      // if (this.currentIndex < this.lastIndex) {
      //   this.currentIndex++;
      // } else {
      //   this.currentIndex = 0;
      // }
      this.currentIndex = this.isEnd() ? 0 : this.currentIndex + 1;
      this.resetTimer();
      this.restartTimer();
    },
    prevSlide() {
      // if (this.currentIndex > 0) {
      //   this.currentIndex--;
      // } else {
      //   this.currentIndex = this.lastIndex;
      // }
      this.currentIndex = this.isStart()
        ? this.lastIndex
        : this.currentIndex - 1;
      this.resetTimer();
      this.restartTimer();
    },
    isEnd() {
      return this.currentIndex === this.lastIndex;
    },
    isStart() {
      return this.currentIndex === 0;
    },
  },
  created() {
    interval = setInterval(this.nextSlide, 3000);
  },
});
