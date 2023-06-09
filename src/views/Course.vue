<template>
    <div class="homePage">

        <div class="left">
            <!-- 标题 -->
            <div class="self-start group">
                <span class="text">我的课程</span>
            </div>
            <!-- 筛选 -->
            <div class="flex-row justify-between equal-division">
                <div :class="{ selected: checkedId === 1 }" @click=sort(1)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image" src="@/assets/imgs/codeFunImg/sort1.png" />
                    <span class="navText">全部</span>
                </div>
                <div :class="{ selected: checkedId === 2 }" @click=sort(2)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image" src="@/assets/imgs/codeFunImg/sort2.png" />
                    <span class="navText">C语言</span>
                </div>
                <div :class="{ selected: checkedId === 3 }" @click=sort(3)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image" src="@/assets/imgs/codeFunImg/sort3.png" />
                    <span class="navText">数据结构</span>
                </div>
                <div :class="{ selected: checkedId === 4 }" @click=sort(4)
                    class="flex-col justify-start items-center equal-division-item">
                    <img class="image" src="@/assets/imgs/codeFunImg/sort4.png" />
                    <span class="navText">算法</span>
                </div>
            </div>
            <!-- 课程展示 -->
            <div class="group_2 space-y-32">

                <div id="course">
                    <div class="cursorItem" v-for="(item, index) in couresListStore.coursesList"
                        @click="goToLesson(item.lessonId)">
                        <div class="flex-col section_3">
                            <div class="section_2">
                                <img id="cover" width="229" height="137" :src="item.coverUrl">
                            </div>
                            <span class="self-start font_1 text_3">{{ `- ${item.time}` }}</span>
                            <span class="self-start font_2 text_4">{{ item.title }}</span>
                            <span class="self-start font_3 text_5">{{ item.intro }}</span>
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
import { useCoursesListStore } from '@/stores/coursesLIst';
import { useRouter } from 'vue-router';

const couresListStore = useCoursesListStore()
const cookieStore = useCookieStore()
const router = useRouter()
let checkedId = ref(1);

const sort = (id: number) => {
    checkedId.value = id;
}

const goToLesson = (lessonId: number) => {
    router.push(`/lesson/${lessonId}`);
}
</script>

<style scoped>
@import url(@/style/views/Home.scss);
</style>
