import React from "react"

import ImageArea from "./ImageArea"
import MainArea from "./MainArea"

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <ImageArea/>
        <MainArea/>
      </div>
    )
  }
}

export default Front