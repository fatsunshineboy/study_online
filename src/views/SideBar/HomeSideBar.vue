<template>
    <div class="homeSideBar">
        <div class="head">
            <div class="search">
                <input class="searchInput" placeholder="搜索" type="text">
                <img class="searchIcon" width="20" src="@/assets/imgs/sideBar/search.png">
            </div>
            <div class="info">
                <img width="48" src="@/assets/imgs/sideBar/message.png">
            </div>
        </div>

        <div class="content">
            <div class="title">
                课程进度
            </div>
            <div class="info scrollbarModify">
                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64" src="@/assets/imgs/sideBar/ico1.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 0 h 55 min</div>
                            <div class="title">简介和基础知识</div>
                            <div class="intro">了解入门所需的所有基础知识</div>
                            <div class="progress">
                                <el-progress :percentage="50" :color="customColors" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64" src="@/assets/imgs/sideBar/ico2.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 1 h 15 min</div>
                            <div class="title">术语</div>
                            <div class="intro">开始了解所有术语</div>
                            <div class="progress"><el-progress :percentage="20" :color="customColors" /></div>
                        </div>
                    </div>
                </div>

                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64" src="@/assets/imgs/sideBar/ico3.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 0 h 25 min</div>
                            <div class="title">高级应用</div>
                            <div class="intro">构建高级 Web 应用的第一步</div>
                            <div class="progress"><el-progress :percentage="90" :color="customColors" /></div>
                        </div>
                    </div>
                </div>

                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64" src="@/assets/imgs/sideBar/ico4.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 0 h 35 min</div>
                            <div class="title">最终评估</div>
                            <div class="intro">评估你的学习情况</div>
                            <div class="progress"><el-progress :percentage="10" :color="customColors" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const percentage = ref(20);
// 进度条
const customColors = [
    { color: '#52C3FF', percentage: 20 },
    { color: '#FFCB57', percentage: 40 },
    { color: '#FC77A0', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]
</script>

<style lang="scss" scoped>
@use "@/style/views/SideBar/HomeSideBar.scss";
</style> 
