<template>
   
    <Directory v-for="dir in dirs">
      
    </Directory>

</template>

<script>
import Directory from './Directory.vue'
const axios = require("axios");

export default {

  data() {

    return {

      dirs: []

    }
  },


  computed: {
   
  },

 

  created() 
  {
      axios.get('/data')
        .then((response) => {
            this.dirs = response.data;
        })
  }

}

</script>