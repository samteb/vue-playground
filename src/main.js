import Vue from 'vue';
import App from './App.vue';

import 'myint-video-player/dist/myintVideoPlayer.css';
import 'myint-video-player';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');