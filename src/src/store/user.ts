import { makeAutoObservable } from 'mobx'

export default class Store {
  assetList: Array<string> = []

  constructor() {
    makeAutoObservable(this)
  }

  setAssetList(value: Array<string>) {
    this.assetList = value
  }
}
