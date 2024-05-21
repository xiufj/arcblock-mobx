import { createContext, useContext } from 'react'
import Store from './user'

class RootStore {
  appStotre: Store

  constructor() {
    this.appStotre = new Store()
  }
}

const store = new RootStore()

//提供初始值，不需要context.Provider
const context = createContext(store)

//自定义hook
function useStore() {
  return useContext(context)
}

export default useStore
