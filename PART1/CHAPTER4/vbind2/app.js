Vue.createApp({
    data: function(){
        return {
            className: 'from-data-class-name',
        }
    },
    computed: {
        classNameComputed: function() {
            return 'from-computed-class-name'
        },
    },
    methods: {
        classNameMethod: function() {
            console.log("method")
            return 'from-methods-class-name'
        },
    },
}).mount('#app')
