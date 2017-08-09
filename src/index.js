// VUE
// import vue
import Vue from 'vue'

// import tooling
import VueFire from 'vuefire'

// import components
import App from './App.vue'

// STYLE
// css reset
import 'reset-css/reset.css'
// main style file
import './style.css'

Vue.use(VueFire)

new Vue({
	el: '#app',
	render: h => h(App)
})
