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
            .then(response => (this.info = response.data))
    }
})

new Vue({
    el: '#app_time',
    data() {
        //       now: "00:00:00"
    },
    computed: {
        time: function () {
            var date = new Date();
            var year = date.getFullYear();
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var day = ("0" + date.getDate()).slice(-2);
            var hour = ("0" + date.getHours()).slice(-2);
            var minute = ("0" + date.getMinutes()).slice(-2);
            var second = ("0" + date.getSeconds()).slice(-2);
            return this.time = hour + ":" + minute + ":" + second
            //return this.time = year + "/" + month + "/" + day
        }
    }
})