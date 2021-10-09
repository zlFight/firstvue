<template>
    <div class="confirm-button">
        <button @click="getButtonClick">{{text || '确认'}}</button>
    </div>
</template>

<script>
    export default {
        name :"confirm-button",
        props:["text"],
        data() {
            return {
                msg:'成功',
                val2:'这都信..首页都没有'
            };
        },
        methods: {
            //向父组件传值
            getButtonClick() {
                this.$emit("message",this.msg,this.val2);
            }
        }
};
</script>
<style/>
