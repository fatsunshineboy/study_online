export default [
  {
    path: '/',
    component: () => import('@/views/Default.vue'),
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('@/views/Home.vue') },
      { path: '/course', component: () => import('@/views/Course.vue') },
      { path: '/setting', component: () => import('@/views/Setting.vue') },
      { path: '/lesson/:id', component: () => import('@/views/Lesson.vue') }
    ]
  },
  { path: '/login', component: () => import('@/views/Login.vue') }
]
