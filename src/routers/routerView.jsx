import { Route, Switch, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic';

import React, { Component } from 'react';
class RouteView extends Component {
  render() {
    const { routers, defaultConfig } = this.props
    let routerDate = routers ? routers : defaultConfig;
    //筛除带有重定向的
    if (!routerDate) {
      return false
    }
    // console.log(routerDate,"y")
    let routerDatepath = routerDate.filter((item) => {
      return !item.redirect
    })
    //筛选重定向
    let defualtRouter = routerDate.filter((item) => {
      return item.redirect
    })
    //重定向
    let defualtRedirect = defualtRouter.map((item, i) => {
      return <Redirect key={i} path={item.path} to={item.redirect}></Redirect>
    })
    return (<Switch>
      {
        routerDatepath && routerDatepath.map((item, index) => {
          console.log({...item.component})
          const Comp = dynamic({
            ...item.component
          }) 
          //  要用render
          return <Route path={item.path} render={
            (api) => {

              document.title = item.title || "后台管理系统"
              return <Comp routers={item.children} {...api}></Comp>
            }
          } key={"key" + item.key}></Route>
        }).concat(defualtRedirect)
      }
    </Switch>)
  }
}
export default RouteView;