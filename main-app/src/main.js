import Vue from 'vue'
import App from './App.vue'
import Child from './Child.vue'
import Route from './route';
// const microapp = require('./develop/app.json');

Vue.config.productionTip = false
import { loadMicroApp, registerMicroApps, start } from 'qiankun';



const devConfig = {
  beforeLoad: (app) => console.log('before load', app.name),
  beforeMount: [(app) => console.log('before mount', app.name)],
};

const router = Route([
  {
    name: "app1-one",
    component: Child,
    path: '/app1-one',
  },
  {
    name: "/app1-one",
    component: Child,
    path: '/:spaceUri?/app1-one'
  },
  {
    name: "/app2-two",
    component: Child,
    path: '/app2-two'
  },
]);
console.log(router);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

registerMicroApps([{
    name: 'apponly',
    entry: 'http://localhost:9000',
    container: '#child-app',
    activeRule: [
      '/app1-one',
      '/:spaceUri?/app1-one',
      '/:spaceUri/app1-one'
    ],
  },
  {
    name: 'app2only',
    entry: 'http://localhost:9001',
    container: '#child-app',
    activeRule: '/app2-two',
  },
], devConfig);

start();
