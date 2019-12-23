<template>
  <div>
    <div class="btn">
      <router-link to="../result">
        <a-icon type="left" style="font-size:20px; margin-left:20px;margin-top:15px;"/>
        <span style="font-size:20px;">返回</span>
      </router-link>
      <input
        id="btn2"
        src="#"
        type="button"
        value="导出结果列表"
        style="margin-top:5px;"
      >
    </div>
    <div class="header">
      <span>场景：</span>
      
        <a-select
          defaultValue="场景名称1"
          style="width: 120px"
          @change="handleChange"
        >
          <a-select-option value="场景名称1">场景名称1</a-select-option>
          <a-select-option value="场景名称2">场景名称2</a-select-option>
          <a-select-option value="场景名称3">场景名称3</a-select-option>
          <a-select-option value="场景名称4">场景名称4</a-select-option>
        </a-select>
        
      <span>产品：</span>
       <a-select
          defaultValue="产品名称1"
          style="width: 120px"
          @change="handleChange"
        >
          <a-select-option value="产品名称1">产品名称1</a-select-option>
          <a-select-option value="产品名称2">产品名称2</a-select-option>
          <a-select-option value="产品名称3">产品名称3</a-select-option>
          <a-select-option value="产品名称4">产品名称4</a-select-option>
        </a-select>
      <span>模型：</span>
       <a-select
          defaultValue="模型名称1"
          style="width: 120px"
          @change="handleChange"
        >
          <a-select-option value="模型名称1">模型名称1</a-select-option>
          <a-select-option value="模型名称2">模型名称2</a-select-option>
          <a-select-option value="模型名称3">模型名称3</a-select-option>
          <a-select-option value="模型名称4">模型名称4</a-select-option>
        </a-select>
      <span>模拟运行结束时间：</span>
      <a-date-picker @change="onChange"/>
      <span>   至  </span>
      <a-date-picker @change="onChange"/>
      <a-button type="primary">查询</a-button>
    </div>
    
    <!-- 列表 -->
    <template>
      <a-table
        :columns="columns"
        :dataSource="data"
        bordered
      >
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
        <template
          slot="operation"
          slot-scope="text, record, index"
        >
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.key)">Save</a>
              <a-popconfirm
                title="Sure to cancel?"
                @confirm="() => cancel(record.key)"
              >
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <router-link to="result"><a @click="() => edit(record.key)">查看结果</a></router-link>
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
    title: '序号',
    dataIndex: 'name',
    width: '4%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '数据来源',
    dataIndex: 'source',
    width: '7%',
    scopedSlots: { customRender: 'source' },
  },
  {
    title: '测试对象',
    dataIndex: 'object',
    width: '12%',
    scopedSlots: { customRender: 'object' },
  },
  {
    title: '测试对象代码',
    dataIndex: 'object_code',
    width: '9%',
    scopedSlots: { customRender: 'object_code' },
  },
  {
    title: '准入结果',
    dataIndex: 'admittance_result',
    width: '4%',
    scopedSlots: { customRender: 'admittance_result' },
  },
  {
    title: '评分结果',
    dataIndex: 'score_result',
    width: '4%',
    scopedSlots: { customRender: 'score_result' },
  },
  {
    title: '评分等级',
    dataIndex: 'score_grade',
    width: '4%',
    scopedSlots: { customRender: 'score_grade' },
  },
  {
    title: '最终结果',
    dataIndex: 'result',
    width: '4%',
    scopedSlots: { customRender: 'result' },
  },
  {
    title: '额度',
    dataIndex: 'quota',
    width: '4%',
    scopedSlots: { customRender: 'quota' },
  },
  {
    title: '利率(%)',
    dataIndex: 'interest_rate',
    width: '4%',
    scopedSlots: { customRender: 'interest_rate' },
  },
  {
    title: '描述',
    dataIndex: 'describe',
    width: '10%',
    scopedSlots: { customRender: 'describe' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '12%',
    scopedSlots: { customRender: 'operation' },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `${i}`,
    source: '指标导入测试',
    object: `重庆兄弟装饰工程有限公司`,
    object_code: '91500103622188319J',
    admittance_result: '通过',
    score_result: 90.54,
    score_grade: 'A',
    result: '通过',
    quota: 500000.00,
    interest_rate: 5.31,
    operation: '查看详细报告',
  });
}
export default {
  data () {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns,
    };
  },
};
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    height: 50px;
    margin-top: 10px;
}
.btn {
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
}
#btn1 {
  position: absolute;
  left: 0px;
  top: 0px;
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
  position: absolute;
  left: 150px;
  top: 0px;
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
  position: absolute;
  left: 300px;
  top: 0px;
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