import Image from 'next/image'
import { Noto_Color_Emoji } from 'next/font/google'
import RecentEmojis from '@/components/recentEmojis/recentEmojis'

const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
export default function Home() {
  return (
   <main>
     {/* show recent */}
     {/* show faves */}
     <RecentEmojis/>
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
