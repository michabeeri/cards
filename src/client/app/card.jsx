import React from 'react';
// import _ from 'lodash';

class Card extends React.Component {
    renderContent () {
        var card = this.props.card;
        if (card.multiselect) {
            return <div></div>;
        }

        if (card.prob) {
            return <div></div>;
        }

        if (card.result) {
            return (
                <div className="resultContainer">
                    <p className="resultP">{card.result}</p>
                </div>
            );
        }
    }

    render () {
        var card = this.props.card;
        return (
            <div className='cardContainer'>
                <div className="imageContainer"></div>
                <h4 className="subjectH">{card.subj}</h4>
                <p className="mainDescP">{card.desc}</p>
                <div className="separator"></div>
                {this.renderContent()}
            </div>
        );
    }
}

//<div className="separator"></div>

export default Card;
