// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {KeycloakConfig} from 'keycloak-angular';

let keycloakConfig : KeycloakConfig = {

  url :'http://localhost:8180/auth',
  realm:'iaf',
  clientId:'invapp',
  "credentials":{
    "secret":"2765aba2-09bf-437d-a1da-4ced12efc170"
  }

};

export const environment = {
  production: false,
  keycloak: keycloakConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
