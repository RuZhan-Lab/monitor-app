/*
 * @Author: ruzhan
 * @Date: 2019-09-24 20:00:27
 * @Descripttion:
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
// import menuList from '../config/menuConfig';

function createBreadCrumb(currentRoute) {
  let result = [];
  return function inner(menuList) {
    menuList.forEach(menu => {
      if (~currentRoute.indexOf(menu.key)) {

        result.push(menu);
      }
      if (menu.children) {
         inner(menu.children);
      }
    });
    return result;
  };
}





export default createBreadCrumb;
