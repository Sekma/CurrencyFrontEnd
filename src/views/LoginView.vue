<template>
  <div class="border shadow mt-3 p-3">
    <h2 class="text-center mt-3">Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control shadow-sm mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password"  type="password" class="form-control shadow-sm mt-2" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary shadow mt-3 w-50">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          this.$router.push("/admin");
        })
        .catch((error) => {
          alert("Login failed");
        });
    },
 },
};
</script>
<style scoped>
h2{
  color: #0e7d4b;
}
</style>