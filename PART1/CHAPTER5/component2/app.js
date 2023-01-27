Vue.createApp({
  components: {
    "my-title": {
      data: function () {
        return {
          title: "",
        };
      },
      template: `<input type="text" v-model="title" /><p>{{ title }}</p>`,
    },
  },
}).mount("#app");
