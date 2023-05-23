<template>
    <div id="lesson">
        <!-- 返回按钮 -->
        <img class="backButton" width="40"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/cc22544635359e556f508965420e9703.png" />

        <div class="video">
            <video width="490" controls src="@/assets/video/c.mp4"></video>

        </div>

        <div class="info">
            <div class="time">- 0 h 55 min</div>
            <div class="name">Complete Introduction to the Basics of JavaScript</div>
            <div class="intro">Here are all the basics that you need to know in order to get started.</div>
        </div>

        <div class="comments">
            <div class="title">
                <div class="nameAndCount">
                    <div class="name">评论</div>
                    <div class="count">388</div>
                </div>
                <div class="sort">
                    <div class="hot">最热</div>
                    <div class="divid">|</div>
                    <div class="new">最新</div>
                </div>
            </div>

            <div class="remark">
                <div class="icon">
                    <img width="45"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621899878224.png">
                </div>
                <textarea roows="4" placeholder="发个友善的评论吧~" class="remarkInput scrollbarModify">
                            </textarea>
                <div class="send">
                    发布
                </div>
            </div>
            <div class="commentItem">
                <div class="icon"></div>
                <div class="name"></div>
                <div class="content"></div>
                <div class="attach">
                    <div class="time"></div>
                    <div class="like"></div>
                    <div class="reply"></div>
                </div>
                <div class="commentChildren">
                    <div class="icon"></div>
                    <div class="main">
                        <div class="name"></div>
                        <div class="content"></div>
                    </div>
                    <div class="attach">
                        <div class="time"></div>
                        <div class="like"></div>
                        <div class="reply"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<style lang="scss" scoped>
@use "@/style/views/Lesson.scss";
</style>
