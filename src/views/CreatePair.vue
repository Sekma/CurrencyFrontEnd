<template lang="">
    <div>
        <h2>Create a new pair</h2>
        <form class="form-group" @submit.prevent="checkForm" method="post">
            <div class="form-inline mx-sm-3 mb-2">
                <label for="currency_1_id">Currency 1</label>
                <select v-model="currency_1_id" class="form-control" id="currency_1_id">
                <option value="" disabled selected>Select currency 1</option>
                <option v-for="currency in responseData" :key="currency.id" :value="currency.id">{{currency.currency}}</option>
                </select>
                <label for="currency_2_id">Currency 2</label>
                <select v-model="currency_2_id" class="form-control" id="currency_2_id">
                <option value="" disabled selected>Select currency 2</option>
                <option v-for="currency in responseData" :key="currency.id" :value="currency.id">{{currency.currency}}</option>
                </select>
                <label for="exchange" class="sr-only">Exchange</label>
                <input v-model="exchange" type="text" class="form-control" id="name" placeholder="0.00" min="0" value="0" step="0.01"
                pattern="^\d+(?:\.\d{1,2})?$" onblur="this.parentNode.parentNode.style.backgroundColor=/^\d+(?:\.\d{1,2})?$/.test(this.value)?'inherit':'red'">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Create</button>
          </form>
    </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      responseData: null,
      error: null,
      currency_1_id: "",
      currency_2_id: "",
      exchange: ""
    };
  },
  methods: {
    //for currencies
    fetchData(){
        axios.get('http://127.0.0.1:8000/api/currencies').then(response => 
          {
            this.responseData = response.data.currencies
            console.log(response.data.currencies)
          }
        ).catch(error => this.error = error) 
      },

    checkForm() {
      axios
        .post("http://localhost:8000/api/create_pair", {
          currency_1_id: this.currency_1_id,
          currency_2_id: this.currency_2_id,
          exchange: this.exchange
        })
        .then((response) => {
          alert(response.data.message);
          if(response.data.status !== "error"){
                this.$router.push("/admin")
            }
        })
        .catch((error) => {
            alert(response.data.message);
        });
    }
 },
 created(){
      this.fetchData()
    }
};
</script>
<style lang="">
    
</style>