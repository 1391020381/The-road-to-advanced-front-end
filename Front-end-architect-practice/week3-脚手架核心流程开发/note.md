# 需求分析
* 通用的研发脚手架
* 通用的项目/组件创建能力
    - 模块支持定制 定制后能够发布生效
    - 模版支持快速接入 极低的接入成本
* 通用的项目/组件发布能力
    - 发布过程自动完成标准的git操作
    - 发布成功后自动删除开发分支并创建tag  
    - 发布后自动完成云构建 OSS上传 CDN上传 域名绑定
    - 发布过程支持测试/正式两种模式

# 大厂是如何做git操作的？
1. git repositiory
2. for your git repositiory
3. git clone  your local git repositiory
4. git 操纵  
    - git checkout -b [new branch]
    - git add . && git commit
    - git pull origin master
    - git push origin [your branch]
5. pull request （code review）
6. 创建tags & 删除开发分支