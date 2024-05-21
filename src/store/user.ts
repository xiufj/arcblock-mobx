import { makeAutoObservable } from 'mobx'
import { makePersistable, isHydrated } from 'mobx-persist-store' // 引入相关api
import { FormData } from '../types'

export default class Store {
  formData: FormData = {
    name: 'xiufj(mobx默认值)',
    email: '1303737846@qq.com(mobx默认值)',
    phone: '15908088728(mobx默认值)'
  }

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      // mobx数据持久化存储
      name: 'UserStore',
      properties: ['formData'],
      storage: window.localStorage
    })
  }

  setFormData(value: FormData) {
    this.formData = value
  }
}
