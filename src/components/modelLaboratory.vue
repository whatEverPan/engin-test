<template>
  <div class="threeInone">
    <a-row class="inNav">
      <a-col :span="24">
          <a-icon type="up-circle" />
          <a-icon type="down-circle" /> 
          <a-icon type="pause-circle" />
          <a-icon type="stop" />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12" >
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
.threeInone{
    width: 100%;
    height: 100%;
    .inNav{
        height: 54px;
        width: 100%;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
    }
}
</style>


