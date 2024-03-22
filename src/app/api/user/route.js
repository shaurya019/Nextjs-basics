import { NextResponse } from "next/server";
import {users} from '../../../lib/db'

export const GET = async(req,res)=>{
    try{
        return NextResponse.json(users);
    } catch {
        return NextResponse.json({message:'Error',err},{status:500})
    }
}

export const POST = async(req,res)=>{
    const username = await req.json();
    try{
        const newData = {username};
        newData.id = users.length+1
        users.push(newData);
        return NextResponse.json({users});
    } catch {
        return NextResponse.json({message:'Error',err},{status:500})
    }
}