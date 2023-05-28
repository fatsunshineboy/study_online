<template>
    <div class="testSideBar">
        <div class="content">
            <div class="title">
                随堂小测试
            </div>
            <div class="test">

                <div class="testDetail scrollbarModify">
                    <!-- 选择题 -->
                    <div class="multipleTest">
                        <div class="multipleSubject">
                            1.请选择时间复杂度为n的排序算法排序算法排序算法排序算法：
                        </div>
                        <div class="multipleOption">
                            <div class="optionItem">
                                <div class="optionChar">A.</div>
                                <div class="optionDetail">冒泡排序</div>
                            </div>
                            <div class="optionItem">
                                <div class="optionChar">B.</div>
                                <div class="optionDetail">插入排序</div>
                            </div>
                            <div class="optionItem">
                                <div class="optionChar">C.</div>
                                <div class="optionDetail">希尔排序</div>
                            </div>
                            <div class="optionItem">
                                <div class="optionChar">D.</div>
                                <div class="optionDetail">堆排序</div>
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
                        <div class="testCountItem">
                            <div class="order">1</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">2</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">3</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">4</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">5</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">1</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">2</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">3</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">4</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">5</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">1</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">2</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">3</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">4</div>
                        </div>
                        <div class="testCountItem">
                            <div class="order">5</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


</script>

<style lang="scss" scoped>
@use "@/style/views/SideBar/TestSideBar.scss";
</style> 
