Vue.createApp({
    // ここにアプリケーションの機能を定義していきます
    data: function(){
        return {
            todotitle: '',
            todoDescription: '',
            todoCategories: [],
            selectedCategory: '',
            hideDoneTodo: false,
            searchWord: '',
            order: 'desc',
        }
    },
}).mount('#app')