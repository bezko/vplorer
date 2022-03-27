import { createApp } from 'vue'
import App from './App.vue' 
import Directory from './Directory.vue'
var app   = createApp(App)
app.component('Directory',Directory);
app.mount('#app');