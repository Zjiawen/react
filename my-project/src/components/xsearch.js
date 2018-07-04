import React from 'react';
import ReactDOM from 'react-dom';

class Xsearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 用于判断搜索栏状态
            bool: false,

        };
    }
    //点击转为输入状态
    searchToggle(){
        this.setState({
            bool : !this.state.bool
        })
    }
    render() {
        return (
            <div className={this.state.bool?'weui-search-bar weui-search-bar_focusing':'weui-search-bar'} id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label className="weui-search-bar__label" id="searchText" onClick={this.searchToggle.bind(this)}>
                        <i className="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel" onClick={this.searchToggle.bind(this)}>取消</a>
            </div>
        )
    }
}

export default Xsearch;