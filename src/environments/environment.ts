// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firestore: {
    apiKey: 'AIzaSyBiu-A7RYjTLB_wUGIQMhNsgyTAk0R4few',
    authDomain: 'add-new-item.firebaseapp.com',
    databaseURL: 'https://add-new-item.firebaseio.com',
    projectId: 'add-new-item',
    storageBucket: 'add-new-item.appspot.com',
    messagingSenderId: '1018987828254'
  }
};
