export default [
  {
    name: 'loginName',
    method: 'POST',
    desc: '登录',
    path: '/user/login',
    mockPath: '',
    params: {
      'loginCity': 'string', // 市
      'loginCountry': 'string', // 国家
      'loginLatitude': 'string', // 登录纬度
      'loginLongitude': 'string', // 登录经度
      'loginProvince': 'string', // 省
      'loginRegion': 'string', // 区
      'mobile': 'string', // 手机号
      'sms': 'string' // 验证码
    }
  }
]
