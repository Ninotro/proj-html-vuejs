<script>

import {store} from "../store.js"
import singleLink from "../components/singleLink.vue";
export default {
    
 
 name :"PageHeader",

 components : {
    singleLink,
 },
 data () {
    return {
      store,
    }
}
 

}


</script>

<template>

   
       
     <header>
        <div class="container">
            <div>
                <i class="fa-solid fa-clock"></i> Open hours: Mon - Sat - 9:00 - 18.00
            </div>
            <nav>
                <ul>
                    
                    <singleLink v-for="link in store.menuBar"
                    :details="link"/>

                    

                </ul>
            </nav>
                
                
            
        </div>
     </header>

    
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";

header {
    height: 60px;
    background-color: #132e43;
    width: 100%;
    .container {
        font-size:16px;
        height: 100%;
        width: 70%;
        margin: 0 auto;
        color: #c0c3d0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
            color: #c0c3d0;
        }

       ul {
            display: flex;
            gap: 25px;
        }
        
    }

}
</style>
