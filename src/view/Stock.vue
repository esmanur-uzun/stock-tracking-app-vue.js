<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Stok Adı</th>
          <th>Satıcı Kodu</th>
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
            <button class="btn btn-danger me-2" @click="deleteStock(stock)">
              sil
            </button>
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="edit(stock)"
            >
              düzenle
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Stok Güncelle
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form class=" m-auto" v-for="item in 1" :key="item.id">
                      <div class="mb-2">
                        <label class="form-label">Stok Adı</label>
                        <input
                          v-model="items.stokAdı"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-2">
                        <label class="form-label">Satıcı Kodu</label>
                        <input
                          v-model="items.satıcıKodu"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-2">
                        <label class="form-label">Birim Adı</label>
                        <input
                        v-model="items.birimAdı"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-2">
                        <label class="form-label">Fiyat</label>
                        <input
                        v-model="items.fiyat"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-2">
                        <label class="form-label">KDV(%)</label>
                        <input
                        v-model="items.kdv"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveEdit(items.id)">
                      Save changes
                      </button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="stocks.length == 0" class="text-center">Stok mevcut değil</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stocks: [],
      items:{
        stokAdı:"",
        satıcıKodu:"",
        birimAdı:"",
        fiyat:"",
        kdv:""
      }
    };
  },
  created() {
    this.$axios.get("http://localhost:3000/stocks").then((res) => {
      this.stocks = res.data;
    });
  },
  methods: {
    deleteStock(stock) {
      this.$axios
        .delete(`http://localhost:3000/stocks/${stock.id}`)
        .then((delete_res) => {
          console.log(delete_res);
          this.stocks = this.stocks.filter((i) => i.id !== stock.id);
        });
    },
    edit(item){
      this.$axios.get(`http://localhost:3000/stocks/${item.id}`).then(edit_res =>{
        this.items= edit_res.data
      })
    },
    saveEdit(i){
      this.$axios.put(`http://localhost:3000/stocks/${i}`,this.items).then(res=>{
        console.log(res)
        
      })
    }
    
  },
};
</script>
