import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomComponent } from './add-room.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddRoomComponent', () => {
  let component: AddRoomComponent;
  let fixture: ComponentFixture<AddRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoomComponent ],
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

   //submit button
   it('should call the onSubmit method', async(()=>{
    fixture.detectChanges();
    spyOn(component,'postRoomInfo');
    fixture.debugElement.query(By.css('input[type=submit]'));
    fixture.debugElement.query(By.css('input[type=submit]')).nativeElement.click();
    expect(component.postRoomInfo).toHaveBeenCalledTimes(1);
  }));

  
  //show location
  it('should show Location',async(()=>{

  }));

  //get-room info
  it('should getRoomInfo',async(()=>{

  }));
  //post-room info
  it('should post-roomInfor',async(()=>{

  }));
 });


 