<template >
    <div class="container_for_right">
        <div class="cards">
            <Main_box>
                        <font-awesome-icon :icon="['fas', 'user-secret']" />
                        <p>Tezkor</p>
            </Main_box>

            <Main_box>
                        <font-awesome-icon :icon="['fas', 'user-secret']" />
                        <p>Tezkor</p>
            </Main_box>

            <Main_box>
                        <font-awesome-icon :icon="['fas', 'user-secret']" />
                        <p>Tezkor</p>
            </Main_box>
        </div>

        <div class="customer_discount">
                <div class="customer">
            <div class="customer_top">
                    <p>Mijoz</p>
                    <p>Yaratish</p>
            </div>

            <div class="bottom">
                <input type="text" class="custome">
            </div>
            </div>

            <div class="discount">
                <div class="text_discount">
                    <p>chegirma</p>
                </div>
                <div class="input_btns">
                    <div class="input">
                        <input type="text">
                    </div>
                    <div class="btns">
                        <button>%</button>
                        <button>UZS</button>
                    </div>
                </div>
            
            </div>
        </div>
        

        <div class="pay">
           <table cellspacing="0">
            <tr>
                <td>jami</td>
                <td>228.400 so`m</td>
            </tr>

            <tr>
                <td>chegirma</td>
                <td>-400</td>
            </tr>

            <tr>
                <td>to`lov</td>
                <td>228.400 so`m</td>
            </tr>
             
           </table>
        </div>
    </div>
</template>


<script>

export default {
    
}
</script>



<style scoped >
    .container_for_right{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .container_for_right table{
        width: 100%;
       
    }

    .container_for_right .cards{
        width: 100%;
        height: 150px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-top: 25px;
    }
    .container_for_right .customer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .container_for_right .customer .customer_top{
        width: 100%;
        color: red;
        display: flex;
        justify-content: space-around;
    }

    .container_for_right .customer .customer_top{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #4E93E4
    }

    .container_for_right .customer_discount{
        width: 90%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    

    .container_for_right .customer .customer_top:nth-child(1){
        
        color: #656567;
    }

    .container_for_right .customer .customer_top{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #4E93E4
    }

    
    .container_for_right .customer .bottom{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_for_right .customer .bottom input{
        width: 100%;
        height: 50px;
        background: rgba(248, 250, 255, 0.55);
        background-blend-mode: darken;
        /* text color */

        border: 0.5px solid #656567;
        box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
        filter: blur(0.5px);
        border-radius: 10px;
    }

    .container_for_right .discount{
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        
    }

    .container_for_right .discount .text_discount{
        width: 100%;
        display: flex;
        justify-content: start;
        padding-left: 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        color: #656567;
    }

    .container_for_right .discount .input{
        width: 100%;
        display: flex;
        justify-content: start;
    }

    .container_for_right .discount .input input{
        width: 80%;
        height: 50px;
        border-radius: 25px;

        background: rgba(248, 250, 255, 0.55);
        background-blend-mode: darken;
        /* text color */
        border: 0.5px solid #656567;
        box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
        filter: blur(0.5px);
    }

    .container_for_right .discount .btns{
        width: 80%;
        height: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: hsl(0, 0%, 92%);
        padding: 7px;
        margin-right: 1%;
        border-radius: 10px;
    }

    .container_for_right .discount .btns button{
        width: 58.2px;
        height: 42px;
        background: #fff;
        border-radius: 10px;
    }

    .container_for_right .discount .text_discount p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #656567;
    }
    

    .container_for_right .discount .input_btns{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .container_for_right .pay{
        width: 80%;
        height: 130px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
 }

    .container_for_right .pay table{
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.31);
        border-radius: 15px 15px 0px 0px;
        padding-top: 25px;
        border: none;
    }

    .container_for_right .pay td{
        padding:  7px;
    }

    .container_for_right .pay tr:nth-last-child(1){
        background: #057aff;
    }
</style>