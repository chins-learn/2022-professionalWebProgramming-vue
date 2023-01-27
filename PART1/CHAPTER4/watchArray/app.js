Vue.createApp({
    data: function(){
        return {
            todos: [
                { title: 'タスク1', },
                { title: 'タスク2', },
            ],
        }
    },
    watch: {
        todos: {
            handler: function(next, prev) {
                console.log('todosに変更がありました')
            },
            deep: true,
        },
    },
    methods: {
        onClick: function(event) {
            this.todos[1].title = 'たすく２'
        },
    },
}).mount('#app')
