Vue.createApp({
    data(){
        return {
            counter : 0,
            nombre : 0,
        };
    },
    methods: {
        counterMoins : function (event) {
            event.preventDeault();
            this.nombre --;
        },
        counterPlus : function (event) {
            event.preventDeault();
            this.nombre ++;
        },
    },
}).mount('#app');

Vue.createApp({
    data(){
        return {
            counter : 0,
            nombre : 0,
            string : "",
        };
    },
    methods: {
        eventClick(event){
            console.log(event);
        },
        eventInput(event){
            console.log(event);
            this.string = event.target.value;
        },
    },
}).mount('#app2');