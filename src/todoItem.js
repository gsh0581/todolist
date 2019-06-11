import React,{Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick =this.handleClick.bind(this);
    }
    render(){
        // 通过解构赋值 获取 传递来的值
        const {content,test} = this.props
        return <div onClick={this.handleClick}>
            {content} - {test}
        </div>
    }
    handleClick(){
        const {deleteItem,index} = this.props
        deleteItem(index);
    }
}
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
} //强校验
TodoItem.defaultProps={
    // test:[1,23]
    test:"666"
}//设置默认参数
export default 
    TodoItem;
