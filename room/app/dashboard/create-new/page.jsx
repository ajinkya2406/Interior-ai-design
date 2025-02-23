"use client"
import React from 'react'
import ImageSelection from './_component/ImageSelection'
import RoomType from './_component/RoomType'

function CreateNew() {

  const onHandleInputChange=(value,fieldName)=>{

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

              {/*specification*/}

              {/*button to gnerate image */}
            </div>
        </div>

    </div>
  )
}


export default CreateNew