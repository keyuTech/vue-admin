import router from './router/index'
import { message } from 'element-ui'
import { getToken } from './utils/auth';
import Swal from 'sweetalert2'

function hasPremission() {

}

// router.beforeEach((to, from, next) => {
//   if (getToken()) {
//     if (to.path === '/login') {
//       next()
//     } else {
//       return next({ path: '/login' })
//     }
//   } else {
//     next({ path: '/login' })
//   }
// })