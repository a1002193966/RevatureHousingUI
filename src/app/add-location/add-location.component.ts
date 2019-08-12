import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProviderLocation } from 'src/Entities/location';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dev-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  
  locationGroup: FormGroup;
  submitted: boolean = false;
  

  
  constructor(private datasvc: ApiService, private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.locationGroup = this.formBuilder.group({
      Address: ['',[Validators.required]],
      State:['',[Validators.required]],
      City:['',[Validators.required]],
      ZipCode:['',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      TrainingCenter:['',[Validators.required]]

    })
  }

  PostLocationInfo(obj: ProviderLocation){
    obj.ProviderID = 1;
    console.log(obj);
    
     this.datasvc.PostLocationData(obj).subscribe(data => {
      //post location success
      console.log(data);
      console.log("Post success");

    }), error => {
      //post location error handling 
      console.log("Error", error);
      console.log(obj);
    } 
    //console.log(value);
  }

  OnSubmit(){
    this.submitted = true;
    if(this.locationGroup.invalid){
      console.log("location Invalid data");
      return;
    }
    else{
      this.PostLocationInfo(this.locationGroup.value);
    console.log(this.locationGroup.value);
    this.locationGroup.reset();
    this.submitted = false;
    
    }
    
  }

}
