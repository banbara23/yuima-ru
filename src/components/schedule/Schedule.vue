<template>
  <div class="schedule">
    <h2>出席登録</h2>
    <div class="row"
         id="schedule">
      <div class="col s12"
           v-for="events in anArray">
        <router-link :to=events.link>
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">
                  {{ events.date }} {{ events.title }}
                </span>
              <p>{{ events.comment }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <router-link to="schedule/new"
                     class="waves-effect waves-light btn"
                     @click="add">
          <i class="material-icons left">add</i>New</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import firebaseApp from 'firebase'
// var db = firebaseApp.database().ref('/schedule/')

export default {
  name: 'schedule',
  // firebase: function () {
  //   return {
  //     schedule: db.ref('/')
  //   }
  // },
  data() {
    return {
      msg: 'test',
      anArray: []
    }
  },
  created() {
    this.anArray = [
      {
        date: '2017/05/17 (日)',
        title: '春日町で練習',
        comment: 'いつもの練習',
        link: 'schedule/20170617'
      },
      {
        date: '2017/05/18 (日）',
        title: '春日町で練習',
        comment: 'チャラ座と練習試合かも',
        link: 'schedule/20170617'
      }
    ]
  },
  methods: {
    add: () => {

    }
  }
}
</script>