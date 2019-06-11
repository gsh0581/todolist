import React, { Component, Fragment } from 'react';
import TodoItem from './todoItem';
import Test from './test'
import './style.css'
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
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    // React 事件绑定 onChange 
    render() {
        console.log(" render")
        // react 要求返回单个标签，若有多个，最外层必须有一个标签包裹，若不想使用且不想添加到页面上，则引入Fragment
        return (
            <Fragment>
                {/** */}
                {// 这是
                }
                <div>
                    <label htmlFor="insertArea">label标签作用，点击这里会聚焦到相关输入框</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref = {(input)=>{this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button></div>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
                <Test content = {this.state.inputValue} />
            </Fragment>
        )
    }
    handleInputChange(e) {
        const value = this.input.value
        this.setState(() => ({
            inputValue: value
        })) //返回函数对象，this.setState()异步设置数据，需要对value进行保存
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
            )
        })
    } //循环中的key值需要在最外层元素上
    // 添加操作
    handleBtnClick() {
        // 赋值使用this.setState
        //prevState 等价于this.state
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // 展开运算符的使用->数组合并
    }
    // 删除操作
    handleItemDelete(index) {
        this.setState((prevState)=>{
        const list = [...prevState.list];
        list.splice(index, 1);
            return {list}
        })
        // 存一个原数组的备份，对备份进行修改后重新赋值给原原数组
      
        // 不可直接改变数据，immutable，不允许直接对原数据进行任何改变，性能优化
        // this.setState({
        //     list: list
        // })
    }
}
export default TodoList