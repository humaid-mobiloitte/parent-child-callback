import React from 'react'

const GenerateInput = ({changeInputProp}) => {
    // function inputHandler(){

    // }
  return (
    <div>
      <input type="text" name="text" id="text" onChange={(e)=>changeInputProp(e.target.value)}/>
    </div>
  )
}

export default GenerateInput
