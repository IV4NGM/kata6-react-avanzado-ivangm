import React from 'react'

function ChildComponent({ ParentCallback }) {
  ParentCallback('Hola desde ChildComponent')
  return (
    <>
      <div>ChildComponent</div>
    </>
  )
}

export default ChildComponent