import { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const [data, setData] = useState('')
  const ParentCallback = (childData) => {
    setData(childData)
  }
  return (
    <>
      <div>ParentComponent</div>
      <ChildComponent ParentCallback={ParentCallback} />
      <p>{data}</p>
    </>
  )
}

export default ParentComponent