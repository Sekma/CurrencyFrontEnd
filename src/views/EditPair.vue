<template lang="">
    <div class="p-2">
        
        <div class="d-flex justify-content-between">
            <h2>Edit "{{currency_1}}" -> "{{currency_2}}" Exchange :</h2>
            <router-link to="/admin" class="btn btn-outline-success shadow-sm fw-bold" style="height:40px">Return</router-link>
        </div>
        <form class="form-group" @submit.prevent="edit()" method="PUT">
            <div class="input-group mx-sm-3 shadow mt-5">
                <input v-model="exchange" type="text" class="form-control" id="exchange" :placeholder= exchange min="0" value="0" step="0.01"
                pattern="^\d+(?:\.\d{1,2})?$" onblur="this.parentNode.parentNode.style.backgroundColor=/^\d+(?:\.\d{1,2})?$/.test(this.value)?'inherit':'red'">   
                <button type="submit" class="btn btn-primary">Edit</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      exchange: ""
    };
  },
  methods: {
    edit() {
       var id = localStorage.getItem('id');
       var value = localStorage.getItem('exchange');
       if(confirm('Change value "' + value + '" to "' + this.exchange + '" ?')) {
            axios.put('http://localhost:8000/api/edit_pair/'+id , {
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
    showCurrency_1(){
       this.currency_1 = localStorage.getItem('currency_1');
    },
    showCurrency_2(){
       this.currency_2 = localStorage.getItem('currency_2');
    },
    showExchange(){
       this.exchange = localStorage.getItem('exchange');
    }
 },
    created(){
      this.showCurrency_1()
      this.showCurrency_2()
      this.showExchange()
    },
};
</script>
<style lang="">
    
</style>