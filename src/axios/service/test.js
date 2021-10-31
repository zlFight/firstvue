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

/**
 * 获取用户列表
 */

export async  function queryUserInfo(){
  let res = await Api.getApi('/userManage/query');
  return res;
}

/**
 * 删除用户
 */

export async  function deleteUser(reqData){
  let res = await Api.deleteApi('/userManage/delete', reqData);
  return res;
}

/**
 * 设为管理员
 */

export async  function setAdmin(reqData){
  let res = await Api.postApi('/userManage/setAdmin', reqData);
  return res;
}
