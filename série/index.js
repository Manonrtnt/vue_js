//Création d'une instance Vue c'est notre application
Vue.createApp({
    data(){},
    methods: {
        randSerie() {
            const rand = Math.random();
            if (rand < 0,5){
                return "je suis série 1";
            } else {
                return "je suis la série 2";
            }
        }
    },
}).mount('#app');