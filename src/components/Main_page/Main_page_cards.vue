<template >
    <div class="container2">
        <div class="left">
           <input type="number" name="" id="" min="0">
        </div>

        <div class="main">
         <div class="product_info">
             <p class="name">{{ product.name }}</p>
             <p class="barcode">0987854689034</p>
             <div class="p">Sotuvda bor: 50ta</div>
         </div>
         

         <div class="colculation">
            <p class="calculation">123x3243x23444234</p>
            <img src="../../images/Group 61.svg" alt="">
         </div>


        </div>

        <div class="right">
            <div class="bin" @click="Dalet">
                <img src="../../images/delete_icon.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        product:{
            typeof: Object
        },
        DaletProductList:{
            typeof: Function,
        },
    },
    methods: {
        Dalet(){
            DaletProductList()
        }
    },
    
}
</script>
<style scoped >

.container2{
    width: 100%;
    height: 98px;
    

    /* elemens

    color
    */
    background: #FFFFFF;
    /* text color */
    border: 1px solid #656567;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    margin-top: 10px;
}

.left{
    width: 117px;
    height: 52px;
    
}

.left input{
   width: 100%;
   height: 100%;
   border-radius: 20px;
}

.main{
    width: 740px;
    display: flex;
    justify-content: space-between;
}

.colculation{
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


    
</style>