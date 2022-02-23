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
        },
        deleteFilm(index){
            this.listFilm.splice(index,1);
        }
    },
}).mount('#app');