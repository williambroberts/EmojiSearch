import React from 'react'

const FlexRow = ({width,gap,children}) => {
  return (
    <div className='flex-row' style={{width:width,gap:gap}}>{children}</div>
  )
}

export default FlexRow