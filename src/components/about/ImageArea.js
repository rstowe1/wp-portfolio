import React from "react"

class ImageArea extends React.Component {
  render() {
    return (
      <div
        className="image-container">
        <img
          className="card-image"
          alt='Picture of me...'
          src="https://media.licdn.com/dms/image/C4E03AQECnCWB0jnMmg/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=WR2C0_LrM9YgBVeUGx0ZuKnX7hkEFJkIAOSe1ezR8R4"
        />
        <h1
          className="title">
          Ryan W. Stowe
        </h1>
      </div>
    )
  }

}

export default ImageArea