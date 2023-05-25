import React from 'react'

const FlexCol = ({width,gap,children}) => {
  return (
    <div className='flex-col' style={{width:width,gap:gap}}>{children}</div>
  )
}

export default FlexCol