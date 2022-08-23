import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js';
import store from './store/index.js'  //index 파일을 가져올 경우 생략 가능

createApp(App).use(router).use(store).mount('#app');
