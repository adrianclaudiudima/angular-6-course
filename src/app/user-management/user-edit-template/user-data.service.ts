import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class UserDataService {

  getDetails(): Observable<string> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next('some value');
        subscriber.complete();
      }, 1000);

    });
  }

}
