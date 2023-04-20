<template>
    <div class="container1">
      <div class="container">
        <div class="top">
            <Menu_products :class="[{cards: card},{hiddn: !card}]" :products="products2" :AddList="AddList"/>
          <div class="main">
            <Main_page :TurnOnAdnTurnOff="TurnOnAndTurnOff" :ProducList="ProducList" :DaletProductList="DaletProductList"/>
          </div>
          <div class="right" id="right">
            <Right_for_page/>
  
          </div>
        </div>
        <div class="footer">
  
        </div>
      </div>
    </div>
       
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
  
  import Menu_products from '../components/Menu/Menu_products.vue';
  import Main_page from '../components/Main_page/Main_page.vue';
  import Right_for_page from '../components/Right_page/Right_for_page.vue';
  import Registration from '../Viwes/Registration.vue';
  var today = new Date();
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
            tyupe: 'Mevalar'
          },
          {
            name : 'apple',
            price: 12311,
            tyupe: 'Tezkor'
          },
          {
            name : 'pear',
            price: 12311,
            tyupe: 'kokatlar'
          }
          
        ],
        products2:[

        ],
        ProducList:[
          
        ],
        card: false,
      }
    },

    methods:{
      TurnOnAndTurnOff(str){
        this.card = !this.card;
        if(str == 'All')
        return this.products2 = this.products
        else
        return this.products2 = this.products.filter(e=> e.tyupe == str);
      },
      AddList(product){
        let checkProduct = true
         let produt = {
          name : product.name,
          price: product.price,
          tyupe: product.tyupe,
         };
         this.ProducList.forEach(element => {
            if(element.name == product.name){
              checkProduct = false;
            }
         });

         if(checkProduct){
          this.ProducList.push(product)
         }
      },


      // DaletProductList(){
      //   //  let NumberOfProduct =0;
      //   //    this.ProducList.forEach(element => {
      //   //      NumberOfProduct++;
      //   //     if(element.name == name){
      //   //       return;
      //   //     }    
      //   //  });
      //   //  this.ProducList.remove(1);
      //   console.log(2131);
      // }
    }, 
  }
  </script>
  