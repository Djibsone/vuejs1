const app = Vue.createApp({
    //objet
    data(){
        return{
            icon: 'Merci bien',
            titre: 'Afficher les listes',
            users: [
                {
                    auther: 'Tamou',
                    age: '24',
                    bio: 'un gars très svelte',
                    url: 'https://djibsone.github.io/e-ecom',
                    image: 'assets/1.jpg',
                    isBest: true 
                },
                {
                    auther: 'Rache',
                    age: '20',
                    bio: 'un gars très sympa',
                    url: 'https://djibsone.github.io/e-ecom',
                    image: 'assets/2.png',
                    isBest: true
                },
                {
                    auther: 'Djibril',
                    age: '30',
                    bio: 'un gars très bon',
                    url: 'https://djibsone.github.io/e-ecom',
                    image: 'assets/3.png',
                    isBest: false
                }
            ],
            x: 0,
            y: 0,
            showText: true,
            isConnect: false,
            bioShow: false,
            auther: 'les amis',
            age: '24',
            bio: 'un gars très svelte'
        }
    },
    //objet
    methods: {
        //premier elt
       add_old(){
        this.age++
       },
        //deuxième elt
       minus_old(){
        this.age--
       },
       connect(){
        this.showText = false
        this.isConnect = true
        this.auther = 'M. Tamou'
        this.bioShow = true
       },
       disconnect(){
        this.showText = true
        this.isConnect = false
        this.auther = 'les amis'
       },
       handMouse(e){
        console.log(e);
       },
       moved(e){
        this.x = e.offsetX
        this.y = e.offsetY
       },
       toggleBest(user){
        user.isBest = !user.isBest ;
       },
       handClick(){
        console.log(this.$refs.name);
        this.$refs.name.focus()
      }
    }
})

app.mount('#app')