<template>
    <div>
        <h1>添加商品</h1>
        <table cellpadding="10" cellspacing="0" border="1" align="center"> 
            <tr>
                <td>商品ID</td>
                <td><input type="text" v-model="id"></td>
            </tr>
            <tr>
                <td>商品名称</td>
                <td><input type="text" v-model="productName"></td>
            </tr>
            <tr>
                <td>商品价格</td>
                <td><input type="text" v-model="salePrice"></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td><input type="button" value="确认添加" @click="add"></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:'',
            productName:'',
            salePrice:0
        }
    },
    methods:{
        add(){
            let obj={
                id:this.id,
                productName:this.productName,
                salePrice:this.salePrice
            };
            //调用store中的 mutations中的添加商品方法
            //把obj对象以实参方式传入
            this.$store.commit('add_product_mutation',obj);
            //点击添加后，表格清空
            this.id='';
            this.productName='';
            this.salePrice=0;

            //点击添加后，跳到access1页面
            this.$router.push('/access1');
        }
    }
}
</script>