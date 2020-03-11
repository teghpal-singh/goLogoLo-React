import React from 'react'
import { Modal, Button} from 'react-materialize';

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
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Modal trigger={<button style={ {cursor: "pointer", fontSize: "30pt"} }>&#128465;</button>}>
                <h5>Are you sure you want to permanently delete this logo?</h5>
                <Button type="button" modal="close" className="btn btn-primary" onClick={this.props.deleteLogo.bind(this, this.props.logo.key)}>Yes</Button>
            </Modal>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;