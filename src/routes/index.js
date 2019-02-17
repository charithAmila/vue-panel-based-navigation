import VueRouter from "vue-router";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Form from "../pages/Form";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "users",
          component: Users,
          children: [
            {
              path: "add",
              component: Form
            }
          ]
        }
      ]
    }
  ]
});
