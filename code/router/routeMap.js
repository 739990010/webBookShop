import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import App from '../containers/App'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Notfound from '../containers/NotFound'
import Login from '../components/login'
import Regist from '../components/regist'


export default class Routermap extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route path='/' component={App} />
                    <Route exact path='/' component={Home} />
                    <Route path='/city' component={City} />
                    <Route path='/user' component={User} />
                    <Route path='/search' component={Search} />
                    <Route path='/detail' component={Detail} />
                    <Route path='/login' component={Login} />
                    <Route path='/regist' component={Regist} />
                    <Route path='/+' component={Notfound} />
                </div>
            </BrowserRouter>
        )
    }
}