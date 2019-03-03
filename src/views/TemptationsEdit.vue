<template>
  <div class="temptations-edit">

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h2 v-model="temptation.name">Edit Temptation: {{temptation.name}}</h2>
      <form v-on:submit.prevent="submit()">
              
        <div class="form-group">
          <label>Temptation Cost in dollars: </label>
          <input class='form-control' type='text' v-model="temptation.cost">
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
          <input type="submit" value="Update" class="btn btn-primary">
        </div>
      </form>
    </div>
  </div>
</template>


<style>

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
  created: function() {
    axios.get("/api/temptations/" + this.$route.params.id)
      .then(response => {
        this.temptation = response.data;
      })
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
                    
      axios.patch("/api/temptations/" + this.temptation.id, params)
        .then(response => {
          this.$router.push("/home");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>