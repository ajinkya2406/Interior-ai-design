import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req){
    const {user}=await req.json(); // we have user information there

    // if user already exist?
    try{
        const UserInfo = await db.select().from(Users)
        .where(eq(Users.email,user?.primaryEmailAddress.emailAddress))
        console.log("user",UserInfo);

    
    // if not than add new user to DB
    if(UserInfo?.length==0){
        const SaveResult = await db.insert(Users)
        .values({
            name:user?.Username || "Unknown User",
            email:user?.primaryEmailAddress.emailAddress,
            imageUrl:user?.imageUrl
        }).returning({Users})
        return NextResponse.json({'result':SaveResult[0]})
    }
    return NextResponse.json({'result':UserInfo[0]})
    }catch(e){
        return NextResponse.json({error:e})
    }





     // to make sure we are getting user information right
}