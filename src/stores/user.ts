import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  let name = ref('John Smith')
  let imageUrl = ref(
    'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621899878224.png'
  )

  return { name, imageUrl }
})
