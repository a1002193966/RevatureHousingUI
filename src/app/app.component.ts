import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Component } from '@angular/core';
import * as Msal from 'msal'; 
//import { MsalService } from './msal.service';


@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'housingxyz';
  config = {
    auth: {
        clientId: "154b44b8-ebd4-4907-b49e-d9e216cf43cf",
        redirectUri: "https://localhost:4200",
    },

}

  applicationId = "154b44b8-ebd4-4907-b49e-d9e216cf43cf"; // B2C application Id
  tenant = "revaturehousingtenant.onmicrosoft.com"; // Azure tenant ID
  signUpSignInPolicy = "B2C_1_revapp"; // Name of user flow

  // name of scope, taken from the portal
  scope = ["https://revaturehousingtenant.onmicrosoft.com/api/user_impersonation"]; 

  // the creation of this was taken from the ref above.
  authority = "https://login.microsoftonline.com/tfp/" + this.tenant + "/" + 
    this.signUpSignInPolicy;





  clientApplication = new Msal.UserAgentApplication(this.config);


    // this.applicationId, this.authority, 
    // function (errorDesc: any, token: any, error: any, tokenType: any) {
    // }
 

  login() {
    
    var _this = this; // JS this :(

    // _this.clientApplication.loginPopup(_this.scope).then(function (idToken: any) {
    //   _this.clientApplication.acquireTokenSilent(_this.scope).then(
    //       function (accessToken: any) {
    //         alert(accessToken);
    //           //_this.saveAccessTokenToCache(accessToken);
    //       }, function (error: any) {
    //           alert(error);
    //       })
    // }, function (error: any) {
    //     alert(error);
    // });
    let loginRequest = {
      scopes: ["user.read", "user.write"],
      prompt: "select_account",
  }
  
  let accessTokenRequest = {
      scopes: ["user.read", "user.write"]
  }
  
  _this.clientApplication.loginPopup(loginRequest).then(function (loginResponse) {               
      return _this.clientApplication.acquireTokenSilent(accessTokenRequest);
  }).then(function (accessTokenResponse) {
      const token = accessTokenResponse.accessToken;
      console.log(token)
  }).catch(function (error) {  
      //handle error
  });


  }

  // constructor(private msalService: MsalService){

  // }

  // useremail(){
  //   let useremail = this.msalService.getUserEmail();
  //   return useremail;
  // }

  // login(){
  //   this.msalService.login();
  // }

  // signup(){
  //   this.msalService.signup();
  // }

  // logout(){
  //   this.msalService.logout();
  // }

  // isUserLoggedIn(){
  //   return this.msalService.isLoggedIn();
  // }

}

