<script>

export default {
  props: {
    area: Object

  },
  name : "singleCardNews",


  

}
</script>

<template>
  
  <div class="card">
    <div class="image-container">
      <img :src="area.url" :alt="area.description" class="image" />
      <div class="overlay"></div>
      <div class="text-container">
        <p class="description">{{ area.description }}</p>
      </div>
    </div>
  </div>

    
</template>

<style lang="scss" scoped >

.card {
  width: calc(100% / 3 - 100px);
  background-color: #f5f5f5;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  transition: opacity 0.3s ease;
}

.card:hover .image {
  opacity: 0.8;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 0;
}

.text-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
}

.description {
  color: white;
  font-size: 25px;
  font-weight: bold;
}

</style>