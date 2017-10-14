/**
 *  Application models with server paths
 */
// This models will be used to list the tables and then, when one is selected, the resource will be requested

const Role = {
    title: "Roles",
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
    title: "Users",
    description: "This table maintains the Users",
    path: "/users",
    authType: "Bearer",
    primaryKey: "ID",
    nameKey: "Email",
    composition:{
        "ID": "readonly",
        "Email": "string",
        "Password": "password",
        "Role": Role
    },
    relations: {
        "Role": Role
    }
};

export const ALL_MODELS = [Role, User];
