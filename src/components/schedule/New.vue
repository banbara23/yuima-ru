<template>
  <div>
  
    <div id="member-insert">
      <h5>予定登録</h5>
      <form class="col scv gv12">
  
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <input v-model="title"
                   id="title"
                   type="text"
                   class="validate">
            <label for="title"
                   v-if="!title">タイトル</label>
          </div>
        </div>
  
        <!--日付-->
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">schedule</i>
            <input v-model="date"
                   type="date"
                   class="datepicker">
            <label for="datepicker"></label>
          </div>
        </div>
        
        <!--時間-->
        <div class="row">
          <!--開始時間-->
          <div class="input-field col s6">
            <i class="material-icons prefix">av_timer</i>
            <input v-model="startTime"
                   id="time_start"
                   type="text" class="timepicker">
            <label for="time_start"
                   v-if="!startTime">開始時間</label>
          </div>
          <!--終了時間-->
          <div class="input-field col s6">
            <i class="material-icons prefix">av_timer</i>
            <input v-model="endTime"
                   id="time_end"
                   type="text" class="timepicker">
            <label for="time_end"
                   v-if="!endTime">終了時間</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">room</i>
            <input v-model="place"
                   id="place"
                   type="text">
            <label for="place"
                   v-if="!place">施設</label>
          </div>
  
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea v-model="comment"
                      id="comment"
                      class="materialize-textarea"></textarea>
            <label for="comment"
                   v-if="!comment">コメント</label>
          </div>
        </div>
      </form>
  
      <!--登録ボタン-->
      <button @click="addItem"
              class="btn waves-effect waves-light"
              type="submit"
              name="action">
        登録
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      title: '練習',
      date: '2017/06/22',
      startTime: '10:00',
      endTime: '14:00',
      place: '練馬春日町小学校',
      comment: 'いつもの練習です'
    }
  },
  mounted() {
    // https://github.com/Dogfalo/materialize/wiki/Date-Picker
    $('.datepicker').pickadate({
      selectMonths: true,
      // today: true,
      selectYears: 15,
      format: 'yyyy/mm/dd',
      formatSubmit: 'yyyy/mm/dd',
      monthsFull: ['１月', '２月', '３月', '４月', '５月', '６月', '７月', '８月', '９月', '１０月', '１１月', '１２月'],
      monthsShort: ['1 /', '2 /', '3 /', '4 /', '5 /', '6 /', '7 /', '8 /', '9 /', '10 /', '11 /', '12 /'],
      weekdaysFull: [ '日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜' ],
      weekdaysShort: [ '日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜' ],
      weekdaysLetter: [ '日', '月', '火', '水', '木', '金', '土' ],
      closeOnSelect: true
    });
    $('.timepicker').pickatime({
      // default: 'now', // Set default time
      // fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: true, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker  
    });
       
  },
  methods: {
    addItem: function () {

      const id = this.date.replace('/','').replace('/','')
      const sendData = {
        id:id,
        date: this.date,
        title: this.title,
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        comment: this.comment
      }
      firebase.database()
        .ref(`/schedule/${id}`)
        .set(sendData)
        .then(this.$router.push('/schedule'))
    }
  }
}
</script>