<template lang="">
    <div>
        <h2>Edit Currency</h2>
      
        <form class="form-group" @submit.prevent="edit()" method="PUT">
            <div class="form-inline mx-sm-3 mb-2">
              <label for="name" class="sr-only">Currency</label>
              <input v-model="name" type="text" class="form-control" id="name" :placeholder=" currency ">
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