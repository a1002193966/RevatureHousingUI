import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomComponent } from './delete-room.component';
import {RouterTestingModule}  from '@angular/router/testing'
describe('DeleteRoomComponent', () => {
  let component: DeleteRoomComponent;
  let fixture: ComponentFixture<DeleteRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRoomComponent ],
      imports:[

        
         
        RouterTestingModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
