/**
 *  Application models with server paths
 */
// This models will be used to list the tables and then, when one is selected, the resource will be requested
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
