<template>
    <div id="lesson">
        <div class="left">
            <!-- 返回按钮 -->
            <img class="backButton" @click="goToHome" width="40" src="@/assets/imgs/lesson/back_ico.png" />

            <!-- 视频 -->
            <div class="video">
                <video width="490" controls :src="videoUrl"></video>
            </div>

            <!-- 课程信息 -->
            <div class="info">
                <div class="time">{{ `- ${couresListStore.coursesList[Number(route.params.id) - 1].time}` }}</div>
                <div class="name">{{ couresListStore.coursesList[Number(route.params.id) - 1].title }}</div>
                <div class="intro">
                    {{ couresListStore.coursesList[Number(route.params.id) - 1].intro }}
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
                        <div class="hot" :class="{ isSorted: isSortedByHot }" @click="isSortedByHot = true">最热
                        </div>
                        <div class="divid">|</div>
                        <div class="new" :class="{ isSorted: !isSortedByHot }" @click="isSortedByHot = false">最新
                        </div>
                    </div>
                </div>

                <div class="remark">
                    <div class="icon">
                        <img width="45" height="45" :src="userStore.imageUrl" />
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
                                    <img width="45" height="45" :src="userStore.imageUrl" />
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
import { ElMessage } from 'element-plus'
import type { commentType } from '@/Interface/commentType'
import { useUserStore } from '@/stores/user'
import TestSideBarVue from './SideBar/TestSideBar.vue'
import { useCoursesListStore } from '@/stores/coursesLIst';
import videoUrl1 from "@/assets/video/c.mp4"
import videoUrl2 from "@/assets/video/link.mp4"

const router = useRouter()
const route = useRoute()
const commentStore = useCommentStore()
const userStore = useUserStore()
const couresListStore = useCoursesListStore()

let videoUrl = ref("")

if (route.params.id === "1") {
    videoUrl.value = videoUrl1
} else if (route.params.id === "2") {
    videoUrl.value = videoUrl2
}
// route.params.id === "1" ?videoUrl.value = videoUrl1:route.params.id === "2"?videoUrl.value = videoUrl2:videoUrl3

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

// 排序
let isSortedByHot = ref(true)
</script>

<style lang="scss" scoped>
@use '@/style/views/Lesson.scss';
</style>
