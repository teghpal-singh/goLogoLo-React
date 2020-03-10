import React, { Component } from 'react'
import { Modal, Button, Textarea } from 'react-materialize';

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
            borderColor : this.props.logo.borderColor,
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

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        console.log(this.state.text);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor, this.state.borderColor);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            console.log("Updating Component!");
            this.setState({
                textColor: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize,
                text: this.props.logo.text,
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
            })
        }
    }

    changeText = (event) => {
        console.log("BYE WORLD!");
        if (event.target.value == "") {
            this.setState({error : true});
            console.log("HELLO WORLD!");
            console.log(this.state.error);
        }
        else if (this.state.error == false) {
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
                        <h5>Please input what you want your text for this logo to be:</h5>
                        <Textarea type='text' onChange={this.changeText}></Textarea>
                        <Button type="button" modal="close" className="btn btn-primary" onClick={this.changeText}>Submit</Button>
                        </Modal>
                        {this.state.error ? (
                            <Modal open = {true}>
                                <h5>Invalid Logo Name: Must be at least one character long.</h5>
                            </Modal>
                        ) : null}
                        {/*<button className="waves-effect waves-light btn-small">&#9998;</button>*/}
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
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
                                <input type="range" min="4" max="144" 
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
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar