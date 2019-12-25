<template>
  <!-- 全局背景 -->
  <div class="wrapper">
    <!-- 布局 -->
    <a-row type="flex" justify="center">
      <a-col :span="12" :offset="6">
        <!-- 登录框 -->
        <div class="frame">
          <p class="frame_p">
            <span>数宜信</span>
          </p>
          <p>供应链金融一站式服务</p>
        </div>
        <!-- footer -->
        <div class="footer">
          <p>联系我们：400-XXXX-XXXX</p>
          <p>重庆数宜信信用管理有限公司 版权所有 渝</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.wrapper {
  width: 1920px;
  height: 1080px;
  background-color: #ccc;
}
.frame {
  margin-top: 315px;
  width: 429px;
  height: 467px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  text-align: center;
}
.frame_p {
}

.footer {
  position: absolute;
}
</style>


