import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled: any;
  let linkDes: any;
  let routerLinks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavComponent,
        RouterLinkDirectiveStub
      ],
      imports: [
        RouterTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));

  });

  it('should create nav component', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLinks from page', () => {
    expect(routerLinks.length).toBe(4, 'should have 4 routerLinks');
    console.log(routerLinks);
    expect(routerLinks[0].linkParams).toBe('/');
    expect(routerLinks[1].linkParams).toBe('/about');
    expect(routerLinks[2].linkParams).toBe('/contact');
    expect(routerLinks[3].linkParams).toBe('./login');
  });
});
