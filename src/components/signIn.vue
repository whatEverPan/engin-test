<template>
  <!-- 全局背景 -->
  <div class="wrapper">
    <!-- 布局 -->
    <a-row type="flex" justify="center">
      <a-col :span="12" :offset="6">
        <div class="tag">
          <a-checkable-tag v-model="checked1" @change="handleChange">About</a-checkable-tag>
          <a-checkable-tag v-model="checked2" @change="handleChange">Stanford Students</a-checkable-tag>
          <a-checkable-tag v-model="checked3" @change="handleChange">Programs</a-checkable-tag>
          <a-checkable-tag v-model="checked1" @change="handleChange">News and Events</a-checkable-tag>
          <a-checkable-tag v-model="checked2" @change="handleChange">Resources</a-checkable-tag>
          <a-checkable-tag v-model="checked3" @change="handleChange">Field Notes</a-checkable-tag>
        </div>
        <!-- 登录框 -->
        <div class="frame">
          <p class="frame_Icon">
            <img src="../image/Group.png">
          </p>
          <p class="frame_p">
            <!-- <span>数宜信</span> -->
            <img src="../image/数宜信.png">
          </p>
          <p class="frame_n">供应链金融一站式服务</p>
          <div class="components-input-demo-presuffix-user">
              <a-input placeholder="手机号" class="username" v-model="userName" ref="userNameInput">
              <a-icon slot="prefix" type="user" />
              <a-tooltip slot="suffix" title="Extra information">
              <!-- <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" /> -->
              </a-tooltip>
              </a-input>
          </div>
          <div class="components-input-demo-presuffix-pass">
              <a-input-password placeholder="密码" class="password" v-model="passWord" ref="passWordInput">
              <a-icon slot="prefix" type="lock" />
              <a-tooltip slot="suffix" title="Extra information">
              <!-- <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" /> -->
              </a-tooltip>
              </a-input-password>
          </div>
          <div class="check"  style="text-align:left;margin-left:55px;"><input type="checkbox" name="checkInput"><span>记住密码</span></div>
          <!-- <input type="button" name="butt" value="登录" style="background-color:#FF9500;width:319px;height:40px;border:0;color:#FFFFFF;"/> -->
        <div>
            <div class="log"><button class="login" type="button">登录</button></div>
        </div>
        </div>
        <!-- footer -->
        
        <div class="footer">
          <p>联系我们：400-XXXX-XXXX</p>
          <p>重庆数宜信信用管理有限公司 版权所有 渝ICP备xxxx号 2019</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        passWord: '',
      };
    },
    methods: {
      emitEmpty() {
        this.$refs.userNameInput.focus();
        this.userName = '';
        this.passWord = '';
      },
    },
  };
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.wrapper {
  width: 1920px;
  height: 1080px;
  background-color: #eee;
}

.wrapper a-col{
  box-shadow: 10px 10px 5px #888888;
}

.tag{
  float: right;
  margin-top: 20px;
  white-space: nowrap;
}

.frame {
  margin-top: 315px;
  width: 429px;
  height: 467px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  text-align: center;
  box-shadow: 1px 5px 5px #888888;
}
.frame_Icon img{
  margin-top: 32px;
}

.frame_p img{
  margin-top: 25px;
}

.frame_n{
  font-size: 18px;
  margin-top: 16px;
}

.footer {
  position: absolute;
  margin-top: 200px;
  white-space: nowrap;
}

.footer p{
  font-size: 16px;
  text-align: center;
}

components-input-demo-presuffix-user{
  margin-top: 360px;
}

.username{
  width:319px;
  height:40px;
  margin-top: 36px;
}

.password{
  width:319px;
  height:40px;
  margin-top: 37px;
}

.check input,span{
  margin-top: 8px;
  font-size: 14px;
}

.login{
  width:319px;
  height:40px;
  background-color: #FF9500;
  color: #ffffff;
  margin-top: 13px;
  border:0px;
  border-radius: 5px;
}

.log :hover{
  background-color: #FFA500;
}



/* .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  } */
</style>


