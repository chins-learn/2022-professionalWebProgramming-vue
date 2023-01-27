Vue.createApp({
    // ここにアプリケーションの機能を定義していきます
    data: function(){
        return {
            todoCategories: [],
        }
    },

    computed: {
        joinedToDoCategories: function() {
            return this.todoCategories.join(' / ')
        },
        categoryText() {
            return '選択されているカテゴリー: ' + this.joinedToDoCategories
        },
    },
}).mount('#app')
