import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/firstVue'
import Home from '@/components/views/Home'
import homePage from '@/components/views/homePage'
import Login from '@/components/views/Login'
import Register from '@/components/views/register'
import Second from '@/components/views/secondVue'
import userManager from '@/components/views/userManager'
import overview from '@/components/views/overview'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



//设置cookie,增加到vue实例方便全局调用
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie
Vue.prototype.getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}

//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }


  const routes = [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/first',
      component: First,
      children: [{
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
            title:'首页',
        }
      }]

    },{
      path: '/second',
      component: Second
    },{
      path: '/homePage',
      component: homePage
    },{
      path: '/login',
      component: Login
    },{
      path: '/register',
      component: Register
    },{
      path:'/userManager',
      component: userManager
    },{
      path: '/',
      redirect: '/homePage',
      name: '',
      component: homePage,
      meta: {
        title:'首页',
      },
      children: [{
        path: '/overview',
        name: 'overview',
        component: overview,
        meta: {
          title:'首页',
        }
      }]
    },
  ]


const router = new Router({
  mode: 'history',
  // base: '/first/',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path == '/login'||to.path == '/register'||to.path == '/'||to.path =='/first' || to.path =='/second'){
    next();
  }else{
    var token = localStorage.getItem("token");
      if(token !=undefined ){
        next();
      }else{
        router.push('/login')
      }
  }
})

export default router
