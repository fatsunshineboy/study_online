import { defineStore } from 'pinia'
import { ref } from 'vue'
import cover1 from '@/assets/imgs/cover/cover1.png'
import cover2 from '@/assets/imgs/cover/cover2.png'
import cover3 from '@/assets/imgs/cover/cover3.png'

export const useCoursesListStore = defineStore('coursesList', () => {
  let coursesList = ref([
    {
      lessonId: 1,
      time: '5 分 26 秒',
      title: 'C语言基础',
      intro: '回忆C语言',
      coverUrl: cover1
    },
    {
      lessonId: 2,
      time: '5 分 32 秒',
      title: '链式储存',
      intro: '初识数据结构中的链式存储',
      coverUrl: cover2
    },
    {
      lessonId: 3,
      time: '28 分 52 秒',
      title: '排序算法',
      intro: '感受数据结构的妙用',
      coverUrl: cover3
    }
  ])

  return { coursesList }
})
