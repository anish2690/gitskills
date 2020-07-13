# Vue 基础 - UI构建

[TOC]

## 1、Vue 是什么？

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的 **渐进式框架**。

### 1-1、用户界面

[用户界面？](https://baike.baidu.com/item/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/6582461?fromtitle=UI&fromid=393851)

### 1-2、渐进式



## 2、组件化

一个 Vue 应用由一个通过 `new Vue` 创建的**根 Vue 实例**，以及可选的嵌套的、可复用的组件树组成。



## 3、一切就从根组件开始

每个 Vue 应用都是通过用 `Vue` 函数（类）创建一个新的 **Vue 实例**开始的。



## 4、Options API

Vue 是通过 Options （选项） 的方式对外提供接口，通过已经指定好的不同的 Option 来完成指定的功能。



## 5、组件视图模板

一般的 UI 组件是需要有 html、css 去展示对应的界面（视图）的。所以，我们需要给这种组件设置模板。

### 5-1、模板

因为我们通常需要根据用户的操作或者不同的数据得到不一样的界面，所以模板并不会直接出现在用户面前（DOM结构中），而是需要通过一个解析的过程，把模板解析成最终的 html 结构，然后再渲染到实际的 DOM 结构中。

> 模板 -> 解析 -> DOM

### 5-2、template 选项

组件的模板其实就是一段类似 html 的字符串，该内容会被 Vue 进行解析，得到解析后的 HTML ，然后渲染到指定的位置。



## 6、挂载组件

组件被创建并不意味着它会立即出现在 DOM 中，如同原生的 createElement 一样，还需要通过 appendChild、replaceChild 等方法添加到DOM结构指定的位置中。

### 6-1、.$mount() 方法

在 Vue 中，组件需要调用其 $mount 方法去指定渲染后的结果（结构）所在的 DOM 结构的位置，我们称其为 `挂载`。



## 7、数据定义

正如之前说到的，UI 包含了一个重要的内容：信息交互，其实也就是数据。其中展示数据，或者根据数据展示不同的视图是一种常见的场景。

### 7-1、data 选项

Vue 提供了一些选项用来存储当前组件需要使用到的数据，`data` 就是其中一个常用的选项。

- data 的值必须是一个对象或者返回对象的函数
  - new Vue 组件中的 data 可以是对象，也可以是返回一个对象的函数
  - 可复用组件的 data 必须是一个返回对象的函数
  - Vue 提供了多种形式去访问 data 数据
    - 组件对象.$data.数据
    - 组件对象._data.数据
    - 组件对象.数据
    
    

## 8、模板语法

为了方便我们在模板中使用组件中的数据，Vue 为我们提供了一种称为：插值表达式的 模板语法。

### 8-1、插值语法

默认情况下，Vue 使用的是 `{{表达式}}` 这种双大括号文本插值语法（Mustache），我们可以在 `{{}}` 直接调用组件中的数据和方法，或者直接书写 js 表达式。

### 8-2、响应式

响应式 - 是 Vue 有别于普通模板引擎的一个重要特性。当数据发生改变的时候，Vue 会自动更新有关视图，让我们把更多的精力投入到数据、业务处理等任务中。



## 9、使用指令进行更强大的 DOM 操作

指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

在 `vue` 中，指令是一个带有 `v-` 前缀的属性，与普通属性不一样的地方在于，指令的值是引号括起来的 `表达式`，不同的指令有不同的作用，`vue` 内置了一些常用的指令，后期我们还可以自定义属于自己的指令。

- 指令值中不能使用 `{{}}`

内置指令的一些分类：

- 内容输出
- 循环
- 逻辑
- 属性绑定
- 事件
- 其它



## 10、条件渲染

### 10-1、v-show 指令

根据表达式的值（布尔值），切换元素的显示与隐藏（display 属性）。

> 适用于状态切换比较频繁的情况

### 10-2、v-if 指令

根据表达式的值（布尔值），创建或销毁元素。

> 适用于状态切换不频繁的情况

### 10-3、v-else / v-else-if 指令

与 `v-else` 配合。



## 11、列表渲染

### 11-1、v-for 指令

根据数据循环渲染 `v-for` 指令所在的元素及其子元素

可以循环的数据：Array | Object | number | string | Iterable (2.6 新增)

```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, name, index) in object"></div>
```

> <u>v-for</u> 中也可以使用 <u>of</u> 语法，在 <u>vue</u> 中两者没有什么区别



## 12、属性绑定

### 12-1、v-bind 指令

绑定数据（表达式）到指定的属性上，`<div v-bind:参数="值/表达式"></div>`，这里的参数就是指定的属性名称

```html
<div id="app">
  <div v-bind:id="'box1'"></div>
  <div v-bind:id="myId"></div>
</div>

<script>
	new Vue({
    el: '#app',
    data: {
      myId: 'kaikeba'
    }
  })
</script>
```

#### 12-1-1、缩写

有的一些常用指令会有对应的缩写，`v-bind` 对应的缩写为：`:`

```html
<div :id="myId"></div>
```

### 12-2、普通属性绑定

上述就是普通的属性绑定方式，Vue 针对样式相关的绑定的值上有一些特殊的处理。

### 12-3、样式与class绑定

#### 12-3-1、style

原生普通写法

```html
<div style="width: 100px; height: 100px; background: red"></div>
```

**v-bind 写法**

```html
<div :style="'width: 100px; height: 100px; background: red'"></div>
```

**对象写法**

```html
<div :style="style1"></div>

...
<script>
new Vue({
	el: '#app',
	data: {
		style1: {
      width: '100px',
      height: '100px',
      background: 'green'
    }
	}
});
</script>
```

**数组写法**

```html
<div :style="[style1, style2]"></div>

...
<script>
new Vue({
	el: '#app',
	data: {
		style1: {
      width: '100px',
      height: '100px',
      background: 'green'
    }
	},
  style2: {
    border: '1px solid black'
  }
});
</script>
```

#### 12-3-2、class

**原生普通写法**

```html
<div class="box1 box2"></div>
```

**v-bind 写法**

```html
<div :class="'box1 box2'"></div>
```

**数组写法**

```html
<div :class="['box1', 'box2']"></div>
```

**对象写法**

```html
<div :class="{'box1': isActive, 'box1': isChecked}"></div>
```

使用对象写法，可以根据值（boolean）动态添加对应的 <u>class</u>



## 13、单向数据流与双向数据属性绑定

通过上面的知识点和案例，我们可以看到，当数据更新的时候，页面视图就会更新，但是页面视图中绑定的元素更新的时候，对应的数据是不会更新的

```html
<input type="text" :value="title" />
```

我们称为：单向数据流 <u>数据 -> 视图</u>

在 <u>vue</u> 中，还有一种双向数据流绑定的方式

### 13-1、v-model 指令

```html
<input type="text" v-model="title" />
```

数据 `title` 更新，视图中 `input` 的 `value` 就会更新。同时，当 <u>input</u> 中的 `value` 更新的时候，数据 `title` 也会更新。

> ⚠️：不是所有元素组件都支持 v-model 的，默认情况下，input、select 等可交互的表单元素支持。



## 14、表单

<u>v-model</u> 在内部为不同的输入元素使用不同的属性和事件来处理数据

- `text` 和 `textarea`
- `checkbox` 和 `radio`
- `select`

### 14-1、text 和 textarea

`text` 和 `textarea` 元素使用 `value` 属性和 `input` 事件

```html
<div id="app">
  <input type="text" v-model="v1" />
  <textarea v-model="v2" cols="30" rows="10"></textarea>
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    v1: 'aaa',
    v2: 'bbb'
  }
});
```

### 14-2、checkbox 和 radio

`checkbox` 和 `radio` 使用 `value` 属性和 `change` 事件

**单选框绑定一个值**

```html
<div id="app">
  <input type="radio" v-model="v3" value="男" /> 男
  <input type="radio" v-model="v3" value="女" /> 女
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    v3: '女',
  }
});
```

**多选框绑定到一个布尔值或数组**

```html
<div id="app">
  <input type="checkbox" v-model="v4" /> 同意
  <hr/>
  <input type="checkbox" v-model="v5" value="足球" /> 足球
  <input type="checkbox" v-model="v5" value="音乐" /> 音乐
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    v4: true,
    v5: ['足球', '音乐']
  }
});
```

### 14-3、select

`select` 字段将 `value` 作为 `prop` 并将 `change` 作为事件

**单选绑定到值，多选绑定到数组**

```html
<div id="app">
  <select v-model="v3">
    <option value="男">男</option>
    <option value="女">女</option>
  </select>
  <select v-model="v5" multiple>
    <option value="足球">足球</option>
    <option value="音乐">音乐</option>
  </select>
</div>
```



## 15、事件

在 `vue` 中，事件通过指令 `v-on` 指令进行绑定，`v-on` 缩写 `@` 

### 15-1、v-on 指令

```html
<组件 v-on:事件名称="表达式" />
<组件 @事件名称="表达式" />
```

### 15-2、methods 选项

在组件选项中，提供了一个 `methods` 选项，用来存放组件中使用的函数方法。

### 15-3、通过内联方式绑定事件处理函数

- 事件绑定函数中的 `this` 指向该组件实例。
- 事件绑定函数中的第一个参数默认为 `event` 对象。

也可以在事件绑定中直接调用函数（并不会立即执行，也是通过事件触发执行的）。

- 事件对象需要手动传入，名称为 `$event` （该名称是固定名称）。



## 16、计算属性

在实际应用开发中，我们会用到各种各样的数据，有的数据是原始数据，而有的数据是根据某种条件通过原始数据计算得到的派生数据。

### 16-1、computed 选项

`computed` 选项是一个对象，每一个 `key` 对应一个属性，且该属性是通过 `getter/setter` 的方式来进行定义的。



## 17、数据观察

Vue 提供了一个 `watch` 的选项来对指定的响应式数据进行观察，用于处理一些任务。

使用场景

- 一对多的数据更新
- 异步任务
- 与数据更新无关的其它任务



## 案例：购物车

