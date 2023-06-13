<script>
import {store} from "../store.js"

import Jumbotron from "./Jumbotron.vue";
import TheCompany from "./TheCompany.vue"
import BusinessArea from "./BusinessArea.vue";
import processManagement from "./processManagement.vue";
import teamOfExpert from "./teamOfExpert.vue"



export default {
    name :"PageMain",

  components: {
    Jumbotron,
    TheCompany,
    BusinessArea,
    processManagement,
    teamOfExpert,
    
},
  data () {
    return {
      store,
    }
  }
}
</script>

<template>
   
   <main>
        <div>
            <Jumbotron/>
            <TheCompany/>
            <BusinessArea/>
            <processManagement/>
            <teamOfExpert/>

        </div>
      
   </main>
   
</template>

<style lang="scss" >
@use "../src/style/general.scss"

</style>