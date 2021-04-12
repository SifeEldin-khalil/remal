// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiUrl: 'http://localhost:3000',
  apiUrlImage:'http://localhost:3000/Api/Files?name=',
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCaD_2ZYeVdZpcRTKNDLNtEUW7yqqViCDA",
    authDomain: "remal-2021.firebaseapp.com",
    projectId: "remal-2021",
    storageBucket: "remal-2021.appspot.com",
    messagingSenderId: "897529711000",
    appId: "1:897529711000:web:372757c6f54ba810e403ed",
    measurementId: "G-YPF4B3NK2L"
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
