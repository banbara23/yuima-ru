<template>
  <div class="detail">
    <h5>{{title}}</h5>
    <p>日時：2017/05/20 10〜14時</p>
    <p>場所：練馬春日小学校</p>
    <p>コメント：今回はたくさんくるぞー</p>
  
    <div class="card">
      <div class="card-content">
        <table class="bordered">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>回答</th>
              <th>コメント</th>
              <th></th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>
                <img src="http://www.gemani.org/img/_1397177820.12109_843.png" alt="" class="circle">
              </td>
              <td>Alvin</td>
              <td>出席</td>
              <td>いくます</td>
              <td class="right">
                <a class="waves-effect waves-light btn" href="/schedule/entry/1">登録</a>
              </td>
            </tr>
            <tr>
              <td>
                <img src="http://www.gemani.org/img/_1397177820.12109_843.png" alt="" class="circle">
              </td>
              <td>Alan</td>
              <td>-</td>
              <td></td>
              <td class="right">
                <a class="waves-effect waves-light btn" href="/schedule/entry/1">登録</a>
              </td>
            </tr>
            <tr>
              <td>
                <img src="http://www.gemani.org/img/_1397177820.12109_843.png" alt="" class="circle">
              </td>
              <td>Jonathan</td>
              <td>欠席</td>
              <td>予定がありキャンセルします...</td>
              <td class="right">
                <a class="waves-effect waves-light btn" href="/schedule/entry/1">登録</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   <!--登録ボタン-->
        <button @click="goScheduleTop" class="btn waves-effect waves-light" type="submit" name="action">
                スケジュールトップ
        </button>
  </div>
</template>

<script>
// import TopMenu from '@/components/TopMenu'
export default {
  name: 'name',
  data() {
    return {
      title: 'スケジュール詳細',
      anArray: []
    }
  },
  created() {
    this.anArray = [
      {
        date: '2017/05/17 (日)',
        name: '名前',
        comment: 'いつもの練習',
        link: 'link'
      }
    ]
  },
  methods: {
    goScheduleTop:function () {
      this.$router.push('/schedule');
    }
  }
}
</script>