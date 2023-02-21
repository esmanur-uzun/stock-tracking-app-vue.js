<template>
  <div>
    <div class="col-lg-2 aside d-flex justify-content-center align-items-center">
      <router-link to="/" class="menu" > Ana Sayfa </router-link>
      <router-link to="/stock" class="menu ms-4"> Stoklar </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.aside {
  background-color: #023047;
  position: fixed  ;
  width: 100%;
  height: 60px;
}

.menu{
  text-decoration: none;
  color: aliceblue;
}
.menu:hover {
  color: rgb(163, 208, 247);
}
i {
  font-size: 30px;
}
</style>
