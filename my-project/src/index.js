import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Xheader from './components/header/xheader';
import Xpanel from './components/xpanel';
import Xsearch from './components/xsearch';
import Xlifecycle from './components/xlifecycle';


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
    <Provider store={store}>
        <div>
            <Xheader />
            <Xsearch />
            <Xpanel />
            <Xlifecycle />
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
