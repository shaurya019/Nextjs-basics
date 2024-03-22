// export async function GET (){
//     return new Response('Hello Wolrd');
// }

import { NextResponse } from "next/server";


export async function GET (){
    return NextResponse.json({"message":'Hello Wolrd'},{status:201})
}