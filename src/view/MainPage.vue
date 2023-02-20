<template>
    <div>
        <div class="col-lg-2 aside">
            <ul>
                <li class="mt-5 me-3"><a href="">Ana Sayfa</a></li>
                <li class="mt-3 me-3"><a href="">Stoklar</a></li>
               

            </ul>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
.aside{
    background-color: #023047;
    position: fixed;
    height: 100%;
}
ul li{
    text-decoration: none;
    list-style: none;
    
}
ul li a{
    text-decoration: none;
    color: aliceblue;
}
ul li a:hover{
    color:rgb(163, 208, 247);
}
i{
    font-size: 30px;
}
</style>