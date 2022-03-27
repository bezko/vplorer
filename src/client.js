import { createApp } from 'vue'
import App from './App.vue' 
import Directory from './Directory.vue'
import Item from './Item.vue'
var app   = createApp(App)
app.component('Directory',Directory);
app.component('Item',Item);
app.mount('#app');