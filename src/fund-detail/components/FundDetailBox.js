import React, { Component, PropTypes } from 'react';
import FundDetailBoxItem from './FundDetailBoxItem';

const defaultProps = {
    itemData: []
};
const propTypes = {
    itemData: PropTypes.array
};

class FundDetailBox extends Component {

    // 构造函数
    constructor (props) {
        super(props);
    }
    render () {
        const {itemData} = this.props;

        return (
            <div className="fund-detail-box">
            {
                itemData.map(function(result) {
                   return <FundDetailBoxItem key={result.id} data={result}/>;
                })
            }
            </div>
        )
    }

}

FundDetailBox.defaultProps = defaultProps;
FundDetailBox.propTypes = propTypes;

export default FundDetailBox
