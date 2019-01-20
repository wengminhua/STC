export default [
  {
    path: '/',
    component: resolve => require(['./views/Home'], resolve)
  },
  {
    path: '/home',
    component: resolve => require(['./views/Home'], resolve)
  },
  {
    path: '/expo',
    component: resolve => require(['./views/Expo'], resolve)
  },
  {
    path: '/trip',
    component: resolve => require(['./views/Trip'], resolve)
  },
  {
    path: '/hotel',
    component: resolve => require(['./views/Hotel'], resolve)
  },
  {
    path: '/expo-detail/:type',
    component: resolve => require(['./views/ExpoDetail'], resolve)
  }
]
