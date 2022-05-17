const skey = 'Zhjc11102006'

const firebaseConfig = {
  apiKey: "AIzaSyA1eHPdmjo6vJuoXh5ufC-sbgYQy-MeJE4",
  authDomain: "ko1du-434d4.firebaseapp.com",
  projectId: "ko1du-434d4",
  storageBucket: "ko1du-434d4.appspot.com",
  messagingSenderId: "819731130108",
  appId: "1:819731130108:web:a062bd83f03daa4d049979"
}

const actionCodeSettings = {
  url: 'https://' + firebaseConfig.authDomain + '/finishSignUp?cartId=' + generatePassword(8),
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: false,
    minimumVersion: '7'
  },
  dinamicLinkDomain: 'msr00mg5ar.page.link'
}

const redirectUrl = 'https://healtsustav.space/dgtfu'
const urlSheets = 'https://script.google.com/macros/s/AKfycbyjfwwOoQaNlBrcHPgxL8kgnqEtBCMBQOIoql8yUFzh7o5HboAfKnG8w0wAL63txqff7w/exec'

function generatePassword (l) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let retVal = ''
  for (let i = 0, n = charset.length; i < l; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}

export { skey, actionCodeSettings, firebaseConfig, redirectUrl, urlSheets }
