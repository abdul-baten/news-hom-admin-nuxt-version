import Vue from 'vue'
import VueCarousel from 'vue-carousel'

if (process.browser) {
  window.onNuxtReady(() => {
    Vue.use(VueCarousel)
  })
}
