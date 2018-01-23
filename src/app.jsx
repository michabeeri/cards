import React from 'react';
import _ from 'lodash';
import {s4} from './utils';
import Card from './card.jsx';
import cardsData from './cards.json';

class App extends React.Component {
    renderCards() {
        return <div id='cards'>
                {_.map(cardsData, c => {
                    c.id = `${s4()}${s4()}`
                    return <Card {...c} key={`card-${c.id}`}></Card>
                })}
            </div>;
    }

    render() {
        return (
            <div id='appContainer'>
                {this.renderCards()}
            </div>
        );
    }
}

export default App;
