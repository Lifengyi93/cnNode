<template>
  <div id="app">
    <el-container>
      <el-header style="background: #1f4992">
        <el-row style="height:60px" type="flex" align="middle">
          <el-col :span="4">
            <img src="./assets/cnodejs_light.svg" style="width:130px;" alt="cnnode">
          </el-col>
          <el-col :span="3">
            <el-input placeholder="请输入查找的内容" size="small" prefix-icon="el-icon-search"></el-input>
          </el-col>
          <el-col :span="4" class="nav">
            <a @click="toIndex">首页</a>
            <a @click="toGetStart">新手入门</a>
            <router-link to="/main">main</router-link>
          </el-col>
        </el-row>
      </el-header>
    </el-container>


    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods:{
    toIndex(){
      this.$router.push('/');
    },
    toGetStart(){
      this.$router.push('/getstart');
    }
  }
}
</script>

<style>
  html,body{
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .nav a{
    color:#fff;
    font-size:15px;
    cursor:pointer;
    display: inline-block;
    padding:0 10px;
  }
</style>
