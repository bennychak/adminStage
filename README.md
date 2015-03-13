微助产品后台前端重构
==========

##框架和主要控件

bootstrap + jQuery  
font-awesome图标库  
SB Admin 2 后台结构模块  
百度umeditor编辑器

##业务页面

28个页面html/css，含：

角色管理x3：  
创建角色role-create.html  含表单验证、success浮层  
编辑角色role-edit.html  含表单验证  
管理角色role-manage.html  含前端dataTable查询

帐号管理x4：  
创建帐号account-create.html  含表单验证、success浮层  
编辑帐号account-edit.html  含表单验证  
管理帐号account-manage.html  含前端dataTable查询  
开启帐号account-on.html  含表单验证

企业管理x7：  
部门管理enterprise-departmentmanage.html  
信息管理enterprise-infomanage.html  含表单验证  
信息编辑enterprise-infoedit.html  含表单验证  
信息预览enterprise-infoview.html  
职务管理enterprise-jobmanage.html  含表单验证、前端dataTable查询  
职级管理enterprise-titlemanage.html  含表单验证、前端dataTable查询  
人员管理enterprise-personmanage.html  含表单验证、前端dataTable查询

通知管理x4：  
创建通知notice-create.html  含添加通知类型交互js、表单验证、预览浮层、success浮层  
编辑通知notice-edit.html  含添加通知类型交互js、表单验证、预览浮层、success浮层  
管理通知notice-manage.html  含前端dataTable查询  
预览通知notice-view.html

课程管理x7：  
添加课程course-create.html  含表单验证、预览浮层、编辑器、编辑课程交互js  
编辑课程course-edit.html  含表单验证、预览浮层、编辑器、编辑课程交互js  
课程库course-manage.html  含前端dataTable查询、课程预览浮层  
发布课程course-publish.html  含表单验证、预览浮层  
已发布课程管理course-published.html  含前端dataTable查询、课程预览浮层  
转发课程course-relay.html  含表单验证、预览浮层  
再次发送课程course-republish.html

密码管理x1：  
重置密码password-reset.html 含表单验证、json验证

登录页x1：  
登录页login.html  含表单验证、写cookie/清cookie、json验证

帮助页x1：  
帮助页help.html

##功能控件

下拉select模拟  
fuelux  
http://getfuelux.com

表单前端验证  
bootstrapValidator  
http://formvalidation.io

信息表格  
datatables  
http://www.datatables.net  
* 表格的前置checkbox批量编辑 请参考 https://editor.datatables.net/examples/inline-editing/simple

文件上传控件  
https://blueimp.github.io/jQuery-File-Upload

日期时间控件  
http://jdewit.github.com/bootstrap-timepicker

##日志（不完全）

150130 登录页面增加回车提交逻辑  
150131 添加添加课程页面course-create.html  
150201 去响应式处理 所有页面和样式改版 添加课程页面continue  
150204 添加课程页面封面和章节对应交互js  
150205 手机号码浮层  
150208 推送发布页course-publish.html 帮助页help.html 课程页面表单前端验证 已发布课程course-published.html 课程库course-manage.html 课程编辑页course-edit.html和删除浮层 课程转发course-relay.html 再次发送课程coursr-republish.html  
150210 登录方式从js submit改成trigger submit按钮
150311 课程管理流程优化，去掉“推送发布”，功能合并至“课程库”；课程编辑页面加“取消”