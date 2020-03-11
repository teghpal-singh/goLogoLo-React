// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
    }

    keydownHandlerCtrlZ = (e) => {
        if(e.keyCode === 90 && e.ctrlKey) {
            this.props.undoCallback();
        } 
      }

      keydownHandlerCtrlY = (e) => {
        if(e.keyCode === 89 && e.ctrlKey) {
            this.props.redoCallback();
        } 
      }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
        document.addEventListener('keydown',this.keydownHandlerCtrlZ);
        document.addEventListener('keydown',this.keydownHandlerCtrlY);
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
        document.removeEventListener('keydown',this.keydownHandlerCtrlZ);
        document.removeEventListener('keydown',this.keydownHandlerCtrlY);
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar goToHomeCallback={this.props.goToHomeCallback} 
                    deleteLogo={this.props.deleteLogo}
                    logo={this.props.logo}  
                />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}    
                        redoCallback={this.props.redoCallback}                                          
                        canRedo={this.props.canRedo}                     
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen