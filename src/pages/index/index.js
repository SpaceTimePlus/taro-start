import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import PropTypes from 'prop-types'

import './index.scss'
import Clock from '../../components/Clock'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  // 页面预加载
  componentWillPreload (params) {
    return
  }
  componentWillMount () {
    // 获取传参
    console.log(this.$router.params)
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = (e) => {
    const { counterStore } = this.props
    counterStore.increment()
    // 阻止事件冒泡
    e.stopPropagation()
  }

  decrement = (param, e) => {
    console.log('param', param);
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = async () => {
    const { counterStore } = this.props
    let result = await counterStore.incrementAsync()
    console.log('result', result)
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement.bind(this, 'TTT')}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <Clock/>
      </View>
    )
  }
}

Index.PropTypes = {
  counter: PropTypes.number
}

export default Index
