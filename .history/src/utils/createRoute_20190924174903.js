/*
 * @Author: ruzhan
 * @Date: 2019-09-24 17:46:25
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
 const createRouter = (routerList = []) => {
   routerList.map((item) => {
    if(!item.children){
        return (
          <Route path={item.key} component={item.component} />
        )
    } else {
        createRouter(item.children)
    }
   })
}