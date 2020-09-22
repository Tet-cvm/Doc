import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "lib-flexible"

router.beforeEach((to, from, next) => {
  const current = { /* @@ 页面对应权限 */
    "0": ["Login", "Admin", "Upkeep", "Reader"],
    "1": ["Login", "Upkeep", "Reader"],
    "2": ["Login", "Reader"]
  }
  if (store.getters.getStateLogin) { /* @@ 已登陆 */
    if (current[store.getters.getStateRole].includes(to.name)) { /* @@ 有访问权限 */
      if (to.name == "Login") {
        next({
          name: current[store.getters.getStateRole][1]
        });
      } else {
        next();
      }
    } else { /* @@ 无访问权限 */
      store.commit("setStateLogin", false);
      next({
        name: "Login"
      });
    }
  } else { /* @@ 未登陆 */
    if (to.name == "Login") {
      next();
    } else {
      next({
        name: "Login"
      });
    }
  }
})

createApp(App).use(store).use(router).mount("#app")
