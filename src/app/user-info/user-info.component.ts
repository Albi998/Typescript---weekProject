import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { getUsersInfo, getUsers } from '../users.service';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
    id: any;
    users: any;

    constructor() {}

    ngOnInit(): void {
        this.id = window.location.href.split('/').pop();
        getUsersInfo(this.id).then((users) => {
            this.users = users;
            console.log(this.users);
        });
    }
}
