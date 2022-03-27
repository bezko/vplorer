<template>    
        <div v-for="dir in dirs">
            <Directory  :info="dir"> </Directory>
        </div>
</template>

<script>
import Directory from './Directory.vue'
const axios = require("axios");

export default {

  data() {

    return {
      ws: null,
      dirs: []

    }
  },


  computed: {
   
  },

 

  created() 
  {   
      var reload = () => {
            axios.get('/data').then((response) => {
            this.dirs = response.data;
        })
      }
     
    this.ws = new WebSocket("ws://localhost:5889")
    this.ws.onmessage = function(event) {
      reload()
    }
    reload();
  }
}
</script>