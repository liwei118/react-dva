import React, { Component } from 'react'
import RouteView from './../../../routers/routerView';


export default class Order extends Component {
    render() {
        const { routers } = this.props
        return (
            <div>
                this is 订单管理
                <RouteView routers={routers}></RouteView>
            </div>
        )
    }
}

