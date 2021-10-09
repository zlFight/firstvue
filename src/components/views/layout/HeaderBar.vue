<template>
  <el-row>
    <el-col :span="24">
      <el-image :src="require('../../../assets/img/new.png')" style="margin-left: -70%"></el-image>
      <div class="header-date">
        <span>{{weatherMap.date}} {{weatherMap.week}}</span>
        <el-image class="icon-weather" :src="weatherIcon"></el-image>
        <span>{{weatherMap.temperature}}℃ {{weatherMap.weather}} - {{weatherMap.winddirection}}风{{weatherMap.windpower}}级</span>
      </div>

      <span class="icon-admin">您好，{{nickName}}</span>
      <span class="icon-full-screen-cus">
        <i :class="fullScreenIcon" @click="fullScreen"></i>
      </span>
      <span class="icon-header-help" @click="userManager">用户管理</span>
      <span class="icon-header-quit" @click="casLogout">退出</span>
    </el-col>
  </el-row>
</template>
<script>
  import {getWearther} from "@/axios/service/test/";

  export default {
    name: 'HeaderBar',
    data() {
      return {
          nickName:localStorage.getItem("userName"),
          fullScreenIcon: "el-icon-full-screen",
          weatherMap: {},
          weatherIcon: "",
          weatherIconMap: {
            "有风": "_eg-qing.png",
            "平静": "_eg-qing.png",
            "微风": "_eg-qing.png",
            "和风": "_eg-qing.png",
            "清风": "_eg-qing.png",
            "热": "_eg-qing.png",
            "冷": "_eg-qing.png",
            "未知": "_eg-qing.png",
            "晴": "_eg-qing.png",
            "少云":"_eg-qingjianduoyun.png",
            "晴间多云": "_eg-qingjianduoyun.png",
            "多云": "_eg-qingjianduoyun.png",
            "阴": "_eg-yin.png",
            "阵雨": "_eg-yu.png",
            "雷阵雨": "_eg-yu.png",
            "强雷阵雨": "_eg-leiyu.png",
            "雷阵雨并伴有冰雹": "_eg-leiyu.png",
          },
      }
    },
    mounted() {
      this.getWearther();
      let _vm = this;
      window.addEventListener("fullscreenchange", function (e) {
        _vm.changeFullScreenIcon();
      })
      window.addEventListener("mozfullscreenchange", function (e) {
        _vm.changeFullScreenIcon();
      })
      window.addEventListener("webkitfullscreenchange", function (e) {
        _vm.changeFullScreenIcon();
      })
      window.addEventListener("msfullscreenchange", function (e) {
        _vm.changeFullScreenIcon();
      })
    },
    methods: {
      changeFullScreenIcon() {
        if(this.fullScreenIcon == "el-icon-aim") {
          this.fullScreenIcon = "el-icon-full-screen";
        }else{
          this.fullScreenIcon = "el-icon-aim";
        }
      },
      fullScreen() {
        if(this.fullScreenIcon == "el-icon-aim") {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
          else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          }
          else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
          else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }else {
          var el = document.documentElement;
          var rfs = el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
            || el.msRequestFullscreen;
          if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
          };
        }
        return;
      },
      getWearther() {
        getWearther().then((response) => {
          console.log(response);
          if(response.data.state == 1) {
            console.log(response.data.data.lives[0].weather);
            this.weatherMap = response.data.data.lives[0];
            this.weatherMap.date =response.data.data.date;
            this.weatherMap.week = response.data.data.week;
            this.weatherIcon = require('@/assets/img/weather/' + this.getWeatherPic(this.weatherMap.weather))
          }
        })
        setTimeout(() => {
          this.getWearther();
        }, 1800000)
      },
      getWeatherPic(weather) {
        var pic = "";
        var code = this.getWeatherCode(weather);
        switch (code) {
          case 0:
            pic = "_eg-qing.png";
            break;
          case 1:
            pic = "_eg-qingjianduoyun.png";
            break;
          case 2:
            pic = "_eg-yin.png";
            break;
          case 3:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 21:
          case 22:
          case 23:
            pic = "_eg-yu.png";
            break;
          case 4:
          case 5:
          case 24:
          case 25:
            pic = "_eg-leiyu.png";
            break;
          case 6:
          case 19:
            pic = "_eg-yujiaxue.png";
            break;
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 26:
          case 27:
          case 28:
            pic = "_eg-xue.png";
            break;
          case 18:
          case 35:
            pic = "_eg-wu.png";
            break;
          case 20:
          case 29:
          case 30:
          case 31:
          case 53:
            pic = "_eg-wumai.png";
            break;
          case 32:
          case 33:
            pic = "_eg-longjuanfeng.png";
            break;
        }
        return pic;
      },
      getWeatherCode(weather) {
        var code = -1;
        switch (weather) {
          case "有风":
          case "平静":
          case "微风":
          case "和风":
          case "清风":
          case "热":
          case "冷":
          case "未知":
          case "晴":
            code = 0;
            break;
          case "少云":
          case "晴间多云":
          case "多云":
            code = 1;
            break;
          case "阴":
            code = 2;
            break;
          case "阵雨":
            code = 3;
            break;
          case "雷阵雨":
          case "强雷阵雨":
            code = 4;
            break;
          case "雷阵雨并伴有冰雹":
            code = 5;
            break;
          case "雨夹雪":
            code = 6;
            break;
          case "雨":
          case "小雨":
          case "强阵雨":
          case "极端降雨":
          case "毛毛雨/细雨":
            code = 7;
            break;
          case "中雨":
            code = 8;
            break;
          case "大雨":
            code = 9;
            break;
          case "暴雨":
            code = 10;
            break;
          case "大暴雨":
            code = 11;
            break;
          case "特大暴雨":
            code = 12;
            break;
          case "阵雪":
            code = 13;
            break;
          case "雪":
          case "小雪":
            code = 14;
            break;
          case "中雪":
            code = 15;
            break;
          case "大雪":
            code = 16;
            break;
          case "暴雪":
            code = 17;
            break;
          case "雾":
          case "浓雾":
          case "强浓雾":
          case "大雾":
          case "特强浓雾":
            code = 18;
            break;
          case "冻雨":
          case "雨雪天气":
          case "阵雨夹雪":
            code = 19;
            break;
          case "沙尘暴":
            code = 20;
            break;
          case "小雨-中雨":
            code = 21;
            break;
          case "中雨-大雨":
            code = 22;
            break;
          case "大雨-暴雨":
            code = 23;
            break;
          case "暴雨-大暴雨":
            code = 24;
            break;
          case "大暴雨-特大暴雨":
            code = 25;
            break;
          case "小雪-中雪":
            code = 26;
            break;
          case "中雪-大雪":
            code = 27;
            break;
          case "大雪-暴雪":
            code = 28;
            break;
          case "浮尘":
            code = 29;
            break;
          case "扬沙":
            code = 30;
            break;
          case "强沙尘暴":
            code = 31;
            break;
          case "飓风":
            code = 32;
            break;
          case "强风/劲风":
          case "疾风":
          case "大风":
          case "烈风":
          case "风暴":
          case "热带风暴":
          case "狂爆风":
          case "龙卷风":
            code = 33;
            break;
          case "弱高吹雪":
            code = 34;
            break;
          case "轻雾":
            code = 35;
            break;
          case "霾":
          case "中度霾":
          case "重度霾":
          case "严重霾":
            code = 53;
            break;
        }
        return code;
      },

      casLogout(){
        let _this = this;
        localStorage.clear();
        console.log(localStorage);
        console.log(_this.$cookies);
        debugger;
        window.location.href = process.env.VUE_APP_URL+ 'login';
      },
      userManager(){
        console.log(222);
      }

    }


  }
</script>

<style>
  .header-span{
    font-size: 16px;
    font-weight: bold;
    color: #409EFF;
    cursor: pointer;
  }
  .header-span:hover{
    color: #0b00ff;
    font-size: 17px;
  }
  .icon-css{
    font-size:35px;
    padding-left:0px;
    text-align: left;
    cursor: pointer;
    line-height: 50px;
  }
  .header-css{
    font-size:15px;
    padding:5px;
    cursor: pointer;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-main{
    padding: 2px;
    /*line-height: 0px;*/
  }


  .el-header .el-image__inner{
    vertical-align: middle;
  }
  .icon-header-help{
    position: absolute;
    right: 80px;
    top: 0;
    background: url("../../../assets/img/header-help.png") left no-repeat;
    padding-left: 28px;
    cursor: pointer;
  }
  .icon-admin{
    position: absolute;
    right: 240px;
  }
  .icon-full-screen-cus{
    position: absolute;
    right: 185px;
    cursor: pointer;
    font-size: 20px;
  }
  .icon-full-screen-cus:hover{
    color: #00fefc;
    font-size: 21px;
  }
  .icon-header-quit{
    position: absolute;
    right:0;
    top: 0;
    background: url("../../../assets/img/header-quit.png") left no-repeat;
    padding-left: 28px;
    cursor: pointer;
  }
  .header-date{
    position: absolute;
    top: 0;
    left: 55%;
    display: flex;
    align-items: center;
    transform: translate(-50%,0);
  }
  .icon-weather{
    width: 26px;
    height: 26px;
    margin: 0 15px 0 15px;
  }
  .icon-weather .el-image__inner{
    vertical-align: top;
  }

</style>

