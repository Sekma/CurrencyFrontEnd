<template lang="">
    <div>
        <h2>Create a new currency</h2>
        <form class="form-group" @submit.prevent="checkForm" method="post">
            <div class="form-inline mx-sm-3 mb-2">
              <label for="name" class="sr-only">Currency</label>
              <input v-model="name" type="text" class="form-control" id="name" placeholder="Currency">
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