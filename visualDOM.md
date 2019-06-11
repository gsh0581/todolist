# 虚拟DOM

- 没有虚拟DOM的概念下
### 第一种解决方案
1.state数据
2.JSX模板
3.render() 对数据和模板进行结合，生成真实的DOM，并显示
4.state发生改变
5.数据+模板结合，生成真实DOM，并替换原始DOM

#### 致命缺陷：
第一次生成DOM完整的DOM片段
第二次又生成完整的DOM，并替换第一次，非常消耗性能

### 第二种解决方案
1.state数据
2.JSX模板
3.数据+模板结合，生成真实的DOM，显示
4.state发生改变
5.数据+模板结合，生成真实的DOM，将新DOM（文档碎片）与旧DOM作对比，找差异
6.对差异部分进行更新替换
#### 缺陷：性能提升不明显

### 引入虚拟DOM
JSX->JS对象->真实DOM
1.state数据
2.JSX模板
3.数据+模板结合，.生成虚拟DOM（一个JS对象，用它来描述真实DOM）
4.用虚拟DOM生成真实的DOM，显示


```js
<div id= "abc"><span>bye</span></div>
['div',{id:'abc'},['span',{},'bye']]
```
5.state发生变化
6.生成新的虚拟DOM
```js
['div',{id:'abc'},['span',{},'hello']]
```
7.比较原始虚拟DOM和新的虚拟DOM的区别，找出区别是span中的内容
8.直接操作DOM，改变span中的内容  

优点：虚拟DOM本质就是js对象，只是对两个js对象进行比对，极大提升了性能

return <div>item</div> 
JSX底层的行为：return React.createElement('div',{},'item')

优点：
1. 性能提升
2. 使得跨端应用得以实现。React Native