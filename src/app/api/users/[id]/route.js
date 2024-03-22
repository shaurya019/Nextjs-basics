import { NextResponse } from "next/server";
import {users} from '../../../../lib/db'

export async function GET (request,par){
    const single = users.filter((x)=>x.id == par.params.id)
    return NextResponse.json(single)
}