<template>
    <div class="testModel">
        <div class="header">
            <a-row>
                <a-col :span="24"><div><p><span>选择测试模型</span></p></div></a-col>
            </a-row>
        </div>
        <div class="menu">
            <a-row>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
            </a-row>
        </div>      
    </div>
</template>

<script>

export default {
    
}
</script>

<style>
    .testModel{
        width: 960px;
        height: 536px;
    }
    .header{
        width: 960px;
        height: 53px;
        border-top:1px  
    }
</style>

