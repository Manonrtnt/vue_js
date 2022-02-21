Vue.createApp({
    data(){
        return {
            string : "",
        };
    },
    methods: {
        eventInput(event){
            this.string = event.target.value;
        },
        alerte(){
            alert("ALERTE GENERALE");
        }
    },
}).mount('#app');