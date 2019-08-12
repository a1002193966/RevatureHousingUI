import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomComponent } from './update-room.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateRoomComponent', () => {
  let component: UpdateRoomComponent;
  let fixture: ComponentFixture<UpdateRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRoomComponent ],
      imports:[
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
//update-room
    // //NumTenants not >  NumBeds when adding room
    // it('should check if NumTenants is greater than NumBeds',async(()=>{
    //   fixture.detectChanges();
    //   spyOn(component,'postRoomInfo');
    //   fixture.debugElement.query(By.css(''))
    //   expect(component.room).toBeTruthy();
  
    // }));
});
