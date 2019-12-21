<template>
<div>
    <div class="top">
        <router-link to="../result">
            <a-icon type="left" style="font-size:20px; margin-left:20px;margin-top:15px;"/>
            <span style="font-size:20px;">返回</span>
        </router-link>
    </div>
    <div class="header">
        <span>供应链金融-->融e贷_助链贷-->预授信模型V1.2-->xxxxx有限公司</span>
        <span>运行时间：2019.11.23  21:33:21</span>
        <span>最终结果：自动通过</span>
        <span>报告：</span>
        <span>xxxxx有限公司--预授信模型报告.pdf</span>
    </div>
    <div class="content">
        <table style="table-layout:fixed">
<!-- -------------------------------------------------------------------- -->
            <tr>
                <th>贸易数据准入规则集（gz01）</th>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>使用入参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>年龄（ZBJH-GYLJR00001.age）：20</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>当前贷款余额（ZBJH-GYLJR00001.loanye）：200,000.00</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>近一年历史逾期次数（ZBJH-GYLJR00001.yqcs）：3</span></td>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>出参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>输出结果（GYLJR-RONGEDAI_ZHD-M.gz01）：0</span></td>
            </tr>
<!-- ------------------------------------------------------------------ -->
            <tr>
                <th>衍生变量（ysbl01）</th>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>使用入参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>最近1年贷款额（ZBJH-GYLJR00001.loan）：1,200,000.00</span></td>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>出参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>最近1年贷款月均（ysbl01.loanyj）：100,000.00</span></td>
            </tr>
            
<!-- ------------------------------------------------------------------------------------ -->
            <tr>
                <th>评分卡（Score）</th>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>使用入参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>法定代表人年龄（ZBJH-GYLJR00002.age）：20</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>法定代表人性别（ZBJH-GYLJR00002.sex）：0</span></td>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>出参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>输出结果（GYLJR-RONGEDAI_ZHD-M.Score）：68.00</span></td>
            </tr>
<!-- --------------------------------------------------------------------------------------------------------- -->
            <tr>
                <th>决策模型（Decision）</th>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>使用入参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>GYLJR-RONGEDAI_ZHD-M.Score：68</span></td>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>出参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>输出结果（GYLJR-RONGEDAI_ZHD-M.Decision）：C</span></td>
            </tr>
<!-- ----------------------------------------------------------------------------------------------------------------- -->
            <tr>
                <th>额度利率定价</th>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>使用入参数</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>最近1年贷款月均（ysbl01.loanyj）：100,000.00</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>GYLJR-RONGEDAI_ZHD-M.gz01：0</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>GYLJR-RONGEDAI_ZHD-M.Score：68.00</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>GYLJR-RONGEDAI_ZHD-M.Decision：C</span></td>
            </tr>
            <tr style="height:50px;">
                <td><a-icon type="caret-down" style="font-size:30px; margin-top:10px;color:#019DD9;" /><span>出参数据</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>输出结果（GYLJR-RONGEDAI_ZHD-M.Quota）：500,000.00</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>输出结果（GYLJR-RONGEDAI_ZHD-M.InterestRate）：8.6%/年</span></td>
            </tr>
<!-- ----------------------------------------------------------------------------------------- -->
            <tr>
                <th>模型结果</th>
            </tr>
            <tr style="height:50px;">
                <td><span>准入结果：0</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>分结果：68.00</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>评分等级：C</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>额度定价：500，000.00</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>利率定价：8.6%/年</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>最终结果：自动通过</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>描述结果：无风险</span></td>
            </tr>
            <tr style="height:50px;">
                <td><span>业务返回结果：</span></td>
            </tr>
        </table>
    </div>
 </div>   
</template>
<script>
    
</script>
<style>
.top{
    width: 100%;
  height: 50px;
  background-color: #f2f2f2;
}
.header{
    margin-left: 20%;
    margin-top: 20px;
    width: 100%;
    height: 50px;
    text-align: center;
    border-top: 1px solid green;
    border-bottom: 1px solid green;
}
.content{
    margin-left: 20%;
}
</style>>