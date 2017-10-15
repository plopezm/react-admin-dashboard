# AdminCrud

This this a crud generator for REST APIs. You only have to define the models and that's it. 

### Configuring AdminCrud

On the first hand it is defined the models used in the application. It is configured in src/configurations/DataModel.js it is define the models used in the application.

##### Configuring Security

Security will be used to log in in the system.

```
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
```

##### Configuring Models

It is important to define every model you need and finally you have to export the models in an array. Following an example is showed.

```
const API_PATH = "/api/v1";
const SERVER_URL = `http://localhost:9090${API_PATH}`;

const Role = {
    title: "Role",
    description: "This table maintains the Roles",
    apiserver: SERVER_URL,
    path: "/roles",
    authType: "Bearer",
    nameKey: "Name",
    primaryKey: "ID",
    composition:{
        "ID": "hidden",
        "Name": "string"
    }
};

const User = {
    title: "User",
    description: "This table maintains the Users",
    apiserver: SERVER_URL,
    path: "/users",
    authType: "Bearer",
    primaryKey: "ID",
    nameKey: "Email",
    composition:{
        "ID": "hidden",
        "Email": "string",
        "Password": "password",
        "Role": Role,
    },
    relations: {
        "Role": Role
    }
};

export const ALL_MODELS = [Role, User];
```

