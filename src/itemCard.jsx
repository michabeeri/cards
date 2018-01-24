import React from 'react';
import _ from 'lodash';

class ItemCard extends React.Component {

    getItemInfo () {
        return (<div className="itemInfo">
            <div className="itemBanner">
                <div className="icon"><i className="fa fa-gift" style={{color: '#db7093'}}></i></div>
                <div className="itemName">{this.props.name}</div>
            </div>
            <div className="itemEffect">{this.props.effect}</div>
        </div>);
    }

    render () {
        return (
            <div className='cardContainer'>
                {this.getItemInfo()}
            </div>
        );
    }
}

export default ItemCard;
