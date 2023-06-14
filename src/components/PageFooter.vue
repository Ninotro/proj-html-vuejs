<script>
import {store} from "../store.js"
import Menufooter from "./menufooter.vue";
import Subscribe from "./subscribe.vue";




export default {
    name :"PageMain",

  components: {
    Subscribe,
    Menufooter
},
  data () {
    return {
      store,
    }
  }
}
</script>

<template>
   
<footer>
    <Subscribe/>
    <menufooter/>
</footer>
   
</template>

<style lang="scss" >
@use "../src/style/general.scss"

</style>