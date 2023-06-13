<script>
import {store} from "../src/store.js"
import PageHeader from './components/PageHeader.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import PageMain from "./components/PageMain.vue"


export default {
   

  components: {
    PageHeader,
    PageMain
    
  },
  data () {
    return {
      store,
    }
  }
}
</script>

<template>
    <PageHeader/>
   <main>
    <PageMain/>
   </main>
   
</template>

<style lang="scss" >
@use "../src/style/general.scss"

</style>
