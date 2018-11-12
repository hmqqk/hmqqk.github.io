### vue 3.x 项目目录结构
| 目录/文件         | 说明                                           |
|----------------- |---------------------------------------------- |
|node_modules     |	npm 加载的项目依赖模块  |
|config     |	proxy.config.js：项目代理配置<br>template-date.json：模拟后端模板注入数据  |
|lib     |	外部插件  |
|src	      | 源码目录，内含：<br>assets：放置字体（fonts）、图标(icon)、图片(images)和样式(styles)等，经webpack解析处理。<br/>components：全局公用组件<br/>constants：设置常量<br/>filters：过滤器,如文本格式化<br>layouts：页面布局<br>views：页面<br>plugins：插件,如注入到 Vue.prototype 中的属性或方法<br>routes：各module路由控制<br>services：<br>&emsp;&emsp;&emsp;xxx.js：各module的api请求<br>&emsp;&emsp;&emsp;index.js：总 api<br>&emsp;&emsp;&emsp;xFetch.js：封装后的fetch方法<br>store：<br>&emsp;&emsp;&emsp;xxx.js：模块,每个模块有mutation-types(设置常量替代Mutation事件类型)、State、Getter、Mutation和Action。<br>&emsp;&emsp;&emsp;index.js：总Store<br>utils：工具包.<br>App.vue:根组件。<br>main.js：项目入口文件，引入根组件、框架、插件及路由设置等，并定义vue实例。<br>router.js：总路由控制<br>store.js：总store|
public  |  静态资源，不被webpack处理，默认存放icon和index.html。<br>index.html：模板                         |
|.eslintrc.js  |  es语法检查配置文件  |
|.gitignore  |  git上传忽略的配置文件  |
|.npmrc  |  npm配置文件  |
|babel.config.js  |  babel 编译参数配置，将ES6代码转为浏览器识别的代码  |
|.postcssrc.js  |  PostCSS(转换CSS)配置文件  |
|build.sh  	| 项目发包shell脚本                    |
|package.json  	| 项目描述文件(项目名称、作者等信息)。                    |
|package-lock.json       |  锁定包版本号                |
|vue.config.js  	| 配置文件(可选，可被@vue/cli-service 自动加载)，如若配置webpack,设置vue.config.js中 configWebpack 和 chainWebpack（参考：https://cli.vuejs.org/config/ 和 https://cli.vuejs.org/guide/webpack.html）                |
|README.md  |  项目的说明文档，markdown 格式   


# Blog of Hong Liu

Blog: https://hmqqk.github.io.

Topics: Web Front-End Developing and More.

# Description

In order to hold on writing articles to record life, I builde my love blog nest based on the framework hexo.There is actually merits in this blog, such as easy maintenance feature, as well as various of themes. I choose the yilia as theme and add personal design to beautify pages. of Course, I customize my own homepage to know more about me.
<div align="center">
<p> a part of home page</p>
<img src="http://oiyahh2nw.bkt.clouddn.com/blog/Readme_images/home.png">
<p> a part of content page</p>
<img src="http://oiyahh2nw.bkt.clouddn.com/blog/Readme_images/content.png">
</div>
