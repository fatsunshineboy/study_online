<template>
    <div class="homePage">

        <div class="left">
            <!-- 标题 -->
            <div class="self-start group">
                <span class="text">My Courses</span>
            </div>
            <!-- 筛选 -->
            <div class="flex-row justify-between equal-division">
                <div :class="{ selected: checkedId === 1 }" @click=sort(1)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/40355c1818bab41429a6314048e067de.png" />
                    <span class="navText">全部</span>
                </div>
                <div :class="{ selected: checkedId === 2 }" @click=sort(2)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/4cf5b42708ffc8f6bcc4de12e4f42533.png" />
                    <span class="navText">C语言</span>
                </div>
                <div :class="{ selected: checkedId === 3 }" @click=sort(3)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/24866b96262ff0d9ba4c72464a4018e4.png" />
                    <span class="navText">数据结构</span>
                </div>
                <div :class="{ selected: checkedId === 4 }" @click=sort(4)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/7d9f1f3bfa4a408ce8372b3db479e1f0.png" />
                    <span class="navText">算法</span>
                </div>
            </div>
            <!-- 课程展示 -->
            <div class="group_2 space-y-32">
                <div id="course">
                    <div class="cursorItem">
                        <div class="flex-col section_3">
                            <div class="section_2">
                                <img id="cover" width="229" height="137" src="@/assets/imgs/cover.svg">
                            </div>
                            <span class="self-start font_1 text_3">- 5 h 30 min</span>
                            <span class="self-start font_2 text_4">PowerPoint</span>
                            <span class="self-start font_3 text_5">Enhance your presentation skills.</span>
                        </div>
                    </div>
                    <div class="cursorItem">
                        <div class="flex-col section_3">
                            <div class="section_2">
                                <img id="cover" width="229" height="137" src="@/assets/imgs/cover.svg">
                            </div>
                            <span class="self-start font_1 text_3">- 5 h 30 min</span>
                            <span class="self-start font_2 text_4">PowerPoint</span>
                            <span class="self-start font_3 text_5">Enhance your presentation skills.</span>
                        </div>
                    </div>
                    <div class="cursorItem">
                        <div class="flex-col section_3">
                            <div class="section_2">
                                <img id="cover" width="229" height="137" src="@/assets/imgs/cover.svg">
                            </div>
                            <span class="self-start font_1 text_3">- 5 h 30 min</span>
                            <span class="self-start font_2 text_4">PowerPoint</span>
                            <span class="self-start font_3 text_5">Enhance your presentation skills.</span>
                        </div>
                    </div>
                    <div class="cursorItem">
                        <div class="flex-col section_3">
                            <div class="section_2">
                                <img id="cover" width="229" height="137" src="@/assets/imgs/cover.svg">
                            </div>
                            <span class="self-start font_1 text_3">- 5 h 30 min</span>
                            <span class="self-start font_2 text_4">PowerPoint</span>
                            <span class="self-start font_3 text_5">Enhance your presentation skills.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCookieStore } from '@/stores/cookie';

const cookieStore = useCookieStore()
let checkedId = ref(1);

const sort = (id: number) => {
    checkedId.value = id;
}

</script>

<style scoped>
@import url(@/style/views/Home.scss);
</style>
