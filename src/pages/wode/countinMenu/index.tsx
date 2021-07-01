import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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
    Taro.scanCode({}).then(res => {
      // 条形码数值
      const code = res.result;

      // 付费接口
      Taro.request({
        url: `http://barcode1.market.alicloudapi.com/barcode?code=${code}`,
        header: {
          Authorization: 'APPCODE f4636d40e17b484091190c103012cf08'
        },
        success: function(res) {
          console.log(res)
        }
      })
    })
  }

  render () {
    return (
      <View className='types'>
        <AtButton type='primary' onClick={this.handleClick}>猫粮</AtButton>
        <AtButton type='primary'>罐头</AtButton>
        <AtButton type='primary'>猫饭</AtButton>
      </View>
    )
  }
}
