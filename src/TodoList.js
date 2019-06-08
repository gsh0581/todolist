import React, { Component, Fragment } from 'react';
class TodoList extends Component {
    //定义数据到组件的状态里
    constructor(props) {
        super(props);
        // state 负责存储组件里的 数据
        // 数据与DOM结合与分离
        this.state = {
            inputValue: '',
            list: []
        }
    }
    // React 事件绑定 onChange 
    render() {
        // react 要求返回单个标签，若有多个，最外层必须有一个标签包裹，若不想使用且不想添加到页面上，则引入Fragment
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}

                    /> <button onClick={this.handleBtnClick.bind(this)}>提交</button></div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li
                                key={index}
                                onClick={this.handleItemDelete.bind(this,index)}
                            >
                                {item}
                            </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    // 添加操作
    handleBtnClick() {
        // 赋值使用this.setState
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }) // 展开运算符的使用->数组合并
    }
    // 删除操作
    handleItemDelete(index) {
        // 存一个原数组的备份，对备份进行修改后重新赋值给原原数组
        const list = [...this.state.list];
        list.splice(index,1);
        // 不可直接改变数据，immutable，不允许直接对原数据进行任何改变，性能优化
        this.setState({
            list:list
        })
    }
}
export default TodoList