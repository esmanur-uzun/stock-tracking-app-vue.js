<template>
  <div class="d-flex justify-content-center align-items-center">
    <form class="col-lg-3">
      <div class="mb-2">
        <label class="form-label">Stok Adı</label>
        <input type="text" class="form-control" v-model="newStock.stokAdı" />
      </div>
      <div class="mb-2">
        <label class="form-label">Satıcı Kodu</label>
        <input type="text" class="form-control" v-model="newStock.satıcıKodu" />
      </div>
      <div class="mb-2">
        <label class="form-label">Birim Adı</label>
        <input type="text" class="form-control" v-model="newStock.birimAdı" />
      </div>
      <div class="mb-2">
        <label class="form-label">Fiyat</label>
        <input type="text" class="form-control" v-model="newStock.fiyat" />
      </div>
      <div class="mb-2">
        <label class="form-label">KDV(%)</label>
        <input type="text" class="form-control" v-model="newStock.kdv" />
      </div>
      <button type="submit" class="btn btn-primary" @click="onSave">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return{
            newStock:{
                stokAdı:"",
                satıcıKodu:"",
                birimAdı:"",
                fiyat:"",
                kdv:"",

            }

            
        }
    },
    methods:{
        onSave(){
            this.$axios.post("http://localhost:3000/stocks",this.newStock).then(res=>{
                console.log(res)
            })
        }
    }
};
</script>
