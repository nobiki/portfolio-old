
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy);

import myname from './components/MyNameComponent.vue';

const app = new Vue({
  el: '#app',
  components: {
    myname,
  },
  data: {
    name: "Naoaki Obiki",
    intro: {
      loaded: false,

    },
  },
  mounted: function() {
    console.log("mounted");
    // this.$refs.ref_name.hello();
  },
  methods: {
    onLoaded() {
      this.intro.loaded = true;
    }
  },
});
