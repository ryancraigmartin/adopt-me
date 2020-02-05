import React from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams'

const App = () => {
  return (
    <div>
      <h1 className="adopt-me">Adopt Me!</h1>
      <SearchParams/>
      {/* <Pet name="Cocoa" animal="Dog" breed="Lab"/>
      <Pet name="Sofi" animal="Dog" breed="Yorkie"/> */}
    </div>
  )
};

render(<App/>, document.getElementById("root"));
