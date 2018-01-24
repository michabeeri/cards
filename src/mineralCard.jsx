import React from 'react';
import _ from 'lodash';

class MineralCard extends React.Component {

    getMineralInfo () {
        return (<div className="mineralInfo">
            <div className="mineralBanner">
                <div className="icon"><i className="fa fa-diamond" style={{color: this.props.color}}></i></div>
                <div className="mineralName">{this.props.name}</div>
            </div>
            <div className="mineralRequirements">
                {this.props.ingenuity && <div className="measureWithIcon"><div className="measureValue">{this.props.ingenuity}</div><div className="icon"><i className="fa fa-hand-paper-o"></i></div></div>}
            </div>
            <div className="xpIndicator">
                {_.times(this.props.xp, () => <div className="icon"><i className="fa fa-certificate" style={{color: '#b22222'}}></i></div>)}
            </div>
        </div>);
    }

    render () {
        return (
            <div className='cardContainer'>
                {this.getMineralInfo()}
            </div>
        );
    }
}

export default MineralCard;
