Vue.createApp({
    data: function(){
        return {
            todoTitle: '',
            resultString: '',
        }
    },

    computed: {
        todoTitleString() {
            return 'todoTitleは' + this.todoTitle + 'です。'
        }
    },
    watch: {
        todoTitleString: function(next, prev) {
            this.resultString = 'next: ' + next + ', prev: ' + prev
        }
    }
}).mount('#app')
