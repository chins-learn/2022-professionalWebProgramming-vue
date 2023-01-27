Vue.createApp({
    data: function(){
        return {
            count: 0,
        }
    },

    methods: {
        onClickCountUp(event) {
            return this.count += 1
        },
    },
}).mount('#app')
