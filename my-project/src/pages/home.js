import React from 'react';

import Xheader from '../components/header/xheader';
import Xpanel from '../components/xpanel';
import Xsearch from '../components/xsearch';
import Xlifecycle from '../components/xlifecycle';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ""
        };
    }
    render() {
        return (
            <div>
                <Xheader />
                <Xsearch />
                <Xpanel />
                <Xlifecycle />
            </div>
        )
    }
}
export default Home;