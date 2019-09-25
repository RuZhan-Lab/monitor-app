/*
 * @Author: ruzhan
 * @Date: 2019-09-24 17:46:25
 * @Descripttion:
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
const createRouter = (routerList = [], result = []) => {
  routerList.forEach(item => {
    if (!item.children) {
      result.push(item);
    } else {
      createRouter(item.children, result);
    }
  });
  return result;
};

export default createRouter;
