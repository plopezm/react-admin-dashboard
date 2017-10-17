/**
 * === Authorization paths and methods ===
 * - AuthenticationActions has the functions to perform the loggin based on this config file
 */
export const AUTHORIZATION_SERVER_URL = 'http://localhost:9090';
export const AUTHORIZATION_API_URL = `${AUTHORIZATION_SERVER_URL}/api/v1`;

export const VALIDATE_RESOURCE = {
    path: '/validate',
    method: 'GET'
};

export const SIGNIN_RESOURCE = {
    path: '/login',
    method: 'GET'
};

export const SIGNOUT_RESOURCE = {
    path: '/logout',
    method: 'GET'
};

export const REFRESH_TOKEN_RESOURCE = {
    path: '/refresh',
    method: 'GET'
};


