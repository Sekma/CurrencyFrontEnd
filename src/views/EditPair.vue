<template lang="">
    <div>
        <h2>Edit Pair "{{currency_1}}" -> "{{currency_2}}"</h2>

        <form class="form-group" @submit.prevent="edit()" method="PUT">
            <div class="form-inline mx-sm-3 mb-2">
                <label for="exchange" class="sr-only">Exchange</label>
                <input v-model="exchange" type="text" class="form-control" id="exchange" :placeholder= exchange min="0" value="0" step="0.01"
                pattern="^\d+(?:\.\d{1,2})?$" onblur="this.parentNode.parentNode.style.backgroundColor=/^\d+(?:\.\d{1,2})?$/.test(this.value)?'inherit':'red'">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Edit</button>
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