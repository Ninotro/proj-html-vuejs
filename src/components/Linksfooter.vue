<script>

export default {
  name: "LinksFooter",
  props: {
    title: String,
    links: Array,
  },
};
  


</script>

<template>
  <div class="block">
    <div class="containers">
      <h2 class="title">{{ title }}</h2>
      <ul class="links">
        <li v-for="(link, index) in links" :key="index">
          <a href="#" class="link-item">
            <i class="fa-solid fa-angle-right"></i> {{ link }}
          </a>
        </li>
      </ul>
    </div>
   
  </div>
</template>

<style lang="scss" scoped>
.block {
 
  height: 350px;
  width: calc(100% / 3 - 10px);
  background-color: #19191f;
  color: #fff;
  padding: 10px;
  border-radius: 15px;
  font-size: 18px;
  
  .containers {
    width: 80%;
    height: 80%;
    margin: 10% auto;
  }
}

.title {
  font-weight: bold;
  
}

.links {
  margin-top: 20px;
}

.links li {
  list-style: none;
  margin-bottom: 10px;
}

.link-item {
  color: #fff;
  text-decoration: none;
}

.link-item:hover {
  color: #058283;
}
</style>