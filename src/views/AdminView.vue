<template>
  <div class="p-2">
    <div class="d-flex justify-content-between">
      <h1>Hi Admin..!</h1>
      <a @click.prevent="logout" class="btn btn-danger shadow-sm" style="height:40px">Logout</a>
    </div>
    <div v-if="!responseData.length" class="text-center mt-5">
      <h4 class="text-success">Loading...</h4>
      <img src="/src/assets/logo.png" width="100px"/>
    </div>
<div v-else class="data-table d-flex justify-content-between mt-1 text-center" >
  <div>
    <h4 class="text-success bg-light p-2">Currencies</h4>
    <VTable class="table table-striped border" :data="responseData">
      <template #head>
        <tr class="table-success">
          <th class="fw-bold">ID</th>
          <th class="fw-bold">Currency</th>
          <th class="fw-bold">Edit</th>
          <th class="fw-bold">Delete</th>
        </tr>
      </template>
      <template #body="{rows}">
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.currency }}</td>
          <td><RouterLink class="btn btn-outline-warning fw-bold" @click="editCurrency(row.id, row.currency)" to="/edit-currency">Edit</RouterLink></td>
          <td><a class="btn btn-outline-danger fw-bold" @click="deleteCurrency(row.id, row.currency)">Delete</a></td>
        </tr>
      </template>
    </VTable>
    <RouterLink to="/create-currency" class="btn btn-primary shadow" >Create a new currency</RouterLink>
  </div>
  <div>
    <h4 class="text-success bg-light p-2">Pairs</h4>
    <VTable class="table table-striped border" :data="responseDataPair">
      <template #head>
        <tr class="table-success">
          <th class="fw-bold">ID</th>
          <th class="fw-bold">Pair</th>
          <th class="fw-bold">Exch</th>
          <th class="fw-bold">NbConvet</th>
          <th class="fw-bold">Edit</th>
          <th class="fw-bold">Delete</th>
        </tr>
      </template>
      <template #body="{rows}">
        <tr v-for="row in rows" :key="row.pair_id">
          <td>{{ row.pair_id }}</td>
          <td style="font-size:12px">{{ row.currency_1 }} -> {{ row.currency_2 }}</td>
          <td>{{ row.exchange }}</td>
          <td>{{ row.conversions }}</td>
          <td><RouterLink class="btn btn-outline-warning fw-bold" @click="editPair(row.pair_id, row.currency_1, row.currency_2, row.exchange)" to="/edit-pair">Edit</RouterLink></td>
          <td><a class="btn btn-outline-danger fw-bold" @click="deletePair(row.pair_id, row.currency_1, row.currency_2)">Delete</a></td>
        </tr>
      </template>
    </VTable>
  <RouterLink to="/create-pair" class="btn btn-primary shadow" >Create a new pair</RouterLink>
  </div>
</div>
    

  </div>
</template>
<script>

import axios from "axios";

export default {
  data() { 
    return {
      responseData: [],
      responseDataPair: [],
      error: null,
      }
    },
    methods: {
     logout() {
      if(confirm("Are you sure you want to log out?")) {
         axios.get('http://localhost:8000/api/logout').then(response => {
          localStorage.removeItem('token');
          
          // remove any other authenticated user data you put in local storage

          // Assuming that you set this earlier for subsequent Ajax request at some point like so:
          // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ;
          delete axios.defaults.headers.common['Authorization'];

          // If using 'vue-router' redirect to login page
          this.$router.go('/login');
        })
        .catch(error => {
          // If the api request failed then you still might want to remove
          // the same data from localStorage anyways
          // perhaps this code should go in a finally method instead of then and catch
          // methods to avoid duplication.
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorization'];
          this.$router.go('/login');
        });       
       }
     },

     //for currencies
     fetchData(){
        axios.get('http://127.0.0.1:8000/api/currencies').then(response => 
          {
            this.responseData = response.data.currencies
          }
        ).catch(error => this.error = error) 
      },
      
      //delete and edit currency
      deleteCurrency(id, currency){
          if(confirm("Are you sure you want delete " +currency+ " ?")){
            axios.delete('http://127.0.0.1:8000/api/delete_currency/'+id)
          .then((response) => {

            alert(response.data.message);
            location.reload(); // Reloads the current page
          })
          .catch((error) => {
              alert(response.data.message);
          });
        }
    },
    editCurrency(id, currency){
      localStorage.setItem("id", id);
      localStorage.setItem("currency", currency);
    },

    //for pairs
    fetchDataPair(){
        axios.get('http://127.0.0.1:8000/api/pairs').then(response => 
          {
            this.responseDataPair = response.data.pairs
          }
        ).catch(error => this.error = error) 
      },
    //delete and edit pair
    deletePair(id, currency_1, currency_2){
          if(confirm("Are you sure you want delete " +currency_1+ " -> " +currency_2+ " ?")){
            axios.delete('http://127.0.0.1:8000/api/delete_pair/'+id)
          .then((response) => {

            alert(response.data.message);
            location.reload(); // Reloads the current page
          })
          .catch((error) => {
              alert(response.data.message);
          });
        }
    },
    editPair(id, currency_1, currency_2, exchange){
      localStorage.setItem("id", id);
      localStorage.setItem("currency_1", currency_1);
      localStorage.setItem("currency_2", currency_2);
      localStorage.setItem("exchange", exchange);
    }
   },
    created(){
      this.fetchData()
      this.fetchDataPair()
    },
     
   
};
</script>
<style scoped>
@media (max-width: 1024px){
  .data-table{
    flex-direction: column;
  }
}

</style>