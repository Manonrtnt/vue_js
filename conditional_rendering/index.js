Vue.createApp({
    data(){
        return{
            listFilm : [],
            myFilm : '',
        }
    },
    methods : {
        addFilm(){
            this.listFilm.push(this.myFilm);
        }
    },
}).mount('#app');