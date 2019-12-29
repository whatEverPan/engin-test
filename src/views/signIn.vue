<template>
  <!-- 全局背景 -->
  <div class="wrapper">
    <!-- 布局 -->
    <div class="wrapper_flex">
      <!-- 登录框 -->
      <div class="frame">
        <p class="frame_Icon">
          <img src="../assets/Result_images/Group.png">
        </p>
        <p class="frame_p">
          <!-- <span>数宜信</span> -->
          <img src="../assets/Result_images/数宜信.png">
        </p>
        <p class="frame_n">供应链金融一站式服务</p>
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
        <div class="check" style="text-align:left;margin-left:55px;">
          <input type="checkbox" name="checkInput">
          <span>记住密码</span>
        </div>
        <!-- <input type="button" name="butt" value="登录" style="background-color:#FF9500;width:319px;height:40px;border:0;color:#FFFFFF;"/> -->
        <div>
          <div class="log">
            <button class="login" type="button">登录</button>
          </div>
        </div>
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
p {
  margin: 0;
  padding: 0;
}
.wrapper {
  width: 1920px;
  height: 1080px;
  background-color: #eee;
  .wrapper_flex {
    height: 100%;
    position: relative;
    .frame {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -234px;
      margin-left: -215px;
      width: 429px;
      height: 467px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      text-align: center;
      box-shadow: 1px 5px 5px #888888;
      .frame_Icon img {
        margin-top: 32px;
      }
      .frame_p img {
        margin-top: 25px;
      }
      .frame_n {
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
      .check input,
      span {
        margin-top: 8px;
        font-size: 14px;
      }
      .login {
        width: 319px;
        height: 40px;
        background-color: #ff9500;
        color: #ffffff;
        margin-top: 13px;
        border: 0px;
        border-radius: 5px;
      }
      .log :hover {
        background-color: #ffa500;
      }
    }
  }
  .footer {
    background-color: #ccc;
    width: 480px;
    height: 80px;
    position: absolute;
    left: 50%;
    margin-left: -240px;
    white-space: nowrap;
    p {
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>


