import React, { Component } from 'react'
import { Modal, Button, Textarea, Range } from 'react-materialize';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            text : this.props.logo.text,
            backgroundColor : this.props.logo.backgroundColor,
            borderWidth : this.props.logo.borderWidth,
            borderColor : this.props.logo.borderColor,
            borderRadius : this.props.logo.borderRadius,
            padding : this.props.logo.padding,
            margin : this.props.logo.margin,
            error: false,
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChangeComplete to " + event.target.value);
        this.setState({ borderWidth: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        console.log("handlePaddingChange to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChange to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        console.log(this.state.text);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor, this.state.borderWidth, this.state.borderColor, this.state.borderRadius, this.state.padding, this.state.margin);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            console.log("Updating Component!");
            this.setState({
                textColor: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize,
                text: this.props.logo.text,
                backgroundColor: this.props.logo.backgroundColor,
                borderWidth: this.props.logo.borderWidth,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius,
                padding: this.props.logo.padding,
                margin: this.props.logo.margin
            })
        }
    }

    changeText = (event) => {
        console.log(event.target.value)
        this.setState({
            text: event.target.value,
        });
        this.setState({error : false});
    }

    updateText = () => {
        if (this.state.text === "") {
            this.setState({error : true});
            console.log(this.props.logo.text)
            this.setState({text: this.props.logo.text})
            console.log("HELLO WORLD!");
            console.log(this.state.error);
        }
        else if (this.state.error === false) {
            this.completeUserEditing();
        }
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if (redoDisabled)
            redoClass += " disabled";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <Modal trigger={<button className="waves-effect waves-light btn-small">&#9998;</button>}>
                        <h5>Please type your desired text for this logo:</h5>
                        <Textarea type='text' style={{fontSize: 12, paddingBottom: 12}} value={this.state.text} onChange={this.changeText}></Textarea>
                        <Button type="button" modal="close" className="btn btn-primary" onClick={this.updateText}>Submit</Button>
                        </Modal>
                        {this.state.error ? (
                            <Modal open = {true}>
                                <h5>Invalid Logo Name: Must be at least one character long.</h5>
                            </Modal>
                        ) : null}
                        {/*<button className="waves-effect waves-light btn-small">&#9998;</button>*/}
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>                        
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                        <div id="nav-mobile" className="right hide-on-med-and-down">
                            <Modal trigger={<button style={ {cursor: "pointer", fontSize: "30pt", position: "relative", bottom: "5pt"} }>&#128465;</button>}>
                                <h5>Are you sure you want to permanently delete this logo?</h5>
                                <Button type="button" modal="close" className="btn btn-primary" onClick={this.props.deleteLogo.bind(this, this.props.logo.key)}>Yes</Button>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title" style={{textAlign: "center", position: "relative", bottom: "10pt"}}>CUSTOMIZE</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range type="range" min="5" max="100" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <Range type="range" min="0" max="100" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderWidth} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <Range type="range" min="0" max="100" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <Range type="range" min="0" max="100" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range type="range" min="0" max="100" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar