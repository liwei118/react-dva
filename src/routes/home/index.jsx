import React, { Component } from 'react';
import style from "./index.css"
import comstyle from "./../../common/css/index.css"
import SiderMenu from './../../components/SiderMenu/index';
import RouteView from './../../routers/routerView';
import { connect } from 'dva';
@connect(state=>state)
class Home extends Component {
    render() {
        console.log(this)
        const { routers } = this.props
        return (
            <div className={style.homeWrapper}>
            {/* left */}
                <div className={style.left}>
                    <div className={style.user}>
                        <div className={style.userImg}>
                        </div>
                        <p className={style.mt12}>你瞅啥</p>
                        <b className={[style.mt12, style.radius]}></b>
                    </div>
                    <SiderMenu style={{ background: "#2F3B4C" }} {...this.props}></SiderMenu>
                </div>
            {/* right */}
                <div className={comstyle.right}>
                    <RouteView routers={routers}></RouteView>
                </div>
            </div>)
    }
}
export default Home;