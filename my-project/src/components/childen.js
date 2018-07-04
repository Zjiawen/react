import React from 'react';
import ReactDOM from 'react-dom';

class Xchilden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>啦啦啦啦啦</div>
        )
    }
    componentWillUnmount() {
        console.log('删除成功')
    }
}

export default Xchilden;