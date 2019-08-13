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

export const LocationErrorList = {
    ErrorList: ["Address is required",
        "State is required",
        "City is required",
        "Zip Code is required",
        "Training Center is required"
    ]
}

export class MockProvider extends ProviderLocation{
    LocationID= 3; 
    Address= '123 Main Street';
    City= 'Queens'; 
    State= 'New York';
    ZipCode= '11111';
    TrainingCenter= 'Queens College';
    ProviderID= 1;
}
export class MockRoom extends Room{
     

    //Primary Key
    RoomID = 1;
    Type = 'dorm';
    MaxOccupancy = 4;
    RoomNumber = '101';
    Gender = 'male';
    StartDate = new Date('2019/08/10');
    EndDate =  new Date('2019/11/11');
    CurrentOccupancy = 2;
    IsActive = true;
    Description = 'this is a mock room';

    //Foreign Key
    LocationID = 1;
}