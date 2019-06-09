import React, { Component } from 'react';
import WrappedNormalLoginForm from './from';
import style from "./style.css"
import { connect } from 'dva';
@connect(t => t)
class Login extends Component {
    render() {
        console.log(this)
        return <div className={style.LoginWrapper}>
            <div className={style.login}>
                <WrappedNormalLoginForm {...this.props}></WrappedNormalLoginForm>
            </div>
        </div>
    }
}
export default Login;