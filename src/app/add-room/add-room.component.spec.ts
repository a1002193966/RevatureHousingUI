import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomComponent } from './add-room.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AddRoomComponent', () => {
  let component: AddRoomComponent;
  let fixture: ComponentFixture<AddRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AddRoomComponent 
      ],
      imports:[
        FormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomComponent);
    component = fixture.componentInstance;
  });


  //ngOnInit test
  it('should call getRoomInfo in ngOnInit',()=>{
    spyOn(component,'getRoomInfo');
    fixture.detectChanges();
    expect(component.getRoomInfo).toHaveBeenCalled();
  })

  
 });
