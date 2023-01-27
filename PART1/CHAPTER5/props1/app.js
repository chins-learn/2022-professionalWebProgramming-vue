const myTitle = {
  props: {
    name: {
      type: String,
      default: '',
      validator: function(value) {
        return value.lenght > 0
      },
      required: true,
    },
  },
  template: '#title-template',
}

Vue.createApp({
  components: {
    'my-title': myTitle,
  },
}).mount('#app')