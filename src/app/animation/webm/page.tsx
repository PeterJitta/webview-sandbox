import React from 'react'

export default function WEBM() {
  return (
   <video id="banner-video" autoPlay muted playsInline loop poster="/omni-fund-poster.webp">
  <source src="/omni-fund.webm" type="video/webm"></source>
  Your browser does not support the video tag.
</video>
  )
}
