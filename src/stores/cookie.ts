import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCookieStore = defineStore('cookie', () => {
  const cookie = ref(localStorage.getItem('cookie') || '')
  const setCookie = (value: string) => {
    cookie.value = value
    localStorage.setItem('cookie', value)
  }
  const removeCookie = () => {
    cookie.value = ''
    localStorage.removeItem('cookie')
  }

  return { cookie, setCookie, removeCookie }
})
