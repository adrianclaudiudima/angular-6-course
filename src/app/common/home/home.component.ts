import {Component} from '@angular/core';
import {UserAuthenticationService} from '../user-authentication.service';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {

  listOfString: Array<string> = [
    'Some content 1 without pipes ',
    'Some content 2 without pipes ',
    'Some content 3 without pipes ',
    'Some content 4 without pipes ',
    'Some content 5 without pipes '
  ];

  constructor(private userAUthSer: UserAuthenticationService) {

  }

  setActive() {
    this.userAUthSer.setActive(true);
  }

}
