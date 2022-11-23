<template>
  <el-container :style="`height: ${windowHeight}px`">
    <!-- header -->
    <el-header>
      <div class="search-box">
        <el-input class="search-input" @keypress.enter.native="handleSearch" v-model="searchUrl" autocomplete="on" suffix-icon="el-icon-search" placeholder="搜索" autofocus></el-input>
      </div>
    </el-header>
    <!-- main -->
    <el-main>
      <div class="main-box">
        <ul>
          <li>
            <div class="nav-line">
              <div class="nav-title">直播</div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>

            </div>
            <el-divider></el-divider>
          </li>
          <li>
            <div class="nav-line">
              <div class="nav-title">直播</div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>

            </div>
            <el-divider></el-divider>
          </li>
          <li>
            <div class="nav-line">
              <div class="nav-title">直播</div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>

            </div>
            <el-divider></el-divider>
          </li>
          <li>
            <div class="nav-line">
              <div class="nav-title">直播</div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙一号</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>
              <div class="nav-item">
                <el-image class="nav-icon" src="http://www.bilibili.com/favicon.ico"></el-image>
                <el-link class="nav-link" :underline="false" target="_blank">虎牙</el-link>
              </div>

            </div>
            <el-divider></el-divider>
          </li>
        </ul>
      </div>
    </el-main>
    <!-- footer -->
    <el-footer height="40px">
      <div class="email-box" @click="saveEmail">
        <div class="email-title">email：</div>
        <div class="email-content">g_morty@qq.com</div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      searchUrl: "",
      msg: "qwe",
      url: "https://www.baidu.com/s?ie=UTF-8&wd=asfs",
      windowHeight: 44,
    };
  },
  created() {
    this.windowHeight = window.innerHeight;
    window.onresize = () => (this.windowHeight = window.innerHeight);
  },
  methods: {
    // 搜索框回车
    handleSearch() {
      const searchUrl = this.searchUrl;
      // 域名正则列表
      const regList = [
        // 域名，非网址，不包含协议
        /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,4})(:\d{1,5}\/?)*$/,
        // 带端口网址
        /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,
        // 网址url
        /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
      ];
      // 是否是域名
      const isUrl = regList.some((item) => item.test(searchUrl));
      // 如果是域名跳转至相应网址
      if (isUrl) {
        // 是否携带协议头
        if (regList[0].test(searchUrl)) {
          window.open("http://" + searchUrl);
        } else {
          window.open(searchUrl);
        }
      }
      // 如果不是域名，打开百度搜索
      else {
        searchUrl.trim() !== "" &&
          window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + searchUrl);
      }
      // 清空输入框
      this.searchUrl = "";
    },
    // 点击footer下的邮箱按钮
    saveEmail() {
      // 复制信息到邮箱
      navigator.clipboard.writeText("g_morty@qq.com");
      // 提示成功
      this.$notify({
        title: "email",
        message: "已复制到剪切板",
        position: "bottom-right",
        type: "success",
        duration: "2000",
        offset: 30,
      });
    },
  },
};
</script>

<style scoped lang="less">
@primary-color: #409eff;
@page-bg-color: #fafafa;
.el-container {
  overflow: hidden;
  background-color: @page-bg-color;
  .el-header {
    padding-top: 20px;
    padding-bottom: 10px;
    box-sizing: content-box;
    background-color: rgb(237, 245, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    .search-box {
      display: flex;
      .search-input {
        width: 400px;
      }
    }
  }
  .el-main {
    background-color: @page-bg-color;
    .main-box {
      margin: 40px auto 0;
      width: 80%;
      .nav-line {
        display: flex;
        @nav-height: 30px;
        // 箭头标题
        .nav-title {
          @arrow-length: 20px;
          width: 60px;
          height: @nav-height;
          background-color: @primary-color;
          color: white;
          font-size: 14px;
          box-sizing: border-box;
          line-height: @nav-height;
          text-align: right;
          position: relative;
          margin-right: 60px;
          &:before {
            content: " ";
            width: 0px;
            height: 0px;
            position: absolute;
            left: 0;
            top: 0;
            border-left: @arrow-length solid @page-bg-color;
            border-top: (@nav-height / 2) solid transparent;
            border-bottom: (@nav-height / 2) solid transparent;
          }
          &:after {
            content: " ";
            width: 0px;
            height: 0px;
            position: absolute;
            right: -@arrow-length;
            top: 0;
            border-left: @arrow-length solid @primary-color;
            border-top: (@nav-height / 2) solid transparent;
            border-bottom: (@nav-height / 2) solid transparent;
          }
        }
        .nav-item {
          display: flex;
          height: @nav-height;
          align-items: center;
          margin-right: 20px;
          .nav-icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            overflow: hidden;
          }
          .nav-link {
            margin-left: 6px;
          }
        }
      }
    }
  }
  .el-footer {
    background-color: #90939922;
    display: flex;
    border-top: 1px solid #90939944;
    justify-content: end;
    align-items: center;
    font-size: 14px;
    .email-box {
      color: #606266;
      display: flex;
      cursor: pointer;
      &:hover {
        color: @primary-color;
      }
    }
  }
}
</style>