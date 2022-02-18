//Création d'une instance Vue c'est notre application
Vue.createApp({
    data() {
        return {
            unTitre : "Je suis un livre",
            unNumero : 123456789,
            unLivre: ['du texte', 99],
            uneValeur: {
                "name" : "cool",
                "tel" : 123456789
            },
        };
    },
// L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');






