<template>
    <div>
      <div style="display: flex;justify-content: center;margin-top: 50px">
      <el-card style="width: 800px">
        <div slot="header" class="clearfix">
          <span>新用户注册</span>
        </div>
        <table align="center">
          <tr>
            <td>用户名</td>
            <td>
              <el-input type="text" v-model="user.userName" class="a" clearable placeholder="请输入用户名" @keyup.native="checkName()" @blur="checkNameExist" ></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="text"  v-model="user.password" clearable placeholder="请输入密码" @keyup.native="checkPassword"></el-input>
            </td>
          </tr>
          <tr>
            <td>手机号</td>
            <td>
              <el-input type="text"  v-model="user.telephoneNum" clearable placeholder="请输入手机号" ></el-input>
            </td>
          </tr>
          <tr>
            <td>邮箱</td>
            <td>
              <el-input type="text"  v-model="user.email" clearable placeholder="请输入邮箱" ></el-input>
            </td>
          </tr>
          <tr>
            <td>身份证号码</td>
            <td>
              <el-input type="text"  v-model="user.idCard" clearable placeholder="请输入身份证号码" ></el-input>
            </td>
          </tr>
          <tr>
            <!-- 占两列-->
            <td colspan="2">
              <el-button  style = "margin-left:90px" type="primary" plain @click="doRegister">注册</el-button>
              <el-button  style = "margin-left:70px" type="primary" plain @click="reset">重置</el-button>
            </td>
          </tr>
        </table>
      </el-card>

      </div>
    <el-form :model="user" :rules="rules">
      <el-form-item label="form表单.eg："></el-form-item>
        <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="user.userName"  clearable show-password placeholder="请输入用户名" @keyup.native="checkName()" ></el-input>
        </el-form-item>
    </el-form>

    </div>
</template>
<script>
import {register,checkNameExist} from "@/axios/service/test/";
export default {

  data() {
      return{
        user:{
          userName:'',
          password:'',
          telephoneNum:'',
          email:'',
          idCard:''
        },
        show: this.visible,
        rules:{
          userName:[{required: true,message:'请输入用户名',trigger:'blur'}]
        }
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

    checkNameExist: function(){
      var reqData = {
        name:this.user.userName
      }
      checkNameExist(reqData).then(response => {
          if(response.data){
            alert("userName has exist!")
            this.user.userName = '';
          }
      })
    },

    checkPassword:function() {
        var value = this.user.password;
        var reg = /^[0-9a-zA-Z_]{0,12}$/;
        if(value!='' && value!=undefined && !reg.test(value)){
          alert('密码长度小于13，只能包含数字字母下划线');
          this.user.password = "";
        }
    },
      doRegister:function(){
        var message,userInfo = this.user;
        if(userInfo.userName==undefined||userInfo.userName==''){
          message ==undefined?message = '用户名不能为空！':message=message + '用户名不能为空！'
        }
        if(userInfo.password==undefined||userInfo.password==''){
          message ==undefined?message = '密码不能为空！':message=message + '密码不能为空！'
        }else{
          var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
          if(!reg.test(userInfo.password)){
            message ==undefined?message = '密码需要至少包含一个字母和数字':message=message + '密码需要至少包含一个字母和数字'
          }
        }
        if(userInfo.telephoneNum==undefined||userInfo.telephoneNum==''){
          message+='电话号码不能为空！'
        }
        if(userInfo.email==undefined||userInfo.email==''){
          message+='邮箱不能为空！'
        }
        if(userInfo.idCard==undefined||userInfo.idCard==''){
          message+='身份证号码不能为空！'
        }
        if(message!=undefined){
          alert(message);
          return;
        }
        var reqData = {
          name :this.user.userName,
          password : this.user.password,
          telephoneNum : this.user.telephoneNum,
          email : this.user.email,
          idCard : this.user.idCard
        }
        // 新增用户
        register(reqData).then(response => {
                    console.log(111);
                }).catch(error => {
                  debugger;
                  if(error.response && error.response.data.status == 500){
                    alert(error.response.data.message);
                  }
                })
      },
      reset:function(){
        Object.keys(this.user).forEach(key=>{this.user[key]=''})
      }
    }
}
</script>

<style scoped>
.el-input{
  width:100%
  }
.a{
 width: 100%;

}
</style>
