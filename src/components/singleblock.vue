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
  font-size: 25px;
  margin-right: 15px;
 }

 h1 {
  display: inline-block;
  font-size: 30px;
 }

 p {
  color:#b6bebc;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 20px;
 }

}

</style>