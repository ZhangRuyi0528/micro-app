import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const registerRoute = route => {
    return new VueRouter({
        mode: 'history',
        routes: route
    });
};

export default registerRoute;