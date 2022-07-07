<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input type="text" v-model="user.userName"  placeholder="请输入用户名"  @keyup.native="checkName()" ></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keyup.native="checkPassword"  @keydown.enter.native="doLogin"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 250px;margin-left:65px" type="primary" @click="doLogin">登录</el-button>
              <p><router-link to="/register" style="margin-left:260px">注册</router-link></p>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
import {login} from "@/axios/service/test/";

  export default {
    data() {
      return{
        user:{
          userName:'mrZhang',
          password:'nlfd1993627',
        }
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    methods:{
      checkName: function() {
      var value = this.user.userName;
      if(value.length > 8){
        alert('用户名长度不能大于8！');
        this.user.userName = value.substring(0,8);
      }
      var reg = /^\w+$/;
      if(value!=undefined && value !=''&&!reg.test(value)){
        alert('只能包含数字字母和下划线！')
      }
    },

    checkPassword:function() {
        var value = this.user.password;
        var reg = /^[0-9a-zA-Z_]{0,12}$/;
        if(value!='' && value!=undefined && !reg.test(value)){
          alert('密码长度小于13，只能包含数字字母下划线');
          this.user.password = "";
        }
    },

      doLogin(){
        // 校验
      var message;
      var userName = this.user.userName;
      if(userName = undefined || userName == ''){
        message ==undefined?message = '用户名不能为空！':message=message + '用户名不能为空！'
      }

      var password = this.user.password;
        var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
        if(!reg.test(password)){
          message ==undefined?message = '密码需要至少包含一个字母和数字':message=message + '密码需要至少包含一个字母和数字'
        }
      if(message != undefined){
        alert(message);
        return;
      }
        // 请求
        var reqData = {
          name :this.user.userName,
          password : this.user.password
        }
        login(reqData).then(response => {
                    if(response.data.result=='success'){
                      this.$cookie.set("token",response.data.token,1);
                      localStorage.setItem("userName",response.data.userName);
                      localStorage.setItem("isAdmin",response.data.isAdmin);
                      localStorage.setItem("token",response.data.token);
                      this.$router.push("/homePage");
                    }else{
                      this.$router.push("/login");
                    }
                })
      },
    }
  }
</script>
