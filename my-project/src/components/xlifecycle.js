import React from 'react';
import ReactDOM from 'react-dom';

//react的组件生命周期可分为三个状态：
    //Mounting:  已插入真实的DOM/已挂载
    //Updating:  正在被重新渲染
    //Unmounting:  已移除真实的DOM
//生命周期的钩子函数
    //componentWillMount  挂载前/渲染前调用，数据已生成，但还未渲染到页面，即在客户端也在服务端
    //componentDidMount  第一次数据渲染到页面后调用，大多数操作都在这个生命周期，只在客户端
    //componentWillUpdate  在组件接收到新的props或者state，但还没有渲染时被调用
    //componentDidUpdate  在组件接收到新的props或者state，并且已经渲染成功后调用
    //componentWillUnmount  在组件从DOM中移除时调用，在被删除的组件中触发
import Xchilden from './childen.js'

class Xlifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '生命周期',
            text: '',
            bool: true
        };
    }
    getInputValue(e){
        this.setState({
            text:e.target.value
        })
    }
    toggle() {
        this.setState({
            bool: !this.state.bool
        })
    }
    render() {
        return (
            <div ref={'ele'}>
                <p style={{color:'red'}}>{this.state.name}</p>
                <input ref={'text'} type='text' onChange={this.getInputValue.bind(this)} />
                <p>输入的内容为：{this.state.text}</p>
                <button onClick={this.toggle.bind(this)}>增删节点</button>
                {
                    (function(self){
                        if(self.state.bool){
                            return <Xchilden />
                        }else{
                            return
                        }
                    })(this)
                }
            </div>
        )
    }
    componentWillMount() {
        console.log(this.state);
        console.log(this.refs);
        alert('componentWillMount ==> 控制台显示state数据已生成，但是没有渲染DOM结构，打印的节点为空')
    }
    componentDidMount() {
        console.log(this.state);
        console.log(this.refs);
        console.log('componentDidMount==>在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构');
        alert('componentDidMount ==> 此时控制台显示节点已经存在了')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate => 在组件接收到新的props或者state，但还没有渲染时被调用，在输入时这个函数打印的this.state中的text为渲染前的状态。注意：在初始化时不会被调用')
        console.log('==>' + this.state.text);
        console.log(this.refs.text);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate => 在组件接收到新的props或者state，并且已经渲染成功后调用')
        console.log('==>' + this.state.text);
        console.log(this.refs.text);
    }
    
}

export default Xlifecycle;