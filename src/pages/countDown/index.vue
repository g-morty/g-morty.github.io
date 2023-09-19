<template>
  <div class="box" :style="bgStyle">
    <div class="time" id="time" @click="showDraw" :style="txtStyle" ref="txt"></div>
    <el-drawer title="控制台" :visible.sync="isShowDraw" direction="btt" :size="isPhone?'60%':'40%'">
      <div class="control-partition" :class="{'control-partition-column': isPhone}">
        <div class="first-control-space " :class="isPhone?'control-border-bottom': 'control-border-right'">
          <div class="son-control">
            <div class="time-control-title">毕业时间：</div>
            <el-date-picker v-model="endTime" type="datetime" placeholder="毕业日期" :default-time="'18:00:00'" :editable="false" @change="changeTime"> </el-date-picker>
          </div>
          <div class="son-control">
            <div class="time-control-title">背景颜色：</div>
            <el-color-picker v-model="bgColor"></el-color-picker>
          </div>
          <div class="son-control">
            <div class="time-control-title">文字颜色：</div>
            <el-color-picker v-model="txtColor"></el-color-picker>
          </div>
        </div>
        <div class="first-control-space">
          <div class="son-control">
            <div class="time-control-title">文字位置（左右）：</div>
            <el-slider class="slider-class" v-model="txtLocationLR" :show-input="this.width>1000" :min="1" :show-tooltip="false"></el-slider>
          </div>
          <div class="son-control">
            <div class="time-control-title">文字位置（上下）：</div>
            <el-slider class="slider-class" v-model="txtLocationTB" :show-input="this.width>1000" :min="1" :show-tooltip="false"></el-slider>
          </div>
          <div class="son-control">
            <div class="time-control-title">文字大小：</div>
            <el-slider class="slider-class" v-model="txtSize" :show-input="this.width>1000" :min="12" :max="100" @input="getTxtRect" :show-tooltip="false"></el-slider>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>

</template>

<script>
export default {
  data() {
    return {
      height: 0,
      width: 0,
      isShowDraw: false,
      endTime: new Date(),
      bgColor: "#000000",
      txtColor: "#ffd700",
      txtLocationLR: 0,
      txtLocationTB: 0,
      txtDom: null,
      txtSize: 50,
    };
  },
  mounted() {
    this.height = window.innerHeight;
    const that = this;
    window.addEventListener("resize", function () {
      that.getTxtRect();
    });

    this.initTime();
    this.getTxtRect();
    this.txtLocationLR = 50;
    this.txtLocationTB = 50;
  },

  computed: {
    txtStyle() {
      const txtWidth = this.txtWidth + 5;
      const txtHeight = this.txtHeight + 50;
      const innerWidth = this.width;
      const innerHeight = this.height;
      console.log({ innerWidth });
      return {
        position: "absolute",
        color: this.txtColor,
        left: (this.txtLocationLR / 100) * (innerWidth - txtWidth) + "px",
        top: (this.txtLocationTB / 100) * (innerHeight - txtHeight) + "px",
        "font-size": this.txtSize + "px",
      };
    },
    bgStyle() {
      return {
        "background-color": this.bgColor,
        height: this.height + "px",
      };
    },
    isPhone(){
      if(this.width < 600){
        return true
      }
      return false
    }
  },
  methods: {
    initTime() {
      const defaultTime = "Mon Jan 01 2024 18:00:00 GMT+0800 (中国标准时间)";
      const endTime = localStorage.getItem("endTime");
      this.endTime = endTime || defaultTime;
      this.getTime();
      this.time = setInterval(() => {
        this.getTime();
      }, 1000);
    },
    changeTime(endTime) {
      console.log({ endTime });
      localStorage.setItem("endTime", endTime);
      this.endTime = endTime;
      this.getTime();
    },
    showDraw() {
      this.isShowDraw = true;
    },
    getTxtRect() {
      console.log("b");
      const txtDom = this.$refs.txt;
      this.txtWidth = txtDom.getBoundingClientRect().width;
      // console.log()
      this.txtHeight = txtDom.getBoundingClientRect().height;
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
    getTime() {
      const txtDom = this.$refs.txt;
      const endTime = new Date(this.endTime);
      const nowTime = new Date();
      const space = endTime.getTime() - nowTime.getTime();
      const DD = Math.floor(space / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
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
      // console.log(DD, HH, MM, SS);
      txtDom.innerText = `毕业倒计时${DD}天${HH}时${MM}分${SS}秒`;
      // txtDom.innerText = `${DD}天${HH}时${MM}分${SS}秒`;
    },
  },
  beforeDestroy() {
    clearInterval(this.time);
  },
};
</script>

<style>
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
}
.time {
  display: inline-block;
  text-align: center;
  /* white-space: nowrap; */
}
.center {
  /* display: flex; */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.control-partition {
  width: 100%;
  display: flex;
  /* align-content: center; */
  height: 100%;
  justify-content: flex-start;
}
.control-partition-column{
  flex-direction: column;
  font-size: 12px;
}
.first-control-space {
  /* flex: 1; */
  padding:0 30px;
  /* height: 90%; */
  width: 100%;
  box-sizing: border-box;
}
.control-border-right {
  border-right: 1px solid #f5f5f5;
}
.control-border-bottom {
  border-bottom: 1px solid #f5f5f5;
}
.son-control {
  padding:10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

}
.time-control-title {
  margin-right: 20px;
}
.slider-class {
  /* flex: 1; */
  width: 50%;
}
</style>