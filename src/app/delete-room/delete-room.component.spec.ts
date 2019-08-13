import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomComponent } from './delete-room.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../api.service';
import { ApiServiceMock } from '../testing/mock/mock-api-service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LocationData, RoomData } from '../testing/dummyData';


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
          paramMap: of({ get: (key) => 'value' })
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
    component.room=RoomData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
