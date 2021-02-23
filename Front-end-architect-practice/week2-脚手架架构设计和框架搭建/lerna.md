* 痛点一：重复操作
    - 多Package本地link
    - 多Package依赖安装
    - 多Package单元测试
    - 多Packge代码提交
    - 多Package代码发布

* 痛点二:版本不一致
    - 发布时版本不一致
    - 发布后相互依赖版本升级
* package越多 管理复杂度越高    

# lerna开发脚手架流程
1. 脚手架项目初始化
    - 初始化npm 项目
    - 安装lerna
    - lerna init 初始化项目
2. 创建package
    - lerna create 创建package
    - lerna add 安装依赖
    - lerna link 链接依赖
3. 脚手架开发和测试
    - lerna exce 执行shell脚本
    - lerna run 执行 npm 命令
    - lerna clean 清空依赖
    - lerna bootstrap 重装依赖 
4. 脚手架发布上线
    - lerna version bump vsersion
    - lerna changed 查看以上版本以来的所有变更
    - lerna diff 查看 diff
    - lerna publish 项目发布     
