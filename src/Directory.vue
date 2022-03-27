<template>
  <div class="directory-outline">
      <h3> Directory path: {{ path }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Directory',
  data() {
      return {
        path: 'Default',
        content: []
  }}
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
