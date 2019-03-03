<template>
  <div class="goals">
    <h1 id="headline">Your Savings Goals</h1>


    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h2>What are your saving for?</h2>
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="savings-goal">Specific Goal:</label>
          <input class='form-control' type='text'>
        </div>

        <div class="form-group">
          <label>Total amount of savings goal: </label>
          <input class='form-control' type='text' v-model="goal.dollar_amount" placeholder="ex: 100">
        </div>

        <div class="form-group">
          <label>When will you begin saving: </label>
          <input class='form-control' type='text' v-model="goal.start" placeholder="ex: July 1st">
        </div>

        <div class="form-group">
          <label>What is the date you plan on reaching this savings goal by: </label>
          <input class='form-control' type='text' v-model="goal.end" placeholder="ex: Dec 31">
        </div>

        <div class="new-button">
          <input type="submit" value="Create" class="btn btn-primary">
        </div>
      </form>

    <div class="card-deck">
      <div class="col-md-4" v-for="goal in goals">
        <router-link v-bind:to="'/goal/' + goal.id + '/edit'">
          <div class="card mt-3 bg-light">
            <h2 class="card-title mt-2 text-center" > {{ goal.name }}</h2>
            <p class="card-text "> ${{ goal.start }}</p>
            <p class="card-text "> ${{ goal.end }}</p>
            <p class="card-text "> {{ goal.dollar_amount }}</p>
          </div>
        </router-link>
      </div>
    </div>


  </div>
</div>
</template>

<style>
  #headline{
    text-align: center;
  }

</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      goals: [],
      goal: {
              name: "",
              dollar_amount: 0,
              start: "",
              end: ""
              },
    };
  },
  created: function() {
    axios.get("/api/goals")
    .then(response => {
      this.goals = response.data;
    });
  },
  methods: {
    submit_goal: function() {
      var params = {
                    name: this.goal.name,
                    dollar_amount: this.goal.dollar_amount,
                    start: this.goal.start,
                    end: this.goal.end,
                    user_id: this.goal.user_id
                    };

      axios.post("/api/goals", params)
        .then(response => {
          this.goals.push(response.data);
          this.goal.name = "";
          this.goal.dollar_amount = 0;
          this.goal.start = "";
          this.goal.end = "";
          this.goal.user_id = "";
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
