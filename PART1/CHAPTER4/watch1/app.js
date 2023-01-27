Vue.createApp({
    data: function(){
        return {
            todoTitle: '',
            resultString: '',
        }
    },

    watch: {
        todoTitle: function(next, prev) {
            this.resultString = 'next: ' + next + ', prev: ' + prev
        }
    }
}).mount('#app')
