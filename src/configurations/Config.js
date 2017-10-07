/**
 * === Authorization paths and methods ===
 * - AuthenticationActions has the functions to perform the loggin based on this config file
 */


export const APP_SERVER_URL = 'http://localhost:9090';
export const APP_API_URL = `${APP_SERVER_URL}/api/v1`;

export const AUTHORIZATION_SERVER_URL = 'http://localhost:9090';
export const AUTHORIZATION_API_URL = `${AUTHORIZATION_SERVER_URL}/api/v1`;

export const VALIDATE_PATH = '/validate';
export const VALIDATE_METHOD = 'GET';

export const SIGNIN_PATH = '/login';
export const SIGNIN_METHOD = 'GET';

export const SIGNOUT_PATH = '';
export const SIGNOUT_METHOD = 'GET';


