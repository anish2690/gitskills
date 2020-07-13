<template>
  <div id="app">
    <header id="header">
        <a href="/" id="logo"></a>

        <nav id="nav">
            <a href="">手机</a>
            <a href="">笔记本</a>
            <a href="">家居</a>
        </nav>

        <div id="user">
            <a href="">登录</a>
            <a href="">注册</a>
        </div>
    </header>

    
    <router-view></router-view>
    
    
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
