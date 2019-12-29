<template>
  <div class="model-test-box">
    <!-- 左边板块 -->
    <div class="testleft" :class="{'active':boxActive=='left'}">
      <testModel/>
    </div>
    <!-- 中间按钮 -->
    <div class="Btn" style="position:relative;">
      <div
        class="button"
        :class="{'active':btnHidden=='Top'}"
        style="fontSize:20px;position:relative;"
        @click="changeRight('Top')"
      >
        <a-icon type="double-right" style="position:absolute;top:50%;left:25%"/>
      </div>
      <div
        class="button"
        :class="{'active':btnHidden=='Bottom'}"
        style="fontSize:20px;position:relative;"
        @click="changeLeft('Bottom')"
      >
        <a-icon type="double-left" style="position:absolute;top:50%;left:25%"/>
      </div>
    </div>
    <!-- 右边板块 -->
    <div class="testright" :class="{'active':boxActive=='right'}">
      <div class="right-box">
        <div class="testbtn" @click="change('top')" style="border-bottom:2px solid #fff">
          <span>测试用例</span>
        </div>
        <div class="right-box_content" :class="{'active':rightActive=='top'}">
          <div class="content-box">
            <testCase/>
          </div>
        </div>
        <div class="testbtn" @click="change('bottom')">
          <span>运行结果</span>
        </div>
        <div class="right-box_content" :class="{'active':rightActive=='bottom'}">
          <div class="content-box">
            <test-result/>
          </div>
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
      boxActive: "",
      rightActive: "",
      btnHidden: ""
    };
  },
  methods: {
    changeRight(bb) {
      this.boxActive = this.boxActive ? "" : "right";
      this.btnHidden = this.btnHidden ? "" : bb;
    },
    changeLeft(cc) {
      this.boxActive = this.boxActive ? "" : "left";
      this.btnHidden = this.btnHidden ? "" : cc;
    },
    change(arg) {
      this.rightActive = arg;
    }
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
    display: flex;
    flex-flow: column;
    cursor: pointer;
    background: rgba(236, 236, 236, 1);
    transition: 0.5s all ease;
    .button {
      width: 100%;
      overflow: hidden;
      flex: 1;
      &.active {
        height: 0px;
        flex: none;
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
      height: 1104px;
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
        // padding: 5px;
        width: 100%;
        height: 0px;
        flex: none;
        overflow: hidden;
        // transition: height 2s;
        transition: 0.5s all ease;
        &.active {
          flex: 1;
        }
        .content-box {
          width: 100%;
          height: 100%;
          padding: 10px;
          overflow: auto;
        }
        .content-box::-webkit-scrollbar {
          // 纵向滚动条和横向滚动条宽度
          width: 6px;
          height: 6px;
        }
        .content-box::-webkit-scrollbar-thumb {
          // 滚动条按钮条样式
          border-radius: 4px;
          background: rgba(195, 195, 195, 1);
        }
        .content-box::-webkit-scrollbar-track {
          // 滚动条背景样式
          width: 12px;
          height: 100%;
          border-radius: 1px;
          background: #fff;
        }
      }
    }
  }
}
</style>