<template>
  <div :is="currentView">
    <div class="simulationResults">
      <div class="content">
        <div class="btn">
          <input id="btn1" src="#" type="button" value="切换至图表页">
          <input id="btn2" src="#" type="button" value="导出结果列表">
          <!-- <router-link to="../history"> -->
          <input id="btn3" type="button" value="查看历史记录" @click="menuChange('history')">
          <!-- </router-link> -->
        </div>

        <div class="textBox">
          <div class="span">
            <span>场景：供应链金融（GYLJR）</span>
            <span>产品：融E贷（GYLJR-RED）</span>
            <span>模型：助链贷模型（GYLJR-RED-ZLD）</span>
            <span>模拟运行结束时间：2019-08-08 12:33:14</span>
          </div>
          <div class="np">
            <span>测试对象：</span>
            <input id="te_ip" type="text">
            <a-button type="primary">查询</a-button>
          </div>
          <!-- 列表 -->
          <div class="list">
            <a-table :columns="columns" :dataSource="data" bordered>
              <template
                v-for="col in ['name', 'age', 'address']"
                :slot="col"
                slot-scope="text, record, index"
              >
                <div :key="col">
                  <a-input
                    v-if="record.editable"
                    style="margin: -5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record.key, col)"
                  />
                  <template v-else>{{text}}</template>
                </div>
              </template>
              <template slot="operation" slot-scope="text, record, index">
                <div class="editable-row-operations">
                  <span v-if="record.editable">
                    <a @click="() => save(record.key)">Save</a>
                    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                      <a>Cancel</a>
                    </a-popconfirm>
                  </span>
                  <span v-else>
                    <a @click="() => edit(record.key)">查看详细报告</a>
                    <!-- <router-link to="../data"> -->
                    <a @click="menuChange('information')">运行数据</a>
                    <!-- </router-link> -->
                    <a @click="() => edit(record.key)">下载报告</a>
                  </span>
                </div>
              </template>
            </a-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import test_result from "@/views/ThreeInOne/Result/test_result";
import history from "@/views/ThreeInOne/Result/history";
import information from "@/views/ThreeInOne/Result/information";
const columns = [
  {
    title: "序号",
    dataIndex: "name",
    width: "5%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "数据来源",
    dataIndex: "source",
    width: "8%",
    scopedSlots: { customRender: "source" }
  },
  {
    title: "测试对象",
    dataIndex: "object",
    width: "12%",
    scopedSlots: { customRender: "object" }
  },
  {
    title: "测试对象代码",
    dataIndex: "object_code",
    width: "10%",
    scopedSlots: { customRender: "object_code" }
  },
  {
    title: "准入结果",
    dataIndex: "admittance_result",
    width: "5%",
    scopedSlots: { customRender: "admittance_result" }
  },
  {
    title: "评分结果",
    dataIndex: "score_result",
    width: "5%",
    scopedSlots: { customRender: "score_result" }
  },
  {
    title: "评分等级",
    dataIndex: "score_grade",
    width: "5%",
    scopedSlots: { customRender: "score_grade" }
  },
  {
    title: "最终结果",
    dataIndex: "result",
    width: "5%",
    scopedSlots: { customRender: "result" }
  },
  {
    title: "额度",
    dataIndex: "quota",
    width: "5%",
    scopedSlots: { customRender: "quota" }
  },
  {
    title: "利率(%)",
    dataIndex: "interest_rate",
    width: "5%",
    scopedSlots: { customRender: "interest_rate" }
  },
  {
    title: "描述",
    dataIndex: "describe",
    width: "10%",
    scopedSlots: { customRender: "describe" }
  },
  {
    title: "操作",
    dataIndex: "operation",
    width: "20%",
    scopedSlots: { customRender: "operation" }
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `${i}`,
    source: "指标导入测试",
    object: `重庆兄弟装饰工程有限公司`,
    object_code: "91500103622188319J",
    admittance_result: "通过",
    score_result: 90.54,
    score_grade: "A",
    result: "通过",
    quota: 500000.0,
    interest_rate: 5.31,
    operation: "查看详细报告"
  });
}
export default {
  name: "Result",
  components: {
    history,
    test_result,
    information
  },
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns,
      currentView: "test_result"
    };
  },
  methods: {
    menuChange(menu) {
      this.currentView = menu;
      console.log(this.currentView);
    },

    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.data = newData;
        this.cacheData = newData.map(item => ({ ...item }));
      }
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.simulationResults {
  height: 100%;
  // min-height: 1008px;
  min-width: 1880px;
  // max-width: 1920px;
  .content {
    height: 100%;
    // overflow:auto;
    .btn {
      // padding: ;
      width: 100%;
      height: 54px;
      // line-height: 54px;
      background-color: #f2f2f2;
      padding: 6px 10px;
      #btn1 {
        width: 124px;
        height: 42px;
        background: url(../../../assets/Result_images/u5989.png) no-repeat 5%;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border: 1px solid rgba(174, 174, 174, 1);
        border-radius: 3px;
        box-shadow: none;
        text-align: right;
        margin-right: 10px;
      }
      #btn2 {
        margin-right: 10px;
        width: 124px;
        height: 42px;
        background: url(../../../assets/Result_images/u6022.png) no-repeat 5%;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(174, 174, 174, 1);
        border-radius: 3px;
        box-shadow: none;
        text-align: right;
      }
      #btn3 {
        width: 124px;
        height: 42px;
        background: url(../../../assets/Result_images/u5948.png) no-repeat 5%;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(174, 174, 174, 1);
        border-radius: 3px;
        box-shadow: none;
        text-align: right;
      }
    }
    .textBox {
      width: 100%;
      height: cale(100%-110px);
      padding: 5px;
      .span span {
        margin-right: 20px;
        text-align: left;
      }
      .np {
        width: 100%;
        height: 54px;
        line-height: 54px;
      }
      #te_ip {
        border: 1px solid rgba(174, 174, 174, 1);
        border-radius: 3px;
        width: 195px;
        height: 32px;
        margin-left: 10px;
        margin-right: 20px;
      }
      //表格自带样式
      .editable-row-operations a {
        margin-right: 8px;
      }
    }
  }
}
</style>