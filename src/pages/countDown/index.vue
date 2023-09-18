<template>
  <div class="time" id="time" :style="{'height': height + 'px'}"></div>
</template>

<script>
export default {
  data(){
    return{
      height: 500
    }
  },
  mounted() {
    // this.height = document.documentElement.scrollHeight
    this.height = window.innerHeight
    // console.log(window.innerHeight,document.documentElement.scrollHeight,document.documentElement.screen)
    this.time = setInterval(() => {
      const dom = document.getElementById("time");
      const endTime = new Date("Mon Sep 20 2023 18:00:00");
      const nowTime = new Date();
      const space = endTime.getTime() - nowTime.getTime();
      const DD = Math.floor(space / (1000 * 60 * 60 * 24));
      const HH = Math.floor((space % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const MM = Math.floor(
        ((space % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60)
      )
        .toString()
        .padStart(2, "0");
      const SS = Math.floor(
        (((space % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) /
          1000
      )
        .toString()
        .padStart(2, "0");
      console.log(DD, HH, MM, SS);
      dom.innerText = `毕业倒计时${DD}天${HH}时${MM}分${SS}秒`;
    }, 1000);
  },
  beforeDestroy(){
    clearInterval(this.time)
  }
};
</script>

<style>
.time {
  padding-top: 300px;
  text-align: center;
  color: gold;
  font-size: 50px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>