<template>
    <div id="lesson">
        <div class="left">
            <!-- 返回按钮 -->
            <img class="backButton" @click="goToHome" width="40"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/cc22544635359e556f508965420e9703.png" />

            <!-- 视频 -->
            <div class="video">
                <video width="490" controls src="@/assets/video/c.mp4"></video>
            </div>

            <!-- 课程信息 -->
            <div class="info">
                <div class="time">- 0 h 55 min</div>
                <div class="name">Complete Introduction to the Basics of JavaScript</div>
                <div class="intro">
                    Here are all the basics that you need to know in order to get started.
                </div>
            </div>

            <!-- 评论 -->
            <div class="comments">
                <div class="title">
                    <div class="nameAndCount">
                        <div class="name">评论</div>
                        <div class="count">{{ commentStore.commentList[Number(route.params.id) - 1].count }}</div>
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
                    <textarea roows="4" v-model="commentInputContent" placeholder="发个友善的评论吧~" ref="commentInput"
                        class="remarkInput scrollbarModify" @keyup.enter="sendComment(commentOption.comment, {
                            lessonId: Number(route.params.id),
                            comment: commentInputContent,
                            name: userStore.name,
                            time: Date.now(),
                            icon: userStore.imageUrl,
                        })"></textarea>
                    <div class="send" @click="sendComment(commentOption.comment, {
                        lessonId: Number(route.params.id),
                        comment: commentInputContent,
                        name: userStore.name,
                        time: Date.now(),
                        icon: userStore.imageUrl,
                    })">发布</div>
                </div>

                <div class="commentPlace">
                    <div class="commentItem"
                        v-for="(item, index) in commentStore.commentList[Number(route.params.id) - 1].content">
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
                                <div class="reply" @click="reply(item.commentId, item.name, item.commentId)">回复</div>
                            </div>
                            <div class="commentChildren" v-if="item.hasChildcomment"
                                v-for="(childItem, childIndex) in item.childcomment?.content">
                                <div class="icon">
                                    <img width="30" height="30" :src="childItem.icon" />
                                </div>
                                <div class="main">
                                    <span class="mainHead">
                                        <span class="name">
                                            {{ childItem.name }}
                                        </span>
                                        <span class="replyToWho"
                                            v-if="childItem.parentCommentId != childItem.subordinateId">
                                            回复 @{{ childItem.subordinateName }}:
                                        </span>
                                        <span class="content">
                                            {{ childItem.comment }}
                                        </span>
                                    </span>
                                    <div class="attach">
                                        <div class="time">{{ formatDate(childItem.time) }}</div>
                                        <div class="like">
                                            <img class="likeIcon" src="@/assets/imgs/lesson/like.svg" width="15" />
                                            <div class="count">{{ childItem.likeCount }}</div>
                                        </div>
                                        <div class="reply"
                                            @click="reply(item.commentId, childItem.name, childItem.commentId, item.commentId)">
                                            回复
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="replyItem" v-show="clickedCommentIndex === item.commentId">
                                <div class="icon">
                                    <img width="45" height="45"
                                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621899878224.png" />
                                </div>
                                <textarea roows="3" :placeholder="`回复 @${replyInputName}:`" v-model="replyInputContent"
                                    ref="replyInput" class="replyInput scrollbarModify" @keyup.enter="sendComment(commentOption.reply, {
                                        lessonId: Number(route.params.id),
                                        comment: replyInputContent,
                                        name: userStore.name,
                                        time: Date.now(),
                                        icon: userStore.imageUrl,
                                        parentCommentId: replyCommentId,
                                        subordinateId: item.commentId,
                                        subordinateName: replyInputName,
                                    })"></textarea>
                                <div class="send" @click="sendComment(commentOption.reply, {
                                    lessonId: Number(route.params.id),
                                    comment: replyInputContent,
                                    name: userStore.name,
                                    time: Date.now(),
                                    icon: userStore.imageUrl,
                                    parentCommentId: replyCommentId,
                                    subordinateId: item.commentId,
                                    subordinateName: replyInputName,
                                })">发布</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="right">
            <!-- 测试 -->
            <TestSideBarVue></TestSideBarVue>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCommentStore } from '@/stores/comment'
import formatDate from '@/utils/formatDate'
import { ElMessage } from 'element-plus';
import type { commentType } from '@/Interface/commentType'
import { useUserStore } from '@/stores/user';
import TestSideBarVue from './SideBar/TestSideBar.vue';

const router = useRouter()
const route = useRoute()
const commentStore = useCommentStore()
const userStore = useUserStore()
onMounted(() => {
    console.log(commentStore.commentList[Number(route.params.id) - 1]);

})

// 回复的id
let clickedCommentIndex = ref(-1)
// 要回复的姓名
let replyInputName = ref('')

const goToHome = () => {
    router.push('/home')
}

// 回复
const commentInput = ref()
const replyInput = ref()
const reply = (
    index: number,
    replyName: string,
    commentId: number,
    parentCommentId?: number | null,
) => {
    // 再次点击回复收起回复框
    console.log(index);

    if (clickedCommentIndex.value === index) {
        clickedCommentIndex.value = -1
        replyInputName.value = ''
        return
    } else {
        // 展示回复框
        clickedCommentIndex.value = index
        // 修改回复者的姓名
        replyInputName.value = replyName
        replyCommentId.value = commentId

    }
}

// 评论
// 评论内容
let commentInputContent = ref('')
let replyInputContent = ref('')
let replyCommentId = ref(-1);
// 评论类型
enum commentOption {
    // 评论
    comment = 0,
    // 回复
    reply = 1
}
// 发表评论
const sendComment = (option: commentOption, commentObject: commentType) => {
    if ((option === commentOption.comment && !commentInputContent.value) || (option === commentOption.reply && !replyInputContent.value)) {
        ElMessage.error("你没有评论！")
    }
    else {
        console.log(commentObject);
        commentStore.appendComment(commentObject)
        commentInputContent.value = ''
        replyInputContent.value = ''
        clickedCommentIndex.value = -1
    }

}
</script>

<style lang="scss" scoped>
@use '@/style/views/Lesson.scss';
</style>
