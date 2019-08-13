import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRoomComponent } from './add-room.component';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModuleWithComponentFactories } from '@angular/core';

describe('AddRoomComponent', () => {
  let component: AddRoomComponent;
  let fixture: ComponentFixture<AddRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoomComponent ],
      imports:[
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomComponent);
    component = fixture.componentInstance;
  });


//mrthods
//ngOnInit test
  it('should call getRoomInfo in ngOnInit',()=>{
  spyOn(component,'getRoomInfo');
  fixture.detectChanges();
  expect(component.getRoomInfo).toHaveBeenCalled();
 })

 //form should have everything filled out
 it('should check if postRoomData is successful',async(()=>{
  fixture.detectChanges();
  spyOn(component,'postRoomInfo');
  expect(component.postRoomInfo).toBeTruthy();
 }));

  // //postRoomInfo doesnt have everything filled out
  // it('should check if postRoomData is unsuccessful',async(()=>{
  //   fixture.detectChanges();
  //   spyOn(component,'postRoomInfo');
  //   expect(component.postRoomInfo).toBeFalsy();
  //  }));

    //form invalid if empty 
    it('form invalid if empty',()=>{
      fixture.detectChanges();
      console.log(component.mygroup);
      component.mygroup.controls['Type'].setValue('');
      component.mygroup.controls['MaxOccupancy'].setValue('');
      component.mygroup.controls['RoomNumber'].setValue('');
      component.mygroup.controls['Gender'].setValue('');
      component.mygroup.controls['StartDate'].setValue('');
      component.mygroup.controls['EndDate'].setValue('');
      expect(component.mygroup.valid).toBeFalsy();
    });
    

      // form valid if everything is filled out 
       it('form valid',()=>{
         fixture.detectChanges();
         component.mygroup.controls['Type'].setValue('room');
         component.mygroup.controls['MaxOccupancy'].setValue('1');
         component.mygroup.controls['RoomNumber'].setValue('2');
         component.mygroup.controls['Gender'].setValue('F');
         component.mygroup.controls['StartDate'].setValue('2010/01/09');
         component.mygroup.controls['EndDate'].setValue('2010/02/08');
         expect(component.mygroup.valid).toBeTruthy();
       });


      //html
  
  // start date is before end date
    // it('should check if StartDate is before EndDate',async(()=>{
    //   fixture.detectChanges();
    //   spyOn(component,'postRoomInfo');
    //   fixture.debugElement.query(By.css(''))
    //   expect(component.StartDate).toHaveBeenCalledBefore(component.EndDate);
    // }));
  
  //submit button
       it('should check on onSubmit method', async(()=>{
        fixture.detectChanges();
        spyOn(component,'onSubmit');
        fixture.debugElement.query(By.css('input[type=submit]'));
        fixture.debugElement.query(By.css('input[type=submit]')).nativeElement.click();
        expect(component.onSubmit).toHaveBeenCalledTimes(1);
      }));
 


  
 });

