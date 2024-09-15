<template lang="">
    <div class="p-2">
        
        <div class="d-flex justify-content-between">
            <h2>Edit Currency "{{currency}}" :</h2>
            <router-link to="/admin" class="btn btn-outline-success shadow-sm fw-bold" style="height:40px">Return</router-link>
        </div>
        <form class="form-group" @submit.prevent="edit()" method="PUT">
            <div class="input-group mx-sm-3 shadow mt-5">
              <input v-model="name" type="text" class="form-control" id="name" :placeholder=" currency ">
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
      name: ""
    };
  },
  methods: {
    edit() {
       var id = localStorage.getItem('id');
       var currency = localStorage.getItem('currency');
       if(confirm('Change "' + currency + '" to "' + this.name + '" ?')) {
            axios.put('http://localhost:8000/api/edit_currency/'+id , {
            name: this.name
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
    showLocalStorage(){
       this.currency = localStorage.getItem('currency');
    }
 },
    created(){
      this.showLocalStorage()
    },
};
</script>
<style lang="">
    
</style>