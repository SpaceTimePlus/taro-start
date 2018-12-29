import { observable } from 'mobx'

const counterStore = observable({
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  async incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)

    let result = await 10
    return result
  }
})
export default counterStore
