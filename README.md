This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
#React 组件化
树形结构
## 入口文件
index.js
## PWA
PWA progressive web application
上线到https 协议的服务器，断网下仍可访问
import * as serviceWorker from './serviceWorker';

### React 响应式设计思想和事件绑定
- 不操作DOM，自动检测数据层的变化，进行页面渲染
 // 赋值使用this.setState
   // 删除操作
        // 存一个原数组的备份，对备份进行修改后重新赋值给原原数组
        // 不可直接改变数据，immutable，不允许直接对原数据进行任何改变，性能优化
 // state 负责存储组件里的 数据
        // 数据与DOM结合与分离
          // React 事件绑定 onChange 
    render() {
        // react 要求返回单个标签，若有多个，最外层必须有一个标签包裹，若不想使用且不想添加到页面上，则引入Fragment
      
### JSX语法细节
- JSX语法 <App />
- 变量与表达式需要用{}包裹
// 标签可以自定义。但必须以大写字母开头，称为组件。小写为普通元素
- 编写注释：
在JSX中，第一种，使用{/* 注释*/}定义
第二种，
{// 这是注释
}
- 使用className代替原来的class
- 使用 dangerouslySetInnerHTML = {{
                                    __html:item
                                }}代替原来的item，会防止标签转义，存在XSS攻击的危险。
- label标签中，使用 htmlFor代替原来的for
```js
<label  htmlFor="insertArea">label标签作用，点击这里会聚焦到相关输入框</label>
``` 

- 拆分组件和组件之间的传值，子父组件传值
通过定义属性的方式
 父组件中：<TodoItem  content={item}/>
 子组件中： {this.props.content}
在子组件中绑定this指向
constructor中绑定
```js
 constructor(props){
        super(props);
        this.handleClick =this.handleClick.bind(this);
    }
```
父组件向子组件传递方法：
注意绑定this,this的绑定一般放在constructor中完成


声明式开发
可以与其他框架并存，只操作index.html下的id=root

组件化
class继承Component

单向数据流
父组件向子组件传递只读属性
子组件中不能直接改变父组件的值
原因：若有多个组件去修改这个属性，则无法判断是哪个组件进行了修改

视图层框架 构建大型项目时 借助Redux，Flutter进行组件间的通信传值

函数式编程更容易实现自动化测试

数据发生变化，页面跟着变化，原因就是页面是render函数渲染出来的，
当state、props数据变化时，render就重新绘制一次，发生联动
Test.js

虚拟DOM
