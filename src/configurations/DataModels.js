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
    primaryKey: "ID"
};

const User = {
    title: "Users",
    description: "This table maintains the Users",
    path: "/users",
    authType: "Bearer",
    primaryKey: "ID",
    nameKey: "Name",
    relations: {
        "role": {model: Role}
    }
};

export const ALL_MODELS = [Role, User];
