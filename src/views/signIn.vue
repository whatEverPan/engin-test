<template>
  <!-- 全局背景 -->
  <div class="wrapper">
    <!-- 布局 -->
    <div class="wrapper_flex">
      <!-- 登录框 -->
      <div class="frame">
        <div class="frame_Icon">
          <img src="../assets/Result_images/Group.png">
        </div>
        <div class="frame_p">
          <img src="../assets/Result_images/数宜信.png">
        </div>
        <div class="frame_n">供应链金融一站式服务</div>
        <div class="components-input-demo-presuffix-user">
          <a-input placeholder="手机号" class="username" v-model="userName" ref="userNameInput">
            <a-icon slot="prefix" type="user"/>
            <a-tooltip slot="suffix" title="Extra information">
              <!-- <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" /> -->
            </a-tooltip>
          </a-input>
        </div>
        <div class="components-input-demo-presuffix-pass">
          <a-input-password
            placeholder="密码"
            class="password"
            v-model="passWord"
            ref="passWordInput"
          >
            <a-icon slot="prefix" type="lock"/>
            <a-tooltip slot="suffix" title="Extra information">
              <!-- <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" /> -->
            </a-tooltip>
          </a-input-password>
        </div>
        <div class="check">
          <input
            type="checkbox"
            name="checkInput"
            style="width:14px;height:14px;vertical-align:middle;cursor: pointer;"
          >
          <span style="font-size: 14px;color: #000000 45%;">&nbsp;&nbsp;记住密码</span>
        </div>

        <button class="login" type="button">登 录</button>
      </div>
      <!-- footer -->
      <div class="footer">
        <p>联系我们：400-XXXX-XXXX</p>
        <p>重庆数宜信信用管理有限公司 版权所有 渝ICP备xxxx号 2019</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      passWord: ""
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
      this.passWord = "";
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 1920px;
  height: 1080px;
  background-color: #eee;
  .wrapper_flex {
    height: 100%;
    position: relative;
    .frame {
      width: 429px;
      height: 467px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      text-align: center;
      box-shadow: 1px 5px 5px #888888;
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      .frame_Icon img {
        margin-top: 32px;
      }
      .frame_p img {
        margin-top: 25px;
      }
      .frame_n {
        color: #333 100%;
        font-size: 18px;
        margin-top: 16px;
      }
      .username {
        width: 319px;
        height: 40px;
        margin-top: 36px;
      }
      .password {
        width: 319px;
        height: 40px;
        margin-top: 37px;
      }
      .check {
        height: 30px;
        line-height: 30px;
        margin-left: 55px;
        text-align: left;
      }

      .login {
        color: #fff;
        margin-bottom: 40px;
        width: 319px;
        height: 40px;
        background-color: #ff9500;
        font-size: 16px;
        border: 0px;
        border-radius: 5px;
      }
    }
  }
  .footer {
    width: 100%;
    height: 97px;
    position: absolute;
    margin: auto;
    bottom: 0;
    p {
      margin: 0;
      padding: 0;
      font-size: 16px;
      text-align: center;
      color: #000 65%;
      margin-bottom: 10px;
    }
  }
}
</style>


