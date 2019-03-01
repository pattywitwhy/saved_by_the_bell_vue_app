<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">$aved by the Bell!</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="#">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="#">Login<span class="sr-only">(current)</span></router-link>
              
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">My Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Goals</router-link>
            </li>
            <li class="nav-item">

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Menu
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link class="dropdown-item" to="/temptations">Temptations</router-link>
                  <a class="dropdown-item" href="/graphs">Graphs</a>
                </div>
            </li>

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
