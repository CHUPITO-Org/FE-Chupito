// const dotenv = require('dotenv')
// dotenv.config()
export const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  version: process.env.REACT_APP_VERSION,
  eventCollectionName: 'events',
}

export const getFirebaseSetUp = {
  PRIVATE_KEY_ID: process.env.AUTH_PRIVATE_KEY_ID,
  PRIVATE_KEY: JSON.parse(`"${process.env.AUTH_PRIVATE_KEY}"`),
  CLIENT_EMAIL: process.env.AUTH_CLIENT_EMAIL,
  CLIENT_ID: process.env.AUTH_CLIENT_ID,
  CLIENT_X509_CERT_URL: process.env.AUTH_CLIENT_X509_CERT_URL,
  PROJECT_ID: process.env.AUTH_PROJECT_ID,
  API_KEY: process.env.AUTH_API_KEY,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  STORAGE_BUCKET: process.env.AUTH_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: process.env.AUTH_MESSAGING_SENDER_ID,
  APP_ID: process.env.AUTH_APP_ID,
  MEASUREMENT_ID: process.env.AUTH_MEASUREMENT_ID,
  TEST_EMAIL: process.env.TEST_USER_EMAIL,
  TEST_PASSWORD: process.env.TEST_USER_PWD,
}
