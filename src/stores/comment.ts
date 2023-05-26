import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', () => {
  const commentList = ref([
    {
      lessonId: 1,
      length: 3,
      content: [
        {
          name: '张三',
          icon: 'https://cdn.pixabay.com/photo/2023/05/21/07/47/horse-8008038_1280.jpg',
          comment: '1:56 这句塔司给dei没绷住',
          time: 1685030053059,
          likeCount: 12,
          hasChildcomment: true,
          commentId: 1,
          childcomment: {
            lessonId: 1,
            length: 1,
            content: [
              {
                name: '阿森贝',
                icon: 'https://cdn.pixabay.com/photo/2023/02/13/13/16/silver-gull-7787328_1280.jpg',
                comment: '《我对英雄联盟没有热情了》[笑哭]',
                time: 1685030057079,
                likeCount: 64,
                commentId: 2,
                parentCommentId: 1
              }
            ]
          }
        },
        {
          name: '是韬妮老师',
          icon: 'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg',
          comment: '我哭死，他用的还是鬼皇的皮肤[大哭][大哭][大哭]',
          time: 1685030057449,
          likeCount: 8,
          hasChildcomment: false,
          commentId: 3
        },
        {
          name: '鱼目无一',
          icon: 'https://cdn.pixabay.com/photo/2023/01/22/16/40/monkey-7736916_1280.png',
          comment: '哎，好想再看一次许哥回归巅峰赢下所有',
          time: 1685030057079,
          likeCount: 18,
          hasChildcomment: false,
          commentId: 4
        }
      ]
    }
  ])

  let totalCommentId = ref(4)

  interface commentType {
    lessonId: number
    commentId?: number
    comment: string
    name: string
    icon: string
    time: number
    parentCommentId?: number
  }

  const appendComment = ({
    lessonId,
    commentId,
    comment,
    name,
    time,
    icon,
    parentCommentId
  }: commentType) => {
    // 内容为空
    if (!comment) {
      return
    } else {
      // 没有commentId,说明是新建的评论,生成一个commentId
      if (!commentId) {
        commentId = totalCommentId.value + 1
      }
      commentList.value.forEach((item) => {
        if (item.lessonId === lessonId) {
          // 为子级评论
          if (parentCommentId) {
            item.content.forEach((contentItem) => {
              if (contentItem.commentId === parentCommentId) {
                let childCommentObject = {
                  name,
                  icon,
                  comment,
                  time,
                  likeCount: 0,
                  commentId: totalCommentId.value + 1,
                  parentCommentId
                }
                // contentItem.childcomment?.length = contentItem.childcomment?.length + 1
              }
            })
          }
        }
      })
    }
  }

  return { commentList }
})
