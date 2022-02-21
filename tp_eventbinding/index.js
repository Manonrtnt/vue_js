Vue.createApp({
    data(){
        return {
            string : "",
            stringEscape : "",
        };
    },
    methods: {
        eventInput(event){
            if (event.key == "Escape"){
                this.stringEscape  = event.target.value;
            } else {
                this.string = event.target.value;
            }
        },
        showAlert(){
            alert("ALERTE GENERALE");
        }
    },
}).mount('#app');