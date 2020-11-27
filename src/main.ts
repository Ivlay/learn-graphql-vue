import Vue                from 'vue'
import VueRouter          from 'vue-router';
import App                from './App.vue'
import Landing            from './components/Landing.vue';
import MovieDetail        from './components/Movies/MovieDetail.vue';
import { apolloProvider } from './ApolloProvider';


Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Landing},
    { path: '/:id', component: MovieDetail }
  ]
})

new Vue({
  router,
  apolloProvider,
  apollo: {
    $query: {

    }
  },
  render: h => h(App)
}).$mount('#app');
