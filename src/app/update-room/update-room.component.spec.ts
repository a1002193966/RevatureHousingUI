import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationObject, RoomObject, UpdateRoomData, } from '../testing/dummyData';
import { UpdateRoomComponent } from './update-room.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../api.service';
import { ApiServiceMock } from '../testing/mock/mock-api-service';
import { UpdateRoomErrorList, RoomData } from '../testing/dummyData';
import { By } from '@angular/platform-browser';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('UpdateRoomComponent', () => {
  let component: UpdateRoomComponent;
  let fixture: ComponentFixture<UpdateRoomComponent>;
  let errorList: string[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRoomComponent ],
      imports:[
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ApiService, useClass: ApiServiceMock },
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of({ get: (key) => 1 })
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    errorList = UpdateRoomErrorList.ErrorList;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 //#region html

//  it('click update button should call updateroom with roomID to', () => {
//   spyOn(component, 'updateRoomInfo');
//   const button = fixture.debugElement.queryAll(By.css('button.btn-buttons'));
//   button[1].nativeElement.click();
//   expect(component.updateRoomInfo).toHaveBeenCalledWith(1);
// })

// it('should show correct data in html file',()=>{
//   const span = fixture.debugElement.queryAll(By.css('span'));
//   //include all span
//   expect(span.length).toBe(8);
//   //date time format to short date
//   //but somehow, the actual format it show is mediumDate
//   const startDate =formatDate(RoomObject.startDate,'mediumDate','en-US');
//   const endDate = formatDate(RoomObject.endDate,'mediumDate','en-US');
//   //manually check each data
//   expect(span[0].nativeElement.textContent).toBe(`Address: ${LocationObject.address}`);
//   expect(span[1].nativeElement.textContent).toBe(`${LocationObject.city}, ${LocationObject.state} ${LocationObject.zip}`);
//   expect(span[2].nativeElement.textContent).toBe(`Room #: ${RoomObject.roomNumber}`);
//   expect(span[3].nativeElement.textContent).toBe(`Gender: ${RoomObject.gender}`);
//   expect(span[4].nativeElement.textContent).toBe(`Occupancy: ${RoomObject.currentOccupancy} of ${RoomObject.maxOccupancy}`);
//   expect(span[5].nativeElement.textContent).toBe(`Start Date: ${startDate} `);
//   expect(span[6].nativeElement.textContent).toBe(`End Date: ${endDate}`);
//   expect(span[7].nativeElement.textContent).toBe(`${RoomObject.description}`);

// })

//#endregion

//onNgInit()
// it('should initialize formgroup by calling onNgInit()', () => {
//   fixture.detectChanges();
//   console.log(component.mygroup);
//   //component.mygroup.controls['CurrentOccupancy'].setValue(UpdateRoomData.CurrentOccupancy);
//   component.mygroup.controls['MaxOccupancy'].setValue(UpdateRoomData.MaxOccupancy);
//   component.mygroup.controls['RoomNumber'].setValue(UpdateRoomData.RoomNumber);
//   component.mygroup.controls['Gender'].setValue(UpdateRoomData.Gender);
//   component.mygroup.controls['StartDate'].setValue(UpdateRoomData.StartDate);
 
   
//    component.ngOnInit();
//     expect(component.mygroup.controls['CurrentOccupancy'].value).toBe("");
//     expect(component.mygroup.controls['MaxOccupancy'].value).toBe("");
//     expect(component.mygroup.controls['RoomNumber'].value).toBe("");
//     expect(component.mygroup.controls['Gender'].value).toBe("");
//     expect(component.mygroup.controls['StartDate'].value).toBe("");
// })
 });
