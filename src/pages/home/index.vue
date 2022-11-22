<template>
  <div>
    <el-container>
      <el-header>
        <div class="search-box">
          <el-input></el-input>
          <el-button>搜索</el-button>
        </div>
      </el-header>
      <el-main>
        <el-button type="primary" round>
          <img src="http://www.bilibili.com/favicon.ico"></img>
          <span>{{msg}}</span>
        </el-button>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:'qwe',
      url: "https://www.baidu.com/s?ie=UTF-8&wd=asfs"
    }
  }
};
</script>

<style scoped lang="less">
  .el-header{
    padding-top: 20px;
    box-sizing: content-box;
    background-color: rgb(237, 245, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    .search-box{
      display: flex;
    }
  }

</style>