import { ref } from 'vue'
import { defineStore } from 'pinia'
import userImg from '@/assets/imgs/codeFunImg/userImg.png'

export const useUserStore = defineStore('user', () => {
  let name = ref('亚瑟')
  let imageUrl = ref(userImg)
  let email = ref('Arthur@Morgan.com')

  return { name, imageUrl, email }
})
