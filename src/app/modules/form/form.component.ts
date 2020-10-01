import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/service/user.service';
import {User} from '../user/models/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    selectedId: any;

    usersID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    user: User;

    form: FormGroup;
    aloneField: FormControl;


    constructor(private userService: UserService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
    }

    getUser(): void {
        this.userService.getUsersById(this.selectedId).subscribe(user => {
            this.user = user;

            this.form = this.formBuilder.group({
                name: [this.user.name, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
                username: [this.user.username, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
                address: [this.user.address.street, [Validators.required, Validators.min(6), Validators.max(99)]],
                email: [this.user.email, [Validators.required, Validators.email]],
                id: [this.user.id, [Validators.pattern('^[0-9]+$'), Validators.min(1)]],
            });
        });
    }

    submitFunction(): void {
        console.log(this.form.value);
    }
}
