import React from 'react';
import ReactDOM from 'react-dom';
import './xheader.css'

class Xheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'caicai',
        };
    }
    render() {
        return <div className="header">WeUI</div>;
    }
}

export default Xheader;

