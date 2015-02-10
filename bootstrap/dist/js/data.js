$(function(){

	// 定义cookie
    var cookie = function(n, v, d) {
        var k = '', D;
        if (d) {
            D = new Date();
            D.setTime(D.getTime() + d * 24 * 60 * 60 * 1000);
            k = '; expires=' + D.toGMTString();
        }
        document.cookie = n + '=' + v + k + '; path=/';
    };

    // 登录
    // ------------------------------

    // 获取登录控件
    var login_btn = $('#login_btn'),
        login_email = $('#login_email'),
        login_password = $('#login_pass'),
        login_form = $('#login_form'),
        login_alert = $('#login_alert'),
        submitLogin = function(){

            // 获取控件输入的值
            var data = {
                admin_email: login_email.val(),
                admin_password: login_password.val()
            };

            $.ajax({
                url: 'http://218.241.220.36:8099/admin/json/AdminService/adminLogin',
                type: 'post',
                data: data,
                dataType: 'json',
                success: function(data) {
                    if(data.result === 'SUCC'){

                        // 注入cookie 名值时间
                        cookie('x-session-key', data.session_key, 0.25);
                        // 刷新页面

                        login_form.attr('action',login_form.attr('role'));
                        login_form[0].submit();
                        //location.href = location.origin + login_form.attr('role');

                    }else{
                        login_alert.text(data.fail_text).show();
                    }
                }
            });

        }

    login_form.keydown(function(e){ 
        var curKey = e.which;
        if(curKey == 13){ 
            login_btn.click(); 
            return false; 
        } 
    }); 

    login_btn.on('click', function() {
        submitLogin();
    });

    // 登出
    // ------------------------------

    var logout = $('#logout');

    logout.on('click',function(){

        // 通知后台
        $.ajax({
            url: 'http://218.241.220.36:8099/admin/json/AdminService/adminLogout',
            type: 'get',
            dataType: 'json',
            success: function(data){

            // 清除cookie
            cookie('x-session-key',0,-1)

            }
        });

    });

    // 修改密码
    // ------------------------------

    var pwreset_btn = $('#pwreset_btn'),
        pwreset_email = $('#pwreset_email'),
        pwreset_oldpass = $('#pwreset_oldpass'),
        pwreset_newpass = $('#pwreset_newpass'),
        pwreset_repeatpass = $('#pwreset_repeatpass'),
        pwreset_alert = $('#pwreset_alert');

    pwreset_btn.on('click', function() {

        // 获取控件输入的值
        var data = {
            admin_email: pwreset_email.val(),
            old_password: pwreset_oldpass.val(),
            new_password: pwreset_newpass.val()
        };

        $.ajax({
            url: 'http://218.241.220.36:8099/admin/json/AdminService/adminResetPassword',
            type: 'post',
            data: data,
            dataType: 'json',
            success: function(data) {
                console.log(data.result)
                if(data.result === 'SUCC'){

                    pwreset_alert.text('密码修改成功').show();

                }else{
                    pwreset_alert.text(data.fail_text).show();
                }
            }
        });
    });



});