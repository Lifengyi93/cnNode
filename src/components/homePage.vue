<template>
  <el-container style="padding:0 15%;background: #eee;">
    <el-main style="background: #fff;padding:2% 20px 5%;">
      <div class="topic" v-for="(item,index) in tableData" :key="index">
        <template>
          <el-tag size="mini" v-if="item.top" type="success">置顶</el-tag>
          <el-tag size="mini" v-if="item.top===false&&item.tab=='ask'" type="info">问答</el-tag>
          <el-tag size="mini" v-if="item.top===false&&item.tab=='share'" type="info">分享</el-tag>
        </template>
        <div class="item">
          <img :src="item.author.avatar_url"/>
          <p v-html="item.title"><router-link to="/content">{{item.title}}</router-link></p>
          <span class="count"><i>{{item.reply_count}}</i>/{{item.visit_count}}</span>
        </div>
      </div>
    </el-main>
    <el-aside style="width:30%;background: #fff;margin-left:20px;">

    </el-aside>
  </el-container>
</template>

<script>

  export default {
    data() {
      return {
        name: 'HelloWorld',
        tableData: []
      }
    },
    props: {
      msg: String
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        let that = this;
        that.$http.get('https://cnodejs.org/api/v1/topics').then(function (res) {
          that.tableData = res.data.data;
        })
      },
      handleClick(){
        this.$router.push({ path: 'content' });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .topic {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .item img {
    float: left;
    width: 23px;
    height: 23px;
  }

  .item p {
    width: 80%;
    font-size: 15px;
    margin-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item p:hover{
    text-decoration: underline;
    color: #2144ed;
    cursor: pointer;
  }

  .item {
    width: 80%;
    margin-left: 15px;
    border-bottom: 1px dotted #ccc;
    display: flex;
    align-items: center;
  }

  .count {
    font-size: 13px;
  }

  .count i {
    color: #9958cc;
    font-size: 14px;
  }

  a {
    color: #42b983;
  }
</style>
