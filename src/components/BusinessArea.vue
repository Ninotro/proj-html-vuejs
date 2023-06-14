<script>

import {store} from "../store.js"
import singleblockBusiness from "./singleblockBusiness.vue"


export default {
    
 
 name :"BusinessArea",

 components : {
    singleblockBusiness
    
 },

 
 data () {
    return {
      store,
    }
}
 

}


</script>

<template>

    <section id="BusinessArea">
        <div class="container">
            <div class="text-area">
                <h3>OUR BUSINESS AREA</h3>
                <h2>Excellence in <span>Services</span></h2>
                <div id="paragraph-button">
                    <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of <br>
                        experienced and renowned professionals.There are some options that you can hire</p>
                    <button class="custom-button">SEE ALL</button>
                </div>
            </div>
            <div class="block-container">
                <singleblockBusiness v-for="block in store.businessAreas "
                    :area="block"/>
            </div>
        </div>
    </section>

   
       
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";



#BusinessArea {
    height: 1000px;
    background-color: #eef4ed;
    .container {
        height: 100%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        

        h3 {
            
            font-size: 20px;
            color : #00a6a5
        }
        
        h2 {
            margin: 40px auto;
            font-size: 40px;
            font-weight: bold;
            color:#21333e;

            span{
                background-color: #daeced;
                padding: 5px 20px;
                margin-right: 15px;
                color : #00a6a5 ;
            }
        }
        #paragraph-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: calc(100% - 10px);

            p {
                font-size: 20px;
                color:#95a8b6
            }

            .custom-button {
                font-size: 15px;
            }
        }
        .block-container {
            margin-top: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            
            
            
        }
    }
}

.text-area {
    
}


</style>
