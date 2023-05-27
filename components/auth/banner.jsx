
import React from 'react'
import Title from '../setup/title'
import FlexRow from '../setup/flexRow'
import Filler from '../setup/filler'

const Banner = ({name}) => {
  return (
    <div className='banner'>
        {/* emojisearch */}
        <FlexRow>
             <Title text={"Welcome"}/>
             <Filler width={"2px"}/>
            <Title text={name}/>
        </FlexRow>
       {/* image */}
    </div>
  )
}

export default Banner