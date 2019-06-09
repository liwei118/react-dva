import React, { Component } from 'react'
import { connect } from 'dva';
@connect(state=>state)
export default class UserHome extends Component {

    render() {
        console.log(this)
        return (
            <div>
                this is UserHome
            </div>
        )
    }
}
