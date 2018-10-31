// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCKG2Hmv0Upglw2407DlVsOt4-xsbBqVvs',
    authDomain: 'twitch-streamer.firebaseapp.com',
    databaseURL: 'https://twitch-streamer.firebaseio.com',
    projectId: 'twitch-streamer',
    storageBucket: 'twitch-streamer.appspot.com',
    messagingSenderId: '203070399290'
  }
};

