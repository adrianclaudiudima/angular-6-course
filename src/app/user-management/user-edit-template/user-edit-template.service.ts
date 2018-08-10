import {Injectable} from '@angular/core';

@Injectable()
export class UserEditTemplateService {

  private shouldDisplayForm = true;

  public getDisplayForm(): boolean {
    return this.shouldDisplayForm;
  }

  public setDisplayForm(shouldDisplay: boolean) {
    this.shouldDisplayForm = shouldDisplay;
  }

}
