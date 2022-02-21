Vue.createApp({
    data(){
        return {
            nameUser : '',
            nbr : 0,
        };
    },
    methods: {
        augmenter(num){
            this.nbr += num;
        },
        reduire(num){
            this.nbr -= num;
        },
        changeName(){
            this.nameUser = "toto";
        }
    },
    computed : {
        showName(){
            console.log("je suis bien exécutée");
            if (this.nameUser === ''){
                return 'test';
            } else {
                return 'play again';
            }
        },
    }
}).mount('#app');