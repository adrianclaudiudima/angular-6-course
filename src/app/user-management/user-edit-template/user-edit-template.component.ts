import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {UserEditTemplateService} from './user-edit-template.service';
import {UserDataService} from './user-data.service';

@Component({
  selector: 'app-user-edit-template',
  templateUrl: 'user-edit-template.component.html',
  styleUrls: ['user-edit-template.component.scss'],
  providers: [UserEditTemplateService]
})
export class UserEditTemplateComponent implements OnInit {
  shouldDisplayForm = false;
  asyncValue: string;
  user: User;

  constructor(private userService: UserEditTemplateService, private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.shouldDisplayForm = this.userService.getDisplayForm();
    this.userDataService.getDetails().subscribe(value => {
      this.asyncValue = value;
    });
  }


}
