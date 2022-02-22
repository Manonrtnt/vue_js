Vue.createApp({
    data(){
        return {
            nbr : 0,
            leNombre : 0,
            message : "Essaie encore !",
        };
    },
    watch: {
        nbr(value){
            if(value == 7){
                this.nbr = 99;
            }
        },
        leNombre(value){
            if (value == 7){
                this.message = " BINGO !";
            } else if (value > 7){
                this.message = "tu as dépassé le nombre mystère !"
                this.leNombre = 0;
            }
            setTimeout(() => {
                this.leNombre = 0;
            }, 5000); 
        }
    },
}).mount('#app');