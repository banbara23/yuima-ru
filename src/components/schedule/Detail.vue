<template>
  <div class="detail">
    <vue-progress-bar></vue-progress-bar>
    <!--情報-->
    <h2>予定詳細</h2>
    <div class="row card">
      <div class="card-content">
        <span class="card-title">{{detail.title}}</span>
        <p>日時：{{detail.date}} {{detail.startTime}}〜{{detail.endTime}}</p>
        <p>場所：{{detail.place}}</p>
        <p>コメント：{{detail.comment}}</p>
        <!--<button @click="goEdit"
                    class="btn waves-effect waves-light"
                    type="submit"
                    name="action">
              編集
            </button>-->
      </div>
      <div class="card-action">
        <router-link to="/schedule/New">修正</router-link>
      </div>
    </div>
  
    <!--まとめ数字-->
    <div class="row section card">
      <div class="col s4 l4 center">
        <h4>参加</h4>
        <h4>1</h4>
      </div>
      <div class="col s4 l4 center">
        <h4>欠席</h4>
        <h4>1</h4>
      </div>
      <div class="col s4 l4 center">
        <h4>未定</h4>
        <h4>1</h4>
      </div>
    </div>
  
    <!--リスト-->
    <div class="row">
      <ul class="collection card">
        <li class="collection-item avatar"
            v-for="item in anArray"
            v-bind:key="item.id">
          <!--<img v-if="item.image"
                       :src="item.image"
                       alt=""
                       class="circle">-->
          <i class="material-icons circle ">perm_identity</i>
          <span class="title">{{item.name}}</span>
          <p>{{item.comment}}</p>
          <div class="secondary-content">
            <router-link class="blue waves-effect waves-light btn"
                         to="/schedule/entry/1">参加</router-link>
          </div>
        </li>
      </ul>
    </div>
  
    <!--登録ボタン-->
    <button @click="goScheduleTop"
            class="btn waves-effect waves-light"
            type="submit"
            name="action">
      スケジュールトップ
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()
// import TopMenu from '@/components/TopMenu'
export default {
  name: 'name',
  data() {
    return {
      title: 'スケジュール詳細',
      anArray: []
    }
  },
  firebase() {
    return {
      detail: {
        source: db.ref("/schedule/")
          .child(this.$route.params.id),
        asObject: true,
        readyCallback: function () {
          this.$Progress.finish();
        }
      }
    }
  },
  firebase: {
    anArray: {
      source: db.ref("/member"),
      readyCallback: function () {
        this.$Progress.finish()
      }
    }
  },
  created() {
    this.$Progress.start();
    this.anArray = [
      {
        id: 'moja',
        name: '名前',
        comment: '何かしらのコメント',
        answer: '回答',
        image: '../../assets/alvin.png'
      },
      {
        id: '2',
        name: '名前',
        comment: '何かしらのコメント',
        answer: '回答',
        image: '../../assets/alvin.png'
      },
      {
        id: '3',
        name: '名前',
        comment: '何かしらのコメント',
        answer: '回答',
        image: '../../assets/alvin.png'
      },
      {
        id: '4',
        name: '名前',
        comment: '何かしらのコメント',
        answer: '回答',
        image: '../../assets/alvin.png'
      },
      {
        id: '5',
        name: '名前',
        comment: '何かしらのコメント',
        answer: '回答',
        image: '../../assets/alvin.png'
      },
      {
        id: '6',
        name: '名前',
        comment: '何かしらのコメント',
        answer: '回答',
        image: '../../assets/alvin.png'
      },
      {
        id: '7',
        name: '名前',
        comment: '何かしらのコメント',
        answer: '回答',
        image: '../../assets/alvin.png'
      }
    ]
  },
  methods: {
    goScheduleTop: function () {
      this.$router.push('/schedule');
    },
    goEdit: function () {
      this.$router.push('/schedule/New');
    }
  }
}
</script>