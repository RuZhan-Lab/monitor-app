/*
 * @Author: ruzhan
 * @Date: 2019-09-19 13:42:13
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom'

import Admin from './admin';

function App() {
  return (

      <HashRouter>
        <Switch>
          <Route path="/" render={() => 
            <Admin>

            </Admin>
          }/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
