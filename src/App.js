import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

console.log(data)

const App = () => {
  const cardInfo = data.map(info => {
      return <Card
      key={info.id}
      {...info} //spreads all the props of info into the card component
      // img={info.img}
      // rating={info.stats.rating}
      // reviews={info.stats.reviews}
      // location={info.location}
      // intro={info.intro}
      // price={info.price}
      // openSpots={info.openSpots}
    />
  })
  return (
  <Fragment>
    <Navbar/>
    <Hero/>
    <section className="cards-list">
      {cardInfo}
    </section>
  </Fragment>
  )
}

export default App