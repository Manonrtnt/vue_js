Vue.createApp({
    data(){
        return{
            listFilm : [],
            myFilm : '',
        }
    },
    methods : {
        addFilm(event){
            this.listFilm.push(this.myFilm);
        }
    },
}).mount('#app');