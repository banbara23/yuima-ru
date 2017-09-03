<template>
  <div class="detail">
    <vue-progress-bar></vue-progress-bar>
    <h3>予定詳細</h3>
    <div class="row card" v-if="schedule">
      <div class="card-content">
        <span class="card-title">{{schedule.title}}</span>
        <p>日時：{{schedule.date}} {{schedule.startTime}}〜{{schedule.endTime}}</p>
        <p>場所：{{schedule.place}}</p>
        <p>コメント：{{schedule.comment}}</p>
      </div>
    </div>

    <!--まとめ数字-->
    <div class="row section card">
      <div class="col s4 l4 center">
        <h4 class="blue-text">参加</h4>
        <h4>{{OK}}</h4>
      </div>
      <div class="col s4 l4 center">
        <h4 class="red-text">欠席</h4>
        <h4>{{NG}}</h4>
      </div>
      <div class="col s4 l4 center">
        <h4 class="orange-text">未定</h4>
        <h4>{{TBD}}</h4>
      </div>
    </div>

    <!--リスト-->
    <div class="row">
      <ul class="collection card" v-if="members">
        <li class="collection-item avatar" v-for="member in members" v-bind:key="member['.key']">
          <i class="material-icons circle ">perm_identity</i>
          <span class="title">{{member.name}}</span>
          <p>{{member.entryComment}}</p>
          <div class="secondary-content">
            <a v-if="member.entry=='OK'" class="waves-effect waves-light btn-flat blue white-text modal-trigger" href="#modal1" @click="modalMember = member">参加</a>
            <a v-else-if="member.entry==='NG'" class="waves-effect waves-light btn-flat red white-text modal-trigger" href="#modal1" @click="modalMember = member">欠席</a>
            <a v-else-if="member.entry==='TBD'" class="waves-effect waves-light btn-flat orange-text modal-trigger" href="#modal1" @click="modalMember = member">未定</a>
            <a v-else class="waves-effect waves-light btn-flat blue-text modal-trigger" href="#modal1" @click="modalMember = member">回答</a>
          </div>
        </li>
      </ul>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>出欠登録</h4>
        {{entryComment}}
        <span>{{schedule.title}} in {{schedule.place}}</span><br>
        <span>{{schedule.date}} {{schedule.startTime}}〜{{schedule.endTime}}</span>
        <p></p>
        <h5>{{modalMember.name}}</h5>
        <h5>{{entry}}</h5>
        <br>
        <div class="row">
          <div class="col s4">
            <button @click="entry = 'OK'" class="btn-floating btn-large waves-effect waves-light blue">
              <i class="material-icons left">panorama_fish_eye</i>
            </button>
            <span>参加</span>
          </div>
          <div class="col s4">
            <button @click="entry = 'TBD'" class="btn-floating btn-large waves-effect waves-light orange lighten-5">
              <i class="material-icons left">report_problem</i>
            </button>
            <span>未定</span>
          </div>
          <div class="col s4">
            <button @click="entry = 'NG'" class="btn-floating btn-large waves-effect waves-light red lighten-5">
              <i class="material-icons left">close</i>
            </button>
            <span>欠席</span>
          </div>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <input v-model="entryComment" id="comment" type="text" class="validate">
          <label for="comment">コメント</label>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="modalClose" class="modal-action modal-close btn-flat waves-effect waves-light">閉じる</button>
        <button @click="sendEntry" class="modal-action modal-close btn pink waves-effect waves-light">登録</button>
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
      schedule: {},
      members: [],
      modalMember: {},
      entry: '',
      entryComment: '',
      OK: 0,
      NG: 0,
      TBD: 0,
    }
  },
  created() {
    this.$Progress.start();
  },
  firebase() {
    return {
      schedule: {
        source: db.ref("schedule").child(this.$route.params.id),
        asObject: true,
        readyCallback: function(data) {
        }
      },
      members: {
        source: db.ref("entry").child(this.$route.params.id),
        readyCallback: function(snapShot) {
          if (!snapShot.val()) return;

          const members = snapShot.val();
          for (let k of Object.keys(members)) {
            // console.log(members[k].entry);
            switch (members[k].entry) {
              case 'OK':
                this.OK++
                break;
              case 'NG':
                this.NG++
                break;
              case 'TBD':
                this.TBD++
                break;
              default:
                break;
            }
          }

          this.$Progress.finish()
        }
      }
    }
  },
  mounted() {
    $(document).ready(function() {
      $('.modal').modal();
    });
    $(document).ready(function() {
      $('select').material_select();
    });
  },
  methods: {

    goScheduleTop: function() {
      this.$router.push('/schedule');
    },
    goEdit: function() {
      this.$router.push('/schedule/New');
    },
    modalClose: function() {
      $('#modal1').modal('close');
      this.entry = ''
      this.entryComment = '';
    },
    sendEntry: function() {
      // 登録準備
      const sendData = {
        name: this.modalMember.name,
        image: this.modalMember.image,
        entry: this.entry,
        entryComment: this.entryComment
      }

      // 登録
      db.ref("entry").child(this.$route.params.id).child(this.modalMember['.key']).set(sendData)

      // 初期化
      this.modalMember = {};
      this.entry = ''
      this.entryComment = '';
      $('#modal1').modal('close');
    },
  }
}
</script>