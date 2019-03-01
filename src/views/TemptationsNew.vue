<template>
  <div class="temptations-new">

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>


    <div class='container'>
      <h2>Enter Basic Info</h2>
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="temptationSelect1">Select the Temptation You would like to be notified about: </label>
          <select class="form-control" id="temptationSelect1" v-model="temptation.name">
            <option>Taking a ride-share in the morning</option>
            <option>Taking a ride-share in the evening</option>
            <option>Buy coffee in the morning</option>
            <option>Eating out for breakfast</option>
            <option>Eating out for lunch</option>
            <option>Eating out for dinner</option>
            <option>Going out for happy hour 😱</option>
            <option>Going out to the movies</option>
            <option>Buying cigarettes</option>
          </select>
        </div>
        <div class="form-group">
          <label>Temptation Cost in dollars: </label>
          <input class='form-control' type='text' v-model="temptation.cost" placeholder="ex: 5">
        </div>
        <div>
          
          <div>On what days will you be tempted?</div>

        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="temptation.monday">
          <label class="form-check-label" for="defaultCheck1">
            M
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="temptation.tuesday">
          <label class="form-check-label" for="defaultCheck1">
            T
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="temptation.wednesday">
          <label class="form-check-label" for="defaultCheck1">
            W
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="temptation.thursday">
          <label class="form-check-label" for="defaultCheck1">
            Th
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="temptation.friday">
          <label class="form-check-label" for="defaultCheck1">
            F
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="temptation.saturday">
          <label class="form-check-label" for="defaultCheck1">
            Sa
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="temptation.sunday">
          <label class="form-check-label" for="defaultCheck1">
            S
          </label>
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
              cost: 0,
              monday: false,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: false,
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
          this.$router.push("/temptations/");
        }).temptations(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>