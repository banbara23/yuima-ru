<template>
  <div class="schedule-list">
    <vue-progress-bar></vue-progress-bar>
    <h2>出席登録</h2>
    <div class="row" id="schedule">
      <div class="col s12" v-for="event in anArray" v-bind:key="event.key">
  
        <router-link :to="'schedule/'+event['.key']">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">
                {{ event.date }} {{ event.title }}
              </span>
              <p>{{ event.comment }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <router-link to="schedule/new" class="waves-effect waves-light btn" @click="add">
          <i class="material-icons left">add</i>New</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
const db = firebase.database();
const format = require("date-fns/format");
const now = format(new Date(), "YYYYMMDD");

export default {
  name: "schedule-list",
  data() {
    return {
      msg: "test",
      anArray: []
    };
  },
  created() {
    this.$Progress.start();
  },
  firebase: {
    anArray: {
      source: db
        .ref("/schedule")
        .orderByChild("id")
        .startAt(now),
      readyCallback: function() {
        this.$Progress.finish();
      }
    }
  },
  methods: {
    add: () => {}
  }
};
</script>