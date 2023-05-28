import Image from 'next/image'
import { Noto_Color_Emoji } from 'next/font/google'
import RecentEmojis from '@/components/recentEmojis/recentEmojis'
import Title from '@/components/setup/title'
import { Caveat } from 'next/font/google'
import Intro from '@/components/setup/intro'
const caveat = Caveat({subsets:["cyrillic"],weight:["400","500","600"]})
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import Link from 'next/link'
import PopularEmojisComponent from '@/components/popularEmojis/popularEmojis'
import FlexRow from '@/components/setup/flexRow'
import HomeLinkItem from '@/components/links/homeLinkItem'
export default function Home() {
  return (
   <main>
     {/* show recent */}
     {/* show faves */}
     <h3 className={`${caveat.className} emoji-title`}> 🧭 EmojiSearch 🌮</h3>
     <Title text={"1,000s of emojis all in 1 place"} margin={"1rem 0rem"}/>
     <Intro>
    Color emojis you can copy into your projects in different formats. Get the emoji as 
    <span className='intro-span'>text</span>,
    <span className='intro-span'>Unicode</span>,
    <span className='intro-span'>Decimcal</span>,
    <span className='intro-span'>or a code snippet</span>
    or view it in different sizes!
     </Intro>
     <Intro margin={"1rem 0rem"}>
     <Link href={"/signup"} className='common-link'>Make an account</Link> and save your favourite emojis for later! Don&apos;t fancy that, no matter, your recently viewed emojis will be kepy for you automatically!
     </Intro>
     <FlexRow gap={"1rem"}>
      <HomeLinkItem text={"Categories 📑"} link={"/categories"} icon={""}/>
      <HomeLinkItem text={"Search all 🔎"} link={"/search"} icon={""}/>
     
     </FlexRow>
     <PopularEmojisComponent/>
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
