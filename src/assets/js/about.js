

import commonHeader2 from '../../components/header2'; 
import commonFooter from '../../components/footer'; 




export default {
  name: 'about',
  components: {
    commonHeader2,
    commonFooter,
  },  
  data () {
    return {
      anchor: {
        tit1: '煮田简介',
        tit2: '门店形象',
      },
      index: 0,
    }
  }, 

  mounted(){
    
    if(this.$route.query.index) {
      this.index = Number(this.$route.query.index);
    } else {
      this.index = this.index;
    }

   
  },

  created() {

    if(this.$route.query.index) {
      this.index = Number(this.$route.query.index);
    } else {
      this.index = this.index;
    }

  },

  methods:{
     
      switchTitle(v) {
        this.index = v
        switch (v) {
          case 0:
            this.$router.push('/about/about-introduct');
            break;
          case 1:
            this.$router.push('/about/about-shop');
            break;
        }
      }

  },
}

