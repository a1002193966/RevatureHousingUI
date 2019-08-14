import { ProviderLocation } from 'src/Entities/location';

import { Room } from 'src/Entities/room';

export const LocationData = {
    Address: "abc ",
    State: "NY",
    City: "city",
    ZipCode: "12345",
    //need change, might not need this properties
    TrainingCenter: "Queen"
}

export const RoomData = {
  
    Type:"apartment",
    MaxOccupancy:2 ,
    RoomNumber:"1",
    Gender:"F",
    StartDate: new Date('2019/08/10'),
    EndDate: new Date('2019/11/11'),
    Description:"abc",
    IsActive : true,
    CurrentOccupancy : 4,
    

}

export const LocationErrorList = {
    ErrorList: ["Address is required",
        "State is required",
        "City is required",
        "Zip Code is required",
        "Training Center is required"
    ]
}

export const RoomErrorList={
    ErrorList:["Room Type is required",
        "Number of Beds is required",
        "Room Number is required",
        "Gender is required",
        "StartDate is required",
        "EndDate is required",
       // "Description is required"
      
    ]
}