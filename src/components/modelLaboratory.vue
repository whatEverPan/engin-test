<template>
    <div>
        <a-layout style:false>
            <a-layout>
                <a-layout-sider id="left" width=50% style="background:#fff">
                    <testModel/>
                </a-layout-sider>
                <a-layout-content width=50% style="background:#fff">
                    <testCase/>
                </a-layout-content>      
            </a-layout>
            <a-layout-footer>
                <Result/>
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
import testCase from '../components/testCase'
import testModel from '../components/testModel'
import Result from '../views/test_result.vue'
export default {
    components:{
        testCase,
        testModel,
        Result
    }
    
}
</script>

<style>

</style>


