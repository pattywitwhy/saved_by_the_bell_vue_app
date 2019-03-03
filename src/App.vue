<template>

  <div id="app">
    <div id="nav">
      <div class="logo-section">
        <div class="content-wrap">
          <div class="logo">
            <h1>
              <img width="1000" height="200" src="https://brokecollegestudentsblog.files.wordpress.com/2011/01/cropped-money_header3.jpg">
            </h1>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <router-link class="navbar-brand" to="/">$ave by the Bell!</router-link>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="goals">$aved by the Bell!</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="goals">Goals</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="temptations">Temptations</router-link>
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
                  <a class="nav-link" on:click='logout()'>Logout</a>
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