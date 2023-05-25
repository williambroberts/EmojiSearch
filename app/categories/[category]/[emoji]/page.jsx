import React from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import EmojiPageComponent from '@/components/emojis/emojiPage'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
const EmojiPage = ({params: {emoji}}) => {
  return (
    <main>
    <EmojiPageComponent emoji={emoji}/>
    </main>
  )
}

export default EmojiPage