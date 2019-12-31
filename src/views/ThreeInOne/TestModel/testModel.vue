<template>
  <div class="testModel">
    <!-- 表头header -->
    <div class="header">
      <a-row type="flex" justify="start">
        <a-col :span="24">
          <span>测试模型</span>
        </a-col>
      </a-row>
    </div>
    <!-- 内容板块 -->
    <div class="content">
      <!-- 菜单栏menu/button -->
      <div class="menu">
        <a-row type="flex">
          <a-col :span="6">
            <div class="p">
              <span>场 景 :</span>
            </div>
            <select v-model="brand" @change="type=null,name=null,imei=null">
              <option disabled="disabled" :value="null">请选择</option>
              <option v-for="(item, index) in product" :value="index">{{item.brand}}</option>
            </select>
          </a-col>

          <a-col :span="6">
            <div class="p">
              <span>产 品 :</span>
            </div>

            <select v-model="type" @change="name=null,imei=null">
              <option disabled="disabled" :value="null">请选择</option>
              <option v-for="(item, index) in typeArray" :value="index">{{item.type}}</option>
            </select>
          </a-col>

          <a-col :span="6">
            <div class="p">
              <span>模 型 :</span>
            </div>
            <select v-model="name" @change="imei=null">
              <option disabled="disabled" :value="null">请选择</option>
              <option v-for="(item, index) in nameArray" :value="index">{{item.name}}</option>
            </select>
          </a-col>

          <a-col :span="6">
            <div style="width:60%;margin-left:16px">
              <a-button type="primary" @click="onclick" block>
                <span style="width:50px;height:20px;">{{mark?'确定':isEditting?'保存模型':'模型调优'}}</span>
              </a-button>
            </div>
          </a-col>
        </a-row>
      </div>
      <!-- 文本框 -->
      <div class="textBox"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imei: "",
      brand: null,
      type: null,
      name: null,
      error: null,

      product: [
        {
          brand: "Apple",
          type: [
            {
              type: "iPhone",
              name: [
                {
                  name: "iPhone XS"
                },
                {
                  name: "iPhone XS MAX"
                }
              ]
            },
            {
              type: "iPad",
              name: [
                {
                  name: "IPad Air 无线局域网机型"
                },
                {
                  name: "Ipad Air 无线局域网 + 蜂窝网络机型"
                }
              ]
            }
          ]
        },
        {
          brand: "China",
          type: [
            {
              type: "HUAWEI",
              name: [
                {
                  name: "HUAWEI P30"
                },
                {
                  name: "HUAWEI nova4"
                }
              ]
            },
            {
              type: "OPPO",
              name: [
                {
                  name: "OPPO Reno3"
                },
                {
                  name: "OPPO Reno3 Pro"
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
  computed: {
    //获得品类信息
    typeArray: function() {
      return this.brand !== null ? this.product[this.brand].type : null;
    },
    //获得所选取产品名称信息
    nameArray: function() {
      return this.type !== null && this.typeArray.length
        ? this.typeArray[this.type].name
        : null;
    },
    //提交前的完整性验证
    check: function() {
      this.error = null;
      switch (true) {
        case this.brand === null:
          this.error = "品牌";
          break;
        case this.type === null:
          this.error = "产品类型";
          break;
        case this.name === null:
          this.error = "产品名称";
          break;
      }
      return this.error;
    }
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
    },
    onclick() {
      let vm = this;
      if (vm.mark) {
      } else if (vm.isEditting) {
        vm.isEditting = !vm.isEditting;
      } else {
        vm.isEditting = !vm.isEditting;
      }
    }
  }
};
</script>

<style lang='less' scoped>
/* 全局 */
.testModel {
  // width: 100%;
  height: 100%;
  min-width: 800px;
  /* 表头 */
  .header {
    width: 100%;
    height: 72px;
    background: rgba(230, 247, 255, 1);
    border-radius: 5px 5px 0px 0px;
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
  .content {
    overflow: auto;
    width: 100%;
    height: calc(100% - 72px);
    .menu {
      width: 100%;
      height: 54px;
      line-height: 50px;
      .p {
        display: inline-block;
        line-height: 54px;
        margin-left: 16px;
        margin-right: 16px;
      }
    }
    select {
      padding-left: 5px;
      width: 60%;
      min-width: 126px;
      height: 32px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      white-space: nowrap;
      font-weight: 400;
      color: #000 25%;
      font-size: 14px;
      // :hover{
      //   border: 2px solid red;
      // }
    }
    .textBox {
      overflow: auto;
      height: calc(100%-54px);
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

