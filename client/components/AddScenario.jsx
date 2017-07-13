import React from 'react'
import { Button } from 'react-materialize'

const AddScenario = (props) => {

  const { num, handle } = props
  console.log('num scenarios', num, props)
  return (
    <div>
      { num < 3 ? (
        <Button floating large
          onClick={ handle }
          className='red'
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
