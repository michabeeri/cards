import React from 'react';
// import _ from 'lodash';

class Card extends React.Component {
    render () {
        return (
            <div className='cardContainer'>
                <div className="imageContainer"></div>
                <h4>{this.props.card.subj}</h4>
            </div>
        );
    }
}

export default Card;
