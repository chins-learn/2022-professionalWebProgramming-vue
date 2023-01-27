Vue.createApp({
    data() {
        return {
            isShow: true,
        }
    },
    methods: {
        beforeEnter(el) {
            // 要素が出現・表示される前の状態をここで定義します。
        },
        enter(el, done) {
            // elに出現・表示されるアニメーションを実行します。
            // アニメーションが完了したら done コールバックを呼び出します。
        },
        afterEnter(el) {
            // 要素が出現・表示された後の状態を定義します。
        },
        enterCancelled(el) {
            // 要素が出現・表示するアニメーションをキャンセルされたときの状態を定義します。
        },
        beforeLeave(el) {
            // 要素が消滅・非表示される前の状態をここで定義します。
        },
        leave(el, done) {
            // elに消滅・非表示されるアニメーションを実行します。
            // アニメーションが完了したら done コールバックを呼び出します。
        },
        afterLeave(el) {
            // 要素が消滅・非表示するアニメーションをキャンセルされたときの状態を定義します。
        },
        leaveCancelled(el) {
            // 要素が消滅・非表示するアニメーションをキャンセルされたときの状態を定義します。
        },
    },
}).mount('#app')