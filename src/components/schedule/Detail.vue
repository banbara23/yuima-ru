<template>
  <div class="detail">
    <vue-progress-bar></vue-progress-bar>
    <h3>予定詳細</h3>
    <div class="row card" v-if="detail">
      <div class="card-content">
        <span class="card-title">{{detail.title}}</span>
        <p>日時：{{detail.date}} {{detail.startTime}}〜{{detail.endTime}}</p>
        <p>場所：{{detail.place}}</p>
        <p>コメント：{{detail.comment}}</p>
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
        <h4>2</h4>
      </div>
      <div class="col s4 l4 center">
        <h4>未定</h4>
        <h4>3</h4>
      </div>
    </div>
  
    <!--リスト-->
    <div class="row">
      <ul class="collection card" v-if="entryMember">
        <li class="collection-item avatar" v-for="member in entryMember" v-bind:key="member['key']">
          <!--<img v-if="item.image"
                          :src="item.image"
                          alt=""
                          class="circle">-->
          <i class="material-icons circle ">perm_identity</i>
          <span class="title">{{member.name}}</span>
          <p>{{member.entryComment}}</p>
          <div class="secondary-content">
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
            <button class="btn-large waves-effect waves-light teal">
              <i class="material-icons left">panorama_fish_eye</i>
              参加
            </button>
          </div>
          <div class="col s4">
            <button class="btn-large waves-effect waves-light teal lighten-5 black-text">
              <i class="material-icons left">report_problem</i>
              未定
            </button>
          </div>
          <div class="col s4">
            <button class="btn-large waves-effect waves-light teal lighten-5  black-text">
              <i class="material-icons left">close</i>
              欠席</button>
          </div>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <input v-model="comment" id="comment" type="text" class="validate">
          <label for="comment">コメント</label>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="modalClose" class="modal-action modal-close btn-flat waves-effect waves-light">閉じる</button>
        <button @click="modalClose" class="modal-action modal-close btn pink waves-effect waves-light">登録</button>
      </div>
    </div>
  
    <!--戻るボタン-->
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
      entryMember: [],
      modalMember: {}
    }
  },
  created() {
    this.$Progress.start();
  },
  firebase() {
    return {
      detail: {
        source: db.ref("schedule").child(this.$route.params.id),
        asObject: true,
        readyCallback: function (data) {
          // entryテーブルのメンバー出欠情報を取ってくる
          db.ref('entry/' + data.key).once('value')
            .then(dataSnapshot => dataSnapshot.val())
            .then(entry => this.entryMember = entry)

          this.$Progress.finish()
        }
      }
    }
  },
  mounted() {
    $(document).ready(function () {
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