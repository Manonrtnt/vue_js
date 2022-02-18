// Création d'une instance VUE c'est notre application 
Vue.createApp({
    // fonction data qui retournera un objet dans lequel on définit les valeurs de l'application
    // data retrouver dans this
    data (){
        return {
            tasks:[],
            valeurDeInput:'',
        };
    },
    // Ici, créer nos fonctions
    methods : {
        ajouterTask(){
            this.tasks.push(this.valeurDeInput);
            this.valeurDeInput = '';
        }
    }
}).mount('#app'); // Permet d'injecter là ou on a le selecteur. 