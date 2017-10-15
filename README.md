#AdminCrud

This this a crud generator for REST APIs. You only have to define the models and that's it. 

### Configuring AdminCrud

In src/configurations/DataModel.js it is define the models used in the application. It is important to define every model you need and finally you have to export the models in an array. The following file is an example:

```
const Role = {
    title: "Role",
    description: "This table maintains the Roles",
    path: "/roles",
    authType: "Bearer",
    nameKey: "Name",
    primaryKey: "ID",
    composition:{
        "ID": "readonly",
        "Name": "string"
    }
};

const User = {
    title: "User",
    description: "This table maintains the Users",
    path: "/users",
    authType: "Bearer",
    primaryKey: "ID",
    nameKey: "Email",
    composition:{
        "ID": "readonly",
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

