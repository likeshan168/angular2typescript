import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/count';
// import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/isEmpty';

import { Subject } from 'rxjs/Subject'
import { User } from './user'
const Users: User[] = [
    new User(1, 'andy', '123456'),
    new User(2, 'sherman', '123'),
    new User(1, 'lks', 'lks')
]

@Injectable()
export class LoginService {
    getUsers(): Observable<User> {
        //第一种创建Observable对象的方式
        // var obs = Observable.create(function (observer: Observer<User[]>) {
        //     observer.next(Users);
        // });
        //第二种创建Observable对象的方式
        let obs = Observable.from(Users);
        //第三种创建Observable对象的方式
        // let obs = Observable.of(new User(1, 'andy', '123456'), new User(2, 'sherman', '123'), new User(1, 'lks', 'lks'))
        return obs;
    }

    valideUser(user: User): Observable<boolean> {
        let rst = this.getUsers().filter(u => u.password === user.password && u.userName === user.userName).isEmpty();
        console.log(JSON.stringify(user));
        return rst;
    }
}