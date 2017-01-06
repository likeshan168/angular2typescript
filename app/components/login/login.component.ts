import { Component, OnInit } from '@angular/core'
import { CookieService } from 'angular2-cookie/services/cookies.service'
import { User } from './user'
import { LoginService } from './login.service'
@Component({
    //使用module之后不能使用该属性，否则会报错
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    constructor(private cookieService: CookieService, private loginService: LoginService) { }
    // user = new User(1, 'andy', '123456');
    user: User = new User(1, '', '');
    submitted: boolean = false;
    //默认是不记住登录
    rememberMe: boolean = false;
    msg: string = '';
    ngOnInit(): void {
        //获取用户是否记住登录
        let cuser = <User>this.cookieService.getObject('userInfo');
        if (cuser) {
            this.user = cuser;
            this.rememberMe = true;
        }
    }

    get diagnostic() {
        return JSON.stringify(this.user);
    }

    login(): void {
        //验证是否登陆成功
        this.loginService.valideUser(this.user).subscribe(p => {
            this.submitted = !p;
            if (!p) {
                this.msg = '登录成功';
                //验证是否记住登录
                if (this.rememberMe) {
                    //将用户信息写入到cookie
                    let date = new Date();
                    let day = date.getDay() + 7;
                    let expiresDate = new Date(date.getFullYear(), date.getMonth(), day);
                    this.cookieService.putObject('userInfo', this.user, { expires: expiresDate });
                }
                else {
                    this.cookieService.remove('userInfo');
                }
            }
            else {
                this.msg = '登录失败'
            }
        });

        console.log(this.user.userName + ':' + this.user.password);
    }
}