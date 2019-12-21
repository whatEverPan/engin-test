<template>
  <div class="testModel">
    <!-- 表头header -->
    <div class="header">
      <a-row type="flex" justify="start">
        <a-col :span="24">
          <div class="p">
            <span>测试模型</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 内容板块 -->
    <div class="content">
      <!-- 菜单栏menu -->
      <div class="menu">
        <a-row type="flex">
          <a-col :span="12">
            <div class="p">
              <span>场 景 :</span>
            </div>
            <a-cascader :options="options" @change="onChange"/>
          </a-col>
          <a-col :span="12">
            <a-button type="primary">
              <span style="width:50px;height:20px;">确定</span>
            </a-button>
          </a-col>
        </a-row>
      </div>

      <!-- 文本框 -->
      <div class="textBox">
        <div class="text">
          <div class="text_section">
            <a-collapse @change="changeActivekey">
              <a-collapse-panel header="This is panel header 1" key="1">
                <a-collapse defaultActiveKey="4">
                  <a-collapse-panel header="This is panel nest panel" key="4">
                    <p>{{text}}</p>
                  </a-collapse-panel>
                </a-collapse>

                <a-collapse defaultActiveKey="4">
                  <a-collapse-panel header="This is panel nest panel" key="4">
                    <p>{{text}}</p>
                  </a-collapse-panel>
                </a-collapse>
                <a-collapse defaultActiveKey="4">
                  <a-collapse-panel header="This is panel nest panel" key="4">
                    <p>{{text}}</p>
                  </a-collapse-panel>
                </a-collapse>
              </a-collapse-panel>
              <a-collapse-panel header="This is panel header 2" key="2" :disabled="false">
                <p>{{text}}</p>
              </a-collapse-panel>
              <a-collapse-panel header="This is panel header 3" key="3">
                <p>{{text}}</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty.`,
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          disabled: true,
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    changeActivekey(key) {
      console.log(key);
    },
    onChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang='less'>
/* 全局 */
.testModel {
  width: 960px;
  height: 536px;
  margin: 50px auto;
  border: 2px solid #ccc;
  .p {
    display: inline-block;
    line-height: 55px;
    margin: 0 16px;
  }
  /* 表头 */
  .header {
    width: 956px;
    height: 54px;
    border-bottom: 1px solid #ccc;
    background-color: #f2f2f2;
    p {
      display: inline-block;
      width: 180px;
      height: 53px;
      line-height: 53px;
      background-color: #d7d7d7;
      span {
        margin-left: 20px;
      }
    }
  }

  .content {
    width: 956px;
    height: calc(100% - 54px);
    .menu {
      width: 100%;
      height: 55px;
      line-height: 50px;
      background-color: #f2f2f2;
    }
    .textBox {
      overflow: auto;
      height: calc(100% - 56px);
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

