import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import './index.less'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  

  handleClick = (value) => {
    this.setState({
      current: value
    })
    switch (value) {
      case 0:
          Taro.navigateTo({
              url: `/pages/index/index`
          })
          break;
      case 1:
          Taro.navigateTo({
              url: `/pages/wode/index`
          })
          break;            
      default:
          break;
    }    
  }

  render () {
    const { current } = this.state;
    return (
      <View className='index'>
        <Text></Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', text: 8 },
            { title: '我的' }
          ]}
          onClick={this.handleClick}
          current={current}
        />
      </View>
    )
  }
}
