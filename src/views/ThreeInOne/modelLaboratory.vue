<template>
  <div class="threeInone">

    <a-row class="testmodel">
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
import testModel from '@/views/ThreeInOne/TestModel/testModel'
import testCase from '@/views/ThreeInOne/TestCase/testCase'
import test_result from '@/views/ThreeInOne/Result/test_result'
export default {
  components: {
    testCase,
    testModel,
    test_result
  }
};
</script>

<style lang="less" scoped>
.threeInone {
  width: 1902px;
  height: 1170px;
  background: rgba(249, 249, 249, 1);
  .testmodel {
    width: 740px;
    height: 1104px;
    background: rgba(255, 255, 255, 1);
  }
}
</style>


