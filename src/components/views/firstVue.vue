<template>
    <div class = "first-app">
        {{ msg }}
        <div class = "hh">
        你想去首页嘛？
        </div>
        <confirm  text="注册" @message="getMessage"></confirm>
        <p><router-link to="/second">不想</router-link></p>
        <p><router-link to="/first/home">想</router-link></p>
        <router-view/>
    </div>
</template>
<script>
import Confirm from '../sub/Confirm'
export default {
    name: "First",
    components: {
        Confirm
    },
    data() {
        return {
            msg: "Welcome to FirstApp"
        };
    },
    methods:{
        getMessage(val,val2){
            alert(val);
            alert(val2);
        }
    }
};
</script>
<style lang = "less" scoped>
    .first-app{
        font-size: 30px;
        .link{
            a {
                color: rgb(86, 38, 197);
            }
        }
    }
    .hh{
        font-size: 30px;
        color: rgb(197, 38, 73);
    }
</style>
