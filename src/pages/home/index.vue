<template>
  <el-container :style="`min-height: ${windowHeight}px`">
    <el-header>
      <el-image class="logo" :src="require('@/assets/logo.png')"></el-image>
      <SearchBox />
      <div class="account-icon" @click="showDrawer"><i class="el-icon-s-fold"></i></div>
    </el-header>
    <!-- <Navigate/> -->
    <router-view/>
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
import SearchBox from "./search.vue";
export default {
  data() {
    return {
      // 是否显示抽屉
      isShowDrawer: false,
      // 页面高度
      windowHeight: 0,
    };
  },
  components: { SearchBox },
   created() {
    // 监听页面高度
    this.windowHeight = window.innerHeight;
    window.onresize = () => (this.windowHeight = window.innerHeight);
  },
  methods: {
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
  // overflow: hidden;
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