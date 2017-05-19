<template>
  <div id='entry'>
    <h5>回答</h5>
    <p>日時：2017/05/20 10〜14時</p>
    <p>場所：練馬春日小学校</p>
    <p>コメント：今回はたくさんくるぞー</p>
  
    <div>
      <form action="#">
        <p>
          <input name="group1" type="radio" id="test1" />
          <label for="test1">参加</label>
        </p>
        <p>
          <input name="group1" type="radio" id="test2" />
          <label for="test2">欠席</label>
        </p>
        <p>
          <input name="group1" type="radio" id="test3" />
          <label for="test3">保留</label>
        </p>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">コメント</label>
        </div>
        <button class="btn-large waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'entry'
}
</script>

<style>

</style>
