import { NextResponse } from "next/server";
import {users} from '../../../lib/db'
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

// export async function GET (){
//     return NextResponse.json(users)
// }

// searchparams
export async function GET (request){
    const {searchParams} = new URL(request.url);

    // 1 way
    // const name = searchParams.get('name');
    
    // console.log(searchParams);
    // console.log(name);

    // 2 way
    const obj = Object.fromEntries(searchParams.entries());
    console.log(obj);

    return NextResponse.json({obj})
}