<script>

export default {
  props: {
    area: Object

  },
  name : "singleCardTeam",


  

}
</script>

<template>
    <div class="card">
        <div class="image-container">
            <img :src="area.img" :alt="area.name" />
        </div>
        <div class="content">
            <h3 class="title">{{ area.name }}</h3>
            <h4 class="subtitle">{{ area.role }}</h4>
            <div class="icons">
                    <a href="#" class="icon-link">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="icon-link">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="icon-link">
                        <i class="fab fa-linkedin"></i>
                    </a>
            </div>
        </div>
    </div>
    
  
</template>

<style lang="scss" scoped >

.card { 
   
    width: calc(50% - 10px);
  display: flex;
  align-items: center;
 
  padding: 10px;
  
}

.image-container {
  flex: 0 0 250px;
  height: 250px;
  margin-right: 80px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  
}

.subtitle {
  font-size: 16px;
  color:#b6bebc;
  margin-bottom: 20px;
}

.icons {
  display: flex;
}



.icons i {
  font-size: 28px;
  color: #058283;
  background-color: #0f2128;
  padding: 15px;
  border-radius: 99%;
  margin-right: 10px;
  transition: color 0.3s, background-color 0.3s;
}

.icons i:hover {
  color: white;
  background-color: #058283;
}
</style>