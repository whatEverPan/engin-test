<template>
  <div class="threeInone">
    <a-row class="inNav" type="flex" justify="center">
      <a-col :span="24">
        <a-icon type="up-circle" spin style="fontSize:25px"/>
        <span>上一步</span>
        <a-icon type="down-circle" spin style="fontSize:25px"/>
        <span>下一步</span>
        <a-icon type="pause-circle" spin style="fontSize:25px"/>
        <span>模型测试运行</span>
        <a-icon type="stop" spin style="fontSize:25px"/>
        <span>模型测试停止</span>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <testModel/>
      </a-col>
      <a-col :span="12">
        <testCase/>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="24">
        <Result/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import testCase from "../components/testCase";
import testModel from "../components/testModel";
import Result from "../views/test_result.vue";
export default {
  components: {
    testCase,
    testModel,
    Result
  }
};
</script>

<style lang="less" scoped>
.threeInone {
  width: 1902px;
  height: 1170px;
  .inNav {
    margin: 16px 16px 0;
    // margin: 16px 16px;
    height: 54px;
    line-height: 54px;
    width: cale(100%-32px);
    background-color: #f2f2f2;
    // border: 1px solid #ccc;
    padding: 0 20px;
    span{
      margin:0 20px; 
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>


