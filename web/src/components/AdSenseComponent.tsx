'use client'
import {useEffect} from 'react'

type AdSenseProps = {
  dataAdClient: string
  dataAdSlot: string
}

export const AdSenseComponent = ({dataAdClient, dataAdSlot}: AdSenseProps) => {
  useEffect(() => {
    try {
      // @ts-expect-error adsbygoogle is a global variable from Google AdSense script
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client={dataAdClient}
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}
