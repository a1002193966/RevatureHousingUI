import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRoomComponent } from './add-room.component';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgControlStatusGroup } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModuleWithComponentFactories } from '@angular/core';
import {RouterTestingModule}  from '@angular/router/testing'
import {Room} from 'src/Entities/room';
import {RoomData,RoomErrorList} from '../testing/dummyData'
import { ApiService } from '../api.service';
import { ApiServiceMock } from '../testing/mock/mock-api-service';

describe('AddRoomComponent', () => {

  let component: AddRoomComponent;
  let fixture: ComponentFixture<AddRoomComponent>;
  let errorList: string[];


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AddRoomComponent ],
      imports:[
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ApiService, useClass: ApiServiceMock }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    errorList = RoomErrorList.ErrorList;
  });
//methods
it('should create', () => {
  expect(component).toBeTruthy();
});
//onNgInit()
it('should initialize formgroup by calling onNgInit()', () => {
  fixture.detectChanges();
  console.log(component.mygroup);
  component.mygroup.controls['Type'].setValue(RoomData.Type);
  component.mygroup.controls['MaxOccupancy'].setValue(RoomData.MaxOccupancy);
  component.mygroup.controls['RoomNumber'].setValue(RoomData.RoomNumber);
  component.mygroup.controls['Gender'].setValue(RoomData.Gender);
  component.mygroup.controls['StartDate'].setValue(RoomData.StartDate);
  component.mygroup.controls['EndDate'].setValue(RoomData.EndDate);
   component.mygroup.controls['Description'].setValue(RoomData.Description);
   
   component.ngOnInit();
    expect(component.mygroup.controls['Type'].value).toBe("");
    expect(component.mygroup.controls['MaxOccupancy'].value).toBe("");
    expect(component.mygroup.controls['RoomNumber'].value).toBe("");
    expect(component.mygroup.controls['Gender'].value).toBe("");
    expect(component.mygroup.controls['StartDate'].value).toBe("");
    expect(component.mygroup.controls['EndDate'].value).toBe("");
   expect(component.mygroup.controls['Description'].value).toBe("");
})
 //onSubmit
it('should  set submitted to true and show all error message', () => {
  component.onSubmit();
  expect(component.submitted).toBeTruthy();
  fixture.detectChanges();
  //check total number of error content showed
  const errors = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
  expect(errors.length).toBe(6);
  for (let i = 0; i < errors.length; i++) {
    expect(errors[i].nativeElement.textContent).toBe(errorList[i]);
  }

});

 it('should only show type is required', () => {
  //input some data to form
  component.mygroup.controls['MaxOccupancy'].setValue(RoomData.MaxOccupancy);
  component.mygroup.controls['RoomNumber'].setValue(RoomData.RoomNumber);
  component.mygroup.controls['Gender'].setValue(RoomData.Gender);
  component.mygroup.controls['StartDate'].setValue(RoomData.StartDate);
  component.mygroup.controls['EndDate'].setValue(RoomData.EndDate);
  component.onSubmit();
  fixture.detectChanges();

  const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
  expect(error.length).toBe(1);
  expect(error[0].nativeElement.textContent).toBe(errorList[0]);
});

 it('should only show maxoccupancy is required', () => {
   //input some data to form
  component.mygroup.controls['Type'].setValue(RoomData.Type);
  component.mygroup.controls['RoomNumber'].setValue(RoomData.RoomNumber);
  component.mygroup.controls['Gender'].setValue(RoomData.Gender);
  component.mygroup.controls['StartDate'].setValue(RoomData.StartDate);
  component.mygroup.controls['EndDate'].setValue(RoomData.EndDate);
  component.mygroup.controls['Description'].setValue(RoomData.Description);
  component.onSubmit();
  fixture.detectChanges();

  const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
  expect(error.length).toBe(1);
  expect(error[0].nativeElement.textContent).toBe(errorList[1]);
});

it('should only show RoomNumber is required', () => {
  //input some data to form
  component.mygroup.controls['Type'].setValue(RoomData.Type);
  component.mygroup.controls['MaxOccupancy'].setValue(RoomData.MaxOccupancy);
  component.mygroup.controls['Gender'].setValue(RoomData.Gender);
  component.mygroup.controls['StartDate'].setValue(RoomData.StartDate);
  component.mygroup.controls['EndDate'].setValue(RoomData.EndDate);
  component.mygroup.controls['Description'].setValue(RoomData.Description);
  component.onSubmit();
  fixture.detectChanges();

  const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
  expect(error.length).toBe(1);
  expect(error[0].nativeElement.textContent).toBe(errorList[2]);
});

it('should only show Gender is required', () => {
  //input some data to form
  component.mygroup.controls['Type'].setValue(RoomData.Type);
  component.mygroup.controls['MaxOccupancy'].setValue(RoomData.MaxOccupancy);
  component.mygroup.controls['RoomNumber'].setValue(RoomData.RoomNumber);
  component.mygroup.controls['StartDate'].setValue(RoomData.StartDate);
  component.mygroup.controls['EndDate'].setValue(RoomData.EndDate);
  component.mygroup.controls['Description'].setValue(RoomData.Description);
  component.onSubmit();
  fixture.detectChanges();

  const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
  expect(error.length).toBe(1);
  expect(error[0].nativeElement.textContent).toBe(errorList[3]);
});

it('should only show StartDate is required', () => {
  //input some data to form
  component.mygroup.controls['Type'].setValue(RoomData.Type);
  component.mygroup.controls['MaxOccupancy'].setValue(RoomData.MaxOccupancy);
  component.mygroup.controls['RoomNumber'].setValue(RoomData.RoomNumber);
  component.mygroup.controls['Gender'].setValue(RoomData.Gender);
  component.mygroup.controls['EndDate'].setValue(RoomData.EndDate);
  component.mygroup.controls['Description'].setValue(RoomData.Description);
  component.onSubmit();
  fixture.detectChanges();

  const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
  expect(error.length).toBe(1);
  expect(error[0].nativeElement.textContent).toBe(errorList[4]);
});

it('it should not have error message and should call postRoomInfo', () => {
  //input some data to form
  component.mygroup.controls['Type'].setValue(RoomData.Type);
  component.mygroup.controls['MaxOccupancy'].setValue(RoomData.MaxOccupancy);
  component.mygroup.controls['RoomNumber'].setValue(RoomData.RoomNumber);
  component.mygroup.controls['Gender'].setValue(RoomData.Gender);
  component.mygroup.controls['TrainingCenter'].setValue(RoomData.StartDate);


  //spy on postRoomInfo method
  spyOn(component, 'postRoomInfo');
  component.onSubmit();
  //call PostLocationInfo
  expect(component.postRoomInfo).toHaveBeenCalledWith(RoomData);
  expect(component.submitted).toBeFalsy();

  //formgroup reset
  expect(component.locationGroup.controls['Address'].value).toBe(null);
  expect(component.locationGroup.controls['State'].value).toBe(null);
  expect(component.locationGroup.controls['City'].value).toBe(null);
  expect(component.locationGroup.controls['ZipCode'].value).toBe(null);
  expect(component.locationGroup.controls['TrainingCenter'].value).toBe(null);

});
//#endregion


// // it('should only NumberOfBeds is greater than 0', () => {
// //   //input some data to form
//
// //   component.mygroup.controls['MaxOccupancy'].setValue(1);
 
// //   component.onSubmit();
// //   fixture.detectChanges();

// //   const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
// //   expect(error.length).toBe(1);
// //   expect(error[0].nativeElement.textContent).toBe("Number of Beds must be greater than 0");
// // });

// it('should only NumberOfBeds must not be less than 0', () => {
// //   //input some data to form

// //   component.mygroup.controls['MaxOccupancy'].setValue(-1);
 
// //   component.onSubmit();
// //   fixture.detectChanges();

// //   const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
// //   expect(error.length).toBe(1);
// //   expect(error[0].nativeElement.textContent).toBe("Number of Beds must be greater than 0");
// // });

// it('should only show Invalid NumberOfBeds when input is alphabet ', () => {
// //   //input some data to form

// //   component.mygroup.controls['MaxOccupancy'].setValue(a);
 
// //   component.onSubmit();
// //   fixture.detectChanges();

// //   const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
// //   expect(error.length).toBe(1);
// //   expect(error[0].nativeElement.textContent).toBe("Number of Beds must be greater than 0");
// // });

// it('should only NumberOfBeds must not be equal to 0', () => {
// //   //input some data to form

// //   component.mygroup.controls['MaxOccupancy'].setValue(-1);
 
// //   component.onSubmit();
// //   fixture.detectChanges();

// //   const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
// //   expect(error.length).toBe(1);
// //   expect(error[0].nativeElement.textContent).toBe("Number of Beds must be greater than 0");
// // });

//  //form should have everything filled out

//  it('should check if postRoomData is successful',async(()=>{

//   fixture.detectChanges();

//   spyOn(component,'postRoomInfo');

//   expect(component.postRoomInfo).toBeTruthy();

//  }));



  // //postRoomInfo doesnt have everything filled out

  // it('should check if postRoomData is unsuccessful',async(()=>{

  //   fixture.detectChanges();

  //   spyOn(component,'postRoomInfo');

  //   expect(component.postRoomInfo).toBeFalsy();

  //  }));



    //form invalid if empty 

    // it('form invalid if empty',()=>{

    //   fixture.detectChanges();

    //   console.log(component.mygroup);

    //   component.mygroup.controls['Type'].setValue('');

    //   component.mygroup.controls['MaxOccupancy'].setValue('');

    //   component.mygroup.controls['RoomNumber'].setValue('');

    //   component.mygroup.controls['Gender'].setValue('');

    //   component.mygroup.controls['StartDate'].setValue('');

    //   component.mygroup.controls['EndDate'].setValue('');

    //   expect(component.mygroup.valid).toBeFalsy();

    // });

    






      //html

  

  // start date is before end date

    // it('should check if StartDate is before EndDate',async(()=>{

    //   fixture.detectChanges();

    //   spyOn(component,'postRoomInfo');

    //   fixture.debugElement.query(By.css(''))

    //   expect(component.StartDate).toHaveBeenCalledBefore(component.EndDate);

    // }));

  

  // //submit button

  //      it('should check on onSubmit method', async(()=>{

  //       fixture.detectChanges();

  //       spyOn(component,'onSubmit');

  //       fixture.debugElement.query(By.css('input[type=submit]'));

  //       fixture.debugElement.query(By.css('input[type=submit]')).nativeElement.click();

  //       expect(component.onSubmit).toHaveBeenCalledTimes(1);

  //     }));

 





  

 });

