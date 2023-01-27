Vue.createApp({
    // ここにアプリケーションの機能を定義していきます
    data: function(){
        return {
            message: 'ToDoアプリケーション',
            messageHtml: '<span>ToDoアプリケーション</span>',
        }
    },
}).mount('#app')