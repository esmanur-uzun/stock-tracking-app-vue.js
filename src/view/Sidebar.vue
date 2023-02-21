<template>
  <div>
    <div class="col-lg-2 aside ">
      <router-link to="/" class="menu" > Ana Sayfa </router-link>
      <router-link to="/stock" class="menu ms-4"> Stoklar </router-link>
      <router-link to="/newStock" class="menu ms-4"> Stok Ekle</router-link>
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
  display: flex;
  justify-content: center;

}

.menu{
  text-decoration: none;
  color: aliceblue;
}
.menu:hover {
  color: rgb(163, 208, 247);
}

</style>
