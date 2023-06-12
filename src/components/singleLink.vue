<script>

export default {
  props: {
    details: Object

  },
  name : "singleLink",


  

}
</script>

<template>

    <li><a :href="details.link"><i :class="details.icona"></i>  {{ details.testo }}</a></li>

  
</template>

<style lang="scss" scoped >

a {
            color: #c0c3d0;
        }





</style>