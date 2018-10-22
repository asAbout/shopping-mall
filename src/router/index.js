import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../views/GoodsList'
import Cart from './../views/Cart'
import Address from './../views/Address'
import OrderConfrim from './../views/orderConfrim'
import OrderSuccess from './../views/orderSuccess'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'GoodList',
      component: GoodList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderConfrim',
      name: 'OrderConfrim',
      component: OrderConfrim
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    }
  ]
})
