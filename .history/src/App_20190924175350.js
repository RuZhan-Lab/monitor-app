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
import Home from './pages/home'
import createRouter from './utils/createRoute'
function App() {

  const routeList = createRouter(MenuConfig);

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" render={() => 
            <Admin>
              <Switch>
                {
                   routeList.map((item) => {
                     return <Route key={item.key} path={item.key} component={item.component} />
                   })
                }
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
