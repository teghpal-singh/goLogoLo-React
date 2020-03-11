import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT ASasAS
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderWidth: this.props.logo.borderWidth + "pt",
                borderColor: this.props.logo.borderColor,
                borderStyle: "solid",
                marginTop: "6px"
            }
        }
        console.log("border width: " + this.props.logo.borderWidth);
        return (
            <div className="col s8"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace