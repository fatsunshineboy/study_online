<template>
    <div class="testSideBar">
        <div class="content">
            <div class="title">
                随堂小测试
            </div>
            <div class="test">

                <div class="num">
                    <!-- 题号 -->
                    <div class="title">题号</div>
                    <div class="testCount">
                        <div class="testCountItem" :class="{ done: undoItem }" @click="changeTestId(undoIndex + 1)"
                            v-for="(undoItem, undoIndex) in testListStore.undoList[Number(route.params.id) - 1].undo">
                            <div class="order">{{ undoIndex + 1 }}</div>
                        </div>
                    </div>
                </div>

                <div class="testDetail scrollbarModify">

                    <!-- 选择题 -->
                    <div class="multipleTest" v-show="checkedTestId === subjectIndex + 1"
                        v-for="(subjectItem, subjectIndex) in testListStore.testList[Number(route.params.id) - 1].testSubject">
                        <div class="multipleSubject">
                            {{ `${subjectIndex + 1}. ${subjectItem.title}` }}
                        </div>
                        <div class="multipleOption">
                            <div :class="{ checkedOptionItem: answered && (optionsIndex === chooseOptionIndex || optionsIndex === rightOptionIndex) }"
                                class="optionItem" v-for="(optionsItem, optionsIndex) in subjectItem.options"
                                @click="chooseOption(optionsIndex)">
                                <div class="optionChar" v-show="optionsIndex === 0">A.</div>
                                <div class="optionChar" v-show="optionsIndex === 1">B.</div>
                                <div class="optionChar" v-show="optionsIndex === 2">C.</div>
                                <div class="optionChar" v-show="optionsIndex === 3">D.</div>
                                <div class="yes"
                                    v-show="optionsIndex === rightOptionIndex || optionsIndex === chooseOptionIndex && answered && answerRight">
                                    <img width="20" src="@/assets/imgs/lesson/tick.svg">
                                </div>
                                <div class="no" v-show="optionsIndex === chooseOptionIndex && answered && !answerRight">
                                    ❌
                                </div>
                                <div class="optionDetail">{{ optionsItem }}</div>
                            </div>

                        </div>
                        <div class="analytical" v-if="answered">
                            <div>解析：</div>
                            {{ testListStore.testList[Number(route.params.id) - 1].testAnalytical[subjectIndex] }}
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
let answered = ref(false)
let answerRight = ref(false)

// 选择的选项序号
let chooseOptionIndex = ref(-1)
let rightOptionIndex = ref(-1)

const testResult = testListStore.testList[Number(route.params.id) - 1].testResult

const changeTestId = (id: number) => {
    checkedTestId.value = id
    answered.value = false
    chooseOptionIndex.value = -1
    rightOptionIndex.value = -1
    answerRight.value = false
}

const chooseOption = function (optionsIndex: any) {
    answered.value = true;
    chooseOptionIndex.value = optionsIndex
    let result = optionsIndex + 1 === 1 ? 'a' : optionsIndex + 1 === 2 ? "b" : optionsIndex + 1 === 3 ? "c" : "d"
    let rightResult = testResult[checkedTestId.value - 1];
    answerRight.value = result === rightResult ? true : false
    if (!answerRight.value) {
        rightOptionIndex.value = rightResult === 'a' ? 1 : rightResult === 'b' ? 2 : rightResult === 'c' ? 3 : 4
        rightOptionIndex.value -= 1
    }
    console.log(rightOptionIndex.value);

    testListStore.changeUndoList(Number(route.params.id), checkedTestId.value)
}

</script>

<style lang="scss" scoped>
@use "@/style/views/SideBar/TestSideBar.scss";
</style> 
