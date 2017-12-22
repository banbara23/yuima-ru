<template>
  <div>
    <!--登録-->
    <div id="member-insert">
      <h2>メンバー登録</h2>
      <form>
        <!--名前-->
        <div class="row">
          <div class="input-field col s8">
            <i class="material-icons prefix">account_circle</i>
            <input v-model="name" id="name" type="text" class="validate">
            <label class="active" for="name">名前</label>
          </div>
        </div>
  
        <!--画像-->
        <!-- <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">add_to_photos</i>
            <input v-model="image" id="image" type="text">
            <label class="active" for="image">画像</label>
          </div>
        </div>
        <div class="row file-field input-field">
          <div class="btn">
            <span>File</span>
            <input type="file">
          </div>
          <div class="file-path-wrapper">
            <input v-model="image" class="file-path validate" type="text">
          </div>
        </div> -->

        <!--ポジション-->
        <div class="row">
          <div class="input-field col s8">
            <i class="material-icons prefix">mode_edit</i>
            <input v-model="position" id="position" type="text" class="validate">
            <label class="active" for="name">ポジション</label>
          </div>
        </div>
  
        <!--コメント-->
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea v-model="comment" id="comment" class="materialize-textarea"></textarea>
            <label class="active" for="comment">コメント</label>
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
import firebase from "firebase";
export default {
  data() {
    return {
      name: "sample",
      position: "all",
      image: "",
      comment: "test"
    };
  },
  methods: {
    // 登録を押下
    addItem: function() {
      const sendData = {
        name: this.name,
        position: this.position,
        image: this.image,
        comment: this.comment
      };
      firebase
        .database()
        .ref("member")
        .push(sendData)
        .then(this.$router.push("/member"));
    }
  }
};
</script>