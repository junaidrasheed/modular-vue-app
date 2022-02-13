const Index = () => import("./Index.vue")
const Home = () => import("./views/Home.vue")

const moduleRoutes = {
  path: '/module_2',
  component: Index,
  children: [
    {
      path: "/",
      component: Home,
    },
  ]
}

export default router => {
  router.addRoutes([moduleRoutes])
}