import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomComponent } from './delete-room.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../api.service';
import { ApiServiceMock } from '../testing/mock/mock-api-service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LocationData, MockRoom, } from '../testing/dummyData';
import { By } from '@angular/platform-browser';



describe('DeleteRoomComponent', () => {
  let component: DeleteRoomComponent;
  let fixture: ComponentFixture<DeleteRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [DeleteRoomComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ApiService, useClass: ApiServiceMock },
        {provide: ActivatedRoute,useValue: {
          paramMap: of({ get: (key) => 1})
      }}
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRoomComponent);
    component = fixture.componentInstance;
    //mock getRoomInfo
    spyOn(component,'getRoomInfo')
    //assign dummy data for room and location for html
    component.location= LocationData;
    component.room=MockRoom;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //#region html
  it('click delete button should call deleteroom with roomID to',()=>{
    spyOn(component,'deleteRoom');
    const button = fixture.debugElement.query(By.css('button.delete-btn')).nativeElement;
    button.click();
    expect(component.deleteRoom).toHaveBeenCalledWith(1);
  })
  //#endregion
});
