<template>
  <div class="member">
  
    <div class="section" v-cloak>
      <h2>メンバー</h2>
  
      <!-- <div class="s12 center">
          <div class="image-container">
            <img class="responsive-img" src="../../assets/member_all.jpg" style="width:100%;">
          </div>
        </div> -->
  
      <ul class="collection">
        <li class="collection-item avatar" v-for="member in members" v-bind:key="member['key']">
          <i class="material-icons circle ">perm_identity</i>
          <!-- <img src="../../assets/alvin.png" alt="" class="circle"> -->
          <span class="title">{{member.name}}</span>
          <p>ポジション：{{member.position}}
            <br> {{member.comment}}
          </p>
        </li>
      </ul>
    </div>
  
    <router-link to="member/new" class="waves-effect waves-light btn">
      <i class="material-icons left">add</i>追加
    </router-link>
  </div>
</template>

<script>
import firebase from "firebase";
const db = firebase.database();

export default {
  name: "member",
  data() {
    return {
      msg: "member",
      members: []
    };
  },
  firebase: {
    members: {
      source: db.ref("/member"),
      readyCallback: function() {
        this.$Progress.finish();
      }
    }
  },
  created() {
    this.$Progress.start();
  }
};
</script>

<style>

</style>