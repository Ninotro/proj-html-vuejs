<script>

import {store} from "../store.js"
import SingleCardNews from "./singleCardNews.vue";


export default {
    
 
 name :"latestNews",

 components : {
    SingleCardNews
},

 
 data () {
    return {
      store,
    }
}
 

}


</script>

<template>

    
<section id="latestNews">
    <div class="container">
        <h3>OUR EDITORIAL CONTENT</h3>
        <h2>Latest <span class="the">News</span></h2>
        <div id="paragraph-button">
                    <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of <br>
                        experienced and renowned professionals.There are some options that you can hire</p>
                    <button class="custom-button">SEE ALL</button>
        </div>
        <div id="container-card">
        <SingleCardNews v-for="block in store.Arrayimg "
                    :area="block"/>

        </div>
    </div>
</section>
   
       
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";

#latestNews {
    
    display: flex;
    align-items: center;
    .container {
        width: 70%;
        margin: 0 auto;
        padding: 50px 0;
        h2 {
            margin: 50px auto;
            font-size: 50px;
            font-weight: bold;
            color:#21333e;

            span {
                background-color: #daeced;
                padding: 5px 20px;
                margin-right: 15px;
                color : #00a6a5 ;
            }
        }
        
        h3 {
            
            font-size: 25px;
            color : #00a6a5
        }

        #container-card {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
        }
    }
}

#paragraph-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: calc(100% - 10px);

            p {
                font-size: 18px;
                color:#95a8b6;
            }

            .custom-button {
                font-size: 15px;
            }
        }
</style>
