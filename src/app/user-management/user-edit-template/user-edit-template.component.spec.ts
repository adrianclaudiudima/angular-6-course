import {UserEditTemplateComponent} from './user-edit-template.component';
import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {UserEditTemplateService} from './user-edit-template.service';
import {UserDataService} from './user-data.service';
import {of} from 'rxjs';

describe('Component : User Edit Component ', () => {

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [UserEditTemplateComponent],
        providers: [UserEditTemplateService, UserDataService]
      });
  });

  it('it should create the app', () => {
    const fixture = TestBed.createComponent(UserEditTemplateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('it should display the user name if the user is logged in', () => {
    const fixture = TestBed.createComponent(UserEditTemplateComponent);
    const instanceComponent = fixture.debugElement.componentInstance;
    const service: UserEditTemplateService = fixture.debugElement.injector.get(UserEditTemplateService);
    fixture.detectChanges();
    console.log(service.getDisplayForm());
    expect(instanceComponent.shouldDisplayForm).toBe(service.getDisplayForm());
  });

  it('should fake the call using fake async', fakeAsync(() => {
    const fixture = TestBed.createComponent(UserEditTemplateComponent);
    const component = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(UserDataService);
    spyOn(dataService, 'getDetails').and.returnValue(of('xda'));
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.asyncValue).toBe('xda');
  }));

  it('should fake the call using async', async(() => {
    const fixture = TestBed.createComponent(UserEditTemplateComponent);
    const component = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(UserDataService);
    spyOn(dataService, 'getDetails').and.returnValue(of('xda'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.asyncValue).toBe('xda');
    });
  }));


});
