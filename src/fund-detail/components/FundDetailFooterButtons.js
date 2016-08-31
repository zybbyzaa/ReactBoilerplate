import React, { Component, PropTypes } from 'react';

const defaultProps = {
    showRedeemButton: false,
    showBuyButton: false,
    discount: 1
};
const propTypes = {
    showRedeemButton: PropTypes.bool,
    showBuyButton: PropTypes.bool,
    discount: PropTypes.number
};

class FundDetailFooterButtons extends Component {

    // 构造函数
    constructor (props) {
        super(props);
        // 定义 eventHandler
    }

    // 生命周期方法

    // getter methods for render
    renderButtons (showRedeemButton,showBuyButton,discount) {
    	if (showRedeemButton && showBuyButton) {
    		return (
	            <div className="fund-detail-ft-btnswrp">
					<a href="javascript:redemption();" className="fund-detail-ft-btn fund-detail-ft-btnl">赎回</a>
					<a href="javascript:purchase();" className="fund-detail-ft-btn">
						<span className="fund-detail-ft-btnwords">购买</span>
						{
							discount>0 && discount<1 ?  
							<span className="fund-detail-ft-btntopwords" id="_buy_discound">{(discount*10).toFixed(1) + "折"}</span>
							:
							null 
						}
					</a>
				</div>
	        )
    	} else if (!showRedeemButton && showBuyButton) {
    		return (
	            <a href="javascript:purchase();" className="fund-detail-ft-btn-onlybuy" >
	            	<span className="fund-detail-ft-btnwords">购买</span>
	            	{
						discount>0 && discount<1 ?  
						<span className="fund-detail-ft-btntopwords" id="_buy_discound">{(discount*10).toFixed(1) + "折"}</span>
						:
						null 
					}
	            </a>
	        )
    	} else if (showRedeemButton && !showBuyButton) {
    		return (
	            <a href="javascript:redemption();" className="fund-detail-ft-btn-onlybuy">赎回</a>
	        )	
    	} else {
    		return null
    	}
    }
    // event handlers
    //render methods
    // render
    render () {
    	const {showRedeemButton,showBuyButton,discount} = this.props;
    	const buttons = this.renderButtons(showRedeemButton,showBuyButton,discount);
        return (
            {buttons}
        )
    }

}

FundDetailFooterButtons.defaultProps = defaultProps;
FundDetailFooterButtons.propTypes = propTypes;

export default FundDetailFooterButtons
