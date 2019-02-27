<template>
  <div class="temptations-new">

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h2>Enter Basic Info</h2>
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Temptation Name: </label>
          <input class='form-control' type='text' v-model="temptation.name" placeholder="ex: Buy morning Starbucks">
        </div>
        <div class="form-group">
          <label>Temptation Cost: </label>
          <input class='form-control' type='text' v-model="temptation.cost" placeholder="ex: $5">
        </div>
        <div class="form-group">
          <label>Tempted on Monday?: </label>
          <input class='form-control' type='text' v-model="temptation.monday" placeholder="ex: true">
        </div>
        <div class="form-group">
          <label>Tempted on Tuesday? </label>
          <input class='form-control' type='text' v-model="temptation.tuesday" placeholder="ex: true">
        </div>
        <div class="form-group">
          <label>Tempted on Wednesday?? </label>
          <input class='form-control' type='text' v-model="temptation.wednesday" placeholder="ex: true">
        </div>
        <div class="form-group">
          <label>Tempted on Thursday? </label>
          <input class='form-control' type='text' v-model="temptation.thursday" placeholder="ex: true">
        </div>
        <div class="form-group">
          <label>Tempted on Friday? </label>
          <input class='form-control' type='text' v-model="temptation.friday" placeholder="ex: true">
        </div>
        <div class="form-group">
          <label>Tempted on Saturday? </label>
          <input class='form-control' type='text' v-model="temptation.saturday" placeholder="ex: true">
        </div>
        <div class="form-group">
          <label>Tempted on Sunday? </label>
          <input class='form-control' type='text' v-model="temptation.sunday" placeholder="ex: true">
        </div>
        <div class="form-group">
          <label>What time does the temptation occur? </label>
          <input class='form-control' type='text' v-model="temptation.time" placeholder="ex: 8am">
        </div>
        <div class="new-button">
          <input type="submit" value="Create" class="btn btn-primary">
        </div>
      </form>
    </div>
  </div>
</template>


<style>
/*.new-button{
  text-align: center
}
.container{
  margin-bottom: 30px;
}*/
</style>


<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      temptation: {
              name: "",
              cost: "",
              monday: "",
              tuesday: "",
              wednesday: "",
              thursday: "",
              friday: "",
              saturday: "",
              sunday: "",
              time: ""
              // user_id: ""
              },
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
                    name: this.temptation.name,
                    cost: this.temptation.cost,
                    monday: this.temptation.monday,
                    tuesday: this.temptation.tuesday,
                    wednesday: this.temptation.wednesday,
                    thursday: this.temptation.thursday,
                    friday: this.temptation.friday,
                    saturday: this.temptation.saturday,
                    sunday: this.temptation.sunday,
                    time: this.temptation.time
                    };
      axios.post("/api/temptations", params)
        .then(response => {
          this.$router.push("/temptations/" + response.data.id);
        }).temptationch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>