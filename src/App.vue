<script>
import {store} from "../src/store.js"
import PageHeader from './components/PageHeader.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import Jumbotron from "./components/Jumbotron.vue";
import TheCompany from "./components/TheCompany.vue"


export default {
  components: {
    PageHeader,
    Jumbotron,
    TheCompany,
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
      <Jumbotron/>
      <TheCompany/>
   </main>
   
</template>

<style lang="scss" >
@use "../src/style/general.scss"

</style>
