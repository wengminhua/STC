export default [
  {
    path: '/',
    meta: {
      auth: false
    },
    component: resolve => require(['./views/Home'], resolve)
  },
  {
    path: '/home',
    meta: {
      auth: false
    },
    component: resolve => require(['./views/Home'], resolve)
  },
  {
    path: '/expo',
    meta: {
      auth: false
    },
    component: resolve => require(['./views/Expo'], resolve)
  },
  {
    path: '/trip',
    meta: {
      auth: false
    },
    component: resolve => require(['./views/Trip'], resolve)
  },
  {
    path: '/hotel',
    meta: {
      auth: false
    },
    component: resolve => require(['./views/Hotel'], resolve)
  }
]
