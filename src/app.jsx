import React from 'react';
import _ from 'lodash';
import Card from './card.jsx';
import cardsData from './cards.json';


//npm install webpack -g
//webpack --progress --colors --watch

class App extends React.Component {
    renderLocations () {
        return (
            <div id="locations">
                <ul className="locationsList">
                    <li>Rockfall ravine</li>
                    <li>Arid steppes</li>
                    <li>Horton's ridge</li>
                </ul>
            </div>
        )
    }

    renderCards () {
        return (
            <div id='cards'>
                {_.map(cardsData, function(c){
                    return (<Card card={c} key={`card-${c.id}`}></Card>);
                })}
            </div>
        );
    }

    render () {
        return (
            <div id='appContainer'>
                {this.renderLocations()}
                {this.renderCards()}
            </div>
        );
    }
}

export default App;
