<template>
  <div class="member container">
    {{msg}}
  <!--Avatar Content-->
  <div id="member-list" class="collection" v-cloak>
    <a :href=item.link class="collection-item" v-for="item in anArray">
      {{ item.name }}
    </a>
  </div>

  <!--登録-->
  <div id="member-insert">
    <h5>メンバー登録</h5>
    <form class="col scv gv12">
      <div class="row">
        <div class="input-field col s6">
          <!--<i class="material-icons prefix">account_circle</i>-->
          <input v-model="name" id="name" type="text" class="validate">
          <label class="active" for="name">名前</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <!--<i class="material-icons prefix">insert_photo</i>-->
          <input v-model="imageUrl" id="image" type="text">
          <label class="active" for="image">画像</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <!--<i class="material-icons prefix">textsms</i>-->
          <textarea v-model="comment" id="comment" class="materialize-textarea"></textarea>
          <label class="active" for="comment">コメント</label>
        </div>
      </div>
    </form>
    <button @click="addItem" class="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <!--<i class="material-icons right">send</i>-->
        </button>
  </div>
  </div>
</template>

<script>
// import TopMenu from '@/components/TopMenu'
export default {
  name: 'member',
  data() {
    return {
      msg: 'member',
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
  }
}
</script>