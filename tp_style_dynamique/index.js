Vue.createApp({
    data(){
        return{
            laCouleur : '',
            className : '',
            displayH1 : 'block',
        }
    },
    methods : {
        hiddenH1(){
            if (this.displayH1 == 'block'){
                this.displayH1 = 'none';
            } else {
                this.displayH1 = 'block';
            }
        }
    },
    computed : {
        changeClass(){
            if (this.className == 'hello'){
                return 'hello'
            }
            if (this.className == 'world'){
                return 'world'
            }
        },
    }
}).mount('#app');