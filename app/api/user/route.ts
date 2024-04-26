
// In next we if we need to interat with the backend we need to create a api folder in the root of the project
// and then we can create the api in the folder
// then default page name will be route.ts or route.js

//when we want to call the get request we need to export the function with the name get

// Path: app/api/user/route.ts
//if we wantto req any data from the user we have to use the req object which can be called from the function parameter 

export function GET( ) {
    // database log ic
    return Response.json({
        name: "Kiran",
        email: "kiran22@gmail.com"
    });
}


export function POST( ) {
    // database log ic
    return Response.json({
        name: "Kiran",
        email: "kiran22@gmail.com"
    });
}