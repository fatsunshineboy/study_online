<template>
    <div id="lesson">
        <!-- 返回按钮 -->
        <img class="backButton" @click="goToHome" width="40"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/cc22544635359e556f508965420e9703.png" />

        <div class="video">
            <video width="490" controls src="@/assets/video/c.mp4"></video>
        </div>

        <div class="info">
            <div class="time">- 0 h 55 min</div>
            <div class="name">Complete Introduction to the Basics of JavaScript</div>
            <div class="intro">
                Here are all the basics that you need to know in order to get started.
            </div>
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
                    <img width="45" height="45"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621899878224.png" />
                </div>
                <textarea roows="4" v-model="remarkInputContent" placeholder="发个友善的评论吧~"
                    class="remarkInput scrollbarModify">
                            </textarea>
                <div class="send" @click="sendRemark">发布</div>
            </div>

            <div class="commentPlace">
                <div class="commentItem" v-for="(item, index) in comment.content">
                    <div class="icon">
                        <img width="45" height="45" :src="item.icon" />
                    </div>

                    <div class="commentItemContent">
                        <div class="name">
                            {{ item.name }}
                        </div>
                        <div class="content">
                            {{ item.comment }}
                        </div>
                        <div class="attach">
                            <div class="time">
                                {{ formatDate(item.time) }}
                            </div>
                            <div class="like">
                                <img class="likeIcon" src="@/assets/imgs/lesson/like.svg" width="15" />
                                <div class="count">{{ item.likeCount }}</div>
                            </div>
                            <div class="reply" @click="reply(index, item.name, item.commentId)">回复</div>
                        </div>
                        <div class="commentChildren" v-if="item.hasChildcomment"
                            v-for="(childItem, childIndex) in item.childcomment?.content">
                            <div class="icon">
                                <img width="30" height="30" :src="childItem.icon" />
                            </div>
                            <div class="main">
                                <div class="mainHead">
                                    <div class="name">
                                        {{ childItem.name }}
                                    </div>
                                    <div class="content">
                                        {{ childItem.comment }}
                                    </div>
                                </div>
                                <div class="attach">
                                    <div class="time">{{ formatDate(childItem.time) }}</div>
                                    <div class="like">
                                        <img class="likeIcon" src="@/assets/imgs/lesson/like.svg" width="15" />
                                        <div class="count">{{ childItem.likeCount }}</div>
                                    </div>
                                    <div class="reply"
                                        @click="reply(index, childItem.name, childItem.commentId, item.commentId)">
                                        回复
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="replyItem" v-if="index === clickedCommentIndex">
                            <div class="icon">
                                <img width="45" height="45"
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621899878224.png" />
                            </div>
                            <textarea roows="3" :placeholder="`回复 @${replyInputName}:`"
                                class="replyInput scrollbarModify"></textarea>
                            <div class="send">发布</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCommentStore } from '@/stores/comment'
import formatDate from '@/utils/formatDate'
import { ElMessage } from 'element-plus';

const router = useRouter()
const commentStore = useCommentStore()
let comment = commentStore.commentList[0]

// 回复的id
let clickedCommentIndex = ref(-1)
// 要回复的姓名
let replyInputName = ref('')

const goToHome = () => {
    router.push('/home')
}

// 回复
const reply = (
    index: number,
    replyName: string,
    commentId: number,
    parentCommentId?: number | null
) => {
    // 再次点击回复收起回复框
    if (clickedCommentIndex.value === index) {
        clickedCommentIndex.value = -1
        replyInputName.value = ''
        return
    } else {
        // 展示回复框
        clickedCommentIndex.value = index
        // 修改回复者的姓名
        replyInputName.value = replyName
        if (parentCommentId) {
        }
    }
}

// 评论
// 评论内容
let remarkInputContent = ref('')
// 发表评论
const sendRemark = () => {
    if (!remarkInputContent.value) {
        ElMessage.error("你没有评论！")
    }
    // commentStore.sendRemark({
    //     content:""
    // })
}
</script>

<style lang="scss" scoped>
@use '@/style/views/Lesson.scss';
</style>
