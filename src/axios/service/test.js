import Api from '../api/index';

/**
 * 查询主页数据
 * @returns {Promise<*>}
 */
export async function getHomePageData() {
    let res = await Api.getApi('temp/money');
    return res;
}

/**
 * 用户登录
 *
 */
export async function login(reqData) {
    let res = await Api.postApi('temp/login',reqData);
    return res;
}
/**
 * 用户注册
 *
 */
export async function register(reqData) {
    let res = await Api.postApi('userManage/insert',reqData);
    return res;
}

/**
 * 校验用户名是否存在
 *
 */
 export async function checkNameExist(reqData) {
    let res = await Api.getApi('userManage/checkNameExist',reqData);
    return res;
}

/**
 * 获取天气
 *
 */
export async function getWearther() {
  let res = await Api.getApi('weather/get/dalian/gjz?qybm=110000&isLoading=false');
  return res;
}
