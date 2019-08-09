import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterStub } from '../testing/router-stub';

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
      providers: [
        { provide: Router, useClass: RouterStub }
    ]
    }).compileComponents().then(()=>{
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
  }));


  it('should create nav component', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLinks from page', () => {
    expect(routerLinks.length).toBe(4, 'should have 4 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/');
    expect(routerLinks[1].linkParams).toBe('/about');
    expect(routerLinks[2].linkParams).toBe('/contact');
    expect(routerLinks[3].linkParams).toBe('./login');
  });

  it('click on image should redirect to home page', () => {
    const homeLinkDe = linkDes[0];   
    const homeLink = routerLinks[0]; 

    expect(homeLink.navigatedTo).toBeNull('should not have navigated yet');
    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(homeLink.navigatedTo).toBe('/');
  });

  it('click on anchor tag should redirect to about page', () => {
    const aboutLinkDe = linkDes[1];   
    const aboutLink = routerLinks[1]; 
    expect(aboutLink.navigatedTo).toBeNull('should not have navigated yet');
    aboutLinkDe.triggerEventHandler('click',{button:0});
    fixture.detectChanges();
    expect(aboutLink.navigatedTo).toBe('/about');
  });

  it('click on anchor tag should redirect to contact page', () => {
    const contactLinkDe = linkDes[2];   
    const contactLink = routerLinks[2]; 

    expect(contactLink.navigatedTo).toBeNull('should not have navigated yet');

    contactLinkDe.triggerEventHandler('click', {button:0});
    fixture.detectChanges();

    expect(contactLink.navigatedTo).toBe('/contact');
  })

  it('click on anchor tag should redirect to login page', () => {
    const loginLinkDe = linkDes[3];   
    const loginLink = routerLinks[3]; 

    expect(loginLink.navigatedTo).toBeNull('should not have navigated yet');

    loginLinkDe.triggerEventHandler('click', {button:0});
    fixture.detectChanges();

    expect(loginLink.navigatedTo).toBe('./login');
  })
});
