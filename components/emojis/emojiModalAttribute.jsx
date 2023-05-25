import React from 'react'

const EmojiModalAttribute = ({text,name}) => {
  return (
    <span className='emoji-modal-attritute'>
        <strong>{name}</strong>
        :{text}
    </span>
  )
}

export default EmojiModalAttribute