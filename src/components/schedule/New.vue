<template>
  <div>
  
    <div id="member-insert">
      <h5>予定登録</h5>
      <form class="col scv gv12">
  
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <input v-model="title" id="title" type="text" class="validate">
            <label for="title" v-if="!title">タイトル</label>
          </div>
        </div>
  
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">schedule</i>
            <input v-model="date" type="date" class="datepicker">
            <label for="datepicker"></label>
          </div>
        </div>
  
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">av_timer</i>
            <input v-model="startTime" id="time_start" type="text">
            <label for="time_start" v-if="!startTime">開始時間</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">av_timer</i>
            <input v-model="endTime" id="time_end" type="text">
            <label for="time_end" v-if="!endTime">終了時間</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">room</i>
            <input v-model="place" id="place" type="text">
            <label for="place" v-if="!place">場所</label>
          </div>
  
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea v-model="comment" id="comment" class="materialize-textarea"></textarea>
            <label for="comment" v-if="!comment">コメント</label>
          </div>
        </div>
      </form>
  
      <!--登録ボタン-->
      <button @click="addItem" class="btn waves-effect waves-light" type="submit" name="action">
        登録
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
moment.locale('ja')

export default {
  data() {
    return {
      title: '練習',
      date: '',
      startTime: '10:00',
      endTime: '14:00',
      place: '練馬春日町小学校',
      comment: 'いつもの練習です'
    }
  },
  mounted() {
    $('.datepicker').pickadate({
      selectMonths: true,
      today: '本日',
      clear: 'クリア',
      close: '閉じる',
      selectYears: 15,
      format: 'yyyy/mm/dd',
      formatSubmit: 'yyyy/mm/dd',
      onSet: function(context) {
          console.log('Just set stuff:', context)
        }
    });
  },
  methods: {
    addItem: function () {

      const id = this.date.replace('/', '').replace('/', '')
      const sendData = {
        id: id,
        date: this.date,
        title: this.title,
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        place: this.place,
        comment: this.comment
      }
      firebase.database()
        .ref('schedule')
        .push(sendData)
        .then(this.$router.push('/schedule'))
    }
  }
}
</script>