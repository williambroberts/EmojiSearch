"use client"
import Title from '@/components/setup/title'
import React, {useState} from 'react'
import emojis from "../../lib/emojis.json"
import { v4 as uuidv4 } from 'uuid';
import { usePathname } from 'next/navigation';
import EmojiItem from '@/components/emojis/emojiItem';
import FlexRow from '@/components/setup/flexRow';
const SearchPage = () => {
  const pathname = usePathname()
  const [searchText,SetSearchText]=useState(undefined)
  const [startIndex,setStartIndex]=useState(0)
  const [EndIndex,setEndIndex]=useState(10)
  const [pagnationLength,setPagnationLength]=useState(10)
  const [results,setResults]=useState(undefined)
  const disallowedSearched = ["",undefined," "]
  const [isDisabled,setIsDisabled]=useState(false)
  const handleSearch = (e)=> {
    console.log(e.target.value)
    if (e.target.value<3){
      
      setResults((prev)=>{
        return undefined
      })
      SetSearchText(e.target.value.toLowerCase())
      return
    }
    SetSearchText(e.target.value.toLowerCase())
    let newResults = emojis.filter((item,index)=> item.name.toLowerCase().includes(searchText))
    setResults(newResults)
    setEndIndex((prev)=>pagnationLength)
    setStartIndex(0)
  }

  const handlePagnation = (num)=>{
    console.log(num,typeof(num),EndIndex,startIndex)
    if (num===NaN){
      
      return
    }
    if (num>50){
      setPagnationLength(50)
      if (results!==undefined){
         if ((EndIndex+num-pagnationLength)>results.length){
            setEndIndex(results.length)
         }else {
         setEndIndex((prev)=>prev+num-pagnationLength)
         }
        
      }
     
   
    }else if (num<0){
      setPagnationLength(1)
      setEndIndex((prev)=>startIndex+1)
     
    }else {
      
      if (results!==undefined){
        if ((EndIndex+num-pagnationLength)>results.length){
           setEndIndex(results.length)
        }else {
        setEndIndex((prev)=>prev+num-pagnationLength)
        }
      
      
    }else{
      setEndIndex(pagnationLength)
      setStartIndex(0)

    }
  setPagnationLength(num)
  }
}
  const handlePrev = () =>{
    if (startIndex <pagnationLength){
      setStartIndex(0)
      setEndIndex(pagnationLength)
    }else {
      setEndIndex((prev)=>prev-pagnationLength)
      setStartIndex((prev)=>prev-pagnationLength)
    }
  }
  const handleNext = ()=>{
    if(results===undefined){
      return
    }
    if ((EndIndex+pagnationLength)>results.length){
      setEndIndex(results.length)
      setStartIndex((prev)=>results.length-pagnationLength)
    }else {
      setEndIndex((prev)=>prev+pagnationLength)
      setStartIndex((prev)=>prev+pagnationLength)
    }
  }
  //console.log(results.length,searchText)
  return (
    <main>
      {/* back */}
      {/*  */}
      <Title text={"Emoji Search"}/>
      <input className='search-input'
      type='text' placeholder='Search for an Emoji' value={searchText} onChange={(e)=>handleSearch(e)}/>
      <FlexRow>
        <button className='' onClick={()=>handlePrev()} disabled={isDisabled}>prev</button>
      <input type='number' min="1" max="50" name='results-length' value={pagnationLength} onInput={(e)=>handlePagnation(parseInt(e.target.value))}/>
      <button className='' onClick={()=>handleNext()} disabled={isDisabled}>Next</button>
      </FlexRow>
      <FlexRow>
           <span>{disallowedSearched.includes(searchText)? "_":searchText.length<3? "_": `${results.length } Emojis found`} </span>
           {results===undefined? "":searchText.length<3? "_": <span>showing results {startIndex+1}:{EndIndex}</span>}
      </FlexRow>
   

      <div className='search-results'>
        {searchText===undefined? <div>Search for an Emoji</div>: searchText.length<3? <div>Be more specific Please</div>: 
        results.slice(startIndex,EndIndex)
        .map((item,index)=>(<div ><EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/></div> ))}
      </div>
   
    </main> 
  )
}

export default SearchPage