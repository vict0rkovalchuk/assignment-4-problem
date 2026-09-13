const app = Vue.createApp({
  data() {
    return {
      inputValue: '',
      paragraphVisible: true,
      backgroundColor: ''
    }
  },
  computed: {
    paragraphClasses() {
      return { [`${this.inputValue} visible`]: this.paragraphVisible, [`${this.inputValue} hidden`]: !this.paragraphVisible }
    }
  },
  methods: {
    toggleParagraph() {
      this.paragraphVisible = !this.paragraphVisible;
    }
  }
});

app.mount('#assignment');