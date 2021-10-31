<template>
  <div>
      <el-table
        :data="tableData"
        border
        style="width: 80%;margin-top:5%;margin-left: 10%;">
        <el-table-column
          prop="password"
          label="password"
          width="150"
          v-if="false">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="telephoneNum"
          label="手机号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="200">
        </el-table-column>
        <el-table-column
          prop="idCard"
          label="身份证号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="isAdmin"
          label="是否为管理员"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="setAdministrator(scope.row)">设为管理员</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>

</template>

<script>
  import {queryUserInfo,deleteUser,setAdmin} from "@/axios/service/test/";

  export default {
    methods: {
      handleClick(row) {
        console.log(row.id);
        var reqData = {
          id:row.id
        }
        deleteUser(reqData).then(response=>{
          if (response.data.state == 1) {
            this.queryUserInfo();
          }
        });
      },
      setAdministrator(row){
        if(row.isAdmin =='Y'){
          alert('当前用户已是管理员！');
          return;
        }
        var reqData = {
          id:row.id
        }
        setAdmin(reqData).then(response=>{
          if (response.data.state == 1) {
            this.queryUserInfo();
          }
        });
      },
      queryUserInfo() {
        console.log(111);
        queryUserInfo().then(response => {
          if (response.data.state == 1) {
            console.log(response.data);
            this.tableData = response.data.data;
          }
        })
      }
    },
    mounted() {
      this.queryUserInfo();
    },

    data() {
      return {
        tableData:[],
      }
    }
  }
</script>
