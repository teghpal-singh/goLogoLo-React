import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT ASasAS
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                fontFamily: "Arial",
                backgroundColor: this.props.logo.backgroundColor,
                borderStyle: "solid",
                borderWidth: this.props.logo.borderWidth + "pt",
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "pt",
                padding: this.props.logo.padding + "pt",
                margin: this.props.logo.margin + "pt",
                marginTop: "6px",
                overflow: "auto",
                position: "relative",
                width: "max-content",
                maxWidth: "525pt",
                minWidth: "max-content"
            }
        }
        console.log("border width: " + this.props.logo.borderWidth);
        return (
            <div className="col s8" style = {{overflow : "auto"}}>
                <div style={ styles.container }>
                    {this.props.logo.text.replace(/ /g, '\xa0')}
                    {/* {this.props.logo.text} */}
                </div>
            </div>
        )
    }
}

export default TextEditWorkspace