---
editLink: false
---

# 开启前端之路
:tada: :100: :grinning:
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
::: danger STOP
危险区域，禁止通行
:::

js语法格式：
```js
console.log('你好，VuePress！')
```
html语法格式：
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
高亮显示某行代码：
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
导入代码段：

<<< @/docs/demo.js{2}