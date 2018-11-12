### vue 3.x 项目目录结构
### vue 3.x 项目目录结构
| 目录/文件      | 说明                                 |
|---------- |------------------------------------ |
|node_modules     |	npm 加载的项目依赖模块<br/>assets:放置字体（fonts）、图标(icon)、图片(images)和样式(styles)等，经webpack解析处理。<br/>
                    components:全局公用组件<br/>
                    constants:设置常量<br/>
                    directives:自定义指令<br/>
                    filters:过滤器,如文本格式化<br/>
                    layouts:页面布局<br/>
                    pages:页面<br/>
                    plugins:插件,如注入到 Vue.prototype 中的属性或方法<br/>
                    router:路由控制<br/>
                    services:<br/>
                            各module的api请求<br/>
                │           index.js：总 api<br/>
                │           xFetch.js：封装后的fetch方法<br/>

                    store:<br/>
                        modules:模块,每个模块有State、Getter、Mutation和Action。<br/>
                        mutation-types:设置常量替代Mutation事件类型<br/>
                        index.js: 总Store<br/>
                    utils:工具包.<br/>
                    App.vue:根组件。<br/>
                    main.js:项目入口文件，引入根组件、框架、插件及路由设置等，并定义vue实例。  |
|src	      | 源码目录                                |
|description |	辅助性文字                         |
|closable   |	是否可关闭                           |
|center     |	文字是否居中                         |
|close-text	| 关闭按钮自定义文本                    |
|show-icon  |	是否显示图标                         |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|close         |关闭alert时触发的事件| —  |



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
