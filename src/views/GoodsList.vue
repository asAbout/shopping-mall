<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="bread">Goods</span>
    </nav-bread>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-arrow-short" viewBox="0 0 25 32">
          <title>arrow-short</title>
          <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
        </symbol>
        <symbol id="icon-status-ok" viewBox="0 0 32 32">
          <title>status-ok</title>
          <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
          <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
        </symbol>
        <symbol id="icon-cart" viewBox="0 0 38 32">
          <title>cart</title>
          <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
          <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
          <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
        </symbol>
      </defs>
    </svg>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="setSortFlag" v-bind:class="{'sort-up': sortFlag}">
            Price
            <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="setFilterShow">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show': FilterShow}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" :class="{cur: priceChecked == 'all'}" @click="priceChange('all')">All</a></dd>
              <dd v-for="(price, index) in Prices" @click="priceChange(index)">
                <a href="javascript:void(0)" :class="{cur: priceChecked == index}" @click="priceChecked == index">{{price.priceOld | currency('$')}} - {{price.priceNew | currency('$')}}</a>
              </dd>
            </dl>
          </div>
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="goods in goodsList">
                  <div class="pic">
                    <a href="#"><img v-bind:src="'/static/' + goods.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{goods.productName}}</div>
                    <div class="price">{{goods.salePrice | currency('$')}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addcart(goods.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                <img src="./../assets/loading-spinning-bubbles.svg" style="display:block;margin:auto;" v-show="loading">
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="mdShow" @click="FilterClose"></div>
      <model v-bind:mdshow="mdshow" v-on:close="closeModel">
        <p slot="message">
          请先登录，否则无法加入购物车
        </p>
        <div slot="btnGroup">
          <a href="javascript:;" class="btn btn--m" @click="closeModel" style="margin-left:120px; width: 200px;">关闭</a>
        </div>
      </model>
      <model v-bind:mdshow="showcart" v-on:close="closeModel">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成功!</span>
        </p>
        <div slot="btnGroup">
          <a href="javascript:;" class="btn btn--m" @click="closeModel" style="margin-right: 100px; margin-left:50px">继续购物</a>
          <router-link href="javascript:;" class="btn btn--m btn--red" to="/cart">查看购物车列表</router-link>
        </div>
      </model>
      <nav-footer></nav-footer>
    </div>
</template>
<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
import NavBread from './../components/NavBread'
import Model from './../components/Model'
import axios from 'axios'
export default {
  data() {
    return {
      text: '',
      Prices: [{
          priceOld: '0.00',
          priceNew: '100.00'
        },
        {
          priceOld: '100.00',
          priceNew: '500.00'
        },
        {
          priceOld: '500.00',
          priceNew: '1000.00'
        },
        {
          priceOld: '1000.00',
          priceNew: '5000.00'
        },
      ],
      priceChecked: 'all',
      FilterShow: false,
      mdShow: false,
      goodsList: [],
      sortFlag: true,
      page: 1,
      pageSize: 8,
      busy: true,
      loading: false,
      mdshow: false,
      showcart: false
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Model
  },
  mounted() {
    this.getGoodsList()
  },
  methods: {
    setFilterShow() {
      this.FilterShow = true
      this.mdShow = true
    },
    FilterClose() {
      this.FilterShow = false
      this.mdShow = false
    },
    priceChange(index) {
      this.priceChecked = index
      this.page = 1
      this.getGoodsList()
    },
    getGoodsList(flag) {
      this.loading = true
      let param = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceChecked
      }
      axios.get('/goods/list', {
        params: param
      }).then((res) => {
        let result = res.data
        this.loading = false
        if (result.status === '0') {
          if (flag) {
            this.goodsList = this.goodsList.concat(result.result.list)

            if (result.result.list.length < 8) {
              this.busy = true
            } else {
              this.busy = false
            }
          } else {
            this.goodsList = result.result.list
            this.busy = false
          }
        } else {
          this.goodsList = []
        }
      })
    },
    setSortFlag() {
      this.sortFlag = !this.sortFlag
      this.page = 1
      this.getGoodsList()
    },
    loadMore() {
      this.busy = true
      setTimeout(() => {
        this.page++
        this.getGoodsList(true)
      }, 500);
    },
    addcart(productId) {
      axios.post('/goods/addcart', {
        productId
      }).then((res) => {
        let result = res.data
        if (result.status == '0') {
          this.showcart = true
          this.$store.commit('updateCartCount', 1)
        } else {
          this.mdshow = true
        }
      })
    },
    closeModel() {
      this.mdshow = false
      this.showcart = false
    }
  }
}

</script>
<style>
.sort-up {
  transform: rotate(180deg);
  transition: all .3 ease-out;
}
</style>
