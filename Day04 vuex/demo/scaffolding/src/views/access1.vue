<template>
    <div>
        <h1>访问Vuex的数据----页面1</h1>
        <!-- this 可加可不加，但是脚本里面必须加，不然报错 -->
        <p>姓名：{{$store.state.username}}</p>
        <p>年龄：{{this.$store.state.age}}</p>
        <p>性别：{{$store.state.sex?'男':'女'}}</p>
        <h2>商品列表的商品有{{this.$store.getters.productNum}}件，具体如下：</h2>
        <p v-for="(item,index) of this.$store.state.products" :key="index">商品的id：{{item.id}}；商品的名称：{{item.productName}}；商品的售价：￥{{item.salePrice}}</p>
    </div>
</template>