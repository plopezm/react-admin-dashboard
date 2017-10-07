/**
 *  Application models with server paths
 */
// This models will be used to list the tables and then, when one is selected, the resource will be requested

export var Role = {
    title: "Roles",
    description: "This table maintain the Roles",
    path: "/roles",
    authType: "Bearer",
    hidden: [],
    primaryKeys: ["id"]
};

export var User = {
    title: "Users",
    description: "This table maintain the Users",
    path: "/users",
    authType: "Bearer",
    hidden: [],
    primaryKeys: ["id"],
    relations: {
        "role": {model: Role}
    }
};
