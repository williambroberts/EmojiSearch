import Image from 'next/image'
import { Noto_Color_Emoji } from 'next/font/google'

const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
export default function Home() {
  return (
   <main>
      home
      
   </main>
  )
}

// //[
//   "emoji",
//   "name",
//   "shortname",
//   "unicode",
//   "html",
//   "category",
//   "order"
// ]
