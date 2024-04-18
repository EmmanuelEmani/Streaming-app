import React, { useState } from "react"
import "./home.css"
import Home from "./Home"
import { homeData } from "../../dummyData"

const Homes = () => {
  const [items, setItems] = useState(homeData)

  return (
    <>
      <section className='home'>
        <Home items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default Homes