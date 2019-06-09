import React, { Component } from 'react';
import RouteView from '../routers/routerView';
import style from "../common/css/index.css"
class App extends Component {
    render() {
        return <div className={style.wrapper}>
            <RouteView defaultConfig={this.props.routers}></RouteView>
        </div>
    }
}
export default App;