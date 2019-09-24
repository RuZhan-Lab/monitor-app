/*
 * @Author: ruzhan
 * @Date: 2019-09-19 13:42:13
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react';
import './App.css';
import { Router,Route,Switch,Redirect} from 'react-router-dom'

import Home from './pages/home'
import Admin from './admin';
import ErrInfo from './pages/errInfo';
import Test from './pages/test';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path="/" render={() => 
            <Admin>
              <Switch>
              <Route path="/home" breadcrumb="首页" component={Home} />
              <Route path="/errInfo" breadcrumb="信息" component={ErrInfo} />
              <Route path="/test" breadcrumb="测试" component={Test} />
              <Redirect to="/home" breadcrumb="首页" component={Home}/>
              </Switch>
            </Admin>
          }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
