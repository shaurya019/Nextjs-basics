import { NextResponse } from "next/server";
import {users} from '../../../lib/db'

export const GET = async (req) => {
    try {
        const url = req.url;
        const id = url.split('user/')[1];
        console.log(id);
        const singledata = users.filter((x)=>x.id.toString() === id);
        if(singledata === 0){
            return NextResponse.json('Data not found');   
        }
        return NextResponse.json('Ok');
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}

export const DELETE = async (req) => {
    try {
        const url = req.url;
        const id = url.split('user/')[1];
        console.log(id);
        const userIndex = users.filter((x)=>x.id.toString() === id);
        if(userIndex === -1){
            return NextResponse.json('Data not found');   
        }
        users.splice(userIndex,1);
        return NextResponse.json('Ok');
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}