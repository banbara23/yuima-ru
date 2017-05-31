<template>
  <div class="detail">
    <h5>{{title}}</h5>
    <p>日時：2017/05/20 10〜14時</p>
    <p>場所：練馬春日小学校</p>
    <p>コメント：今回はたくさんくるぞー</p>

    <ul class="collection">
      
    <li class="collection-item avatar">
      <img src="../../assets/alvin.png" alt="" class="circle">
      <span class="title">名前</span>
      <p>コメント</p>
      <div class="secondary-content"><a class="blue waves-effect waves-light btn" href="/schedule/entry/1">参加</a></div>
    </li>

    <li class="collection-item avatar">
      <i class="material-icons circle ">perm_identity</i>
      <span class="title">名前</span>
      <p>コメント</p>
      <div class="secondary-content"><a class="orange waves-effect waves-light btn" href="/schedule/entry/1">未定</a></div>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">perm_identity</i>
      <span class="title">名前</span>
      <p>コメント</p>
      <div class="secondary-content"><a class="red waves-effect waves-light btn" href="/schedule/entry/1">欠席</a></div>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">perm_identity</i>
      <span class="title">名前</span>
      <p>コメント</p>
      <div class="secondary-content"><a class="red waves-effect waves-light btn" href="/schedule/entry/1">欠席</a></div>
    </li>
  </ul>

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