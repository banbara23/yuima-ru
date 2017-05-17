<template>
  <div class="member container">
    <h5>メンバー</h5>
    <!--Avatar Content-->
    <div id="member-list" class="collection" v-cloak>
      <a :href=item.link class="collection-item" v-for="item in anArray">
        {{ item.name }}　{{ item.comment }}
      </a>
    </div>
  
    <a href="member/new" class="waves-effect waves-light btn">
      <i class="material-icons left">add</i>追加</a>
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
        name: '名前1',
        comment: 'コメント',
        link: 'link'
      },
      {
        name: '名前2',
        comment: 'コメント',
        link: 'link'
      },
      {
        name: '名前3',
        comment: 'コメント',
        link: 'link'
      },
      {
        name: '名前4',
        comment: 'コメント',
        link: 'link'
      }
    ]
  }
}
</script>