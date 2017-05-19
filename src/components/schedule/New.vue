<template>
  <div>
  <!--登録-->
  <div id="member-insert">
    <h5>予定登録</h5>
    <form class="col scv gv12">
      
        <div class="input-field col s12">
          <!--<i class="material-icons prefix">account_circle</i>-->
          <input v-model="name" id="name" type="text" class="validate">
          <label class="active" for="name">タイトル</label>
        </div>

        <div class="input-field col s6">
          <input type="date" class="datepicker">
          <label class="active" for="datepicker">日付</label>
        </div>

        <div class="input-field col s6">
          <!--<i class="material-icons prefix">insert_photo</i>-->
          <input v-model="imageUrl" id="place" type="text">
          <label class="active" for="place">場所</label>
        </div>
      
        <div class="input-field col s12">
          <!--<i class="material-icons prefix">textsms</i>-->
          <textarea v-model="comment" id="comment" class="materialize-textarea"></textarea>
          <label class="active" for="comment">コメント</label>
        </div>
      
    </form>
    <button @click="addItem" class="btn waves-effect waves-light" type="submit" name="action">
            登録
            <i class="material-icons right">send</i>
        </button>
  </div>
  </div>
</template>

<script>
// import TopMenu from '@/components/TopMenu'
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
        selectYears: 15
      });
  },
  methods: {
    addItem: ()=> {
 
    }
  }
}
</script>