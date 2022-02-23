Vue.createApp({
    data(){
        return{
            listCourse : [],
            articleCourse : '',
            displayList : 'block',
            message : 'Masquer la liste',
        }
    },
    methods : {
        addArticle(){
            this.listCourse.push(this.articleCourse);
        },
        deleteArticle(index){
            this.listCourse.splice(index,1);
        },
        showList(){
            if (this.displayList == 'block'){
                this.displayList = 'none';
                this.message = "Afficher la liste"
            } else {
                this.displayList = 'block';
                this.message = "Masquer la liste"
            }
        }
    },
}).mount('#app');