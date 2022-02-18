Vue.createApp({
    data(){
        return {
            nom : 'Otto Matik',
            img : "https://picsum.photos/200",
            age : 45,
        };
    },
    methods: {
        randNbr() {
            return Math.random();
        },
        ageTen(){
            let ageTen = (this.age + 10);
            return ageTen;
        }
    },
}).mount('#app');