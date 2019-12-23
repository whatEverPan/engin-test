<template>
  <div>
    <div class="btn">
      <input id="btn1" src="#" type="button" value="切换至图表页">
      <input id="btn2" src="#" type="button" value="导出结果列表">
      <router-link to="../history">
        <input id="btn3" type="button" value="查看历史记录">
      </router-link>
    </div>
    <div style="width:100%;white-space:nowrap;height:40px;margin-top:5px;">
      <span>场景：供应链金融（GYLJR）</span>
      <span>产品：融E贷（GYLJR-RED）</span>
      <span>模型：助链贷模型（GYLJR-RED-ZLD）</span>
      <span>模拟运行结束时间：2019-08-08 12:33:14</span>
    </div>
    <div class="np" style="height:40px;">
      <span>测试对象：</span>
      <input id="te_ip" type="text">
      <a-button type="primary">查询</a-button>
    </div>
    <!-- 列表 -->
    <template>
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
              <router-link to="../data">
                <a @click="() => edit(record.key)">运行数据</a>
              </router-link>
              <a @click="() => edit(record.key)">下载报告</a>
            </span>
          </div>
        </template>
      </a-table>
    </template>
  </div>
</template>

<script>
const columns = [
  {
    title: "序号",
    dataIndex: "name",
    width: "4%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "数据来源",
    dataIndex: "source",
    width: "7%",
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
    width: "9%",
    scopedSlots: { customRender: "object_code" }
  },
  {
    title: "准入结果",
    dataIndex: "admittance_result",
    width: "4%",
    scopedSlots: { customRender: "admittance_result" }
  },
  {
    title: "评分结果",
    dataIndex: "score_result",
    width: "4%",
    scopedSlots: { customRender: "score_result" }
  },
  {
    title: "评分等级",
    dataIndex: "score_grade",
    width: "4%",
    scopedSlots: { customRender: "score_grade" }
  },
  {
    title: "最终结果",
    dataIndex: "result",
    width: "4%",
    scopedSlots: { customRender: "result" }
  },
  {
    title: "额度",
    dataIndex: "quota",
    width: "4%",
    scopedSlots: { customRender: "quota" }
  },
  {
    title: "利率(%)",
    dataIndex: "interest_rate",
    width: "4%",
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
    width: "12%",
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
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns
    };
  }
};
</script>

<style lang='less' scoped>
.btn {
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  #btn1 {
    width: 124px;
    height: 42px;
    background: url(../image/u5989.png) no-repeat 5%;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(174, 174, 174, 1);
    border-radius: 3px;
    box-shadow: none;
    text-align: right;
  }
  #btn2 {
    width: 124px;
    height: 42px;
    background: url(../image/u6022.png) no-repeat 5%;
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
    background: url(../image/u5948.png) no-repeat 5%;
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

#te_ip {
  border-width: 1px;
  border-style: solid;
  border-color: rgba(174, 174, 174, 1);
  border-radius: 3px;
}
.editable-row-operations a {
  margin-right: 8px;
}
</style>