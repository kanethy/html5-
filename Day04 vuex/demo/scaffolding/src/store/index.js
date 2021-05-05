import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'lulu',
    age:3,
    sex:true,
    products:[
      {
        id:1,
        productName:'商品1',
        salePrice:2398.99
      },
      {
        id:3,
        productName:'商品2',
        salePrice:4598.99
      },
      {
        id:5,
        productName:'商品3',
        salePrice:8364.98
      }
    ]
  },
  getters:{
    //获取商品的数量 -- 这些方法被认为是state的计算属性 
    //state参数自动代表当前store的state(其实名称可以为任意合法名称) 
    productNum(state){
      return state.products.length;
    }
  },
  mutations: {
    //增加年龄
    //state参数自动代表当前store的state(其实名称可以为任意合法名称) 
    add_age_mutation(state){
      state.age +=1;
    },
    minus_age_mutation(state){
      state.age -=1;
    },

    //添加商品
    //payload意为载荷，意思是参数，其类型可以是任何数据类型
    add_product_mutation(state,payload){
      //把对象添加到商品列表中
      state.products.push(payload);
    }
  },
  actions: {
    //context 参数自动代表当前的state，getters,mutations
    get_data_action(context){
      axios.get('http://127.0.0.1:3000/data').then(res=>{
        //将服务器返回的数据，添加到state的products数组中去
        //因为actions不能直接操作state，只能通过mutations操作state
        context.commit('add_product_mutation',res.data)
      });
    }
  },
  modules: {
  }
})
