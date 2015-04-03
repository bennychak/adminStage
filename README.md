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

独立H5页x1：  
App下载页weizhu_h5/index.html

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

##日志

<table width="100%" style="display:table">
<thead>
<th>日期</th>
<th>提交次数</th>
<th>日志</th>
</thead>
<tbody>
<tr>
<th>2015.3.24</th>
<td>5</td>
<td></td>
</tr>

<tr>
<th>2015.3.16</th>
<td>1</td>
<td></td>
</tr>

<tr>
<th>2015.3.14</th>
<td>3</td>
<td></td>
</tr>

<tr>
<th>2015.3.13</th>
<td>3</td>
<td></td>
</tr>

<tr>
<th>2015.3.11</th>
<td>3</td>
<td>课程管理流程优化， <br />
	去掉“推送发布”，功能合并至“课程库”； <br />
	课程编辑页面加“取消”  </td>
</tr>

<tr>
<th>2015.3.10</th>
<td>2</td>
<td></td>
</tr>

<tr>
<th>2015.2.10</th>
<td>6</td>
<td>新的登录页 <br />
	登录方式从js submit改成trigger submit按钮 </td>
</tr>

<tr>
<th>2015.2.9</th>
<td>1</td>
<td>推送发布页course-publish.html <br />
	帮助页help.html <br />
	课程页面表单前端验证 <br />
	已发布课程course-published.html <br />
	课程库course-manage.html <br />
	课程编辑页course-edit.html和删除浮层 <br />
	课程转发course-relay.html <br />
	再次发送课程course-republish.html <br />
	手机号码浮层</td>
</tr>

<tr>
<th>2015.2.2</th>
<td>2</td>
<td>所有页面和样式改版（去响应式处理，添加课程页面） <br />
	添加课程页面封面和章节对应交互js <br />
	添加添加课程页面course-create.html </td>
</tr>

<tr>
<th>2015.1.29</th>
<td>4</td>
<td>页面include化，含导航 <br />
	登录页面增加回车提交逻辑</td>
</tr>

<tr>
<th>2015.1.22</th>
<td>1</td>
<td></td>
</tr>

<tr>
<th>2014.12.1</th>
<td>1</td>
<td>课程管理、统计分析、任务考核占位 <br />
	analysis页面x2 </td>
</tr>

<tr>
<th>2014.11.26</th>
<td>2</td>
<td>删除logo下方“微助后台”文字</td>
</tr>

<tr>
<th>2014.11.25</th>
<td>1</td>
<td></td>
</tr>

<tr>
<th>2014.11.23</th>
<td>5</td>
<td>添加登录页 导航logo</td>
</tr>

<tr>
<th>2014.11.21</th>
<td>6</td>
<td></td>
</tr>

<tr>
<th>2014.11.20</th>
<td>12</td>
<td></td>
</tr>

<tr>
<th>2014.11.17</th>
<td>1</td>
<td>非data表单验证</td>
</tr>

<tr>
<th>2014.11.14</th>
<td>8</td>
<td>表单验证</td>
</tr>

<tr>
<th>2014.11.13</th>
<td>3</td>
<td></td>
</tr>

<tr>
<th>2014.11.12</th>
<td>4</td>
<td></td>
</tr>

<tr>
<th>2014.11.7</th>
<td>1</td>
<td></td>
</tr>

<tr>
<th>2014.10.28</th>
<td>6</td>
<td>新页面</td>
</tr>

<tr>
<th>2014.9.29</th>
<td>1</td>
<td></td>
</tr>

<tr>
<th>2014.9.28</th>
<td>2</td>
<td>建立页面分支，创建readme</td>
</tr>
</tbody>
</table>