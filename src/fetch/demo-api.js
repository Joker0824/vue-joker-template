import BaseApiController from '@/config/api/baseapi'

/**
 * @description
 * @class DemoApiController Demo类
 * @extends {BaseApiController}
 */
class DemoApiController extends BaseApiController {
  test = params => {
    console.log(this.get(this.demo.test, params))
    return this.get(this.demo.test, params).then(res => res.data)
  }
}
export default new DemoApiController()
