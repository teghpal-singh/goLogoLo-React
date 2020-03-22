import React from 'react'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper"  style={ {textAlign: "center", backgroundColor: "#546e7a"} }>
          <div  className='brand-logo' 
                style={ {cursor: "pointer", display: "inline-block", position: "relative"} }
                onClick={this.handleGoHome}>
            goLogoLo Home
          </div>
        </div>
      </nav>
    )
  };
}

export default Navbar;