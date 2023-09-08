import React from 'react'
import WorkImg from '../composants/WorkImg'
import Http from '../images/http.webp'
import Mobile from '../images/mobile.webp'

export default function Work() {
  return (
    <WorkImg img={Http} imgmobile={Mobile} link={"/work/http"} />
  )
}
