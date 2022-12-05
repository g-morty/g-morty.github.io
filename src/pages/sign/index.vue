<template>
  <div class="sign-body" :style="`min-height: ${windowHeight}px`">
    <div class="sign-box">
      <div class="sign-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 页面高度
      windowHeight: 0,
    };
  },
  created() {
    this.windowHeight = window.innerHeight;
    window.onresize = () => (this.windowHeight = window.innerHeight);
  },
};
</script>

<style scoped lang="less">
.sign-body {
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #f1f5cd;
  }
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #c7fcfa;
  }
  .sign-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 500px;
    transform: translate(-50%, -50%);
    // background-color: aqua;
    // background-image: linear-gradient(to right, #c7fcfa 50%, #f1f5cd 50%);
    z-index: 10;
    border-radius: 30px;
    box-sizing: border-box;
    box-shadow: 0 0 100px 10px #d2d7d7;
    background-color: white;
    overflow: hidden;
    &::before{
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg,transparent,#01e6ff,#01e6ff);
      animation: animate 6s linear infinite;
      transform-origin: bottom right;
    }
    &::after{
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg,transparent,#01e6ff,#01e6ff);
      animation: animate 6s linear infinite;
      transform-origin: bottom right;
      animation-delay: -3s;
    }
    @keyframes animate {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
    }
    .sign-content{
      width: 90%;
      height: 90%;
      border-radius: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 20;
      background-color: black;
    }
  }
}
</style>