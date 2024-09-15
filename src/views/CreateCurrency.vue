<template lang="">
    <div class="p-2">
        <div class="d-flex justify-content-between">
            <h2>Create a new Currency</h2>
            <router-link to="/admin" class="btn btn-outline-success shadow-sm fw-bold" style="height:40px">Return</router-link>
        </div>
        <form class="form-group" @submit.prevent="checkForm" method="post">
            <div class="input-group mx-sm-3 shadow mt-5">
              <input v-model="name" type="text" class="form-control" id="name" placeholder="Currency">
              <button type="submit" class="btn btn-primary">Create</button>
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
    checkForm() {
      axios
        .post("http://localhost:8000/api/create_currency", {
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
    },
 },
};
</script>
<style lang="">
    
</style>