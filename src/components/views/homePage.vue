<template>
  <el-container  style="height: 100%">
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container>
      <el-aside width="60px"><menu-bar></menu-bar></el-aside>
      <el-main>
        <main-content></main-content>
      </el-main>
    </el-container>
    <footer-bar></footer-bar>
  </el-container>
</template>

<script>
  import MenuBar from '../views/layout/MenuBar.vue'
  import HeaderBar from '../views/layout/HeaderBar.vue'
  import FooterBar from '../views/layout/FooterBar.vue'
  import MainContent from '../views/layout/MainContent.vue'

  export default {
    name: 'homePage',
    components: {
      MenuBar,
      HeaderBar,
      MainContent,
      FooterBar
    },
  }
</script>
<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #aaea98;
  }
  .bg-purple {
    background: #aaea98;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  a{
    text-decoration: none;
  }

  .el-header {
    background-color: #3B6DF7;
    color: #fff;
    line-height: 60px;
    height: 60px;
    padding: 0 30px;
    font-size: 14px;
  }
  .el-container{
    position: relative;
  }
  .el-aside{
    background-color: #F5F7FA;
    margin-right: 1px;
    padding-top:30px;
  }
  .el-main{
    padding: 0;
  }

</style>
