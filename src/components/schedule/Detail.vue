<template>
  <div class="detail">
    <!-- {{detail}} {{member}}  -->
    <vue-progress-bar></vue-progress-bar>
    <!--情報-->
    <h3>予定詳細</h3>
    <div class="row card" v-if="detail">
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
    <!-- <div class="row section card">
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
    </div> -->
  
    <!--リスト-->
    <div class="row">
      <ul class="collection card" v-if="members">
        <li class="collection-item avatar" v-for="member in members" v-bind:key="member['key']">
          <!--<img v-if="item.image"
                             :src="item.image"
                             alt=""
                             class="circle">-->
          <i class="material-icons circle ">perm_identity</i>
          <span class="title">{{member.name}}</span>
          <p>{{member.comment}}</p>
          <div class="secondary-content">
            <!-- <router-link class="blue waves-effect waves-light btn" to="/schedule/entry/1">参加</router-link> -->
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1" @click="setModalMember(member)">解答</a>

          </div>
        </li>
      </ul>
    </div>
  
 <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h3>{{modalMember.name}}</h3>
      <div class="row">
      <button class="btn waves-effect waves-light left">参加</button>
      <button class="btn waves-effect waves-light center">未定</button>
      <button class="btn waves-effect waves-light light">欠席</button>
      </div>
      <p>{{modalMember}}</p>
    </div>
    <div class="modal-footer">
      <button @click="modalClose" class="btn modal-close waves-effect waves-light">登録</button>
      <button @click="modalClose" class="btn-flat modal-close waves-effect waves-light">閉じる</button>
    </div>
  </div>

    <!--登録ボタン-->
    <button @click="goScheduleTop" class="btn waves-effect waves-light" type="submit" name="action">
      スケジュールトップ
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'name',
  data() {
    return {
      title: 'スケジュール詳細',
      detail: {},
      members: [],
      val: null,
      modalMember: {}
    }
  },
  created() {
    this.$Progress.start();
  },
  firebase() {
    return {
      members: {
        source: db.ref("/member"),
        readyCallback: function (data) {
          if (detail.schedule != undefined) {
            
            // 回答済みの予定を組み立てる処理
          }
          this.val = data
          this.$Progress.finish()
        }
      },
      detail: {
        source: db.ref("schedule").child(this.$route.params.id),
        asObject: true,
        readyCallback: function () {
          this.$Progress.finish()
        }
      }
    }
  },
  computed: {
   test: function() {
      console.log("call!!!")
    }
  },
  mounted() {
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  },
  methods: {
 
    goScheduleTop: function () {
      this.$router.push('/schedule');
    },
    goEdit: function () {
      this.$router.push('/schedule/New');
    },
    setModalMember(member) {
      this.modalMember = member;
    },
    modalClose: function() {
      $('#modal1').modal('close');
    }
  }
}
</script>