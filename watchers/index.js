Vue.createApp({
    data(){
        return {
            nbr : 0,
            leNombre : 0,
            message : "Essaie encore !",
            randNumber : Math.round(Math.random() *10),
        };
    },
    watch: {
        nbr(value){
            if(value == 7){
                this.nbr = 99;
            }
        },
        leNombre(value){
            if (value == this.randNumber){
                this.message = " BINGO !";
            } else if (value > this.randNumber){
                this.message = "tu as dépassé le nombre mystère !"
                this.leNombre = 0;
            }
            setTimeout(() => {
                this.leNombre = 0;
                // this.message = "Essaie encore !"
            }, 5000); 
        }
    },
}).mount('#app');


// CORRECTION :
// Vue.createApp({
//     data() {
//         return {
//             leNombre: 0,
//             nombreMystere: Math.round(Math.random() * 10)
//         };
//     },
//     computed: {
//         indice() {
//             if (this.leNombre < this.nombreMystere) {
//                 return 'ESSAIE ENCORE!';
//             } else if (this.leNombre === this.nombreMystere) {
//                 return this.leNombre + '...BINGO';
//             } else {
//                 return 'tu as dépassé le nombre';
//             }
//         },
//     },
//     methods: {
//         augmenter(num) {
//             this.leNombre += num;
//         },
//     },
//     watch: {
//         leNombre(value) {
//             console.log('le watcher en action...');
//             setTimeout(() => {
//                 this.leNombre = 0;
//             }, 5000);
//         },
//     },
// }).mount('#monApp');