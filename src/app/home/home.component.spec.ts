import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { MsAdalAngular6ServiceMock } from '../testing/mock/Mock-adal-service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockProvider, LocationData, mockLocationList } from '../testing/dummyData';
import { AppComponent } from '../app.component';
import { ApiService } from '../api.service';
import { ApiServiceMock } from '../testing/mock/mock-api-service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
        
      ],
      providers:[
        {
          provide:MsAdalAngular6Service,useClass:MsAdalAngular6ServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    //spyOn(component, 'getLocationInfo');
    //spyOn(component, 'getRoomInfo');
    //component.locationList = mockLocationList[0]; 
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render location.address in a h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    const h4 = compiled.querySelector('#location-address');
    console.log('The content of h4 is ' + h4);
    expect(h4.textContent).toContain(mockLocationList);
  });
  it ('should call getLocationInfo()', () =>{
    spyOn(component, 'ngOnInit');
    expect(component.getLocationInfo).toHaveBeenCalled();
  });
  it ('should call getRoomInfo()', () =>{
    spyOn(component, 'ngOnInit');
    expect(component.getRoomInfo).toHaveBeenCalled();
  });
});
