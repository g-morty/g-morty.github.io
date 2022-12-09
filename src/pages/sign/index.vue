<template>
  <div class="sign-body" :style="`min-height: ${windowHeight}px`">
    <div class="sign-box">
      <div class="sign-content">
        <div class="sign-slogan">
          世事如苍狗
          <br>
          生命终凋零
          <br>
          但在无常中
          <br>
          去追求永恒与绚烂的生命伸张
          <br>
          却保存在我们的文化记忆里
          <br>
          极目不见故土
          <br>
          抬头却是同一片星空
          <br>
          我们哭着降临世界
          <br>
          确可以笑着走向永恒
        </div>
        <div class="form-box">
          <div class="input-box">
            <input type="text" required="requird" v-model.trim="account.name" />
            <span>用户名</span>
            <i></i>
          </div>
          <div class="input-box">
            <input type="password" required="requird" v-model="account.password" />
            <span>密码</span>
            <i></i>
          </div>
          <button class="submit-btn" @click="login">登录</button>
          <div class="reg-or-forget">
            <div class="forget-password">注册</div>
            <div class="forget-password">忘记密码</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../api/account";
export default {
  data() {
    return {
      // 页面高度
      windowHeight: 0,
      account: {
        name: "",
        password: "",
      },
    };
  },
  created() {
    this.windowHeight = window.innerHeight;
    window.onresize = () => (this.windowHeight = window.innerHeight);
  },
  methods: {
    // 登录
    async login() {
      // 如果用户名非法
      if (!/(^[a-zA-Z\S0-9]{2,12}$)/.test(this.account.name)) {
        return this.$message({
          message: "注意，用户名应为2-12字符",
          type: "warning",
        });
      }
      // 如果密码非法
      if (!/(^[a-zA-Z\S0-9]{6,12}$)/.test(this.account.password)) {
        return this.$message({
          message: "注意，密码应为2-12字符",
          type: "warning",
        });
      }
      // 请求登录接口
      const loginRes = await login({ name:this.account.name, password:this.account.password });
      
      console.log(loginRes);
    },
  },
};
</script>

<style scoped lang="less">
.sign-body {
  @sign-left-color: #777a4b;
  @sign-right-color: #71c8cb;
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: @sign-left-color;
  }
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: @sign-right-color;
  }
  .sign-box {
    @sign-width: 800px;
    @sign-height: 500px;
    @sign-border-radius: 30px;
    @sign-border-color-one: #e6e30a;
    @sign-border-color-two: #01e6ff;
    position: absolute;
    top: 50%;
    left: 50%;
    width: @sign-width;
    height: @sign-height;
    transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: @sign-border-radius;
    box-sizing: border-box;
    // box-shadow: 0 0 100px 10px #d2d7d7;
    background-color: white;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        0deg,
        transparent,
        @sign-border-color-two,
        @sign-border-color-two
      );
      animation: animate 6s linear infinite;
      transform-origin: bottom right;
    }
    &::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        0deg,
        transparent,
        @sign-border-color-one,
        @sign-border-color-one
      );
      animation: animate 6s linear infinite;
      transform-origin: bottom right;
      animation-delay: -3s;
    }
    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .sign-content {
      width: @sign-width - 10;
      height: @sign-height - 10;
      background-image: linear-gradient(
        to right,
        @sign-right-color 50%,
        @sign-left-color 50%
      );
      box-sizing: border-box;
      position: absolute;
      top: 5px;
      left: 5px;
      z-index: 30;
      border-radius: @sign-border-radius;
      display: flex;
      .sign-slogan {
        flex: 1;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 45px;
        color: #d8e171;
        text-align: center;
      }
      .form-box {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        .input-box {
          width: 320px;
          position: relative;
          margin-top: 30px;
          input {
            background: transparent;
            border: none;
            outline: none;
            box-shadow: none;
            color: #7f7b0e;
            font-size: 1em;
            letter-spacing: 0.05em;
            width: 100%;
            padding: 20px 10px 10px;
            position: relative;
            z-index: 30;
          }
          span {
            position: absolute;
            left: 0;
            top: 0;
            padding: 20px 10px 10px;
            font-size: 20px;
            color: #94eeeb;
            pointer-events: none;
            letter-spacing: 0.05em;
            transition: 0.5s;
            font-size: 1em;
          }
          input:valid ~ span,
          input:focus ~ span {
            color: #94eeeb99;
            transform: translate(-10px, -40px);
            font-size: 15px;
          }
          i {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #94eeeb;
            border-radius: 4px;
            transition: 0.5s;
            pointer-events: none;
            z-index: 10;
            overflow: hidden;
          }
          input:valid ~ i,
          input:focus ~ i {
            height: 44px;
          }
        }
        .submit-btn {
          margin-top: 50px;
          width: 320px;
          height: 50px;
          border: 3px solid #94eeeb;
          background-color: transparent;
          border-radius: 8px;
          line-height: 47px;
          box-sizing: border-box;
          font-size: 16px;
          color: #94eeeb;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            background-color: #94eeeb44;
          }
        }
        .reg-or-forget {
          margin-top: 18px;
          display: flex;
          width: 320px;
          justify-content: flex-end;
          // width: 100%;
        }
        .forget-password {
          font-size: 12px;
          cursor: pointer;
          color: #01e6ff99;
          text-align: right;
          text-decoration: underline;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>