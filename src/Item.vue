<template>
 <ul>
     <li v-for="(e,index) in content">
      <div v-if="typeof e == 'string'" >{{e}}</div>
      <div v-if="typeof e == 'object'">
        <div class="folder_name"  @click="this.expanded[index] = !this.expanded[index]">{{e.name}}/</div>
        <div v-bind:class="{ hidden: !expanded[index] }">
            <Item :content="e.content"  ></Item>
        </div>
      </div>
     </li>
 </ul>
</template>
<script>
export default {
  name: 'Item',
  props: ['content'],
  data()
  {
      return {expanded:[]}
  }
}
</script>
<style scoped>
.hidden
{
    display: none;
}
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