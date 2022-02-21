const routesExtension = [
  {
    path: '/example',
    component: () => import('../../layouts/dacLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/example.vue') }
    ]
  }
]

export default routesExtension
