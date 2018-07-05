import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';

import registerServiceWorker from './registerServiceWorker';

import './all.css';

//安装redux后引入
//redux Provider是把store用在所有组件中
import { Provider } from 'react-redux';
//createStore是创建仓库的方法
import { createStore } from 'redux';
//创建库
const store = createStore((state = {
    isShowGallery: false,
    gallerySrc: "",
}, action) => {
    const count = state.count;
    switch(action.type){
        //触发动作
        case 'showGallery':
            /*return {
                ...state,
                count: count + 2
            }*/
            return Object.assign({}, state, {
                isShowGallery: action.isShowGallery,
                gallerySrc: action.gallerySrc
            });
        case 'hideGallery':
            return Object.assign({}, state, {
                isShowGallery: action.isShowGallery,
                gallerySrc: action.gallerySrc
            });
        default: return state;
    }
});

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/detail' component={Detail} />
            </div>
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
