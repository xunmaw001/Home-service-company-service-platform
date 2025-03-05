import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jiazhengfuwu from '@/views/modules/jiazhengfuwu/list'
    import jiazhengfuwuCollection from '@/views/modules/jiazhengfuwuCollection/list'
    import jiazhengfuwuCommentback from '@/views/modules/jiazhengfuwuCommentback/list'
    import jiazhengfuwuLiuyan from '@/views/modules/jiazhengfuwuLiuyan/list'
    import jiazhengfuwuOrder from '@/views/modules/jiazhengfuwuOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import config from '@/views/modules/config/list'
    import dictionaryJiazhengfuwu from '@/views/modules/dictionaryJiazhengfuwu/list'
    import dictionaryJiazhengfuwuCollection from '@/views/modules/dictionaryJiazhengfuwuCollection/list'
    import dictionaryJiazhengfuwuOrder from '@/views/modules/dictionaryJiazhengfuwuOrder/list'
    import dictionaryJiazhengfuwuOrderPayment from '@/views/modules/dictionaryJiazhengfuwuOrderPayment/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryJiazhengfuwu',
        name: '家政服务类型',
        component: dictionaryJiazhengfuwu
    }
    ,{
        path: '/dictionaryJiazhengfuwuCollection',
        name: '收藏表类型',
        component: dictionaryJiazhengfuwuCollection
    }
    ,{
        path: '/dictionaryJiazhengfuwuOrder',
        name: '订单类型',
        component: dictionaryJiazhengfuwuOrder
    }
    ,{
        path: '/dictionaryJiazhengfuwuOrderPayment',
        name: '订单支付类型',
        component: dictionaryJiazhengfuwuOrderPayment
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/jiazhengfuwu',
        name: '家政服务',
        component: jiazhengfuwu
      }
    ,{
        path: '/jiazhengfuwuCollection',
        name: '家政服务收藏',
        component: jiazhengfuwuCollection
      }
    ,{
        path: '/jiazhengfuwuCommentback',
        name: '家政服务评价',
        component: jiazhengfuwuCommentback
      }
    ,{
        path: '/jiazhengfuwuLiuyan',
        name: '家政服务留言',
        component: jiazhengfuwuLiuyan
      }
    ,{
        path: '/jiazhengfuwuOrder',
        name: '家政服务订单',
        component: jiazhengfuwuOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
