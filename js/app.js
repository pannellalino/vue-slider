// img/01.jpg

const {createApp} = Vue;

createApp ({
  data(){
    return{
      images:
        [
          'img/delpiero.jpg',
          'img/nedved.jpg',
          'img/pirlo.jpg',
          'img/chiellini.jpg',
          'img/buffon.png'
        ],
        activeImage: 0,
        ora: '',
    }
  },
  methods: {
    changeImg(index){
      this.activeImage = index
    },
    nextPrev(isNext){
      if(isNext) this.activeImage++;
      else this.activeImage--;
      if(this.activeImage === this.images.length){
        this.activeImage = 0;
      }else if(this.activeImage < 0){
        this.activeImage = this.images.length -1
      }
    },
    getHours(){
      const d = new Date;
      this.ora = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
    },
    getClock(){
      setInterval(()=>{
        this.getHours();
      },1000)
    }
  },
  mounted(){
    this.getHours();
    this.getClock();
  },
  created(){

  }
}).mount('#app');