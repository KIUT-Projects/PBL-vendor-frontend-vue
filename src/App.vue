
<template>
  <RouterView />
</template>

<style scoped>



.container{
  position: relative;
  width: 100%;
  height: 100vh;
}

.top{
  width: 100%;
  height: 100%;
  display: flex;
}
.cards{
  position: absolute;
  width: 400px;
  z-index: 10;
  display: block;
  left: 130px;
  top: 0;
}


.hiddn{
  position: absolute;
  display: none;
}

.main{
  width: 75%;
}

.right{
  width: 25%;
}
</style>

<script>

import Menu_products from './components/Menu/Menu_products.vue';
import Main_page from './components/Main_page/Main_page.vue';
import Right_for_page from './components/Right_page/Right_for_page.vue';
import Registration from './Viwes/Registration.vue';
export default{ 
  components:{
    Menu_products,
    Main_page,
    Right_for_page,
    Registration,
  },
  data() {
    return {
      products:[
        {
          name : 'banana',
          price: 1231,
        },
        {
          name : 'apple',
          price: 12311,
        },
        {
          name : 'pear',
          price: 12311,
        }
        
        
      ],
      card: false,
    }
  },

}
</script>
