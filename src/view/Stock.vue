<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Başlık 1</th>
          <th>Başlık 2</th>
          <th>Başlık 3</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Hücre 1</td>
          <td>Hücre 2</td>
          <td>Hücre 3</td>
        </tr>
        <tr>
          <td>Hücre 4</td>
          <td>Hücre 5</td>
          <td>Hücre 6</td>
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
    this.$axios.get("https://apitest.nilvera.com/general/Stocks").then(res=> {
      console.log(res)
    })
  }
};
</script>
