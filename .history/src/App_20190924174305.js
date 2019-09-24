/*
 * @Author: ruzhan
 * @Date: 2019-09-19 13:42:13
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react';
import './App.css';
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import MenuConfig from './config/menuConfig';
import Admin from './admin';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" render={() => 
            <Admin>
              <Switch>
                {
                   MenuConfig.map((item)=>{
                    if(!item.children){
                        return (
                            <SubMenu title={item.title} key={item.key}>
                                { this.renderMenu(item.children)}
                            </SubMenu>
                        )
                    }
                    return <Menu.Item title={item.title} key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
                })
                }
              {/* <Route path="/home" component={Home} />
              <Route path="/errInfo" component={ErrInfo} />
              <Route path="/test" component={Test} /> */}
              <Redirect to="/home" component={Home}/>
              </Switch>
            </Admin>
          }/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
