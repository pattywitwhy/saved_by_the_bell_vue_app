<template>
  <div class="temptation-index">

    <ul>
      <!-- <li v-for="error in errors"> {{ error }} </li> -->
    </ul>
    <div class='container'>
      <div class="card-group">
        <div class='col-sm-6'>
          <h2>What's tempting you?</h2>
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

        <div class='col-sm-6'>
          <h1>MY GOALS</h1>
        </div>        
      </div>
    </div>

<<<<<<< HEAD
    <div class="card-group">
      <div class="col-sm-3" v-for="temptation in temptations">
        <router-link v-bind:to="'/temptations/' + temptation.id">
=======
    <div class="card-deck">
      <div class="col-md-4" v-for="temptation in temptations">
        <router-link v-bind:to="'/temptations/' + temptation.id + '/edit'">
>>>>>>> 4883876872ba8c7e7c82c1df0595a24154dc266d
          <div class="card mt-3 bg-light">
            <div>
              <div class="brand-card-header">
                <h2 class="card-title mt-2 text-center text-uppercase" > {{ temptation.name }}</h2>
              </div>
              <div class="brand-card">

                <div class="brand-card-body">
                  <div>
                    <p class="card-text"><small class="text-muted"> ${{ temptation.cost }} </small></p>
                  </div>
                  <div> 
                    <p class="card-text"><small class="text-muted"> {{ temptation.time }} </small></p>
                  </div>  
                </div>
              </div>
            </div>
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
              time: "",
              user_id: ""
              },
    };
  },
  created: function() {
    axios.get("/api/temptations")
    .then(response => {
      this.temptations = response.data;
    });
  },
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
                    time: this.temptation.time,
                    user_id: this.temptation.user_id
                    };

      axios.post("/api/temptations", params)
        .then(response => {
          this.temptations.push(response.data);
          this.temptation.name = "";
          this.temptation.cost = 0;
          this.temptation.monday = false;
          this.temptation.tuesday = false;
          this.temptation.wednesday = false;
          this.temptation.thursday = false;
          this.temptation.friday = false;
          this.temptation.saturday = false;
          this.temptation.sunday = false;
          this.temptation.time = "";
          this.temptation.user_id = "";
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
