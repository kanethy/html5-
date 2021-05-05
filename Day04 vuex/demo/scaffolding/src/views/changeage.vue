<template>
    <div>
        <input type="button" value="增加年龄" @click="add">
        <input type="button" value="减小年龄" @click="minus">
        <h1>现在的年龄是：{{this.$store.state.age}}</h1>
    </div>

</template>

<script>
export default {
    methods:{
        add(){
            //增加年龄
            this.$store.commit('add_age_mutation');
        },
         minus(){
            //增加年龄
            this.$store.commit('minus_age_mutation');
        }
    }
}
</script>
