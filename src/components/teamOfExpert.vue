<script>

import {store} from "../store.js"
import singleCardTeam from "./singleCardTeam.vue";


export default {
    
 
 name :"teamOfExpert",

 components : {
    singleCardTeam
},

 
 data () {
    return {
      store,
    }
}
 

}


</script>

<template>

   
<section id="teamOfExpert">
    <div class="container">
        
        <div class="flex">
            <div class="text-image">
                <h3>WE LIKE WHAT WE DO</h3>
                <h2><span class="the">TEAM</span>OF EXPERT</h2>
                <p>Ethics and integrity are the bases on which our professionals build their careers.
                    they are fundamentals that become daily attitutes.
                </p>
                <div class="container-card">
                    <singleCardTeam v-for="card in store.arrayCard "
                    :area="card"/>
                </div>

            </div>

            <div class="description">
                <h2>PRESIDENT SPEECH</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur  ipsa natus error exercitationem iste.  <br> <br> Officiis, quia aperiam! Provident placeat ab necessitatibus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br> <br> Mollitia recusandae, suscipit porro maxime vero commodi culpa.
                </p>
                <div class="h3-container">
                    <h3>T.Johnson</h3>
                    <i class="fa-solid fa-plane-circle-xmark"></i>
                </div>
                                

            </div>
        </div>

    </div>

</section>
   
       
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";


#teamOfExpert {
    margin-top: 100px;
    padding: 100px 0;
    background-color: #111117;
    display: flex;
    align-items: center;

    .container {
        width: 70%;
        margin: 0 auto;
        height: 100%;
        .text-image {
            width: 70%;
            
            h2 {

                font-size: 40px;
                color: white;
                font-weight: bold;
                margin: 30px 0;
                .the {
                     background-color: #0e272d;
                    padding: 5px 15px;
                    margin-right: 15px;
        
                    }

                }
                h3 {
                   color : #00a6a5;
                   font-size: 25px;
            
                }

                 p {
                    color:#b6bebc;
                    font-size: 25px;
                    margin-bottom: 40px;
            
                 }
        
    }
}

.container-card {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px
    
}

.description {
    line-height: 30px;
    padding: 30px 30px;
    width: 25%;
    color: white;
    background-color: #058283;
    font-size: 18px;
    

    h2 {
        font-size: 30px;
        margin-bottom: 30px;

    }

   
}
 
}

   .flex {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .h3-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  h3 {
        
    }

   
}






</style>
