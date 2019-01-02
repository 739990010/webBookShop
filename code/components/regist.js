import React from 'react'

export default class Regist extends React.Component{
    render(){
        return(
            <div class='wrapper'>
            <div class='core'>
                <div class='logo'>
                   <img src="images/logo.png" alt="竹书屋" />
                </div>
                <div class='title'>
                    <h2>欢迎注册竹书屋</h2>
                </div>
                <div class='regbox'>
                   <form method="post" enctype="multipart/form-data" action="main/doAction.php?act=reg" >
                    <h4>用户名</h4>
                    <input type="text"  autocomplete='off' name="user_name"  placeholder="请输入用户名" class="text" required="required" />
                    <h4>密码</h4>
                    <input type="password"  name="user_password"   class="text" required="required"/>
                    <h4>地址</h4>
                    <input type="text" name="user_address" placeholder="请输入收货地址" class='text' required="required"/>
                    <h4>电话</h4>
                    <input  type="text" pattern='1\d{10}' name="user_phone" placeholder="请输入联系方式(11位)" oninvalid="setCustomValidity('请输入11位手机号');" class='text' required="required"/>
                    <input type="submit" value='立即注册' class='reg_btn'/>
                    </form>
                </div>
            </div>
        </div>)
    }
}