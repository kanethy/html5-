<template>
    <div>
        <p><button @click="handle">获取服务器数据</button></p>
        <h2>商品列表的商品有{{this.$store.getters.productNum}}件，具体如下：</h2>
        <p v-for="(item,index) of this.$store.state.products" :key="index">商品的id：{{item.id}}；商品的名称：{{item.productName}}；商品的售价：￥{{item.salePrice}}</p>
    </div>
</template>

<script>
export default {
    methods:{
        handle(){
            //如果调用actions中的方法
            this.$store.dispatch('get_data_action');

        }
    }
}
</script>
