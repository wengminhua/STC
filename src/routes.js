export default [
  {
    path: '/',
    meta: {
      auth: false
    },
    component: resolve => require(['./views/Home'], resolve)
  }
]
