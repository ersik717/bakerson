import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import LoginBaker from '@/components/LoginBaker'
import Registration from '@/components/Registration'
import Bakery from '@/components/Bakery'
import Catalog from '@/components/Catalog'
import Basket from '@/components/Basket'
import Detail from '@/components/Detail'
import Chart from '@/components/Chart'
import ChartContainer from '@/components/ChartContainer'
import Pagination from '@/components/Pagination'
import User from '@/components/User'
import BakerCatalog from '@/components/BakerCatalog'
import BakerProfile from '@/components/BakerProfile'
import BakerCreate from '@/components/BakerCreate'
import BakerOrder from '@/components/BakerOrder'
import BakerCatalogDetail from '@/components/BakerCatalogDetail'
import OrderDetail from '@/components/OrderDetail'
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/bakery',
      name: 'bakery',
      component: Bakery
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/detail/:Pid',
      name: 'detail',
      component: Detail
    },
    {
      path: '/bakercatalogdetail/:Pid',
      name: 'bakercatalogdetail',
      component: BakerCatalogDetail
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/chartcontainer',
      name: 'chartcontainer',
      component: ChartContainer
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/loginbaker',
      name: 'loginbaker',
      component: LoginBaker
    },
    {
      path: '/bakercatalog',
      name: 'bakercatalog',
      component: BakerCatalog
    },
    {
      path: '/bakerprofile',
      name: 'bakerprofile',
      component: BakerProfile
    },
    {
      path: '/bakercreate',
      name: 'bakercreate',
      component: BakerCreate
    },
    {
      path: '/bakerorder',
      name: 'bakerorder',
      component: BakerOrder
    },
    {
      path: '/orderdetail/:Pid',
      name: 'orderdetail',
      component: OrderDetail
    }    
  ]
})

