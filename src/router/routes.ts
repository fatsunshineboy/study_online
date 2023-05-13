export default [
  {
    path: '/',
    component: () => import('@/views/Default.vue'),
    children: [
      { path: '/home', component: () => import('@/views/Home.vue') },
      { path: '/course', component: () => import('@/views/Course.vue') },
      { path: '/setting', component: () => import('@/views/Setting.vue') }
    ]
  },
  { path: '/login', component: () => import('@/views/Login.vue') }
]
