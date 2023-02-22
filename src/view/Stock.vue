<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Stok Adı</th>
          <th>Sarıcı Kodu</th>
          <th>Birim Adı</th>
          <th>Fiyat</th>
          <th>KDV(%)</th>
          <th>İşlemler</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="stock in stocks" :key="stock.id">
          <td>{{ stock.stokAdı }}</td>
          <td>{{ stock.satıcıKodu }}</td>
          <td>{{ stock.birimAdı }}</td>
          <td>{{ stock.fiyat }}</td>
          <td>{{ stock.kdv }}</td>
          <td>
            <button class="btn btn-danger me-2">sil</button>
            <button class="btn btn-success">düzenle</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      stocks : []
    }
  },
  created(){
    this.$axios.get("http://localhost:3000/stocks").then(res=> {
      this.stocks = res.data
      console.log(this.stocks)
    })
  }
};
</script>
