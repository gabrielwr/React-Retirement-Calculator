import React from 'react'
import { Button } from 'react-materialize'

const AddScenario = (props) => {
  const { num, handle } = props
  return (
    <div style={{display:"inline"}}>
      { num < 3 ? (
        <Button floating large
          onClick={ handle }
          className='blue'
          waves='light'
          icon='add'
        /> )
        :
        <div />
      }
    </div>
  )
}

export default AddScenario
