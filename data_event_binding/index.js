//app.user();
//app.config();

Vue.createApp({
    data(){
        return {
            nameUser : '',
            userName : '',
        };
    },
    methods: {
        showNameUser(event){
            this.nameUser = event.target.value;
        }
    },
}).mount('#app');