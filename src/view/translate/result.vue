<template>
  <div class="result">
    <span>{{result}}</span>
  </div>
</template>
<script>
  export default {
    name: 'result',
    props: [
      'result'
    ]
  }
</script>
<style lang="less" scoped>
.result {
  margin: 20px;
}
</style>