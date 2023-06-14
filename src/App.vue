<script>
import {store} from "../src/store.js"
import PageHeader from './components/PageHeader.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import PageMain from "./components/PageMain.vue"
import PageFooter from "./components/PageFooter.vue";


export default {
   

  components: {
    PageHeader,
    PageMain,
    PageFooter
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
   
    <PageMain/>
    <PageFooter/>
    
   
</template>

<style lang="scss" >
@use "../src/style/general.scss"

</style>
