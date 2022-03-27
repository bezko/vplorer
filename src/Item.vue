<template>
 <ul>
     <li v-for="e in content">
      <div v-if="typeof e == 'string'">{{e}}</div>
      <div v-if="typeof e == 'object'">
        <div class="folder_name">{{e.name}}/</div>
        <Item :content="e.content"></Item>
      </div>
     </li>
 </ul>
</template>
<script>
export default {
  name: 'Item',
  props: ['content']
}
</script>
<style scoped>
ul
{
    padding-inline-start: 10px;
}
li{
    list-style: none;
}
.folder_name
{
    font-weight: bold;
}

</style>