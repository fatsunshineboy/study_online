<template>
    <div class="homeSideBar">
        <div class="head">
            <div class="search">
                <input class="searchInput" placeholder="搜索" type="text">
                <img class="searchIcon" width="20"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621993524527.png">
            </div>
            <div class="info">
                <img width="48"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/cdf706f19be881670bb5e412bc0ae602.png">
            </div>
        </div>

        <div class="content">
            <div class="title">
                Lessons
            </div>
            <div class="info">
                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/6533f4ea7ff57d5aea04389fb3e6745f.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 0 h 55 min</div>
                            <div class="title">Introduction & Basics</div>
                            <div class="intro">Learn all the basics that you need to know to get started.</div>
                            <div class="progress">
                                <el-progress :percentage="50" :color="customColors" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/6416ab3bd17b7ba9ad1cf03824bb5102.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 1 h 15 min</div>
                            <div class="title">Terminology</div>
                            <div class="intro">Start getting to know all the terminology.</div>
                            <div class="progress"><el-progress :percentage="20" :color="customColors" /></div>
                        </div>
                    </div>
                </div>

                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/5b136fce0737f5b7403031d6c2a21e55.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 0 h 25 min</div>
                            <div class="title">Advanced Apps</div>
                            <div class="intro">Your first step to building an advanced web app.</div>
                            <div class="progress"><el-progress :percentage="90" :color="customColors" /></div>
                        </div>
                    </div>
                </div>

                <div class="infoItem">
                    <div class="container">
                        <div class="icon">
                            <img width="64"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/dd0f98ff0fd0a44603d53766323da295.png">
                        </div>
                        <div class="detail">
                            <div class="time">- 0 h 35 min</div>
                            <div class="title">Final Assessment</div>
                            <div class="intro">Your first step to building an advanced web app.</div>
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
@import url(@/style/views/SideBar/HomeSideBar.scss);
</style>
