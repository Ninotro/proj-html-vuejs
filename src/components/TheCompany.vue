<script>

import {store} from "../store.js"

export default {
    
 
 name :"TheCompany",

 
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio accusantium iste, quia aspernatur veritatis perferendis dicta quidem! Praesentium beatae totam iusto neque quaerat numquam eaque fugiat enim voluptatum commodi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>

        </div>

    </section>

   
       
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";

#TheCompany {
    height: 700px;
    background-color: #111117;

    .container {
        height: 100%;
        width: 90%;
        margin: 0 auto;
        color: white;
        display: flex;
        align-items: center;

     
    
        #network {
            width: 40%;
         p {
            color:  #e2e3e7;
            font-size: 25px;
            }

        h3 {
            color : #0b5557;
            margin-bottom: 30px;
        }
        h2 {
            font-size: 40px;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
        .the {
        background-color: #0e272d;
        padding: 5px 20px;
        margin-right: 15px;
        }
        }
            }
           

        
}
}






</style>
