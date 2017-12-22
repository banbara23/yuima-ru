<template>
  <div id='entry'>
    <h2 class="">回答</h2>
    <h4>名前</h4>
    <p>日時：2017/05/20 10〜14時</p>
    <p>場所：練馬春日小学校</p>
    <p>コメント：今回はたくさんくるぞー</p>
  
    <div class="card">
      <div class="card-content">
        <form action="#">
          <p>
            <input name="group1"
                   type="radio"
                   id="test1" />
            <label for="test1">参加</label>
          </p>
          <p>
            <input name="group1"
                   type="radio"
                   id="test2" />
            <label for="test2">欠席</label>
          </p>
          <p>
            <input name="group1"
                   type="radio"
                   id="test3" />
            <label for="test3">保留</label>
          </p>
          <div class="input-field col s12">
            <textarea id="textarea1"
                      class="materialize-textarea"></textarea>
            <label for="textarea1">コメント</label>
          </div>
        </form>
      </div>
    </div>
    <!--登録ボタン-->
    <button @click="addItem"
            class="btn waves-effect waves-light"
            type="submit"
            name="action">
      登録
      <i class="material-icons right">send</i>
    </button>
  </div>
</template>

<script>
export default {
  name: "entry",
  methods: {
    addItem: function() {
      this.$router.push("/schedule/20170617");
    }
  }
};
</script>

<style>

</style>
