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
      <!-- 菜单栏menu/button -->
      <div class="menu">
        <a-row type="flex">
          <a-col :span="12">
            <div class="p">
              <span>场 景 :</span>
            </div>
            <a-cascader :options="options" @change="onChange"/>
          </a-col>
          <a-col :span="12">
            <a-button type="primary" @click="onclick">
              <span style="width:50px;height:20px;">{{mark?'确定':isEditting?'保存模型':'模型调优'}}</span>
            </a-button>
          </a-col>
        </a-row>
      </div>
      <!-- 文本框 -->
      <div class="textBox">
        <div class="text">
          <div class="text_section">
            <a-tree :loadData="onLoadData" :treeData="treeData"/>
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
      treeData: [
        { title: "Expand to load", key: "0" },
        { title: "Expand to load", key: "1" },
        { title: "Tree Node", key: "2", isLeaf: true }
      ],
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
      ],
      mark: false,
      isEditting: false
    };
  },
  methods: {
    onclick() {
      let vm = this;
      if (vm.mark) {
        
      } else if (vm.isEditting) {
        vm.isEditting = !vm.isEditting;
      } else {
        vm.isEditting = !vm.isEditting;
      }
    },
    onChange(value) {
      console.log(value);
    },
    onLoadData(treeNode) {
      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          treeNode.dataRef.children = [
            { title: "Child Node", key: `${treeNode.eventKey}-0` },
            { title: "Child Node", key: `${treeNode.eventKey}-1` }
          ];
          this.treeData = [...this.treeData];
          resolve();
        }, 1000);
      });
    }
  }
};
</script>

<style lang='less' scoped>
/* 全局 */
.testModel {
  width: 100%;
  height: 530px;
  border: 1px solid #ccc;
  .p {
    display: inline-block;
    line-height: 55px;
    margin: 0 16px;
  }
  /* 表头 */
  .header {
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #ccc;
    background-color: #f2f2f2;
  }
  .content {
    width: 100%;
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

