import React from 'react';

import Front from './Front'
import Back from './Back'

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    return (


      <div onClick={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

        <Front />
        <Back />
      </div>

    )
  }
}

export default BlogCard;