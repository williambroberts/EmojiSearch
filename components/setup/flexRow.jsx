import React from 'react'

const FlexRow = ({width,gap,children,justifyContent}) => {
  return (
    <div className='flex-row' style={{width:width,gap:gap,justifyContent:justifyContent}}>{children}</div>
  )
}

export default FlexRow