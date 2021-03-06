# 将收获什么
* 脚手架的实现原理（nodejs原生开发 搭建 开发 上线部署）
* Lerna的常用用法
* 架构设计技巧和框架绘制方法。
# 主要内容
* 学习如何以架构师的角度思考基础架构问题
* 多Package项目管理痛点和解决方案,基于Lerna脚手架框架搭建
* imooc-cli脚手架需求分析和架构设计,架构设计图。

# 其他内容
* 脚手架调试技巧
* Lerna源码分析
* Node的module模块分析
* yargs使用方法
* 剖析Lerna架构设计

# 关键词
* 脚手架 - 掌握脚手架原理和开发全流程
* Lerna - 解决多Package项目管理痛点
* 架构设计 - 学习大厂基础架构设计思路

# 学习方法
* 架构三部曲:掌握原理 -> 独立思考 —> 总结反思
* 深度剖析优秀开源项目,由表及里,由浅入深。
* 视角切换:多切换到架构师视角,从全局思考问题。

# 注意事项




# 脚手架的核心作用
1. 创建项目 + 通用代码
    - 埋点 监控
    - HTTP请求
    - 工具方法
    - 组件库
    - 状态管理

2. git操作
    - 创建仓库
    - 代码冲突
    - 远程代码同步
    - 创建版本
    - 发布tag
3. 构建 + 发布上线
    - 依赖安装和构建
    - 资源上传到CDN
    - 域名绑定
    - 测试/正式服务器   
# 脚手架核心价值
* 将研发过程:
    - 自动化:项目重复代码拷贝/git操作/发布上线操作 
    - 标准化:项目创建/git flow / 发布流程 / 回滚流程
    - 数据化:研发过程系统化 数据化 使得研发过程可量化 

# 和自动化构建工具的区别
* 问题:jenkins travis等构建工具已经比较成熟了,为什么需要自研脚手架？
    - 不满足需求:jenkins travis 通常在git hooks中触发 需要在服务端执行,无法覆盖研发人员本地的功能,如:创建项目自动化 本地git操作 自动化等
    - 定制复杂:jenkins travis定制过程需要开发插件 其过程较为复杂,需要使用java语言 对前端同学不够友好。
    -  cli 接入 jenkins,在jenkins的控制台打包过程书输入到cli 需要定制

# 脚手架实现原理
* 描述脚手架命令执行全过程
1. 用户输入 vue create vue-test-app
2. 在环境变量 $PATH中查询 vue命令  （which vue）
3. 查询实际连接文件
4. 通过 /usr/bin/env node 执行文件


# 脚手架开发流程详解
## 开发流程
* 创建 npm项目
* 创建脚手架入口文件 ,最上方添加 #!/usr/bin/env/ node
* 配置 package.json 添加 bin属性
* 编辑脚手架代码
* 将脚手架发布到 npm


# 脚手架本地调试
1. npm unlink
2. npm link 安装到全局   package.json  bin

3. 分包调试
    - imooc-test-lib    npm link 安装到全局
    - imooc-test        手动在package.json 倒入依赖


 * 链接本地脚手架
    - cd your-cli-lib
    - npm link

* 链接本地库文件
    - cd your-lib-dir
    - npm link
    - cd your-cli-dir
    - npm link your-lib    

* 取消链接本地库文件
    - cd your-lib-dir
    - npm unlink

    - cd your-cli-dir
    - npm unlink your-lib (link 存在)
    - rm -rf node_modules  （link不存在)
    - npm install -s your-lib


 # 理解 npm link
 * npm link your-lib:将当前项目中的 node_modules 下指定的库文件链接到node 全局 node_modules下的库文件
 * npm link：将当前项目链接到 node全局 node_modules中作为一个库文件,并解析 bin配置创建可执行文件   


# 理解 npm unlink
* npm unlink:将当前项目从node全局 node_modules中移除
* npm unlink your-lib:将当前项目中的库文件依赖移除

# 脚手架命令注册和参数解析
* process.argv

# 脚手架项目发布
* npm unlink 本地软链接
* npm run publish

