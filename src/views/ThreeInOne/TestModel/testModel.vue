<template>
  <div class="testModel">
    <!-- 表头header -->
    <div class="header">
      <a-row type="flex" justify="start">
        <a-col :span="24">
          <span>测试模型</span>
        </a-col>
      </a-row>
    </div>
    <!-- 内容板块 -->
    <div class="content">
      <!-- 菜单栏menu/button -->
      <div class="menu">
        <a-row type="flex">
          <a-col :span="6">
            <div class="p">
              <span>场 景 :</span>
            </div>
            <a-dropdown>
              <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1">
                  <a-icon type="user"/>1st menu item
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="user"/>2nd menu item
                </a-menu-item>
                <a-menu-item key="3">
                  <a-icon type="user"/>3rd item
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                Button
                <a-icon type="down"/>
              </a-button>
            </a-dropdown>
          </a-col>

          <a-col :span="6">
            <div class="p">
              <span>场 景 :</span>
            </div>
            <a-dropdown>
              <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1">
                  <a-icon type="user"/>1st menu item
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="user"/>2nd menu item
                </a-menu-item>
                <a-menu-item key="3">
                  <a-icon type="user"/>3rd item
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                Button
                <a-icon type="down"/>
              </a-button>
            </a-dropdown>
          </a-col>

          <a-col :span="6">
            <div class="p">
              <span>场 景 :</span>
            </div>
            <a-dropdown>
              <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1">
                  <a-icon type="user"/>1st menu item
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="user"/>2nd menu item
                </a-menu-item>
                <a-menu-item key="3">
                  <a-icon type="user"/>3rd item
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                Button
                <a-icon type="down"/>
              </a-button>
            </a-dropdown>
          </a-col>

          <a-col :span="6">
            <a-button type="primary" @click="onclick">
              <span style="width:50px;height:20px;">{{mark?'确定':isEditting?'保存模型':'模型调优'}}</span>
            </a-button>
          </a-col>
        </a-row>
      </div>
      <!-- 文本框 -->
      <div class="textBox"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mark: false,
      isEditting: false
    };
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
    },
    onclick() {
      let vm = this;
      if (vm.mark) {
      } else if (vm.isEditting) {
        vm.isEditting = !vm.isEditting;
      } else {
        vm.isEditting = !vm.isEditting;
      }
    },
  }
};
</script>

<style lang='less' scoped>
/* 全局 */
.testModel {
  // padding: 33px 16px 131px 33px;
  width: 100%;
  height: 100%;
  // border: 1px solid #ccc;
  .p {
    display: inline-block;
    line-height: 54px;
    margin: 0 16px;
  }
  /* 表头 */
  .header {
    width: 100%;
    height: 72px;
    // border: 1px solid #ccc;
    background: rgba(230, 247, 255, 1);
    border-radius: 5px 5px 0px 0px;
    // border-bottom: 1px solid #ccc;
    // border-top: 1px solid #ccc;

    span {
      margin-left: 24px;
      margin-top: 20px;
      margin-right: 18px;
      display: inline-block;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 29px;
    }
  }
  .content {
    overflow: auto;
    width: 100%;
    height: calc(100% - 72px);
    .menu {
      width: 100%;
      height: 54px;
      line-height: 50px;
      // background-color: #f2f2f2;
    }
    .textBox {
      overflow: auto;
      height: calc(100%-54px);
      .text {
        width: 100%;
        .text_section {
          padding: 10px;
        }
      }
    }
  }
}
</style>

