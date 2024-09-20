import React from 'react'
import {FC} from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto py-4 ml-8'>
      {children}
    </div>
  )
}

export default Wrapper
