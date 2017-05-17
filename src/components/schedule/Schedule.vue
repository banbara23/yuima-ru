<template>
  <div class="schedule container">
    <h5>出席登録</h5>
    <div class="row"
         id="schedule">
      <div class="col s12"
           v-for="events in anArray">
        <a :href=events.link>
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">
                {{ events.date }}
                {{ events.title }}
              </span>
              <p>{{ events.comment }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
    <a href="schedule/new" class="waves-effect waves-light btn"><i class="material-icons left">add</i>New</a>
    </div>
  </div>
</template>

<script>
// import TopMenu from '@/components/TopMenu'
export default {
  name: 'schedule',
  data() {
    return {
      msg: 'test',
      anArray: []
    }
  },
  created() {
    this.anArray = [
    {
      date: '2017/05/17 (日)',
      title: '春日町で練習',
      comment: 'いつもの練習',
      link: 'detail/20170617'
    },
      {
        date: '2017/05/18 (日）',
        title: '春日町で練習',
        comment: 'チャラ座と練習試合かも',
        link: 'detail/20170617'
      }
    ]
  }
}
</script>