// import {NextRequest} from "next/server"
// // In next we if we need to interat with the backend we need to create a api folder in the root of the project
// // and then we can create the api in the folder
// // then default page name will be route.ts or route.js

// import { NextRequest } from "next/server";

// //when we want to call the get request we need to export the function with the name get

// // Path: app/api/user/route.ts
// //if we wantto req any data from the user we have to use the req object which can be called from the function parameter 


// export async function POST(req: NextRequest) {
    //     //Extract the body
//     const body = await req. json();

//     //store the body in db
//    console.log(body);
//     return Response.json({
    //         message: "User created successfully"
//     });
// }

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


export function GET( ) {
    // database log ic
    return Response.json({
        name: "Kiran",
        email: "kiran22@gmail.com"
    });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password,
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}