<script>

export default {
  props: {
    area: Object

  },
  name : "singleblockBusiness",


  

}
</script>

<template>

<div class="block">
    <div class="icon">
      
        <div class="top-left-icon"><i :class="area.icon"></i></div>
        <div class="top-right-icon">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      
    </div>
    <div class="content">
      <h4 class="title">{{ area.title }}</h4>
      <p class="description">{{ area.description }}</p>
    </div>
  </div>
  
</template>

<style lang="scss" scoped >

.block {
  background-color: white;
  padding: 20px;
  color: white;
  width: calc(100% / 3 - 20px);
  
}

.icon {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 25px;
}



.top-left-icon {
  margin-right: 10px;
  color: #248583;
}

.top-right-icon {
 
  color: #248583
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #248583;
}

.description {
  font-size: 20px;
  color:#b6bebc;
}
</style>