import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const defaultProps = {
};
const propTypes = {
};

class App extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 state
        
        // 定义 eventHandler
        
    }

    // 生命周期方法

    // getter methods for render

    // event handlers

    //render methods

    // render
    render () {
        const {children} = this.props;

        return (
            <div className="container">
                { children }
            </div>
        )
    }

}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        location: state.routing.location
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)