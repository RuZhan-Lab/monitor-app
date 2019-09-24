/*
 * @Author: ruzhan
 * @Date: 2019-09-24 20:00:27
 * @Descripttion:
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
// import menuList from '../config/menuConfig';

function createBreadCrumb(currentRoute) {
  let result = null;
  return function inner(menuList) {
    menuList.forEach(menu => {
      if (menu.key === currentRoute) {
        return (result = menu);
      }
      if (menu.children) {
        return inner(menu.children);
      }
    });
    return result;
  };
}

export default createBreadCrumb;
