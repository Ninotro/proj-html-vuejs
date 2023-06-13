<script>

export default {
  props: {
    details: Object

  },
  name : "singleblock",


  

}
</script>

<template>

    <div class="block">
        <i :class="details.icon"></i>
        <h1>{{ details.title }}</h1>
        <p>{{ details.description }}</p>
    </div>

  
</template>

<style lang="scss" scoped >

.block {
  width: calc(50% - 50px);
  display: flex;
  flex-wrap: wrap;
  i {
  color : #0b5557;
  font-size: 40px;
  margin-right: 20px;
 }

 h1 {
  display: inline-block;
  font-size: 40px;
 }

 p {
  color:  #e2e3e7;
  margin-top: 30px;
  margin-bottom: 30px;
 }

}

</style>