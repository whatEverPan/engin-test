<template>
  <div class="model-test-box">
    <!-- 左边板块 -->
    <div class="testleft" :class="{'active':boxActive=='left'}">
      <testModel/>
    </div>
    <!-- 中间按钮 -->
    <div class="Btn">
      <div class="btn">
        <div class="btn_right" style="fontSize:20px" @click="changeRight">
          <a-icon type="double-right"/>
        </div>
        <div class="btnleft" style="fontSize:20px" @click="changeLeft">
          <a-icon type="double-left"/>
        </div>
      </div>
    </div>
    <!-- 右边板块 -->
    <div class="testright" :class="{'active':boxActive=='right'}">
      <div class="right-box">
        <div class="testbtn" @click="change('top')">
          <span>测试用例</span>
        </div>
        <div class="right-box_content" :class="{'active':rightActive=='top'}">
          <testCase/>
        </div>
        <div class="testbtn" @click="change('bottom')">
          <span>运行结果</span>
        </div>
        <div class="right-box_content" :class="{'active':rightActive=='bottom'}">
          <test-result/>
          <!-- <span>哈哈哈啊哈</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testModel from "@/views/ThreeInOne/TestModel/testModel";
import testCase from "@/views/ThreeInOne/TestCase/testCase";
import testResult from "@/views/ThreeInOne/Result/test_result";

export default {
  data() {
    return {
      boxActive: "middle",
      rightActive: ""
    };
  },
  methods: {
    changeRight() {
      this.boxActive = this.boxActive ? "" : "right";
    },
    changeLeft() {
      this.boxActive = this.boxActive ? "" : "left";
    },
    change(arg) {
      this.rightActive = arg;
    }

    // changeActivekey(key) {
    //   var a = this.activeKey;
    //   debugger;
    //   if (a == key) {
    //     return;
    //   }
    // }
  },

  components: {
    testCase,
    testModel,
    testResult
  }
};
</script>

<style lang="less" scoped>
.model-test-box {
  width: 1582px;
  height: 1268px;
  background: rgba(249, 249, 249, 1);
  overflow: hidden;
  display: flex;
  .testleft {
    height: 1104px;
    background: rgba(255, 255, 255, 1);
    transition: 0.5s all ease;
    flex: 1;
    overflow: auto; ////
    &.active {
      width: 0px;
      flex: none;
    }
  }
  .Btn {
    width: 32px;
    height: 1104px;
    .btn {
      width: 100%;
      height: 100%;
      cursor: pointer;
      text-align: center;
      background: rgba(236, 236, 236, 1);
      .btn_right {
        width: 100%;
        height: 50%;
      }
      .btnleft {
        width: 100%;
        height: 50%;
      }
    }
  }
  .testright {
    flex: 1;
    height: 1104px;
    background: rgba(255, 255, 255, 1);
    // margin-top: 33px;
    transition: 0.5s all ease;
    overflow: auto; ////
    &.active {
      width: 0px;
      flex: none;
    }
    .right-box {
      height: 960px;
      width: 100%;
      overflow: auto;
      display: flex;
      flex-flow: column;
      .testbtn {
        width: 100%;
        height: 72px;
        background: rgba(230, 247, 255, 1);
        border-radius: 5px 5px 0px 0px;
        cursor: pointer;
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
      .right-box_content {
        width: 100%;
        height: 0px;
        flex: none;
        overflow: hidden;
        // transition: height 2s;
        transition: 0.5s all ease;
        &.active {
          flex: 1;
        }
      }
    }
  }
}
</style>