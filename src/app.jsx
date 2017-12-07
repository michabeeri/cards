import React from 'react';
import _ from 'lodash';
//import Card from './card.jsx';
//import cardsData from './cards.json';
import DateDisplay from './dateDisplay.jsx';
import WeatherDisplay from './weatherDisplay.jsx';
import WeatherLogic from './weatherLogic.js';
import weatherLogic from "./weatherLogic";

const initialDate = {
    day: 1,
    season: 'Autumn'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.assign({}, WeatherLogic.initialValues, initialDate);
        this.roll = this.roll.bind(this);
    }

    roll() {
        this.setState(weatherLogic.roll(
            _.pick(this.state, ['temprature', 'windChill', 'snowCover', 'snowFall']),
            this.state.season
        ));
    }

    // renderLocations() {return (<div id="locations"><ul className="locationsList"><li>Rockfall ravine</li><li>Arid steppes</li><li>Horton's ridge</li></ul></div>)}
    // renderCards() {return (<div id='cards'>{_.map(cardsData, function (c) {return (<Card card={c} key={`card-${c.id}`}></Card>);})}</div>);}

    renderWeather() {
        return (
            <WeatherDisplay {..._.pick(this.state, ['temprature', 'windChill', 'snowCover', 'snowFall'])}/>
        );
    }

    renderDate() {
        return (
            <DateDisplay {..._.pick(this.state, ['day', 'season'])}/>
        );
    }

    renderControls() {
        return (
            <div id="gameControls">
                <div className="icon"><i className='fa fa-repeat'></i></div>
                <div className="icon" onClick={this.roll}><i className='fa fa-play'></i></div>
            </div>
        );
    }

    render() {
        return (
            <div id='appContainer'>
                {false && this.renderLocations()}
                {false && this.renderCards()}
                {this.renderDate()}
                {this.renderWeather()}
                {this.renderControls()}
            </div>
        );
    }
}

export default App;
