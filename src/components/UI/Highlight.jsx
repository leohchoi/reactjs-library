import React from 'react'

class Highlight extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <div className="highlight">
          <div className="highlight__img">
            {this.props.info.icon}
          </div>
          <h3 className="highlight__subtitle">
            {this.props.info.title}
          </h3>
          <p className="highlight__para">
            {this.props.info.para}
          </p>
      </div>
    );
  };
}

export default Highlight