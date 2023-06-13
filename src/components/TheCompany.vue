<script>

import {store} from "../store.js"
import singleblock from "./singleblock.vue"

export default {
    
 
 name :"TheCompany",

 components : {
    singleblock,
 },

 
 data () {
    return {
      store,
    }
}
 

}


</script>

<template>

    <section id="TheCompany">
        <div class="container">
            <div id="network">
                <h3>ABOUT THE NETWORK</h3>
                <h2><span class="the">THE</span>COMPANY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio accusantium iste, quia aspernatur veritatis perferendis dicta quidem! Praesentium beatae totam iusto neque quaerat <br>numquam eaque fugiat enim voluptatum commodi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <!-- singolo blocco ciclato -->
            <div id="menu">
                <singleblock v-for="block in store.menuTheCompany "
                    :details="block"/>

            </div>

        </div>

    </section>

   
       
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";

#TheCompany {
    height: 600px;
    background-color: #111117;

    .container {
        height: 100%;
        width: 70%;
        margin: 0 auto;
        
        color: white;
        display: flex;
        align-items: center;
        gap: 80px;

     
    
        #network {
            width: 30%;
         p {
            color:#b6bebc;
            font-size: 20px;
            }

        h3 {
            color : #0b5557;
            margin-bottom: 25px;
            font-size: 20px
        }
        h2 {
            font-size: 30px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        .the {
        background-color: #0e272d;
        padding: 5px 20px;
        margin-right: 15px;
        }
        }
            }
           

        
}
}

#menu {
    padding-top: 3%;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;
}






</style>
