//Création d'une instance Vue c'est notre application
Vue.createApp({
    data(){
        return {
            testInjectionHTML : '<p>Je suis un test<p>',
            testBind : "https://developer.mozilla.org/fr/"
        };
    }
}).mount('#app');