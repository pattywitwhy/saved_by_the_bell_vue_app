<template>

  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <router-link class="navbar-brand" to="/">$aved by the Bell!</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/graphs">Graphs</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="dropdown-item">
                  <router-link class="nav-link" to="login">Login</router-link>
                </li>
                <li class="dropdown-item">
                  <a class="nav-link" v-on:click='logout()'>Logout</a>
                </li>
                <li class="dropdown-item">
                  <router-link class="nav-link" to='signup'>Sign Up</router-link>
                </li>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
var axios = require('axios')

export default {
  methods: {
    logout: function() {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      this.$router.push("/login");
    }
  }
}
</script>