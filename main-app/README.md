# apponly

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
as: (https://zhuanlan.zhihu.com/p/196428171)
as: (https://zhuanlan.zhihu.com/p/339904439)





### tips
<!-- 微应用拆分注意几个问题： -->
. 子应用生命周期暴露：：： 子应用入口处需要暴露几个子应用的生命钩子，，便于在webpack打包后模块的函数声明中可提取使用，
所欲打包出声明librytarget


. 主应用访问子应用跨域问题：：： 子应用需要在webpack配置出允许跨域设置headers，不然会出现
     主应用出需要

. 路由注册：：： 子应用的所有路由需要注册到主应用下才可以访问

原理： 主应用作为基座，承载子应用




:::
