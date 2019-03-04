<template>
  <div class="home">
    <ul>
      <li v-for="error in tempt_errors"> {{ error }} </li>
    </ul>
    <div class='container'>
      <div class="row">
        <div class='col-md'>
          <h2>What's tempting you?</h2>
          <form v-on:submit.prevent="submit_tempt()">
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

        <ul>
          <li v-for="error in goal_errors"> {{ error }} </li>
        </ul>
        <div class='col-md'>
          <h2>My Goals</h2>
          <!-- <div v-if="If the User has a goal, display that, else, display entry form"></div> -->
          <form v-on:submit.prevent="submit_goal()">
            <div class="form-group">
              <label>Specific Goal:</label>
              <input class='form-control' type='text' v-model="goal.goal_title" placeholder="ex: Wedding">
            </div>
            <div class="form-group">
              <label>Savings Goal:</label>
              <input class='form-control' type='integer' v-model="goal.goal_amount" placeholder="ex: 100">
            </div>
            <div class="form-group">
              <label>When will you begin saving:</label>
              <input class='form-control' type='datetime' v-model="goal.goal_start" placeholder="ex: July 1st">
            </div>
            <div class="form-group">
              <label>What is the date you plan on reaching this savings goal by: </label>
              <input class='form-control' type='datetime' v-model="goal.goal_end" placeholder="ex: Dec 31">
            </div>
            <div class="new-button">
              <input type="submit" value="Create" class="btn btn-primary">
            </div>
          </form>
        </div>
      </div>
      <p></p>
      <h2>Temptations</h2>
      <div class="card-deck">
        <div class="col-md-4" v-for="temptation in temptations">
          <router-link v-bind:to="'/temptations/' + temptation.id + '/edit'">
            <div class="card mt-3 bg-light"><span class="border border-default"></span>
              <div>
                <div class="brand-card-header">
                  <h2 class="card-title mt-3 text-center text-dark" > {{ temptation.name }}</h2>
                </div>
                <div class="brand-card">
                  <div class="brand-card-body">
                    <div>
                      <p class="card-text text-center"><small class="text-dark"> ${{ temptation.cost }} </small></p>
                    </div>
                    <p></p>                    
                    <div> 
                      <p class="card-text text-center"><small class="text-dark"> {{ temptation.time }} </small></p>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h2 {
  font-family: Didot,
  serif;
  font-size: 30px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 26.4px;
  text-align: center;
}

p {
  font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
  font-size: 25px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px
}

.btn-primary {
  background-color: #CCF3C2 !important;
  border-color: #CCF3C2;
}

border-default {
  background-color: #CCF3C2 !important;
  border-color: #CCF3C2;
}

</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      tempt_errors: [],
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
              time: ""
              },

      goal_errors: [],
      goal: {
              goal_title: "",
              goal_amount: 0,
              goal_start: "",
              goal_end: ""
              }
    };
  },
  created: function() {
    axios.get("/api/temptations")
      .then(response => {
        this.temptations = response.data;
    });
    axios.get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.goal = response.data
      });
  },
  methods: {
    submit_tempt: function() {
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
        }).catch(error => {
          this.tempt_errors = error.response.data.errors;
        });
    },
    submit_goal: function() {
      var params = {
                    goal_title: this.goal.goal_title,
                    goal_amount: this.goal.goal_amount,
                    goal_start: this.goal.goal_start,
                    goal_end: this.goal.goal_end
                    };

      axios.patch("/api/users/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/temptations/");
        }).catch(error => {
          this.goal_errors = error.response.data.errors;
        });
    }
  }
};
</script>