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
            <li class="nav-item">
              <router-link class="nav-link" to="#">My Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="graphs">Graphs</router-link>
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
