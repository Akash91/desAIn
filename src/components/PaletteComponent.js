import React, { Component } from 'react';

class PaletteComponent extends Component {

    makeStyleObject(colors) {
        return  {
            backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`,
            height: '1.5em',
            width: '20%'
        };
    }

    sendBlocks = () => {
        return (
            <div>
                <div style={this.makeStyleObject(this.props.palette[0])}></div>
                <div style={this.makeStyleObject(this.props.palette[1])}></div>
                <div style={this.makeStyleObject(this.props.palette[2])}></div>
                <div style={this.makeStyleObject(this.props.palette[3])}></div>
                <div style={this.makeStyleObject(this.props.palette[4])}></div>
            </div>
        );
    }

    render () {
        // expects this.props.palette to be sent
        console.log(this.props.palette)

        return (<div>
            {this.sendBlocks()}
        </div>)
    }
}

export default PaletteComponent;