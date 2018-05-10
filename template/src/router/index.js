import Vue from 'vue'
import Router from 'vue-router'
import HelloView from '@/components/HelloView'
import MapView from '@/components/MapView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/hello',
  }, {
    path: '/hello',
    name: 'Hello',
    component: HelloView
  }, {
    path: '/map',
    name: 'Map',
    component: MapView
  }],
})
