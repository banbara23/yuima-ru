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
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'schedule-list',
  data() {
    return {
      msg: 'test',
      anArray: []
    }
  },
  created() {
    this.$Progress.start()
    // this.anArray = [
    //   {
    //     date: '2017/05/17 (日)',
    //     title: '春日町で練習',
    //     comment: 'いつもの練習',
    //     id: 'schedule/20170617'
    //   },
    //   {
    //     date: '2017/05/18 (日）',
    //     title: '春日町で練習',
    //     comment: 'チャラ座と練習試合かも',
    //     id: 'schedule/20170617'
    //   }
    // ]
  },
  firebase: {
    anArray: {
      source: db.ref("/schedule").orderByChild('date'),
      readyCallback: function () {
        this.$Progress.finish()
      }
    }
  },
  methods: {
    add: () => {

    }
  }
}
</script>