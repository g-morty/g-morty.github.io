<template>
  <div class="search-box">
    <el-input class="search-input" @blur="isSearchFocus = false" @focus="isSearchFocus = true" @input="searchByKeyWord" @keypress.enter.native="handleSearch" v-model="searchUrl" autocomplete="on" suffix-icon="el-icon-search" placeholder="搜索" :autofocus="isSearchFocus">
    </el-input>
    <!-- 对样式修饰一下 -->
    <div class="search-list" v-show="isSearchFocus">
      <div class="search-item" v-for="item in searchList" :key="item.key" @mousedown="addKeyWordToSearch(item.value)">
        {{item.value}}
      </div>
    </div>
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
      // 搜索框是否是选中状态
      isSearchFocus: false,
      //
    };
  },
  methods: {
    // 搜索框内容改变时，获取内容补充
    async searchByKeyWord(keyWord) {
      // 借助百度api，根据关键字获取内容补充列表
      const searchRes = await this.$axios.get(
        `/baidu/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${keyWord}&req=2`
      );
      // 如果顺利拿到数据(状态为200、状态描述为OK、数据不为空、输入框不为空)
      if (
        searchRes.status === 200 &&
        searchRes.statusText === "OK" &&
        !!searchRes.data.g &&
        !!this.searchUrl
      ) {
        return (this.searchList = searchRes.data.g.map((item) => ({
          key: this.$nanoid(),
          value: item.q,
        })));
      }
      this.searchList = [];
    },

    // 添加关键字到搜索框
    addKeyWordToSearch(choseOption) {
      // 添加点击到的选项到搜索框
      this.searchUrl = choseOption;
      // 这里先执行，然后执行blur，所以还是失去了焦点，那我参考b站，点击直接跳转呢？
      this.handleSearch();
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
  // background-color: red;
  position: relative;
  .search-input {
    width: 500px;
    margin: 8px;
    position: relative;
    z-index: 10;
  }
  .search-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    z-index: 5;
    border-radius: 8px;
    padding-top: 60px;
    background-color: #fefefe;
    border: 1px solid #f8eaea;

    .search-item {
      height: 30px;
      line-height: 30px;
      background-color: #fefefe;
      width: 100%;
      padding: 0 20px;
      margin: 5px 0;
      box-sizing: border-box;
      color: #222;
      &:hover {
        background-color: #bfe8f544;
        cursor: pointer;
      }
      &:last-child {
        margin-bottom: 13px;
      }
    }
  }
}
.search-input-with-list {
  border-bottom: none;
  border-radius: 10px;
}
</style>