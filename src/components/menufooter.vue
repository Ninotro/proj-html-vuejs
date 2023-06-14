<script>
import {store} from "../store.js"
import Linksfooter from "./Linksfooter.vue"


export default {
    
 
 name :"menufooter",

 components : {

    Linksfooter
 },


 
 data () {
    return {
      store,
    }
  }
 

}


</script>

<template>



  <div id="menufooter">
    <div class="container">
      <div class="block-info">
          <div class="container-img">
            <img src="/nexgen-logo.svg" alt="">
          </div>
          <p>A Functional HTML Template for corporate & Business</p>
          <div class="social"><i :class="store.menuBar[0].icona"></i>{{ store.menuBar[0].testo }}</div>
          <div class="social"><i :class="store.menuBar[1].icona"></i>{{ store.menuBar[1].testo }}</div>
          <div class="social"><i class="fa-solid fa-location-dot"></i>Main.Avenue, 987</div>
          <button class="custom-button2">GET IN TOUCH</button>
      </div>
      <div class="container-links">
        <Linksfooter v-for="(item, index) in store.arrayMenuFooter" :key="index" :title="item.title" :links="item.links" />
      </div>
    </div>
    <div id="end-footer">
      <div class="container">
        <div>Enjoy the low price.We are tracking any intention of piracy</div>
        <div><i class="fa-regular fa-copyright"></i> NEXGEN is Proudly Powered by <span>Codings</span>.</div>
      </div>

    </div>
  </div>
       
    
   
 </template>

<style lang="scss" scoped>
@use "../style/general.scss";

#menufooter {
    height: 700px;
    background-color:  #111117;
    .container {
        height: 100%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .block-info { 
            width: 400px;
            height: 600px;
            color:#b6bebc;
            font-size: 25px;
            .container-img {
                margin-bottom: 25px;
                width: 100%;
                height: 100px;
                img {
                    height: 100%;
                    object-fit: cover;
                }
            }
            
            .social {
                margin-top: 25px;
                p {
                margin: 20px 0;
            }

            i {
                margin-right: 25px;
            }

            }

            button {
            margin-top: 30px;
            display: inline-block;
            padding: 10px 20px;
            border: 2px solid #0b4d50;
            border-radius: 8px;
            color: white;
            background-color: transparent;
            transition: border-color 0.3s;
            font-size: 25px;
            font-weight: bold;
            cursor: pointer;
       

          &:hover {
            border-color: #A1FCDF;
                 }
            }
          
        }
    }
}

.container-links {
  height: 600px;
  display: flex;
  gap: 150px
}

#end-footer {
  height: 100px;
  background-color:#0d0d11;

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 20px;

    span {
      color:#0b4d50
    }
  }
}
</style>
