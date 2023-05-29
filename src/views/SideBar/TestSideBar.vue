<template>
    <div class="testSideBar">
        <div class="content">
            <div class="title">
                随堂小测试
            </div>
            <div class="test">

                <div class="testDetail scrollbarModify">
                    <!-- 选择题 -->
                    <div class="multipleTest" v-show="checkedTestId === subjectIndex + 1"
                        v-for="(subjectItem, subjectIndex) in testListStore.testList[Number(route.params.id) - 1].testSubject">
                        <div class="multipleSubject">
                            {{ `${subjectIndex + 1}. ${subjectItem.title}` }}
                        </div>
                        <div class="multipleOption">
                            <div class="optionItem" v-for="(optionsItem, optionsIndex) in subjectItem.options">
                                <div class="optionChar" v-show="optionsIndex === 0">A.</div>
                                <div class="optionChar" v-show="optionsIndex === 1">B.</div>
                                <div class="optionChar" v-show="optionsIndex === 2">C.</div>
                                <div class="optionChar" v-show="optionsIndex === 3">D.</div>
                                <div class="optionDetail">{{ optionsItem }}</div>
                            </div>

                        </div>
                    </div>
                    <!-- 填空题 -->
                    <div class="fillTest" v-show="false">
                        <div class="fillTestSubject">
                            1.请填写时间复杂度为n的排序算法排序算法排序算法排序算法：
                        </div>
                        <div class="fillTestInput">

                        </div>
                    </div>
                    <!-- 题号 -->
                    <div class="testCount">
                        <div class="testCountItem" @click="changeTestId(undoIndex + 1)"
                            v-for="(undoItem, undoIndex) in testListStore.undoList[Number(route.params.id) - 1].undo">
                            <div class="order">{{ undoIndex + 1 }}</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTestListStore } from '@/stores/testListStore';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const testListStore = useTestListStore()
const route = useRoute()

let checkedTestId = ref(1)

const changeTestId = (id: number) => {
    checkedTestId.value = id
}
</script>

<style lang="scss" scoped>
@use "@/style/views/SideBar/TestSideBar.scss";
</style> 
