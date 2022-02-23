Vue.createApp({
    data(){
        return{
            listCourse : [],
            articleCourse : '',
            displayList : 'block',
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
            } else {
                this.displayList = 'block';
            }
        }
    },
}).mount('#app');