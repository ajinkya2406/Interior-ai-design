import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AddReq({additionalRequirementInput}) {
  return (
    <div className='mt-5'>
        <label className='text-gray-400'>Add Additional Requirements (Optional)</label>
      <Textarea className='mt-3' onChange={(e)=>additionalRequirementInput(e.target.value)}/>
    </div>
  )
}

export default AddReq
