<template>
  <div class="buhi">
    <h3>部費</h3>
    <p>現在の金額<h2>{{many}} 円</h2> </p>
  </div>
</template>

<script>
export default {
  name: 'buhi',
  data() {
    return {
      many: 1000000000
    }
  }
}
</script>