import React, { Component } from 'react';
import { blockStatement } from '@babel/types';

class PaletteComponent extends Component {

    makeStyleObject(colors) {
        return  {
            backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`,
            height: '1.7em',
            width: '20%',
            display: 'inline-block',
            border: '0.5px solid white'
        };
    }

    makeStyleObjectTwo() {
        return  {
            display: 'inline-block',
            width: '100%',
            margin: '0 auto'
        };
    }

    sendBlocks = () => {
        return (
            <div style={this.makeStyleObjectTwo()}>
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