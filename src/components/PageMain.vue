<script>
import {store} from "../store.js"

import Jumbotron from "./Jumbotron.vue";
import TheCompany from "./TheCompany.vue"
import BusinessArea from "./BusinessArea.vue";


export default {
    name :"PageMain",

  components: {
    Jumbotron,
    TheCompany,
    BusinessArea,
    BusinessArea
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
        </div>
      
   </main>
   
</template>

<style lang="scss" >
@use "../src/style/general.scss"

</style>