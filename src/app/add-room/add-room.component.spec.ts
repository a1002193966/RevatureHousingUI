import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomComponent } from './add-room.component';

describe('AddRoomComponent', () => {
  let component: AddRoomComponent;
  let fixture: ComponentFixture<AddRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomComponent);
    component = fixture.componentInstance;
  });


//   //ngOnInit test
//   it('should call getRoomInfo in ngOnInit',()=>{
//     spyOn(component,'getRoomInfo');
//     fixture.detectChanges();
//     expect(component.getRoomInfo).toHaveBeenCalled();
//   })
 });
