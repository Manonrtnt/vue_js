Vue.createApp({
    data(){
        return{
            backgroundColor : 'red',
            className : '',
            displayH1 : 'block',
        }
    },
    methods : {
        changeColor(event){
            this.backgroundColor = event.target.value;
        },
        hiddenH1(){
            if (this.displayH1 === 'block'){
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