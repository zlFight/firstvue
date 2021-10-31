<template>
  <div class="main">
    <div v-if="isShowExit"
         class="header-close-btn"
         @click="exitFullScreen"
    >x
    </div>
    <el-tabs v-model="editableTabsValue"
             type="border-card"
             @tab-remove="removeTab"
             @tab-click="tabClick($event)"
    >
      <el-tab-pane
        :key="item.name"
        v-for="(item) in editableTabs"
        :label="item.title"
        :name="item.name"
        :closable="item.title != '首页'"
      >
      </el-tab-pane>
      <transition name="fade" mode="out-in">
        <keep-alive :include="includeKeepRoute">
          <router-view :key="editableTabsValue"></router-view>
        </keep-alive>
      </transition>
    </el-tabs>
    <div v-show="contextMenuVisible">
      <ul :style="{left:left+'px',top:top+'px'}"
          class="contextmenu"
          @mouseleave="contextMenuVisible = false">
        <li>
          <el-button type="text" @click="closeOtherTabs('own')" size="mini">关闭当前</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeOtherTabs('other')" size="mini">关闭其他</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeOtherTabs('all')" size="mini">关闭所有</el-button>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'MainContent',
    data() {
      return {
        contextMenuVisible: false,
        isShowExit: false,
        left: 0,
        top: 30,
        selectTabName: '',
        includeKeepRoute: 'overview'
      }
    },
    computed: {
      editableTabsValue: {
        get() {
          return this.$store.state.system.editableTabsValue
        },
        set(val) {
          this.setEditableTabsValue(val);
        }
      },
      editableTabs: {
        get() {
          return this.$store.state.system.editableTabs
        },
        set(val) {
          this.setEditableTabs(val);
        }
      },
    },
    watch: {
      editableTabs: {
        handler() {
          debugger;
          this.contextMenuVisible = false;
          let temKeepRoute = this.includeKeepRoute.split(",");
          if (temKeepRoute.indexOf(this.$route.name) == -1) {
            this.includeKeepRoute = this.includeKeepRoute == ''
              ? this.$route.name : this.includeKeepRoute + "," + this.$route.name;
          }
          this.$nextTick(() => {
            // 获取dom
            setTimeout(() => {
              let _vm = this;
              let tab_top_dom = document.getElementsByClassName("el-tabs__item is-top");
              _vm.editableTabs.forEach((item, index) => {
                tab_top_dom[index].oncontextmenu = function (e) {
                  if (item.title != '首页') {
                    _vm.openContextmenu(e, item.name);
                  }
                };
                tab_top_dom[index].ondblclick = function (e) {
                  _vm.tabDblClickHandle();
                };
              })
              if (_vm.$route.params.clickRouter != true) {
                this.onResize();
              }
            }, 100)

          })
        },
        immediate: true
      }
    },
    methods: {
      ...mapMutations(['setEditableTabs', 'setEditableTabsValue']),
      openContextmenu(e, tabName) {
        e.preventDefault(); //防止默认菜单弹出
        this.left = e.x;
        this.contextMenuVisible = true;
        this.selectTabName = tabName;
      },
      tabDblClickHandle() {
        document.getElementsByTagName("header")[0].style["display"] = "none";
        document.getElementsByTagName("aside")[0].style["display"] = "none";
        this.isShowExit = true;
        this.onResize();
      },
      exitFullScreen() {
        document.getElementsByTagName("header")[0].style["display"] = "block";
        document.getElementsByTagName("aside")[0].style["display"] = "block";
        this.isShowExit = false;
        this.onResize();
      },
      closeOtherTabs(type) {
        this.contextMenuVisible = false;
        if (type == 'own') {
          this.removeTab(this.selectTabName);
        } else if (type == 'other') {
          if (this.editableTabs.length == 1) {
            return;
          }
          this.editableTabs.forEach((item) => {
            if (item.name != this.selectTabName && item.name != '0') {
              this.removeTab(item.name);
            }
          })
        } else if (type == 'all') {
          this.editableTabs = [{
            content: '/',
            componentsName: 'Home',
            name: '0',
            title:'首页'
          }];
          this.includeKeepRoute = "HomePage";
          this.$router.push({path: "/homePage"});
        }
      },
      removeTab(targetName) {
        let _vm = this;
        let tabs = _vm.editableTabs;
        let activeName = _vm.editableTabsValue;
        if (activeName === targetName) {
          let title;
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
              title = tab.componentsName;
            }
          });
          let temKeepList = _vm.includeKeepRoute.split(",");
          if (temKeepList.indexOf(title) != -1) {
            temKeepList.splice(temKeepList.indexOf(title), 1);
          }
          _vm.includeKeepRoute = temKeepList.join(",")
        }
        _vm.editableTabsValue = activeName;
        _vm.editableTabs = tabs.filter(tab => tab.name !== targetName);
        if (tabs.length > 1) {
          tabs.forEach((tab) => {
            if (tab.name === activeName) {
              _vm.$router.push({path: tab.content});
            }
          });
        } else {
          this.includeKeepRoute = "HomePage";
          _vm.$router.push({path: "/homePage"});
        }
      },
      tabClick(targetName) {
        this.contextMenuVisible = false;
        let tabs = this.editableTabs;
        let activeName = targetName.$options.propsData.name;
        debugger;
        tabs.forEach((tab) => {
          if (tab.name === activeName) {
            this.$router.push({path: tab.content});
            return;
          }
        });
        this.onResize();
      }
    }
  }
</script>
<!--<style type="text/css" lang="scss">-->
<!--  @import "../../assets/css/yzw_style";-->
<!--  @import "../../assets/css/style";-->
<!--</style>-->
<style type="text/css" lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;

    ::v-deep .el-tabs {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      width: 100%;

      .el-tabs__nav-next, .el-tabs__nav-prev {
        line-height: 30px;
      }

      .el-tabs__content {
        flex-grow: 1;
        padding: 1px;
      }
    }

    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    ::v-deep .el-breadcrumb {
      margin-bottom: 10px;
    }

    /* 0727 新增*/
    ::v-deep .el-tabs__item {
      background: #F5F7FA;
      color: #606266;
      height: 30px;
      line-height: 30px;
    }

    ::v-deep .el-tabs--card > .el-tabs__header .el-tabs__item {
      border-left: 1px solid #DCDFE6;
      border-bottom: 1px solid #DCDFE6;
    }

    ::v-deep .el-tabs__nav .el-tabs__item.is-active,
    ::v-deep .el-tabs__nav .el-tabs__item:hover {
      color: #303133;
      background: #FFFFFF;
    }
  }

  /*调线预方案下拉框懒加载*/
  .select-custom {
    .el-select-dropdown__wrap {
      max-height: 269px;
    }
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .contextmenu {
    width: 100px;
    margin: 0;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  }

  .contextmenu li {
    margin: 0;
    padding: 0px 22px;

  }

  .contextmenu li:hover {
    background: #f2f2f2;
    cursor: pointer;
  }

  .contextmenu li button {
    color: #2c3e50;
  }

  .header-close-btn {
    background: #3b6df7;
    color: #ffffff;
    overflow: hidden;
    z-index: 9999;
    position: fixed;
    padding: 5px;
    text-align: center;
    width: 20px;
    height: 20px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    right: 1%;
    cursor: pointer;
  }
</style>

