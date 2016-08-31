import React, { Component, PropTypes } from 'react';

const propTypes = {
    children: PropTypes.node
};

class FundDetailBox extends Component {

    // 构造函数
    constructor (props) {
        super(props);
    }
    render () {
        const {children} = this.props;

        return (
            <div className="fund-detail-box">
                {children}
            </div>
        )
    }

}

FundDetailBox.propTypes = propTypes;

export default FundDetailBox
