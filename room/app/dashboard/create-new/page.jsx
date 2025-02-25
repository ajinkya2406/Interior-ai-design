"use client"
import React, { useState } from 'react'
import ImageSelection from './_component/ImageSelection'
import RoomType from './_component/RoomType'
import DesignType from './_component/DesignType'
import AddReq from './_component/AddReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from '@/config/firebaseConfig'

function CreateNew() {

  const [formData,setFormData]=useState([]);
  const onHandleInputChange=(value,fieldName)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:value
    }))

    console.log(formData);
  }

  const GenerateAiImage= async ()=>{
    const rawImageUrl=await SaveRawImageToFirebase();
    const result= await axios.post('/api/redesign-room',{
      imageUrl:rawImageUrl,
      roomType:formData?.roomType,
      designType:formData?.designType,
      addReq:formData?.addReq
    });
    console.log(result.data);
  } 

  const SaveRawImageToFirebase=async()=>{

    // save raw file image to db
    const fileName = Date.now()+"_raw.png";
    const imageRef=ref(storage,'room-redesign'+fileName);

    await uploadBytes(imageRef,formData.image).then(resp=>{
      console.log("file uploaded .... ");
    })

    // uploaded file image url

    const downloadUrl=await getDownloadURL(imageRef);
    console.log(downloadUrl);
    return downloadUrl;
  }
  
  return (
    <div>
        <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Redesigning</h2>
        <p className='text-center text-gray-500'>Transform any room with a click. Select a space, choose a style and watch the magic</p>
    
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            {/*image selection */}
                <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}/>
            {/*image input section */}
            <div>
              {/* Room type */}
              <RoomType selectRoomType={(value)=>onHandleInputChange(value,'roomType')}/>

              {/*design type*/}
              <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')}/>

              {/*specification*/}
              <AddReq additionalRequirementInput={(value)=>onHandleInputChange(value,'additionalReq')}/>

              {/*button to gnerate image */}
              <Button className='w-full mt-5' onClick={GenerateAiImage}>Generate</Button>
              <p className='text-sm text-gray-400 mb-52'>NOTE: 1 Credit will be used to redesign your room</p>
            </div>
        </div>

    </div>
  )
}


export default CreateNew