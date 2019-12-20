<template>
  <div class="box">
    <div class="header">
      <div class="ziti">
        <p>测试用例准备</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content{
    width: 925px;
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
  border-right: 1px solid rgba(204, 204, 204, 1);
  border-left: 1px solid rgba(204, 204, 204, 1);
  border-top: 1px solid rgba(204, 204, 204, 1);
  text-align: center;
  width: 180px;
  height: 54px;
  background-color: rgba(215, 215, 215, 1);
}
.header {
  width: 926px;
  height: 53px;
  background-color: rgba(242, 242, 242, 1);
}
/* 外面盒子样式 */
.box {
  width: 926px;
  height: 546px;
  margin: 20px auto;
}
* {
  margin: 0;
  padding: 0;
}
</style>