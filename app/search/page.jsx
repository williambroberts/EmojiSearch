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
  const [checked,setChecked]=useState(10)
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

//   const handlePagnation = (num)=>{
//     console.log(num,typeof(num),startIndex,EndIndex)
//     if (num===NaN){
      
//       return
//     }
//     if (num>50){
//       setPagnationLength(50)
//       if (results!==undefined){
//          if ((EndIndex+num-pagnationLength)>results.length){
//             setEndIndex(results.length)
//          }else {
//          setEndIndex((prev)=>prev+num-pagnationLength)
//          }
        
//       }
     
   
//     }else if (num<0){
//       setPagnationLength(1)
//       setEndIndex((prev)=>startIndex+1)
     
//     }else {
      
//       if (results!==undefined){
//         if ((EndIndex+num-pagnationLength)>results.length){
//            setEndIndex(results.length)
//         }else {
//         setEndIndex((prev)=>prev+num-pagnationLength)
//         }
      
      
//     }else{
//       setEndIndex(pagnationLength)
//       setStartIndex(0)

//     }
//   setPagnationLength(num)
//   }
// }
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
      if (results.length<pagnationLength){
        setStartIndex(0)
      }else{
        setStartIndex((prev)=>results.length-pagnationLength)
      }
      
    }else {
      setEndIndex((prev)=>prev+pagnationLength)
      setStartIndex((prev)=>prev+pagnationLength)
    }
  }
  const handleCheck =(e) =>{
    let val = parseInt(e.target.name.slice(8))
    setChecked((prev)=>{
      return val
    })
    console.log(checked,val)
    setPagnationLength((prev)=>val)
    setStartIndex(0)
    setEndIndex((prev)=>val)
  }
  //console.log(results.length,searchText)
  return (
    <main>
     <div className='search-header'>
      <Title text={"Emoji Search"} margin={"1rem 0 0 0"}/>
      <input className='search-input'
      type='text' placeholder='Search for an Emoji' value={searchText} onChange={(e)=>handleSearch(e)}/>
      {/* <FlexRow>
        <span className='prev-button' onClick={()=>handlePrev()} disabled={isDisabled}>prev</span>
      <input type='number' min="1" max="50" name='results-length' value={pagnationLength} onInput={(e)=>handlePagnation(parseInt(e.target.value))}/>
      <span className='next-button' onClick={()=>handleNext()} disabled={isDisabled}>Next</span>
      </FlexRow> */}
      <FlexRow gap={"1rem"}>
      <span className='prev-button' onClick={()=>handlePrev()} disabled={isDisabled}>prev</span>
        <label htmlFor='checkbox5' className='search-checkbox-label'>

            <input type='checkbox' checked={checked===5? true:false} name="checkbox5" onChange={(e)=>handleCheck(e)} className='search-checkbox5' />
            <span className='search-checkbox-span5'>5</span>
        </label>
        <label htmlFor='checkbox10'  className='search-checkbox-label'>
        <input type='checkbox' checked={checked===10? true:false} name="checkbox10" onChange={(e)=>handleCheck(e)} className='search-checkbox10'/>  
        <span className='search-checkbox-span10'>10</span>
        </label>
        <label htmlFor='checkbox20'  className='search-checkbox-label'>
        <input type='checkbox' checked={checked===20? true:false} name="checkbox20" onChange={(e)=>handleCheck(e)} className='search-checkbox20'/>  
        <span className='search-checkbox-span20'>20</span>
        </label>
        <label htmlFor='checkbox50'  className='search-checkbox-label'> 
        <input type='checkbox' checked={checked===50? true:false} name="checkbox50" onChange={(e)=>handleCheck(e)} className='search-checkbox50'/>  
        <span className='search-checkbox-span50'>50</span>
       </label>
       <span className='next-button' onClick={()=>handleNext()} disabled={isDisabled}>Next</span>
      </FlexRow>
      </div>
      <FlexRow>
           <span className='search-div'>{disallowedSearched.includes(searchText)? <div></div>:searchText.length<3? <div></div>: <span><strong>{results.length }</strong> emojis found </span> }</span>
           {results===undefined? "":searchText.length<3? <div></div>: <span className='search-div'>showing results <strong>{startIndex+1}</strong>:<strong>{Math.min(EndIndex,results.length)}</strong></span>}
      </FlexRow>
   

      <div className='search-results'>
        {searchText===undefined? <div className='search-div'>Search for an Emoji</div>: searchText.length<3? <div className='search-div'>Be more specific Please</div>:
        results.slice(startIndex,EndIndex)
        .map((item,index)=>(<div key={uuidv4()}><EmojiItem  item={item} index={index} pathname={pathname}/></div> ))}
      </div>
   
    </main> 
  )
}

export default SearchPage