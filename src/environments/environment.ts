// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tenant: "08e0fc22-eb7c-8c61-2de5cc0825b9",
clientId: "ec9bc0dc-f72d-46ca-ade9-b0b2be584c30",
extraQueryParameter: 'nux=1', // This is optional
endpoints: {
  "http://localhost:4200/api": "ec9bc0dc-f72d-46ca-ade9-b0b2be584c30" // Note, this is an object, you could add several things here
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
