import Vue from 'vue'
import Router from 'vue-router'
import mainRouter from './mainRoter.js';

Vue.use(Router)

const routes = [
  ...mainRouter
]

const router = new Router({
  mode: 'hash',
  routes
})

export default router;
// export default new Router({
//   routes: [
//     {
//       path:'/',
//       component: Home,
//       children: [
//         { path: 'translate',component: Translate },
//         { path: 'circle',component: Circle },
//       ]
//     }
//   ]
// });
