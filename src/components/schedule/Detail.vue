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
      </div>
      <!-- <div class="card-action"> -->
      <!-- <router-link to="/schedule/New">修正</router-link> -->
      <!-- </div> -->
    </div>
  
    <!--まとめ数字-->
    <div class="row section card">
      <div class="col s4 l4 center">
        <h4>参加</h4>
        <h4>1</h4>
      </div>
      <div class="col s4 l4 center">
        <h4>欠席</h4>
        <h4>2</h4>
      </div>
      <div class="col s4 l4 center">
        <h4>未定</h4>
        <h4>3</h4>
      </div>
    </div>
  
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
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1" @click="setModalMember(member)">出欠登録</a>
  
          </div>
        </li>
      </ul>
    </div>
  
    <!-- Modal Structure -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>出欠登録</h4>
        <p>{{detail.title}} in {{detail.place}}</p>
        <p>{{detail.date}} {{detail.startTime}}〜{{detail.endTime}}</p>
        <p></p>
        <h4>{{modalMember.name}}の出欠</h4>
        <div class="row">
          <div class="col s4">
            <button class="btn-large waves-effect waves-light">
              <i class="material-icons left">panorama_fish_eye</i>
              参加
            </button>
          </div>
          <div class="col s4">
            <button class="btn-large waves-effect waves-light">
              <i class="material-icons left">report_problem</i>
              未定
            </button>
          </div>
          <div class="col s4">
            <button class="btn-large waves-effect waves-light">
              <i class="material-icons left">close</i>
              欠席</button>
          </div>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <input v-model="comment" id="comment" type="text" class="validate">
          <label for="comment">コメント</label>
        </div>
        <!-- <p>{{modalMember}}</p> -->
      </div>
      <div class="modal-footer">
        <button @click="modalClose" class="modal-action modal-close btn-flat waves-effect waves-light">登録</button>
        <button @click="modalClose" class="modal-action modal-close btn-flat waves-effect waves-light">閉じる</button>
      </div>
    </div>
  
    <!--登録ボタン-->
    <button @click="goScheduleTop" class="btn waves-effect waves-light" type="submit" name="action">
      一覧に戻る
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
    test: function () {
      console.log("call!!!")
    }
  },
  mounted() {
    $(document).ready(function () {
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
    modalClose: function () {
      $('#modal1').modal('close');
    }
  }
}
</script>