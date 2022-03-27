<template>
  <div class="directory-outline">
      <h3> Directory path: {{ info.path }}</h3>
      <Item :content="info.content"></Item>
  </div>
</template>
<script>
export default {
  name: 'Directory',
  props: ['info']
 }
</script>
<style scoped>
    .directory-outline
    {
        border: solid 3px #333;
        margin:15px;
        padding:15px;
    }
</style>
