new Vue({
    el: '#app',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('../assets/test.json') //ここにURLを入れる
            .then(response => (this.info = response))
    }
})