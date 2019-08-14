import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationData, LocationErrorList } from '../testing/dummyData';
import { AddLocationComponent } from './add-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { ApiServiceMock } from '../testing/mock/mock-api-service';
import { ProviderLocation } from 'src/Entities/location';
import {RouterTestingModule} from '@angular/router/testing';



/*
  1. waiting for some more validation
  a.intonly for zipcode
  b.status and city validation
*/

describe('AddLocationComponent', () => {
  let component: AddLocationComponent;
  let fixture: ComponentFixture<AddLocationComponent>;
  let errorList: string[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddLocationComponent
      ],
      imports: [
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
    fixture = TestBed.createComponent(AddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    errorList = LocationErrorList.ErrorList;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //onNgInit()
  it('should initialize formgourp by calling onNgInit()', () => {
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue(LocationData.ZipCode);
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);

    component.ngOnInit();
    expect(component.locationGroup.controls['Address'].value).toBe("");
    expect(component.locationGroup.controls['State'].value).toBe("");
    expect(component.locationGroup.controls['City'].value).toBe("");
    expect(component.locationGroup.controls['ZipCode'].value).toBe("");
    expect(component.locationGroup.controls['TrainingCenter'].value).toBe("");
  })

  //#region OnSubmit()
  it('should  set submitted to true and show all error message', () => {
    component.OnSubmit();
    expect(component.submitted).toBeTruthy();
    //change in html
    fixture.detectChanges();
    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    //check total number of error content showed
    expect(error.length).toBe(5);

    for (let i = 0; i < error.length; i++) {
      expect(error[i].nativeElement.textContent).toBe(errorList[i]);
    }

  });

  it('should only show address is required', () => {
    //input some data to form
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue(LocationData.ZipCode);
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement).toBe(errorList[0]);
  });

  it('should only show State is required', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue(LocationData.ZipCode);
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe(errorList[1]);
  });

  it('should only show City is required', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['ZipCode'].setValue(LocationData.ZipCode);
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe(errorList[2]);
  });

  it('should only show Zip Code is required', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe(errorList[3]);
  });

  it('should only show Zip Code must be 5 digits when input is less than 5 digit', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue("321");
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe("Zip Code must be 5 digits");
  });

  it('should only show Zip Code must be 5 digits when input is more than 5 digit', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue("3212321312");
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe("Zip Code must be 5 digits");
  });

  it('should only show Zip Code must be 5 digits when input is more than 5 digit', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue("3212321312");
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe("Zip Code must be 5 digits");
  });

  it('should only show Zip Code must be 5 digits when input is more than 5 letter', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue("fewwfwefwwe");
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe("Zip Code must be 5 digits");
  });

  it('should only show Zip Code must be 5 digits when input is less than 5 letter', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue("f");
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe("Zip Code must be 5 digits");
  });

  it('should only show Invalid Zip Code when input is alphabet', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue("abcde");
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe("Invalid Zip Code");
  });

  it('should only show TrainingCenter is required', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue(LocationData.ZipCode);
    component.OnSubmit();
    fixture.detectChanges();

    const error = fixture.debugElement.queryAll(By.css('div.alert.alert-danger'));
    expect(error.length).toBe(1);
    expect(error[0].nativeElement.textContent).toBe(errorList[4]);
  });

  it('it should not have error message and should call postLocationInfo', () => {
    //input some data to form
    component.locationGroup.controls['Address'].setValue(LocationData.Address);
    component.locationGroup.controls['State'].setValue(LocationData.State);
    component.locationGroup.controls['City'].setValue(LocationData.City);
    component.locationGroup.controls['ZipCode'].setValue(LocationData.ZipCode);
    component.locationGroup.controls['TrainingCenter'].setValue(LocationData.TrainingCenter);


    //spy on postlicationInfo method
    spyOn(component, 'PostLocationInfo');
    component.OnSubmit();
    //call PostLocationInfo
    expect(component.PostLocationInfo).toHaveBeenCalledWith(LocationData);
    expect(component.submitted).toBeFalsy();

    //formgroup reset
    expect(component.locationGroup.controls['Address'].value).toBe(null);
    expect(component.locationGroup.controls['State'].value).toBe(null);
    expect(component.locationGroup.controls['City'].value).toBe(null);
    expect(component.locationGroup.controls['ZipCode'].value).toBe(null);
    expect(component.locationGroup.controls['TrainingCenter'].value).toBe(null);

  });
  //#endregion

  //PostRoomInfo
  //need change
  it('should post room info into database', () => {
    //create providerLocation object
    const location = new ProviderLocation();
    location.Address = LocationData.Address;
    location.City = LocationData.City;
    location.State = LocationData.State;
    location.Zip = LocationData.ZipCode;
    location.TraningCenter = LocationData.TrainingCenter;

    component.PostLocationInfo(location);

  })

  //need change
  it('should get error from post request', () => {
    //create providerLocation object
    const location = new ProviderLocation();
    location.Address = LocationData.Address;
    location.City = LocationData.City;
    location.State = LocationData.State;
    location.Zip = LocationData.ZipCode;
    location.TraningCenter = LocationData.TrainingCenter;
    //get service first
    const xService = fixture.debugElement.injector.get(ApiService);
    xService['apiError']=true;
    //spyOn(xService, 'PostLocationData').and.returnValue(throwError({status : 404}));
    component.PostLocationInfo(location);
  })

  //html
  it('click submit button should call OnSubmit()', () => {
    spyOn(component, 'OnSubmit');
    const button = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;
    button.click();
    expect(component.OnSubmit).toHaveBeenCalled();
  })

});
