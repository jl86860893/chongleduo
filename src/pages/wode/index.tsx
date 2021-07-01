import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class Wode extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    Taro.navigateTo({
      url: '/pages/wode/countinMenu/index'
    })
  }

  render () {
    return (
      <View className='wode'>
        <View className='countin' onClick={this.handleClick}>录入</View>
      </View>
    )
  }
}
