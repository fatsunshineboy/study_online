import { onBeforeMount, ref } from 'vue'
import { defineStore } from 'pinia'
import type { commentType } from '@/Interface/commentType'

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
                parentCommentId: 1,
                subordinateId: 1,
                subordinateName: '张三'
              }
            ]
          }
        }
      ]
    }
  ])

  let totalCommentId = ref(10)

  const appendComment = ({
    lessonId,
    commentId,
    comment,
    name,
    time,
    icon,
    parentCommentId,
    subordinateId,
    subordinateName
  }: commentType) => {
    // 内容为空
    if (!comment) {
      return
    }

    let childCommentObject = {
      name,
      icon,
      comment,
      time,
      likeCount: 0,
      commentId: totalCommentId.value + 1
    }
    // 整体commentId加一
    totalCommentId.value += 1

    commentList.value.forEach((item) => {
      if (item.lessonId === lessonId) {
        // 为新发表的评论
        console.log(childCommentObject)
        console.log(parentCommentId, subordinateId)
        if (!parentCommentId) {
          Object.assign(childCommentObject, {
            hasChildcomment: false,
            childcomment: {
              lessonId: lessonId,
              length: 0,
              content: []
            }
          })
          item.length += 1
          item.content.push(childCommentObject as any)
          localStorage.setItem('commentList', JSON.stringify(commentList.value))
          localStorage.setItem('totalCommentId', JSON.stringify(totalCommentId.value))
        }
        // 为子级评论
        // 子级评论的父级第一个主评论
        else if (parentCommentId && subordinateId) {
          Object.assign(childCommentObject, {
            parentCommentId,
            subordinateId,
            subordinateName
          })
          console.log(childCommentObject)

          item.content.forEach((childItem) => {
            childItem.commentId === subordinateId &&
              Object.assign(childItem, {
                hasChildcomment: true
              }) &&
              Object.assign(childItem.childcomment, {
                length: childItem.childcomment.length + 1
              }) &&
              childItem.childcomment.content.push(childCommentObject as any)
          })
          localStorage.setItem('commentList', JSON.stringify(commentList.value))
          localStorage.setItem('totalCommentId', JSON.stringify(totalCommentId.value))
        }
      }
    })
  }

  onBeforeMount(() => {
    // 如果有评论
    if (localStorage.getItem('commentList') && localStorage.getItem('totalCommentId')) {
      commentList.value = JSON.parse(localStorage.getItem('commentList') as string)
      totalCommentId.value = JSON.parse(localStorage.getItem('totalCommentId') as string)
    }
    // 没有就初始化
    else {
      commentList.value = [
        // 课程1
        {
          lessonId: 1,
          length: 2,
          content: [
            {
              name: '管理员_sun',
              icon: 'https://cdn.pixabay.com/photo/2023/05/21/07/47/horse-8008038_1280.jpg',
              comment: '这是第一节课的评论区，欢迎留下你的问题',
              time: 1685030053059,
              likeCount: 12,
              hasChildcomment: true,
              commentId: 1,
              childcomment: {
                lessonId: 1,
                length: 0,
                content: []
              }
            },
            {
              name: '烈阳秋',
              icon: 'https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_640.jpg',
              comment: '我太喜欢这样的课程了',
              time: 1685030053059,
              likeCount: 12,
              hasChildcomment: true,
              commentId: 2,
              childcomment: {
                lessonId: 1,
                length: 2,
                content: [
                  {
                    name: '一颗星辰草',
                    icon: 'https://cdn.pixabay.com/photo/2023/05/17/03/41/pheasant-7998988__340.jpg',
                    comment: '课程十分有意思',
                    time: 1685030057079,
                    likeCount: 64,
                    commentId: 3,
                    parentCommentId: 2,
                    subordinateId: 2,
                    subordinateName: '烈阳秋'
                  },
                  {
                    name: '通辽汗国驻贵州大使',
                    icon: 'https://cdn.pixabay.com/photo/2021/02/18/05/02/frog-6026117__340.png',
                    comment: '完全赞同',
                    time: 1685030057079,
                    likeCount: 64,
                    commentId: 10,
                    parentCommentId: 3,
                    subordinateId: 2,
                    subordinateName: '一颗星辰草'
                  }
                ]
              }
            }
          ]
        },
        // 课程2
        {
          lessonId: 2,
          length: 2,
          content: [
            {
              name: '管理员_lisa',
              icon: 'https://cdn.pixabay.com/photo/2023/05/21/12/40/dog-8008483__340.jpg',
              comment: '这是第二节课的评论区，欢迎留下你的问题',
              time: 1685030053059,
              likeCount: 12,
              hasChildcomment: true,
              commentId: 4,
              childcomment: {
                lessonId: 2,
                length: 0,
                content: []
              }
            },
            {
              name: '基噜夫',
              icon: 'https://cdn.pixabay.com/photo/2023/05/09/17/20/flowers-7982037_640.jpg',
              comment: '怎么获取教学资源呢？',
              time: 1685030053059,
              likeCount: 12,
              hasChildcomment: true,
              commentId: 5,
              childcomment: {
                lessonId: 2,
                length: 1,
                content: [
                  {
                    name: '再见嫑怹',
                    icon: 'https://cdn.pixabay.com/photo/2022/09/02/13/02/boho-7427541_640.jpg',
                    comment: '也许你得联系下管理员',
                    time: 1685030057079,
                    likeCount: 64,
                    commentId:6,
                    parentCommentId: 5,
                    subordinateId: 5,
                    subordinateName: '基噜夫'
                  }
                ]
              }
            }
          ]
        },
        // 课程3
        {
          lessonId: 3,
          length: 2,
          content: [
            {
              name: '管理员_luna',
              icon: 'https://cdn.pixabay.com/photo/2023/01/22/16/40/monkey-7736916_640.png',
              comment: '这是第三节课的评论区，欢迎留下你的疑惑和问题',
              time: 1685030053059,
              likeCount: 12,
              hasChildcomment: true,
              commentId: 7,
              childcomment: {
                lessonId: 3,
                length: 0,
                content: []
              }
            },
            {
              name: '折子戏乀',
              icon: 'https://cdn.pixabay.com/photo/2023/05/14/04/58/owl-7991987_640.jpg',
              comment: '老师上课风趣幽默',
              time: 1685030053059,
              likeCount: 12,
              hasChildcomment: true,
              commentId: 8,
              childcomment: {
                lessonId: 3,
                length: 1,
                content: [
                  {
                    name: '美人鱼战士',
                    icon: 'https://cdn.pixabay.com/photo/2023/05/18/09/27/meadow-8001786_640.jpg',
                    comment: '我很认可你的观点',
                    time: 1685030057079,
                    likeCount: 64,
                    commentId: 9,
                    parentCommentId: 8,
                    subordinateId: 8,
                    subordinateName: '折子戏乀'
                  }
                ]
              }
            }
          ]
        }
      ]
      localStorage.setItem('totalCommentId', JSON.stringify(totalCommentId.value))
      localStorage.setItem('commentList', JSON.stringify(commentList.value))
    }
  })

  return { commentList, appendComment }
})
