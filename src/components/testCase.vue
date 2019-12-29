<template>
  <div class="box">
    <div class="header">
      <div class="ziti">
        <p>测试用例准备</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 前三个按钮 -->
      <div class="content_one">
        <a-button type="primary" @click="showModal">
          <a-icon type="folder" />标准测试值导入
        </a-button>
        <!-- 第一个对话框 -->
        <a-modal
          title="指标导入测试"
          v-model="visible"
          @ok="hideModal"
          okText="计算"
          cancelText="取消"
          width="35%"
          style="max-width:480px;max-height:302px;min-width:480px"
        >
          <div style="height:180px;">
            <a-button type="primary" style="top:58px;right:10px;position:absolute">EXCEL模板下载</a-button>
            <br />
            <span>EXCEL上传：</span>
            <a-upload
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :headers="headers"
              @change="handleChange"
            >
              <a-button>
                <a-icon type="upload" />选择文件
              </a-button>
            </a-upload>
          </div>
        </a-modal>
        <!-- 第二个按钮 -->
        <span class="zhibiao">
          <a-button type="primary" @click="showTwo">
            <a-icon type="dashboard" />指标运算值测算
          </a-button>
        </span>

        <!-- 第二个对话框 -->
        <a-modal
          v-model="vivw"
          @ok="hideTwo"
          okText="计算"
          cancelText="取消"
          width="800px"
          style="max-width:800px;min-width:800px;overflow: hidden;"
        >
          <div style="height:680px;max-width:800px;min-width:800px;overflow: hidden;">
            <!-- 第一行 -->
            <div>
              <span>场景：</span>
              <span class="gongYin">供应链金融</span>
              <span style="margin-left:20px;">产品：</span>
              <span class="gongYin">税链贷</span>
              <span style="margin-left:60px;">模型：</span>
              <select style="width:185px;height:30px;border-radius: 5px;">
                <option value="volvo">请选择：</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <!-- 第二行 -->
            <div style="margin-top:20px;">
              <span>客户名称：</span>
              <a-input style="width:180px;" />
              <span style="margin-left:55px;">执行状态：</span>
              <select style="width:20%;height:30px;border-radius: 5px;">
                <option value="volvo">请选择：</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <a-button type="primary" style="margin-left:20px;">查询</a-button>
              <a-button type="primary" style="margin-left:20px;width:10%;">重置</a-button>
            </div>
            <!-- 第三行 -->
            <div style="margin-top:20px;">
              <span>模型数据流水日期：</span>
              <a-date-picker />—
              <a-date-picker />
            </div>
            <!-- 表格部分 -->
            <div style="margin-top:10px;max-width:800px;min-width:800px;">
              <a-table
                :columns="Tow"
                :dataSource="dataTow"
                bordered
                :pagination="page"
                style="padding-right:40px;width:100%"
                size="small"
              >
                <template slot="operation">
                  <div class="editable-row-operations">
                    <!-- @click="edit()" -->
                    <a>添加</a>
                  </div>
                </template>

                <template slot="title">模型数据流水号</template>
              </a-table>
            </div>
            <!-- 添加的表 -->
            <a-table
              :columns="edit"
              :dataSource="dataOne"
              :pagination="false"
              :scroll="{ y: 240 }"
              bordered
              style="padding-right:40px;width:100%"
              size="small"
            >
              <template slot="operation" slot-scope:record>
                <div class="editable-row-operations">
                  <a @click="() => edit(dataOne.key)">删除</a>
                </div>
              </template>
              <template slot="title">已添加的模型数据表</template>
            </a-table>
          </div>
        </a-modal>
        <span style="float:right">
          <a-button type="danger" @click="clear">清除数据</a-button>
        </span>
      </div>
      <!-- 切换 -->
      <div class="switch">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="标准测试值导入" key="1">
            <!-- 第一表格 -->
            <a-table
              :columns="columns"
              :dataSource="data"
              bordered
              :pagination="page"
              style="padding:10px"
              size="small"
              class="qieOne"
            ></a-table>
          </a-tab-pane>

          <a-tab-pane tab="指标运算值测算" key="2" forceRender>
            <!-- 第二表格 -->
            <a-empty />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
const edit = [
  {
    title: "姓名",
    dataIndex: "name",
    width: 150
  },
  {
    title: "时间",
    dataIndex: "timeOne",
    width: 200
  },
  {
    title: "流水号",
    dataIndex: "address",
    width: 250
  },
  {
    title: "编辑",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];
const dataOne = [];
for (let i = 0; i < 20; i++) {
  dataOne.push({
    key: i,
    name: `张三`,
    timeOne: `2019-12-2`,
    address: `9856971562368. ${i}`
  });
}
const Tow = [
  {
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "时间",
    dataIndex: "time"
  },
  {
    title: "流水号",
    dataIndex: "address"
  },
  {
    title: "编辑",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];
const dataTow = [
  {
    key: "1",
    name: "张三",
    time: "2019-12-21",
    address: "9856971562368"
  },
  {
    key: "2",
    name: "李四",
    time: "2019-12-21",
    address: "9856971562368"
  },
  {
    key: "3",
    name: "王五",
    time: "2019-12-21",
    address: "9856971562368"
  },
  {
    key: "4",
    name: "王五",
    time: "2019-12-21",
    address: "9856971562368"
  }
];
const columns = [
  {
    title: "名称",
    dataIndex: "name"
  },
  {
    title: "代码",
    dataIndex: "money"
  },
  {
    title: "法定代表",
    dataIndex: "address"
  }
];
const data = [
  {
    key: "1",
    name: "重庆兄弟装饰工程有限公司",
    money: "91500103622188319J ",
    address: "唐青"
  },
  {
    key: "2",
    name: "重庆金字塔装饰有限公司",
    money: "91500106203083432X",
    address: "张海文"
  },
  {
    key: "3",
    name: "重庆国际艺术有限公司",
    money: "91500105621911464G",
    address: "庞华辉"
  },
  {
    key: "4",
    name: "重庆国际艺术有限公司",
    money: "91500105621911464G",
    address: "庞华辉"
  },
  {
    key: "5",
    name: "重庆金字塔装饰有限公司",
    money: "91500106203083432X",
    address: "张海文"
  },
  {
    key: "6",
    name: "重庆金字塔装饰有限公司",
    money: "91500106203083432X",
    address: "张海文"
  },
  {
    key: "7",
    name: "重庆金字塔装饰有限公司",
    money: "91500106203083432X",
    address: "张海文"
  }
];
export default {
  data() {
    return {
      edit,
      dataOne,
      data,
      columns,
      dataTow,
      Tow,
      page: {
        total: 100
      },
      visible: false,
      vivw: false,
      headers: {
        authorization: "authorization-text"
      }
    };
  },
  methods: {
    edit(key) {
      var x= this.dataOne[2];
      console.log(x);
      // this.dataOne.splice(0,1);
    },
    clear() {
      this.data = null;
    },
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    showTwo() {
      this.vivw = true;
    },
    hideTwo() {
      this.vivw = false;
    },
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
};
</script>

<style scoped>
/* 弹窗样式 */
.gongYin {
  padding: 0 8px;
  height: 25px;
  background: gray;
  display: inline-block;
  text-align: center;
  color: white;
  border-radius: 10px;
}
/* 内容样式 */
.zhibiao {
  margin-top: 10px;
  margin-left: 50px;
}
.content_one {
  text-align: left;
  height: 55px;
  padding: 10px;
  background-color: rgba(242, 242, 242, 1);
}
.content {
  width: 100%;
  height: 490px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(204, 204, 204, 1);
}
/* 测试用例准备样式 */
.ziti p {
  color: #333333;
  padding: 10px;
}
.ziti {
  border-radius: 6px;
  text-align: center;
  width: 180px;
  height: 54px;
  background-color: rgba(215, 215, 215, 1);
}
.header {
  width: 100%;
  height: 53px;
  border-top: 1px solid rgba(204, 204, 204, 1);
  border-right: 1px solid rgba(204, 204, 204, 1);
  border-left: 1px solid rgba(204, 204, 204, 1);
  background-color: rgba(242, 242, 242, 1);
}
/* 外面盒子样式 */
.box {
  overflow: hidden;
  max-width: 926px;
  min-width: 926px;
  width: 100%;
  max-height: 600px;
  height: 550px;
  margin: 20px auto;
}
</style>