<template>
  <el-container :style="`min-height: ${windowHeight}px`">
    <!-- header -->
    <el-header>
      <el-image class="logo" :src="require('@/assets/logo.png')"></el-image>
      <SearchBox />
      <div class="account-icon" @click="showDrawer"><i class="el-icon-s-fold"></i></div>
    </el-header>
    <!-- main -->
    <el-main>
      <div class="nav-box">
        <template v-for="(item,index) in navData">
          <div class="nav-line" :key="index">
            <div class="nav-title">{{item.navTitle}}</div>
            <a class="nav-item" v-for="(subItem,subIndex) in item.navList" :key="subIndex" :href="subItem.navLink" target="_blank">
              <el-image class="nav-icon" :lazy="true" :src="subItem.navIcon" fit="cover">
                <el-image class="nav-icon" slot="error" src="/favicon.ico" fit="cover"></el-image>
              </el-image>
              <el-link class="nav-link" :underline="false" target="_blank">{{subItem.navName}}</el-link>
            </a>
          </div>
          <el-divider></el-divider>
        </template>
      </div>
    </el-main>
    <!-- footer -->
    <el-footer height="40px">
      <div class="email-box" @click="saveEmail">
        <div class="email-title">email：</div>
        <div class="email-content">g_morty@qq.com</div>
      </div>
    </el-footer>
    <!-- drawer -->
    <el-drawer custom-class="drawer" :visible.sync="isShowDrawer" direction="rtl" :show-close="false" :withHeader="false">
      <div class="drawer-user-info">
        <div class="drawer-user-avatar"></div>
        <div class="drawer-user-name">Asa</div>
        <!-- <img :src="require('@/assets/avatar.jpeg')" alt=""> -->
      </div>
      <div class="drawer-nav-list">
        <div class="drawer-nav-item drawer-nav-item-select">
          导航
        </div>
        <div class="drawer-nav-item">
          笔记
        </div>
        <div class="drawer-nav-item">
          管理
        </div>
        <div class="drawer-nav-item">
          后台
        </div>
      </div>
    </el-drawer>
  </el-container>
</template>

<script>
import navData from "./navData";
import SearchBox from "./search.vue";
export default {
  data() {
    return {
      // 页面高度
      windowHeight: 0,
      // 导航数据
      navData,
      // 是否显示导航
      isShowNavigate: false,
      // 是否显示抽屉
      isShowDrawer: false,
    };
  },
  components: { SearchBox },
  created() {
    // 监听页面高度
    this.windowHeight = window.innerHeight;
    window.onresize = () => (this.windowHeight = window.innerHeight);
  },
  methods: {
    // 点击footer下的邮箱按钮
    saveEmail() {
      // 复制信息到邮箱
      // navigator.clipboard.writeText("g_morty@qq.com");
      try {
        // 用新的方法尝试复制
        navigator.clipboard.writeText("g_morty@qq.com");
      } catch (e) {
        // 用旧方法尝试复制
        const textArea = document.createElement("textarea");
        textArea.value = "g_morty@qq.com";
        // 使text area不在viewport，同时设置不可见
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

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
    // 展示抽屉
    showDrawer() {
      this.isShowDrawer = true;
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
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 10px;
    box-sizing: content-box;
    background-color: #edf5f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 200px;
    }
    .account-icon {
      width: 200px;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      box-sizing: border-box;
      i {
        color: @primary-color;
        font-size: 26px;
      }
    }
  }
  .el-main {
    background-color: @page-bg-color;
    padding-bottom: 20px;
    .nav-box {
      margin: 40px auto 0;
      width: 80%;
      .nav-line {
        display: flex;
        @nav-height: 30px;
        // 箭头标题
        .nav-title {
          @arrow-length: 20px;
          width: 70px;
          height: @nav-height;
          background-image: linear-gradient(to right, #59c8f7, @primary-color);
          color: white;
          font-size: 14px;
          box-sizing: border-box;
          line-height: @nav-height;
          text-align: right;
          position: relative;
          margin-right: 60px;
          padding-right: 4px;
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
            // border: 1px solid #409eff;
            background-color: #60626633;
          }
          .nav-link {
            margin-left: 6px;
          }
        }
      }
    }
  }
  .el-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e8ecf4;
    display: flex;
    border-top: 1px solid #90939944;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    height: 20px;
    .email-box {
      color: #606266;
      display: flex;
      cursor: pointer;
      &:hover {
        color: @primary-color;
      }
    }
  }
  .drawer {
    .drawer-user-info {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .drawer-user-avatar {
        width: 100px;
        height: 100px;
        background-image: url("@/assets/avatar.jpeg");
        background-position: -10px -20px;
        background-repeat: no-repeat;
        background-size: 120% 160%;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        filter: blur(0.5px);
        &:hover {
          filter: none;
        }
      }

      .drawer-user-name {
        margin-top: 8px;
      }
    }
    .drawer-nav-list {
      margin-top: 130px;
      .drawer-nav-item {
        height: 50px;
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
        font-size: 16px;
        color: #666666;
        margin: 10px 0;
        cursor: pointer;
        &:hover {
          background-color: #c2e8ed44;
        }
      }
      .drawer-nav-item-select {
        background-color: #c2e8ed44;
      }
    }
  }
}
</style>