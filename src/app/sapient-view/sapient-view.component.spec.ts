import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SapientViewService } from './sapient-view.service';
import { HttpClientModule } from '@angular/common/http';

import { SapientViewComponent } from './sapient-view.component';

describe('SapientViewComponent', () => {
  let component: SapientViewComponent;
  let fixture: ComponentFixture<SapientViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SapientViewComponent],
      imports: [HttpClientModule],
      providers: [SapientViewService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('setLandingTrue should return true when landSuccess is null ', () => {
    component.landSuccess = null;
    component.setLandingTrue();
    expect(component.landSuccess).toBeTruthy();
  });
  it('setLandingTrue should return null when landSuccess is true ', () => {
    component.landSuccess = true;
    component.setLandingTrue();
    expect(component.landSuccess).toBe(null);
  });
  it('setLandingFalse should return false when landSuccess is null ', () => {
    component.landSuccess = null;
    component.setLandingFalse();
    expect(component.landSuccess).toBe(false);
  });
  it('setLandingTrue should return null when landSuccess is false ', () => {
    component.landSuccess = false;
    component.setLandingFalse();
    expect(component.landSuccess).toBe(null);
  });
  it('setLaunchTrue should return true when landSuccess is null ', () => {
    component.launchSuccess = null;
    component.setLaunchTrue();
    expect(component.launchSuccess).toBeTruthy();
  });
  it('setLaunchTrue should return null when landSuccess is true ', () => {
    component.launchSuccess = true;
    component.setLaunchTrue();
    expect(component.launchSuccess).toBe(null);
  });
  it('setLaunchFalse should return false when landSuccess is null ', () => {
    component.launchSuccess = null;
    component.setLaunchFalse();
    expect(component.launchSuccess).toBe(false);
  });
  it('setLaunchFalse should return null when landSuccess is false ', () => {
    component.launchSuccess = false;
    component.setLaunchFalse();
    expect(component.launchSuccess).toBe(null);
  });
});
