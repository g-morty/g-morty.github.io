<template>
  <div class="search-box">
    <el-input class="search-input search-input-with-list" @keypress.enter.native="handleSearch" v-model="searchUrl" autocomplete="on" suffix-icon="el-icon-search" placeholder="搜索" autofocus></el-input>
    <!-- <el-select class="search-input" v-model="searchUrl" placeholder="搜索" filterable remote :remote-method="searchByKeyWord" @keypress.native="handleSearch">
      <el-option v-for="item in searchList" :key="item.key" :value="item.value">
      </el-option>
    </el-select> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 输入框内输入的内容
      searchUrl: "",
      // 搜索结果
      searchList: [],
    };
  },
  methods: {
    async searchByKeyWord(keyWord) {
      this.searchUrl = keyWord;
      const searchRes = await this.$axios.get(
        `/baidu/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${keyWord}&req=2`
      );
      console.log(searchRes.data);
      if (searchRes.status === 200 && searchRes.statusText === "OK") {
        if (searchRes.data.g) {
          this.searchList = searchRes.data.g.map((item) => ({
            key: this.$nanoid(),
            value: item.q,
          }));
        } else {
          this.searchList = [
            {
              key: this.$nanoid(),
              value: keyWord,
            },
          ];
        }
      } else {
        this.searchList = [];
      }
    },
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
  },
};
</script>

<style scoped lang="less">
.search-box {
  display: flex;
  .search-input {
    width: 400px;
  }
}
.search-input-with-list{
  border-bottom: none;
  border-radius: 10px;
}
</style>