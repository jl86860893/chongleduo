export default {
  pages: [
    'pages/index/index',
    'pages/wode/index',
    'pages/wode/countinMenu/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#28aaff',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        // iconPath: './assets/icon/icon_home_n@2x.png',
        // selectedIconPath: './assets/icon/icon_home_s@2x.png',
        text: '首页',
      },
      {
        pagePath: 'pages/wode/index',
        // iconPath: './assets/icon/icon_me_n@2x.png',
        // selectedIconPath: './assets/icon/icon_me_s@2x.png',
        text: '粮仓',
      },
    ],
  },
}
