# Vue3

[toc]

## 1、前言

 `Vue3` 目前还是 `Beta` 版本，我们可以通过多种不同的方式来使用 `Vue3`。

> 注意：因为是 Beta 的原因，虽然主要的一些 API 基本是稳定的，但是这里涉及到的一些使用方式或许会在以后有变更，同时当前的一些生态也还没有完全完全完善，所以不要在生产环境中使用，即使作为学习，也应该随时关注官方的变化。

- <span style="color:red">vue-next-webpack-preview</span>
- <span style="color:red">Vue Composition API插件</span> 
- <span style="color:red">vue-cli-plugin-vue-next</span>



## 2、vue-next-webpack-preview

https://github.com/vuejs/vue-next-webpack-preview

这种方式是使用 `webpack` 独立配置构建 `Vue3` 项目。

> 因为只是配置了基本特性（如单文件组件支持等），也没有构建上的优化，推荐作为学习使用。



## 3、Vue Composition API 插件

https://github.com/vuejs/composition-api

首先，`Vue Composition API` 只是 `Vue3` 中的其中一项特性（重要），该插件可以让我们在 `Vue2` 中只使用 `Vue Composition API` ，而不需要升级所有特性。



## 4、vue-cli-plugin-vue-next

https://github.com/vuejs/vue-cli-plugin-vue-next

一个把 `Vue2` 项目升级为 `Vue3` 的工具。

> 功能并不完善。

### 4-1、步骤

1. 首先使用 `vue-cli` 工具构建一个 `Vue2` 的项目
2. 在项目根目录下使用命令：`vue add vue-next` 构建成基于 `Vue3` 的项目。



## 5、new Vue() 与 createApp()

`Vue3` 之前使用 `new Vue()` 来构建应用根组件，现在改为 `createApp()` ，调用 `$mount` 方法进行挂载。



## 6、Fragment

之前的每一个独立的组件有且仅有一个顶层节点（元素），许多时候，我们不得不去为组件添加一层没有太多意义的顶层结构。现在 `Vue3` 支持了一个 `Fragment` 的特性，当组件中的顶层节点不是一个的时候，会通过 `Fragment` 来进行处理。

> 参考：https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment



## 7、Composition API

[https://composition-api.vuejs.org/zh/#api-%E4%BB%8B%E7%BB%8D](https://composition-api.vuejs.org/zh/#api-介绍)

https://composition-api.vuejs.org/zh/api.html#setup



## 8、Teleport

https://github.com/vuejs/rfcs/pull/112

`Vue3` 新增的内置组件 `<teleport>`，又来解决如下的一个需求：

有时，组件模板的一部分在逻辑上属于这个组件，而从技术的角度来看(即:样式需求)，最好将模板的这一部分移到 `DOM` 中的其他位置。

```html
<div id="app">
  <h1>Move the #content with the portal component</h1>
  <teleport to="#endofbody">
    <div id="content">
      <p>
        this will be moved to #endofbody.<br />
        Pretend that it's a modal
      </p>
      <Child />
    </div>
  </teleport>
</div>
<div id="endofbody"></div>
```

```js
...
components: {
  Child: { template: "<div>Placeholder</div>" }
},
...
```



## 9、Suspense

https://github.com/vuejs/rfcs/pull/148



## 10、一些杂项

### 10-1、v-model

https://github.com/vuejs/rfcs/pull/140

### 10-2、filters

https://github.com/vuejs/rfcs/pull/97

### 10-3、Custom Directive API Change

https://github.com/vuejs/rfcs/pull/32

















