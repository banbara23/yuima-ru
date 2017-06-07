<template>
  <div>
  
    <div id="member-insert">
      <h5>予定登録</h5>
      <form class="col scv gv12">
  
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <input v-model="name"
                   id="name"
                   type="text"
                   class="validate">
            <label for="name">タイトル</label>
          </div>
        </div>
  
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">schedule</i>
            <input type="date"
                   class="datepicker">
            <label for="datepicker"></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">av_timer</i>
            <input v-model="imageUrl"
                   value="10:00"
                   id="time_start"
                   type="text">
            <label for="time_start">開始時間</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">av_timer</i>
            <input v-model="imageUrl"
                   value="14:00"
                   id="time_end"
                   type="text">
            <label for="time_end">終了時間</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">room</i>
            <input v-model="imageUrl"
                   id="place"
                   type="text">
            <label for="place">場所</label>
          </div>
  
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea v-model="comment"
                      id="comment"
                      class="materialize-textarea"></textarea>
            <label for="comment">コメント</label>
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
export default {
  data() {
    return {
      msg: 'member',
      anArray: []
    }
  },
  mounted() {
    this.anArray = [
      {
        date: '2017/05/17 (日)',
        name: '名前',
        comment: 'いつもの練習',
        link: 'link'
      }
    ]
    $('.datepicker').pickadate({
      selectMonths: true,
      today: true,
      selectYears: 15,
      format: 'yyyy/mm/dd',
      formatSubmit: 'yyyy/mm/dd',
      closeOnSelect: true
    });
  },
  methods: {
    addItem: function () {
      this.$router.push('/schedule');
    }
  }
}
</script>