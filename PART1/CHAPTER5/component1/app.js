Vue.createApp({})
    .component('my-title', {
        data: function() {
            return {
                title: '',
            }
        },
        template: `<input type="text" v-model="title" /><p>{{ title }}</p>`,
    })
    .mount('#app')