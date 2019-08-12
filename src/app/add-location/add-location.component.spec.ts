import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {LocationData} from '../testing/dummyData';
import { AddLocationComponent } from './add-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('AddLocationComponent', () => {
  let component: AddLocationComponent;
  let fixture: ComponentFixture<AddLocationComponent>;
  let data: LocationData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AddLocationComponent 
      ],
      imports:[
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    data = new LocationData();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //testing component.ts
  it('should  set submitted to true and show all error message',()=>{
    component.OnSubmit();
    expect(component.submitted).toBeTruthy();
    //change in html
    fixture.detectChanges();
    //need change, more validation
    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    //check total number of error content showed
    expect(error.length).toBe(5);
    //show each error context
    expect(error[0].nativeElement.textContent).toBe("Address is required");
    
  })

  // it("should not set submitted to true",()=>{
  //   console.log(data);
  //   component.locationGroup.controls['Address'].setValue("")
  // })
});
