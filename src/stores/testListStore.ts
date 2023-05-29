import { defineStore } from 'pinia'
import { onBeforeMount, ref } from 'vue'

export const useTestListStore = defineStore('testList', () => {
  let testList = ref([
    {
      lessonId: 1,
      testCount: 5,
      testSubject: [
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        }
      ],
      testResult: ['a', 'b', 'c', 'd', 'a'],
      testAnalytical: ['1的解析', '2的解析', '3的解析', '4的解析', '5的解析']
    },
    {
      lessonId: 2,
      testCount: 5,
      testSubject: [
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        }
      ],
      testResult: ['a', 'b', 'c', 'd', 'a'],
      testAnalytical: ['1的解析', '2的解析', '3的解析', '4的解析', '5的解析']
    },
    {
      lessonId: 3,
      testCount: 5,
      testSubject: [
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        },
        {
          title: '请选择时间复杂度为n的排序算法排序算法排序算法排序算法1：',
          options: ['冒泡排序', '插入排序', '希尔排序', '堆排序']
        }
      ],
      testResult: ['a', 'b', 'c', 'd', 'a'],
      testAnalytical: ['1的解析', '2的解析', '3的解析', '4的解析', '5的解析']
    }
  ])

  let undoList = ref([
    {
      lessonId: 1,
      undo: [false, false, false, false, false]
    },
    {
      lessonId: 2,
      undo: [false, false, false, false, false]
    },
    {
      lessonId: 3,
      undo: [false, false, false, false, false]
    }
  ])

  const changeUndoList = (lessonId: number, index: number) => {
    undoList.value.forEach((item) => {
      if (item.lessonId === lessonId) {
        item.undo[index - 1] = true
        localStorage.setItem('undoList', JSON.stringify(undoList.value))
      }
    })
  }

  onBeforeMount(() => {
    // 如果有
    if (localStorage.getItem('undoList')) {
      undoList.value = JSON.parse(localStorage.getItem('undoList') as string)
    }
    // 没有就初始化
    else {
      localStorage.setItem('undoList', JSON.stringify(undoList.value))
    }
  })

  return { testList, undoList, changeUndoList }
})
