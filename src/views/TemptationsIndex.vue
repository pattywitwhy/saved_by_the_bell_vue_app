<template>
  <div class="temptation-index">
    <div class="card-deck">
      <div class="col-md-4" v-for="temptation in temptations">
        <router-link v-bind:to="'/temptations/' + temptation.id">
          <div class="card mt-3 bg-light">
            <h2 class="card-title mt-2 text-center" > {{ temptation.name }}</h2>
            <p class="card-text "> ${{ temptation.cost }}</p>
            <p class="card-text "> {{ temptation.time }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      temptations: [],
      name: "",
      cost: "",
      frequency: "",
      time: ""
      // user_id: ""
    };
  },
  created: function() {
    axios.get("/api/temptations")
    .then(response => {
      this.temptations = response.data;
    });
  },
  methods: {
    
  }
};
</script>
